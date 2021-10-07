import Vue from 'vue'
import { ObserveVisibility } from 'vue-observe-visibility'

Vue.directive('observe-visibility', ObserveVisibility)

export default ({ app }, inject) => {
	inject('observe-visibility', ObserveVisibility)
}
