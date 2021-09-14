<template lang="pug">
.index
	section
		p Storytelling
	section
		p cuña
	section
		p Sumate
	section
		p Propuesta programatica
		mostradorprop
	section
		p Participacion ciudadana
</template>

<script>
import mostradorprop from './-mostradorprop.vue'
export default {
	components: { mostradorprop }
}
</script>

<style lang="sass" scoped>
section
	background-color: rgba(0,0,0,.05)
	min-height: 10em
	padding: 2em
	&:nth-child(even)
		background-color: rgba(0,0,0,.1)
</style>


