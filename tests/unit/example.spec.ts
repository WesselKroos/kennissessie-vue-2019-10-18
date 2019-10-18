import { shallowMount } from '@vue/test-utils'
import Frameworks from '@/components/Frameworks.vue'

describe('Frameworks.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Frameworks, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
