import Vue from 'vue'
// import _ from 'lodash'
import { isEmpty, map, get, filter, find } from 'lodash'
const _ = { isEmpty, map, get, filter, find }

Vue.prototype._ = _



export default ({ app }, inject) => {
	inject('lodash', _)
}
