import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h, ref, nextTick } from 'vue'
import Element from '../Element.vue'

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

// Mock input component
const MockInput = defineComponent({
  name: 'MockInput',
  props: {
    id: String,
    modelValue: [String, Number],
    error: String,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return () =>
      h('input', {
        id: props.id,
        value: props.modelValue,
        onInput: (e: Event) => emit('update:modelValue', (e.target as HTMLInputElement).value),
      })
  },
})

// Create mock form
const createMockForm = (data: Record<string, any> = {}): any => ({
  _prefix: 'test',
  errors: {} as Record<string, string>,
  ...data,
})

describe('Element', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('rendering', () => {
    it('renders component with correct props', () => {
      const form = createMockForm({ name: 'John' })
      const wrapper = mount(Element, {
        props: {
          element: {
            name: 'name',
            definition: { component: MockInput },
          },
          form,
        },
      })

      const input = wrapper.find('input')
      expect(input.exists()).toBe(true)
      expect(input.attributes('id')).toBe('test-name')
    })

    it('displays label for non-nested elements', () => {
      const form = createMockForm({ name: '' })
      const wrapper = mount(Element, {
        props: {
          element: {
            name: 'first_name',
            definition: { component: MockInput },
          },
          form,
        },
      })

      expect(wrapper.find('label').exists()).toBe(true)
      expect(wrapper.text()).toContain('first name')
    })

    it('hides label when showLabel is false', () => {
      const form = createMockForm({ name: '' })
      const wrapper = mount(Element, {
        props: {
          element: {
            name: 'name',
            definition: { component: MockInput, showLabel: false },
          },
          form,
        },
      })

      expect(wrapper.find('label').exists()).toBe(false)
    })

    it('hides label for hidden inputs', () => {
      const form = createMockForm({ name: '' })
      const wrapper = mount(Element, {
        props: {
          element: {
            name: 'name',
            definition: { component: MockInput, props: { type: 'hidden' } },
          },
          form,
        },
      })

      expect(wrapper.find('label').exists()).toBe(false)
    })
  })

  describe('visibility', () => {
    it('shows element when visible is true', () => {
      const form = createMockForm({ name: '' })
      const wrapper = mount(Element, {
        props: {
          element: {
            name: 'name',
            definition: { component: MockInput, visible: () => true },
          },
          form,
        },
      })

      expect(wrapper.find('input').exists()).toBe(true)
    })

    it('hides element when visible is false', () => {
      const form = createMockForm({ name: '' })
      const wrapper = mount(Element, {
        props: {
          element: {
            name: 'name',
            definition: { component: MockInput, visible: () => false },
          },
          form,
        },
      })

      expect(wrapper.find('input').exists()).toBe(false)
    })

    it('reacts to form changes in visibility function', async () => {
      const form = ref({ _prefix: 'test', errors: {}, showField: false, name: '' })
      const wrapper = mount(Element, {
        props: {
          element: {
            name: 'name',
            definition: {
              component: MockInput,
              visible: (f: any) => f.showField,
            },
          },
          form: form.value,
        },
      })

      expect(wrapper.find('input').exists()).toBe(false)

      // Modify form - need to update the prop since form is passed as prop
      form.value.showField = true
      await wrapper.setProps({
        element: {
          name: 'name',
          definition: {
            component: MockInput,
            visible: (f: any) => f.showField,
          },
        },
        form: form.value,
      })
      await nextTick()

      expect(wrapper.find('input').exists()).toBe(true)
    })
  })

  describe('listeners', () => {
    it('updates form on input change', async () => {
      const form = createMockForm({ name: '' })
      const wrapper = mount(Element, {
        props: {
          element: {
            name: 'name',
            definition: { component: MockInput },
          },
          form,
        },
      })

      const input = wrapper.find('input')
      await input.setValue('Jane')

      expect(form.name).toBe('Jane')
    })
  })

  describe('errors', () => {
    it('displays field error', () => {
      const form = createMockForm({ name: '' })
      form.errors = { name: 'Name is required' }

      // MockInput doesn't accept 'error' prop, so FieldError is rendered via template
      const MockInputWithoutError = defineComponent({
        name: 'MockInputWithoutError',
        props: {
          id: String,
          modelValue: [String, Number],
        },
        emits: ['update:modelValue'],
        setup(props) {
          return () => h('input', { id: props.id, value: props.modelValue })
        },
      })

      const wrapper = mount(Element, {
        props: {
          element: {
            name: 'name',
            definition: { component: MockInputWithoutError },
          },
          form,
        },
      })

      // The error should be shown via FieldError component since MockInputWithoutError doesn't have error prop
      expect(wrapper.find('.error').exists()).toBe(true)
      expect(wrapper.text()).toContain('Name is required')
    })
  })

  describe('fieldsets', () => {
    it('handles fieldset with multiple models', () => {
      const form = createMockForm({ street: '123 Main', city_id: 5 })

      const AddressComponent = defineComponent({
        name: 'AddressComponent',
        props: {
          id: String,
          street: String,
          city_id: Number,
        },
        emits: ['update:street', 'update:city_id'],
        setup(props) {
          return () => h('div', {}, [h('span', {}, props.street), h('span', {}, props.city_id)])
        },
      })

      const wrapper = mount(Element, {
        props: {
          element: {
            name: 'address',
            definition: {
              component: AddressComponent,
              fieldset: {
                street: 'street',
                city: { model: 'city_id' },
              },
            },
          },
          form,
        },
      })

      expect(wrapper.text()).toContain('123 Main')
      expect(wrapper.text()).toContain('5')
    })
  })

  describe('alerts', () => {
    it('displays alert when defined', () => {
      const form = createMockForm({ name: '' })
      const wrapper = mount(Element, {
        props: {
          element: {
            name: 'name',
            definition: {
              component: MockInput,
              alert: {
                text: 'This is an alert',
              },
            },
          },
          form,
        },
      })

      expect(wrapper.find('.alert').exists()).toBe(true)
      expect(wrapper.text()).toContain('This is an alert')
    })
  })
})
