import Vue from 'vue'
// import _ from 'lodash'
import { isEmpty, map, get, filter, find, toLower, snakeCase, replace, split, findKey } from 'lodash'
const _ = { isEmpty, map, get, filter, find, toLower, snakeCase, replace, split, findKey }

Vue.prototype._ = _



export default ({ app }, inject) => {
	inject('lodash', _)
}
