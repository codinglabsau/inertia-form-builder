import { useForm } from '@inertiajs/vue3'
import type { FieldSchema, SchemaType, FieldConfig, Checkboxes, UiField, Field } from './types'

const reducer = (schema: FieldSchema) =>
  Object.keys(schema).reduce((carry, key) => {
    carry[key] = schema[key].value ?? null

    return carry
  }, {})

export default function useSchema(schema: FieldSchema): SchemaType {
  const form = useForm(
    Object.keys(schema).reduce((carry, key) => {
      // reduce nested schema objects
      if (schema[key].schema) {
        return { ...carry, ...reducer(schema[key].schema) }
      }

      // special handling for checkbox arrays
      if (schema[key].type === 'checkboxes') {
        carry[key] = (schema[key] as FieldConfig<Checkboxes>).checked ?? []

        return carry
      }

      // default schema item with value
      carry[key] = schema[key].value ?? null

      return carry
    }, {})
  )

  return {
    schema,
    form,
  }
}

export type { FieldSchema, SchemaType, FieldConfig, Checkboxes, UiField, Field }
