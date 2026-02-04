import { type InertiaForm, useForm } from '@inertiajs/vue3'
import { useForm as usePrecognitiveForm } from 'laravel-precognition-vue-inertia'
import { computed, isRef, watch, type ComputedRef, type DefineComponent, type Ref } from 'vue'

import CheckboxGroup from '../components/elements/CheckboxGroup.vue'
import type Grid from '../components/elements/Grid.vue'

type Component = DefineComponent<any, any, any> | typeof Grid | typeof CheckboxGroup

type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

type Form = InertiaForm<any> & { _prefix: string }

type CheckboxesConfig = {
  checked: Array<number | string>
  items: any[]
}

type ElementConfig<T extends Component = Component> = {
  component: T
  value?: any
  label?: string | false | null
  schema?: ElementMap
  fieldset?: Fieldset
  visible?: (form: Form) => boolean
  alert?: Alert
  props?: Record<string, any>
  precognitive?: boolean
  precognitiveEvent?: 'update' | 'change' | 'blur' | 'focus'
} & (T extends typeof CheckboxGroup ? CheckboxesConfig : {})

type ElementDefinition = ElementConfig | Component

type ElementMap = { [key: string]: ElementDefinition }

type Element = { name: string; definition: ElementDefinition }

/** Fieldset maps component models to form fields. Values can be raw or object with model/value. */
type Fieldset = {
  [key: string]: any | { model?: string; value?: any }
}

type Schema = {
  elements: ComputedRef<Element[]>
  form: Form
}

/** Input type for useSchema - supports static object, function, or ref */
type ElementMapInput = ElementMap | (() => ElementMap) | Ref<ElementMap>

type Alert = {
  text: string
  actionText?: string
  actionHref?: string
  externalAction?: boolean
  visible?: Function
}

/** Extracts field values from nested schemas (accumulates iteratively) */
const extractNestedFields = (
  elements: ElementMap,
  result: Record<string, any> = {},
): Record<string, any> => {
  for (const key of Object.keys(elements)) {
    const element = elements[key]
    if (element.schema) {
      extractNestedFields(element.schema, result)
    } else {
      result[key] = element.value ?? null
    }
  }
  return result
}

const randomStringGenerator = (length: number): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

/** Extracts initial form field values from element definitions */
const prepareFields = (elements: ElementMap): Record<string, any> => {
  const result: Record<string, any> = {}

  for (const key of Object.keys(elements)) {
    const element = elements[key]

    // Nested schema - extract recursively
    if (element.schema) {
      extractNestedFields(element.schema, result)
      continue
    }

    // CheckboxGroup - use checked array
    if (element.component === CheckboxGroup) {
      result[key] = (element as ElementConfig<typeof CheckboxGroup>).checked ?? []
      continue
    }

    // Fieldset - map each field
    const fieldset = element?.fieldset as Fieldset
    if (fieldset) {
      for (const [fieldsetKey, fieldsetValue] of Object.entries(fieldset)) {
        if (fieldsetValue && typeof fieldsetValue === 'object' && fieldsetValue.model) {
          result[fieldsetValue.model] = fieldsetValue.value ?? null
        } else {
          result[fieldsetKey] =
            fieldsetValue && typeof fieldsetValue === 'object'
              ? (fieldsetValue.value ?? null)
              : fieldsetValue
        }
      }
      continue
    }

    // Default - use value
    result[key] = element.value ?? null
  }

  return result
}

export const mapElements = (elements: ElementMap): Element[] => {
  return Object.entries(elements).map(([name, component]) => {
    const definition = component.hasOwnProperty('setup')
      ? { component: component as Component }
      : component

    return {
      name,
      definition,
    }
  })
}

/** Resolves element map input to current value */
const resolveElements = (input: ElementMapInput): ElementMap => {
  if (typeof input === 'function') {
    return input()
  }
  if (isRef(input)) {
    return input.value
  }
  return input
}

/**
 * Creates a reactive form schema from element definitions.
 *
 * @example
 * // Standard
 * useSchema({ name: Input })
 *
 * // Function (reactive)
 * useSchema(() => ({ name: Input }))
 *
 * // Precognition — mirrors laravel-precognition-vue API
 * useSchema('post', '/users', { name: Input })
 */
export default function useSchema(
  methodOrElements: RequestMethod | ElementMapInput = {},
  urlOrNothing?: string,
  elementsInput?: ElementMapInput,
): Schema {
  const isPrecognition = typeof methodOrElements === 'string'

  const input = isPrecognition ? (elementsInput ?? {}) : methodOrElements
  const method = isPrecognition ? (methodOrElements as RequestMethod) : undefined
  const url = isPrecognition ? urlOrNothing : undefined

  // Resolve initial elements
  const initialElements = resolveElements(input as ElementMapInput)

  // Create form with initial fields
  const form = isPrecognition
    ? usePrecognitiveForm(method, url, prepareFields(initialElements))
    : useForm(prepareFields(initialElements))

  form._prefix = randomStringGenerator(6)

  // Create reactive elements computed
  const elements = computed(() => mapElements(resolveElements(input as ElementMapInput)))

  // Sync form fields when elements change dynamically
  const isReactive = typeof input === 'function' || isRef(input)
  if (isReactive) {
    watch(
      elements,
      (newElements) => {
        const newFields = prepareFields(resolveElements(input as ElementMapInput))
        // Add new fields to form (preserve existing values)
        for (const key of Object.keys(newFields)) {
          if (!(key in form)) {
            form[key] = newFields[key]
          }
        }
        // Remove fields that no longer exist
        const formData = form.data()
        for (const key of Object.keys(formData)) {
          if (key !== '_prefix' && !(key in newFields)) {
            delete form[key]
          }
        }
      },
      { deep: true },
    )
  }

  return {
    elements,
    form,
  }
}

export type { Schema, ElementMap, Element, Fieldset, Form, Alert, ElementMapInput }
