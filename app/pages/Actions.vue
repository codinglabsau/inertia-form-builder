<script setup lang="ts">
// @ts-ignore - gooey types use unresolved path aliases
import { Heading, Input, Button, Card, CardContent } from '@codinglabsau/gooey'
import { FormBuilder, useSchema } from '../../src/index'

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

    <section>
      <Heading as="h2" class="text-xl">Actions Slot</Heading>

      <p class="mt-2 text-muted-foreground">
        Use the <code class="rounded bg-muted px-1">#actions</code> slot to add custom buttons.
      </p>

      <pre class="mt-4 overflow-auto rounded-lg border bg-muted p-4 text-sm"><code>&lt;FormBuilder :schema="schema"&gt;
  &lt;template #actions="{ form }"&gt;
    &lt;div class="flex gap-2"&gt;
      &lt;Button type="submit" :loading="form.processing"&gt;Save&lt;/Button&gt;
      &lt;Button type="button" variant="outline" @click="form.reset()"&gt;Reset&lt;/Button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/FormBuilder&gt;</code></pre>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
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

        <pre class="overflow-auto rounded-lg border bg-muted p-4 text-sm">{{
          actionsSchema.form.data()
        }}</pre>
      </div>
    </section>

    <section>
      <Heading as="h2" class="text-xl">Actions Wrapper Slot</Heading>

      <p class="mt-2 text-muted-foreground">
        Use <code class="rounded bg-muted px-1">#actions-wrapper</code> to completely override the
        actions container.
      </p>

      <div class="mt-6 grid gap-6 lg:grid-cols-2">
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

        <pre class="overflow-auto rounded-lg border bg-muted p-4 text-sm">{{
          actionsWrapperSchema.form.data()
        }}</pre>
      </div>
    </section>
  </div>
</template>
