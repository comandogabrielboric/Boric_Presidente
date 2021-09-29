<template lang="pug">
.rootPropuestaID
</template>
<script>
export default {
	computed: {
		propuestaID () { return this.$route.params.propuestaID }
	},
	mounted () {
		this.$emit('montado', { propuestaID: this.$route.params.propuestaID })
		window.pID = this
	}
}
</script>
<style lang="sass" scoped></style>
