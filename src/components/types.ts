import type { InertiaForm } from '@inertiajs/vue3'
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

type Grid = 'grid'
type Checkboxes = 'checkboxes'
type UiField =
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

type FieldType = Grid | Checkboxes | UiField

type Props<T extends UiField> = {
  props?: InstanceType<T>['$props']
}

type CheckboxesConfig = {
  checked: Array<number | string>
  items: any[]
}

type FieldConfig<T extends FieldType = FieldType> = {
  type: T
  value?: any
  label?: string
  schema?: FieldSchema
  showLabel?: boolean
} & (T extends Checkboxes ? CheckboxesConfig : {}) &
  (T extends UiField ? Props<T> : {})

type BaseField = FieldConfig<Grid> | FieldConfig<Checkboxes> | FieldConfig<UiField>

type Field = BaseField | UiField

type FieldSchema = { [key: string]: Field }

type SchemaType = { schema: FieldSchema; form: InertiaForm<any> }

export type { Checkboxes, UiField, FieldConfig, FieldSchema, Field, SchemaType }
