<template lang="pug">
.root
	h1 Proto
</template>
<script>
export default {}
</script>
<style lang="sass" scoped>

@keyframes jello-horizontal
	0%
		-webkit-transform: scale3d(1, 1, 1)
		transform: scale3d(1, 1, 1)

	30%
		-webkit-transform: scale3d(1.25, 0.75, 1)
		transform: scale3d(1.25, 0.75, 1)

	40%
		-webkit-transform: scale3d(0.75, 1.25, 1)
		transform: scale3d(0.75, 1.25, 1)

	50%
		-webkit-transform: scale3d(1.15, 0.85, 1)
		transform: scale3d(1.15, 0.85, 1)

	65%
		-webkit-transform: scale3d(0.95, 1.05, 1)
		transform: scale3d(0.95, 1.05, 1)

	75%
		-webkit-transform: scale3d(1.05, 0.95, 1)
		transform: scale3d(1.05, 0.95, 1)

	100%
		-webkit-transform: scale3d(1, 1, 1)
		transform: scale3d(1, 1, 1)
</style>
