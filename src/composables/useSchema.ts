import { computed, isRef, reactive, markRaw, type Ref } from 'vue'
import { type InertiaForm, useForm } from '@inertiajs/vue3'
import { useForm as usePrecognitiveForm } from 'laravel-precognition-vue-inertia'
import { type RequestMethod } from 'laravel-precognition'

import type {
  DangerButton,
  PrimaryButton,
  SecondaryButton,
  Breadcrumbs,
  Container,
  DataTable,
  Dropdown,
  DropdownItem,
  Heading,
  Notifications,
  Pagination,
  StackedList,
  Tabs,
  Toggle,
  Actions,
  Combobox,
  Checkbox,
  Date,
  DateRange,
  Email,
  Error,
  Hidden,
  Image,
  Label,
  Number,
  Password,
  Price,
  Select,
  Textarea,
  Text,
} from '@codinglabsau/ui'
import CheckboxGroup from '../components/elements/CheckboxGroup.vue'
import type Grid from '../components/elements/Grid.vue'

type Component =
  | typeof DangerButton
  | typeof PrimaryButton
  | typeof SecondaryButton
  | typeof Breadcrumbs
  | typeof Container
  | typeof DataTable
  | typeof Dropdown
  | typeof DropdownItem
  | typeof Heading
  | typeof Notifications
  | typeof Pagination
  | typeof StackedList
  | typeof Tabs
  | typeof Toggle
  | typeof Actions
  | typeof Combobox
  | typeof Checkbox
  | typeof Date
  | typeof DateRange
  | typeof Email
  | typeof Error
  | typeof Hidden
  | typeof Image
  | typeof Label
  | typeof Number
  | typeof Password
  | typeof Price
  | typeof Select
  | typeof Textarea
  | typeof Text
  | typeof Grid
  | typeof CheckboxGroup

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
  props?: InstanceType<T>['$props']
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

type Fieldset = {
  [key: string]: {
    model?: string
    value?: any
  }
}

type Schema = {
  elements: Element[]
  form: Form
  options: SchemaOptions
}

type Alert = {
  text: string
  actionText?: string
  actionHref?: string
  externalAction?: boolean
  visible?: Function
}

const reducer = (elements: ElementMap) =>
  Object.keys(elements).reduce((carry, key) => {
    if (elements[key].schema) {
      return { ...carry, ...reducer(elements[key].schema) }
    }

    carry[key] = elements[key].value ?? null

    return carry
  }, {})

const randomStringGenerator = (length: number): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return result
}

const prepareFields = (elements: ElementMap) => {
  return Object.keys(elements).reduce((carry, key) => {
    // reduce nested schema objects
    if (elements[key].schema) {
      return { ...carry, ...reducer(elements[key].schema) }
    }

    // special handling for checkbox arrays
    if (elements[key].component === CheckboxGroup) {
      carry[key] = (elements[key] as ElementConfig<typeof CheckboxGroup>).checked ?? []

      return carry
    }

    // special handling for fieldsets
    const fieldset = elements[key]?.fieldset as Fieldset

    if (fieldset) {
      Object.entries(fieldset).forEach(([fieldsetKey, fieldsetValue]) => {
        if (fieldsetValue?.model) {
          carry[fieldsetValue.model] = fieldsetValue.value ?? null
        } else {
          carry[fieldsetKey] = fieldsetValue
        }
      })

      return carry
    }

    // default schema item with value
    carry[key] = elements[key].value ?? null

    return carry
  }, {})
}

// Ensure component constructors are not made reactive anywhere in the map (recursively)
const normalizeDefinition = (entry: ElementDefinition): ElementDefinition => {
  // Bare component case
  if ((entry as any)?.hasOwnProperty?.('setup')) {
    return { component: markRaw(entry as Component) }
  }

  // Full element config
  const cfg = entry as ElementConfig
  const normalized: ElementConfig = {
    ...cfg,
    component: markRaw(cfg.component as Component),
  }

  if (cfg.schema) {
    // Recursively normalize nested schemas in-place on a shallow clone
    const next: ElementMap = {}
    for (const [k, v] of Object.entries(cfg.schema)) {
      next[k] = normalizeDefinition(v) as ElementDefinition
    }
    normalized.schema = next as ElementMap
  }

  return normalized
}

export const mapElements = (elements: ElementMap): Element[] => {
  return Object.entries(elements).map(([name, entry]) => {
    const definition = normalizeDefinition(entry)

    return {
      name,
      definition,
    }
  })
}

export default function useSchema(
  elements: ElementMap | Ref<ElementMap> | (() => ElementMap) = {},
  options: SchemaOptions = {}
): Schema {
  // Resolve the current ElementMap. If a function/computed/ref is provided,
  // this computed will track its dependencies and update reactively.
  const resolvedElements = computed<ElementMap>(() => {
    if (typeof elements === 'function') {
      return (elements as () => ElementMap)()
    }

    if (isRef(elements)) {
      return (elements as Ref<ElementMap>).value
    }

    return elements as ElementMap
  })

  // Initialize the form only once to avoid breaking changes to form state.
  const form = options?.precognition
    ? usePrecognitiveForm(options.method, options.url, prepareFields(resolvedElements.value))
    : useForm(prepareFields(resolvedElements.value))

  form._prefix = randomStringGenerator(6)

  // Expose a reactive elements property without changing the existing API shape.
  // Using reactive() ensures refs inside are unwrapped for template usage.
  return reactive<Schema>({
    get elements() {
      // map every time in case the provided schema changes reactively
      return mapElements(resolvedElements.value)
    },
    form,
    options,
  })
}

export type { Schema, SchemaOptions, ElementMap, Element, Fieldset, Form, Alert }
