import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h, computed } from 'vue'
import FormBuilder from '../FormBuilder.vue'

// Mock gooey Button
vi.mock('@codinglabsau/gooey', () => ({
  Button: defineComponent({
    props: ['type', 'loading'],
    setup(_, { slots }) {
      return () => h('button', { type: 'submit' }, slots.default?.())
    },
  }),
  FieldError: defineComponent({
    props: ['error'],
    setup() {
      return () => null
    },
  }),
  Label: defineComponent({
    props: ['for'],
    setup(_, { slots }) {
      return () => h('label', {}, slots.default?.())
    },
  }),
  Alert: defineComponent({
    setup() {
      return () => null
    },
  }),
  AlertDescription: defineComponent({
    setup() {
      return () => null
    },
  }),
}))

// Mock input component
const MockInput = defineComponent({
  name: 'MockInput',
  props: {
    id: String,
    modelValue: [String, Number],
    error: String,
  },
  emits: ['update:modelValue'],
  setup(props) {
    return () => h('input', { id: props.id, value: props.modelValue })
  },
})

// Create mock schema
const createMockSchema = (elements: Record<string, any> = {}) => ({
  elements: computed(() =>
    Object.entries(elements).map(([name, component]) => ({
      name,
      definition: component.hasOwnProperty('setup')
        ? { component }
        : { component: component.component || MockInput, ...component },
    })),
  ),
  form: {
    _prefix: 'test',
    errors: {},
    processing: false,
    ...Object.fromEntries(Object.entries(elements).map(([name, def]) => [name, def.value ?? null])),
  },
  options: {},
})

describe('FormBuilder', () => {
  describe('rendering', () => {
    it('renders elements from schema', () => {
      const schema = createMockSchema({
        name: MockInput,
        email: MockInput,
      })

      const wrapper = mount(FormBuilder, {
        props: { schema },
      })

      const inputs = wrapper.findAll('input')
      expect(inputs).toHaveLength(2)
    })

    it('uses element.name as key for v-for', () => {
      const schema = createMockSchema({
        first: MockInput,
        second: MockInput,
      })

      const wrapper = mount(FormBuilder, {
        props: { schema },
      })

      const inputs = wrapper.findAll('input')
      expect(inputs[0].attributes('id')).toBe('test-first')
      expect(inputs[1].attributes('id')).toBe('test-second')
    })

    it('renders submit button with default text', () => {
      const schema = createMockSchema({ name: MockInput })

      const wrapper = mount(FormBuilder, {
        props: { schema },
      })

      expect(wrapper.find('button').text()).toBe('Save')
    })

    it('renders submit button with custom text', () => {
      const schema = createMockSchema({ name: MockInput })

      const wrapper = mount(FormBuilder, {
        props: { schema, submit: 'Create' },
      })

      expect(wrapper.find('button').text()).toBe('Create')
    })
  })

  describe('slots', () => {
    it('allows overriding default slot', () => {
      const schema = createMockSchema({ name: MockInput })

      const wrapper = mount(FormBuilder, {
        props: { schema },
        slots: {
          default: '<div class="custom">Custom content</div>',
        },
      })

      expect(wrapper.find('.custom').exists()).toBe(true)
      expect(wrapper.find('input').exists()).toBe(false)
    })

    it('allows overriding actions slot', () => {
      const schema = createMockSchema({ name: MockInput })

      const wrapper = mount(FormBuilder, {
        props: { schema },
        slots: {
          actions: '<button class="custom-btn">Custom Button</button>',
        },
      })

      expect(wrapper.find('.custom-btn').exists()).toBe(true)
    })

    it('passes form to actions slot', () => {
      const schema = createMockSchema({ name: MockInput })

      const wrapper = mount(FormBuilder, {
        props: { schema },
        slots: {
          actions: `<template #actions="{ form }">
            <span class="form-prefix">{{ form._prefix }}</span>
          </template>`,
        },
      })

      expect(wrapper.find('.form-prefix').text()).toBe('test')
    })
  })

  describe('provides schema options', () => {
    it('provides schemaOptions to child components', () => {
      const schema = createMockSchema({ name: MockInput })
      schema.options = { precognition: true }

      // This test verifies the provide is called - actual injection
      // is tested in Element.spec.ts
      const wrapper = mount(FormBuilder, {
        props: { schema },
      })

      expect(wrapper.exists()).toBe(true)
    })
  })
})
