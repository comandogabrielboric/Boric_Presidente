import Vue from 'vue'
// import _ from 'lodash'
import { isEmpty, map, get, filter, find, reverse, mapValues, toLower, matchesProperty, pickBy, includes, forEach } from 'lodash'
const _ = { isEmpty, map, get, filter, find, reverse, mapValues, toLower, matchesProperty, pickBy, includes, forEach }

Vue.prototype._ = _



export default ({ app }, inject) => {
	inject('lodash', _)
}
