import { useForm } from "@inertiajs/vue3";

const reducer = (schema) =>
  Object.keys(schema).reduce((carry, key) => {
    carry[key] = schema[key].value ?? null;
    return carry;
  }, {});

export default function useSchema(...args) {
  const schema = args[0];

  const form = useForm(
    Object.keys(schema).reduce((carry, key) => {
      // reduce nested schema objects
      if (schema[key].schema) {
        return { ...carry, ...reducer(schema[key].schema) };
      }

      // special handling for checkbox arrays
      if (schema[key].type === "checkboxes") {
        carry[key] = schema[key].checked ?? [];

        return carry;
      }

      // default schema item with value
      carry[key] = schema[key].value ?? null;

      return carry;
    }, {})
  );

  return {
    schema,
    form,
  };
}
