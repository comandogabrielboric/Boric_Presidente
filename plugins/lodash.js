import Vue from 'vue'
// import _ from 'lodash'
import { isEmpty, map, get, filter, find, reverse, mapValues, toLower, matchesProperty } from 'lodash'
const _ = { isEmpty, map, get, filter, find, reverse, mapValues, toLower, matchesProperty }

Vue.prototype._ = _



export default ({ app }, inject) => {
	inject('lodash', _)
}
