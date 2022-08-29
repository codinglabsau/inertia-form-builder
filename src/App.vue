<template>
    <Container>
      <Heading>Create User</Heading>
      <form @submit.prevent="submit">
        <FormBuilder :schema="schema" />
      </form>
    </Container>
</template>

<script setup>
import { Container, Heading, Text } from '@codinglabsau/ui'
import { FormBuilder, useSchema } from './index.js'

const schema = useSchema({
  firstname: Text,
  surname: Text,
})

const submit = () => schema.form.post('/')
</script>
