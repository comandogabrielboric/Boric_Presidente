<template lang="pug">
.root
	h1 propuestaID {{propuestaID}}.
</template>
<script>
export default {
	computed: {
		propuestaID () { return this.$route.params.propuestaID }
	},
	mounted () {
		this.$emit('montado', { propuestaID: this.$route.params.propuestaID })
	}
}
</script>
<style lang="sass" scoped></style>
