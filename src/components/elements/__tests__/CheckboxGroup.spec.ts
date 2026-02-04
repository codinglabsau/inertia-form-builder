import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import CheckboxGroup from '../CheckboxGroup.vue'

// Mock gooey components
vi.mock('@codinglabsau/gooey', () => ({
  Checkbox: defineComponent({
    name: 'Checkbox',
    props: { id: String, checked: Boolean },
    emits: ['update:checked'],
    setup(props, { emit }) {
      return () =>
        h('input', {
          type: 'checkbox',
          id: props.id,
          checked: props.checked,
          onChange: () => emit('update:checked', !props.checked),
        })
    },
  }),
  Label: defineComponent({
    props: ['for'],
    setup(_, { slots }) {
      return () => h('label', {}, slots.default?.())
    },
  }),
}))

const createMockForm = (data: Record<string, any> = {}): any => ({
  _prefix: 'test',
  errors: {} as Record<string, string>,
  ...data,
})

describe('CheckboxGroup', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders checkbox for each item', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        form: createMockForm(),
        modelValue: [],
        items: ['Apple', 'Banana', 'Cherry'],
      },
    })

    expect(wrapper.findAll('input[type="checkbox"]')).toHaveLength(3)
  })

  it('correctly identifies checked items from modelValue array', () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        form: createMockForm(),
        modelValue: ['Apple', 'Cherry'],
        items: ['Apple', 'Banana', 'Cherry'],
      },
    })

    const checkboxes = wrapper.findAll('input[type="checkbox"]')
    expect((checkboxes[0].element as HTMLInputElement).checked).toBe(true)
    expect((checkboxes[1].element as HTMLInputElement).checked).toBe(false)
    expect((checkboxes[2].element as HTMLInputElement).checked).toBe(true)
  })

  it('emits update:modelValue with item added on check', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        form: createMockForm(),
        modelValue: ['Apple'],
        items: ['Apple', 'Banana', 'Cherry'],
      },
    })

    const checkboxes = wrapper.findAll('input[type="checkbox"]')
    await checkboxes[1].trigger('change')

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['Apple', 'Banana']])
  })

  it('emits update:modelValue with item removed on uncheck', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        form: createMockForm(),
        modelValue: ['Apple', 'Banana'],
        items: ['Apple', 'Banana', 'Cherry'],
      },
    })

    const checkboxes = wrapper.findAll('input[type="checkbox"]')
    await checkboxes[0].trigger('change')

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['Banana']])
  })

  it('supports object items with label and value', () => {
    const items = [
      { label: 'Option A', value: 1 },
      { label: 'Option B', value: 2 },
    ]

    const wrapper = mount(CheckboxGroup, {
      props: {
        form: createMockForm(),
        modelValue: [1],
        items,
      },
    })

    const checkboxes = wrapper.findAll('input[type="checkbox"]')
    expect((checkboxes[0].element as HTMLInputElement).checked).toBe(true)
    expect((checkboxes[1].element as HTMLInputElement).checked).toBe(false)
    expect(wrapper.text()).toContain('Option A')
    expect(wrapper.text()).toContain('Option B')
  })
})
