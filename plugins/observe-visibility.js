import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.directive(VueObserveVisibility)

export default ({ app }, inject) => {
	inject('VueObserveVisibility', VueObserveVisibility)
}
