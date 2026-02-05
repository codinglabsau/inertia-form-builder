import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import Grid from '../Grid.vue'

// Mock gooey components
vi.mock('@codinglabsau/gooey', () => ({
  FieldError: defineComponent({
    props: ['error'],
    setup(props) {
      return () => (props.error ? h('span', { class: 'error' }, props.error) : null)
    },
  }),
  Label: defineComponent({
    props: ['for'],
    setup(_, { slots }) {
      return () => h('label', {}, slots.default?.())
    },
  }),
  Alert: defineComponent({
    props: ['variant'],
    setup(_, { slots }) {
      return () => h('div', { class: 'alert' }, slots.default?.())
    },
  }),
  AlertDescription: defineComponent({
    setup(_, { slots }) {
      return () => h('div', { class: 'alert-description' }, slots.default?.())
    },
  }),
  Button: defineComponent({
    props: ['as', 'href', 'target', 'variant', 'size'],
    setup(_, { slots }) {
      return () => h('button', {}, slots.default?.())
    },
  }),
}))

const MockInput = defineComponent({
  name: 'MockInput',
  props: { id: String, modelValue: [String, Number] },
  emits: ['update:modelValue'],
  setup(props) {
    return () => h('input', { id: props.id, value: props.modelValue })
  },
})

const createMockForm = (data: Record<string, any> = {}): any => ({
  _prefix: 'test',
  errors: {} as Record<string, string>,
  ...data,
})

describe('Grid', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders nested elements from schema prop', () => {
    const form = createMockForm({ name: '', email: '' })
    const wrapper = mount(Grid, {
      props: {
        schema: {
          name: { component: MockInput },
          email: { component: MockInput },
        },
        form,
      },
    })

    const inputs = wrapper.findAll('input')
    expect(inputs).toHaveLength(2)
  })

  it('applies correct grid column class for 2 elements', () => {
    const form = createMockForm({ name: '', email: '' })
    const wrapper = mount(Grid, {
      props: {
        schema: {
          name: { component: MockInput },
          email: { component: MockInput },
        },
        form,
      },
    })

    expect(wrapper.find('.grid').classes()).toContain('md:grid-cols-2')
  })

  it('applies correct grid column class for 3 elements', () => {
    const form = createMockForm({ a: '', b: '', c: '' })
    const wrapper = mount(Grid, {
      props: {
        schema: {
          a: { component: MockInput },
          b: { component: MockInput },
          c: { component: MockInput },
        },
        form,
      },
    })

    expect(wrapper.find('.grid').classes()).toContain('md:grid-cols-3')
  })

  it('applies correct grid column class for 1 element', () => {
    const form = createMockForm({ name: '' })
    const wrapper = mount(Grid, {
      props: {
        schema: {
          name: { component: MockInput },
        },
        form,
      },
    })

    expect(wrapper.find('.grid').classes()).toContain('md:grid-cols-1')
  })

  it('passes form prop through to child Element components', () => {
    const form = createMockForm({ name: 'John' })
    const wrapper = mount(Grid, {
      props: {
        schema: {
          name: { component: MockInput },
        },
        form,
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('id')).toBe('test-name')
  })
})
