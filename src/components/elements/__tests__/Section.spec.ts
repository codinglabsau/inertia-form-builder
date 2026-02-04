import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import Section from '../Section.vue'

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

describe('Section', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders heading text', () => {
    const form = createMockForm({ name: '' })
    const wrapper = mount(Section, {
      props: {
        heading: 'Personal Details',
        schema: { name: { component: MockInput } },
        form,
      },
    })

    expect(wrapper.find('label').text()).toBe('Personal Details')
  })

  it('renders description when provided', () => {
    const form = createMockForm({ name: '' })
    const wrapper = mount(Section, {
      props: {
        heading: 'Details',
        description: 'Fill in your personal information',
        schema: { name: { component: MockInput } },
        form,
      },
    })

    expect(wrapper.find('p').text()).toBe('Fill in your personal information')
  })

  it('hides description when omitted', () => {
    const form = createMockForm({ name: '' })
    const wrapper = mount(Section, {
      props: {
        heading: 'Details',
        schema: { name: { component: MockInput } },
        form,
      },
    })

    expect(wrapper.find('p').exists()).toBe(false)
  })

  it('renders nested elements from schema prop', () => {
    const form = createMockForm({ name: '', email: '' })
    const wrapper = mount(Section, {
      props: {
        heading: 'Contact',
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
})
