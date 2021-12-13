import Vue from 'vue'
// import _ from 'lodash'
import { isEmpty, map, get, filter, find, reverse, replace, mapValues, words, pickBy, includes, forEach, findIndex, lowerCase, isString, slice, pad, cloneDeep, concat, orderBy } from 'lodash'
const _ = { isEmpty, map, get, filter, find, reverse, replace, mapValues, words, pickBy, includes, forEach, findIndex, lowerCase, isString, slice, pad, cloneDeep, concat, orderBy }

Vue.prototype._ = _



export default (ctx, inject) => {
	inject('lodash', _)
	const { app } = ctx
	ctx._ = ctx
	app._ = app
}
