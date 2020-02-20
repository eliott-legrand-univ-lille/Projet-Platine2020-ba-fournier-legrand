import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount,createLocalVue } from '@vue/test-utils'
import Home from '@/components/Home.vue'
import router from '@/routes/routes'


Vue.use(Vuetify)

const localVue = createLocalVue()

/* sources used to test unit-tests in Vue: 
https://vue-test-utils.vuejs.org/guides/getting-started.html,
https://vuetifyjs.com/en/getting-started/unit-testing,
*/

describe('Home.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('the title of the first card should be rendered', () => {
    const wrapper = mount(Home, {
      localVue,
      vuetify,
      router
    })
    //console.log(wrapper.html())
    expect(wrapper.html()).toContain('<p class="orange--text">Membres</p>')
  })
})
