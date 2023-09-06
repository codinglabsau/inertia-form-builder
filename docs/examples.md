<script setup>
import { Text } from '@codinglabsau/ui'

import { FormBuilder, useSchema } from '../src/index'

const simpleSchema = useSchema({
  firstname: Text,
  surname: Text,
})
</script>

---
outline: deep
---

# Basic Example

<FormBuilder :schema="simpleSchema" />
