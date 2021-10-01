<template lang="pug">
.root
	h1 Test
	.excel
		iframe.excel(src='https://docs.google.com/spreadsheets/d/e/2PACX-1vRHlpO5vm8EqgjSAgyw10dkCwk84FcGMATmU9eQbelQSHnlBrUxBTXTm7htIGBqwswNLY0oqv85Xgjp/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false')

</template>
<script>
export default {}
</script>
<style lang="sass" scoped>
.excel
	margin: 2em 0
	width: 100vw
	height: 80vh
	// iframe
</style>
