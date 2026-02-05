<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Heading, Input, Button, Card, CardContent } from '@codinglabsau/gooey'
import { FormBuilder, useSchema } from '../../src/index'
import CodeBlock from '../components/CodeBlock.vue'

const actionsSlotCode = `<FormBuilder :schema="schema">
  <template #actions="{ form }">
    <div class="flex gap-2">
      <Button type="submit" :loading="form.processing">Save</Button>
      <Button type="button" variant="outline" @click="form.reset()">Reset</Button>
    </div>
  </template>
</FormBuilder>`

const actionsSchema = useSchema({
  address: Input,
  suburb: Input,
  country: Input,
})

const actionsWrapperSchema = useSchema({
  address: Input,
  suburb: Input,
  country: Input,
})

const submit = () => alert('submitted')
</script>

<template>
  <div class="space-y-12 py-8">
    <section>
      <Heading>Custom Actions</Heading>

      <p class="mt-2 text-muted-foreground">
        Override the default submit button with custom actions using slots.
      </p>
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Actions Slot</Heading>

        <p class="mt-2 text-muted-foreground">
          Use the <code class="rounded bg-muted px-1">#actions</code> slot to add custom buttons.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="actionsSchema">
                <template #actions="{ form }">
                  <div class="flex gap-2">
                    <Button type="submit" :loading="form.processing"> Save </Button>

                    <Button type="button" variant="outline" @click="form.reset()"> Reset </Button>
                  </div>
                </template>
              </FormBuilder>
            </form>
          </CardContent>
        </Card>

        <CodeBlock
          :code="JSON.stringify(actionsSchema.form.data(), null, 2)"
          lang="json"
          :copyable="false"
        />
      </div>

      <CodeBlock :code="actionsSlotCode" lang="vue-html" />
    </section>

    <section class="space-y-6">
      <div>
        <Heading as="h2" class="text-xl">Actions Wrapper Slot</Heading>

        <p class="mt-2 text-muted-foreground">
          Use <code class="rounded bg-muted px-1">#actions-wrapper</code> to completely override the
          actions container.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent class="pt-6">
            <form @submit.prevent="submit">
              <FormBuilder :schema="actionsWrapperSchema">
                <template #actions-wrapper="{ form }">
                  <div class="flex gap-2">
                    <Button type="submit" :loading="form.processing"> Save </Button>

                    <Button type="button" variant="outline" @click="form.reset()"> Reset </Button>
                  </div>
                </template>
              </FormBuilder>
            </form>
          </CardContent>
        </Card>

        <CodeBlock
          :code="JSON.stringify(actionsWrapperSchema.form.data(), null, 2)"
          lang="json"
          :copyable="false"
        />
      </div>
    </section>
  </div>
</template>
