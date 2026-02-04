import { describe, it, expect } from 'vitest'
import { defineComponent, h } from 'vue'
import { defineElement, hidden, when } from '../elements'

const MockInput = defineComponent({
  name: 'MockInput',
  props: { id: String, modelValue: [String, Number] },
  setup(props) {
    return () => h('input', { id: props.id, value: props.modelValue })
  },
})

describe('defineElement', () => {
  it('returns config with component merged', () => {
    const result = defineElement(MockInput, { value: 'test', label: 'Name' })

    expect(result.component).toBe(MockInput)
    expect(result.value).toBe('test')
    expect(result.label).toBe('Name')
  })

  it('returns config with only component when no config provided', () => {
    const result = defineElement(MockInput)

    expect(result.component).toBe(MockInput)
    expect(result.value).toBeUndefined()
  })
})

describe('hidden', () => {
  it('returns config with showLabel false and type hidden prop', () => {
    const result = hidden('secret-value')

    expect(result.value).toBe('secret-value')
    expect(result.showLabel).toBe(false)
    expect(result.props?.type).toBe('hidden')
  })
})

describe('when', () => {
  it('returns config with visibility condition and component merged', () => {
    const condition = (form: any) => form.showField
    const result = when(condition, MockInput, { label: 'Conditional' })

    expect(result.component).toBe(MockInput)
    expect(result.visible).toBe(condition)
    expect(result.label).toBe('Conditional')
  })

  it('returns config without extra config', () => {
    const condition = (form: any) => form.active
    const result = when(condition, MockInput)

    expect(result.component).toBe(MockInput)
    expect(result.visible).toBe(condition)
  })
})
