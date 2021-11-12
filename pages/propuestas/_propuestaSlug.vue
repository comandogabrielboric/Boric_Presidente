<template lang="pug">
.rootPropuestaID
</template>
<script>
export default {
	computed: {
		propuestaSlug () {
			return this.$route.params.propuestaSlug
		}
	},
	watch: {
		'$route.params.propuestaSlug' (v) {
			this.$emit('montado', { propuestaSlug: v })
		}
	},
	mounted () {
		this.$emit('montado', { propuestaSlug: this.$route.params.propuestaSlug })
		window.pSlug = this
	}
}
</script>
<style lang="sass" scoped></style>
