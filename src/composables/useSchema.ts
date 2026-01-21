import { type InertiaForm, useForm } from '@inertiajs/vue3'
import { useForm as usePrecognitiveForm } from 'laravel-precognition-vue-inertia'
import { type RequestMethod } from 'laravel-precognition'
import { computed, isRef, watch, type ComputedRef, type DefineComponent, type Ref } from 'vue'

import CheckboxGroup from '../components/elements/CheckboxGroup.vue'
import type Grid from '../components/elements/Grid.vue'

type Component = DefineComponent<any, any, any> | typeof Grid | typeof CheckboxGroup

type Form = InertiaForm<any> & { _prefix: string }

type CheckboxesConfig = {
  checked: Array<number | string>
  items: any[]
}

type ElementConfig<T extends Component = Component> = {
  component: T
  value?: any
  label?: string
  schema?: ElementMap
  fieldset?: Fieldset
  showLabel?: boolean
  visible?: (form: Form) => boolean
  alert?: Alert
  props?: Record<string, any>
  precognitive?: boolean
  precognitiveEvent?: 'update' | 'change' | 'blur' | 'focus'
} & (T extends typeof CheckboxGroup ? CheckboxesConfig : {})

type SchemaOptions = {
  precognition?: boolean
  optInPrecognition?: boolean
  method?: RequestMethod
  url?: string
}

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
  options: SchemaOptions
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
 * @param elementsInput - Static object, function, or ref containing element definitions
 * @param options - Schema options (precognition settings, etc.)
 * @returns Schema with reactive elements, form instance, and options
 *
 * @example
 * // Static (BC)
 * useSchema({ name: Input })
 *
 * // Function (reactive)
 * useSchema(() => ({ name: Input }))
 *
 * // Ref (reactive)
 * const elements = ref({ name: Input })
 * useSchema(elements)
 */
export default function useSchema(
  elementsInput: ElementMapInput = {},
  options: SchemaOptions = {},
): Schema {
  // Resolve initial elements
  const initialElements = resolveElements(elementsInput)

  // Create form with initial fields
  const form = options?.precognition
    ? usePrecognitiveForm(options.method, options.url, prepareFields(initialElements))
    : useForm(prepareFields(initialElements))

  form._prefix = randomStringGenerator(6)

  // Create reactive elements computed
  const elements = computed(() => mapElements(resolveElements(elementsInput)))

  // Sync form fields when elements change dynamically
  const isReactive = typeof elementsInput === 'function' || isRef(elementsInput)
  if (isReactive) {
    watch(
      elements,
      (newElements) => {
        const newFields = prepareFields(resolveElements(elementsInput))
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
    options,
  }
}

export type { Schema, SchemaOptions, ElementMap, Element, Fieldset, Form, Alert, ElementMapInput }
