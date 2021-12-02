<template lang="pug">
.listaSpotify
	iframe(
		:src="url",
		:width="ancho",
		:height="alto",
		frameBorder="0",
		allowfullscreen="",
		allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
	)
</template>
<script>
export default {
	props: {
		ancho: { type: String, default: '100%' },
		alto: { type: String, default: '50px' },
		url: {
			type: String,
			default:
				'https://open.spotify.com/embed/playlist/4uKpFyC9PIeafFy80RAWS1?utm_source=generator'
		}
	}
}
</script>
<style lang="sass" scoped></style>
