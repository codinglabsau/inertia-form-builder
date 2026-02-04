import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref, reactive, nextTick, defineComponent, h } from 'vue'
import useSchema, { mapElements } from '../useSchema'

// Mock Inertia's useForm - reactive so watch() triggers work
vi.mock('@inertiajs/vue3', () => ({
  useForm: vi.fn((initialData) => {
    const form = reactive({ ...initialData, errors: {}, processing: false }) as any
    form.data = () => {
      const result: Record<string, any> = {}
      for (const key of Object.keys(initialData)) {
        result[key] = form[key]
      }
      return result
    }
    return form
  }),
}))

// Mock Precognition's useForm
vi.mock('laravel-precognition-vue-inertia', () => ({
  useForm: vi.fn((method, url, initialData) => {
    const form = { ...initialData, errors: {}, processing: false }
    form.data = () => ({ ...initialData })
    form.validate = vi.fn()
    return form
  }),
}))

// Import CheckboxGroup for type-matching in prepareFields
import CheckboxGroup from '../../components/elements/CheckboxGroup.vue'

// Mock component for testing
const MockInput = defineComponent({
  props: ['modelValue', 'id'],
  setup() {
    return () => h('input')
  },
})

const MockGrid = defineComponent({
  props: ['schema', 'form'],
  setup() {
    return () => h('div')
  },
})

describe('useSchema', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('schema creation', () => {
    it('creates schema from static object', () => {
      const schema = useSchema({
        name: MockInput,
      })

      expect(schema.form).toBeDefined()
      expect(schema.elements.value).toHaveLength(1)
      expect(schema.elements.value[0].name).toBe('name')
    })

    it('creates schema from function (reactive)', () => {
      const schema = useSchema(() => ({
        name: MockInput,
      }))

      expect(schema.elements.value).toHaveLength(1)
      expect(schema.elements.value[0].name).toBe('name')
    })

    it('creates schema from ref (reactive)', () => {
      const elementsRef = ref({
        name: MockInput,
      })

      const schema = useSchema(elementsRef)

      expect(schema.elements.value).toHaveLength(1)
      expect(schema.elements.value[0].name).toBe('name')
    })

    it('generates unique prefix for form', () => {
      const schema1 = useSchema({ name: MockInput })
      const schema2 = useSchema({ name: MockInput })

      expect(schema1.form._prefix).toBeDefined()
      expect(schema1.form._prefix).not.toBe(schema2.form._prefix)
    })
  })

  describe('field extraction', () => {
    it('extracts field values from element definitions', () => {
      const schema = useSchema({
        name: { component: MockInput, value: 'John' },
        email: { component: MockInput, value: 'john@example.com' },
      })

      expect(schema.form.name).toBe('John')
      expect(schema.form.email).toBe('john@example.com')
    })

    it('handles null/undefined values', () => {
      const schema = useSchema({
        name: { component: MockInput },
        email: { component: MockInput, value: null },
      })

      expect(schema.form.name).toBeNull()
      expect(schema.form.email).toBeNull()
    })

    it('extracts fieldset values correctly', () => {
      const schema = useSchema({
        address: {
          component: MockInput,
          fieldset: {
            street: 'Main St',
            city: { model: 'city_id', value: 5 },
          },
        },
      })

      expect(schema.form.street).toBe('Main St')
      expect(schema.form.city_id).toBe(5)
    })
  })

  describe('reactivity', () => {
    it('updates elements when ref changes', async () => {
      const elementsRef = ref<Record<string, any>>({
        name: MockInput,
      })

      const schema = useSchema(elementsRef)
      expect(schema.elements.value).toHaveLength(1)

      elementsRef.value = {
        name: MockInput,
        email: MockInput,
      }

      await nextTick()
      expect(schema.elements.value).toHaveLength(2)
    })

    it('updates elements when function dependencies change', async () => {
      const showEmail = ref(false)

      const schema = useSchema(() => ({
        name: MockInput,
        ...(showEmail.value ? { email: MockInput } : {}),
      }))

      expect(schema.elements.value).toHaveLength(1)

      showEmail.value = true
      await nextTick()
      expect(schema.elements.value).toHaveLength(2)
    })
  })

  describe('nested schema', () => {
    it('extracts fields from elements with schema property', () => {
      const schema = useSchema({
        grid: {
          component: MockGrid,
          schema: {
            first_name: { component: MockInput, value: 'John' },
            last_name: { component: MockInput, value: 'Doe' },
          },
        },
      })

      expect(schema.form.first_name).toBe('John')
      expect(schema.form.last_name).toBe('Doe')
    })
  })

  describe('checkbox group', () => {
    it('uses checked array as initial form value', () => {
      const schema = useSchema({
        tags: {
          component: CheckboxGroup,
          checked: ['vue', 'typescript'],
          items: ['vue', 'typescript', 'react'],
        } as any,
      })

      expect(schema.form.tags).toEqual(['vue', 'typescript'])
    })
  })

  describe('reactive schema form sync', () => {
    it('adds new fields to form when elements change', async () => {
      const showEmail = ref(false)

      const schema = useSchema(() => ({
        name: { component: MockInput, value: 'John' },
        ...(showEmail.value ? { email: { component: MockInput, value: 'john@test.com' } } : {}),
      }))

      expect(schema.form.name).toBe('John')
      expect('email' in schema.form).toBe(false)

      showEmail.value = true
      await nextTick()

      expect(schema.form.email).toBe('john@test.com')
    })

    it('removes fields from form when elements are removed', async () => {
      const showEmail = ref(true)

      const schema = useSchema(() => ({
        name: { component: MockInput, value: 'John' },
        ...(showEmail.value ? { email: { component: MockInput, value: 'john@test.com' } } : {}),
      }))

      expect('email' in schema.form).toBe(true)

      showEmail.value = false
      await nextTick()

      expect('email' in schema.form).toBe(false)
    })
  })

  describe('precognition support', () => {
    it('uses precognitive form when enabled', async () => {
      const { useForm: usePrecognitiveForm } = vi.mocked(
        await import('laravel-precognition-vue-inertia'),
      )

      useSchema(
        { name: MockInput },
        {
          precognition: true,
          method: 'post',
          url: '/api/test',
        },
      )

      expect(usePrecognitiveForm).toHaveBeenCalledWith('post', '/api/test', expect.any(Object))
    })
  })
})

describe('mapElements', () => {
  it('maps component directly', () => {
    const elements = mapElements({
      name: MockInput,
    })

    expect(elements).toHaveLength(1)
    expect(elements[0].name).toBe('name')
    expect(elements[0].definition.component).toBe(MockInput)
  })

  it('maps element config', () => {
    const elements = mapElements({
      name: { component: MockInput, value: 'test', label: 'Name' },
    })

    expect(elements).toHaveLength(1)
    expect(elements[0].definition.component).toBe(MockInput)
    expect(elements[0].definition.value).toBe('test')
    expect(elements[0].definition.label).toBe('Name')
  })
})
