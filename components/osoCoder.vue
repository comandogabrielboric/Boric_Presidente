<template lang="pug">
.osoCoder
	svg(xmlns="http://www.w3.org/2000/svg", viewBox="0 0 300 300")
		defs
			g#code-block.code-block
				rect(ry="0", y="862", x="60", height="7.5", width="74")
				rect(ry="0", y="874", x="96", height="7.5", width="28")
				rect(width="54", height="7.5", x="60", y="886", ry="0")
				rect(ry="0", y="897", x="60", height="7.5", width="74")
				rect(width="56", height="7.5", x="78", y="909", ry="0")
				rect(ry="0", y="921", x="83", height="7.5", width="51")
				rect(width="51", height="7.5", x="73", y="932", ry="0")
				rect(ry="0", y="944", x="72", height="7.5", width="62")
				rect(width="74", height="7.5", x="60", y="956", ry="0")
				rect(ry="0", y="967", x="50", height="7.5", width="84")
				rect(width="64", height="7.5", x="60", y="979", ry="0")
				rect(ry="0", y="991", x="60", height="7.5", width="74")
				rect(width="41", height="7.5", x="93", y="1003", ry="0")
				rect(ry="0", y="1014", x="66", height="7.5", width="58")
				rect(width="58", height="7.5", x="56", y="1026", ry="0")
				rect(ry="0", y="1038", x="50", height="7.5", width="74")
				rect(width="46", height="7.5", x="88", y="1049", ry="0")
				rect(ry="0", y="1061", x="105", height="7.5", width="19")
				rect(width="38", height="7.5", x="96", y="1073", ry="0")
				rect(ry="0", y="1084", x="73", height="7.5", width="51")
				rect(ry="0", y="1096", x="88", height="7.5", width="26")
				rect(width="56", height="7.5", x="68", y="1108", ry="0")
				rect(ry="0", y="1120", x="100", height="7.5", width="24")
				rect(width="74", height="7.5", x="50", y="1131", ry="0")
			clipPath#spec-left
				path(
					d="M85 860c-10 1-25 1-28 13-3 15-3 32 6 45 7 11 23 9 35 9 19-1 35-16 40-34 2-8 4-14 1-19-6-10-20-12-31-13l-23-1z",
					fill="#333"
				)
			clipPath#spec-right
				path(
					d="M215 860c10 1 24 1 28 13 3 15 3 32-6 45-7 11-23 9-35 9-19-1-35-16-40-34-2-8-4-14-1-19 6-10 20-12 31-13l23-1z",
					fill="#333"
				)
		g(transform="matrix(1.34105 0 0 1.34105 -51 -1050)")
			path.bear__fur(
				d="M243 894c0 61-36 106-94 106-55 0-92-45-92-106s38-86 91-86 95 25 95 86z"
			)
			path.bear__muzzle(
				d="M212 958c0 20-29 39-63 39-35 0-61-19-61-39s26-33 61-33 63 13 63 33z"
			)
			path.bear__nose(
				d="M181 932c0 7-19 24-30 24s-32-17-32-24c0-8 20-13 31-13 12 0 31 5 31 13z"
			)
			ellipse.bear__outer-ear(cx="68.3", cy="827.7", rx="23.8", ry="23.1")
			path.bear__inner-ear(
				d="M85 826a17 16 0 00-17-14 17 16 0 00-16 16 17 16 0 0016 16 17 16 0 001 0l3-4a66 66 0 0111-12l2-2z"
			)
			ellipse.bear__outer-ear(
				ry="23.1",
				rx="23.8",
				cy="827.7",
				cx="-231.2",
				transform="scale(-1 1)"
			)
			path.bear__inner-ear(
				d="M215 826a17 16 0 0116-14 17 16 0 0117 16 17 16 0 01-17 16 17 16 0 01-1 0l-2-4a66 66 0 00-11-12l-2-2z"
			)
			path.bear__cap-strap(
				d="M148 815c-14 0-26 1-38 4v11a199 199 0 0180 1v-11c-13-3-27-5-42-5z"
			)
			path.bear__small-cap-strap(
				d="M165 816a16 8 0 015 5 16 8 0 01-6 6l26 4v-11l-25-4z"
			)
			path.bear__cap(
				d="M148 789c-43 0-76 20-83 64 12-11 28-19 45-23 0 0-2-12 10-16 15-4 19-4 28-4 10 0 15 0 30 4s12 17 12 17c18 5 32 11 45 22-8-46-43-64-87-64z"
			)
			circle.bear__eye(cx="97.2", cy="894.1", r="11.2")
			circle.bear__eye(cy="894.1", cx="201.9", r="11.2")
			path.bear__eyebrows(
				d="M97 864a21 21 0 01-7 16 21 21 0 01-16 5M204 864a21 21 0 006 16 21 21 0 0016 5",
				fill="none",
				stroke="#e9afaf",
				stroke-width="3",
				stroke-linecap="round",
				stroke-linejoin="round"
			)
			path.shades-frame(
				d="M77 855c-6 0-13 0-23 2l-14 3 2 15 7 2c3 5 1 10 2 18 3 28 12 34 26 35 8 1 23 3 33-1s19-10 25-18c6-9 6-18 10-26 3-5 8-4 10 0 3 8 4 17 10 26 6 8 15 14 24 18 11 4 26 2 34 1 14-1 23-7 26-35 1-8-2-13 2-18l7-2 2-15-15-3c-15-3-23-2-34-2h-13l-25 4c-8 2-15 7-23 6-8 0-15-5-23-6l-25-4H77z"
			)
			path.lens(
				d="M85 860c-10 1-25 1-28 13-3 15-3 32 6 45 7 11 23 9 35 9 19-1 35-16 40-34 2-8 4-14 1-19-6-10-20-12-31-13l-23-1z",
				fill="#333"
			)
			path.shades-dot(
				d="M56 864a4 2 0 01-4 2 4 2 0 01-4-2 4 2 0 014-1 4 2 0 014 1"
			)
			path.lens(
				d="M215 860c10 1 24 1 28 13 3 15 3 32-6 45-7 11-23 9-35 9-19-1-35-16-40-34-2-8-4-14-1-19 6-10 20-12 31-13l23-1z",
				fill="#333"
			)
			path.shades-dot(
				d="M244 864a4 2 0 004 2 4 2 0 004-2 4 2 0 00-4-1 4 2 0 00-4 1"
			)
			g(clip-path="url(#spec-left)")
				use(xlink:href="#code-block", transform="translate(0 0)")
				use(xlink:href="#code-block", transform="translate(0 0)", y="283.5")
			g(clip-path="url(#spec-right)")
				use(xlink:href="#code-block", transform="translate(104 0)")
				use(xlink:href="#code-block", transform="translate(104 0)", y="283.5")
			path.lens__shine(
				d="M101 861l-19 66h17l18-65-16-1zM89 860h-4l-3 1-18 59 6 5 19-65z"
			)
</template>
<script>
export default {
	name: 'OsoCoder'
}
</script>
<style lang="sass" scoped>
@keyframes read
	100%
		transform: translate(0, -283.5px)
.osoCoder
	--fur: #9a6a4a
	--ear: #e4b89b
	--cap-strap--large: #383838
	--cap-strap--small: #242424
	--cap: #0d0d0d
	--dots: rgba(242,242,242,0.6)
	--frame: #000
	--shine: rgba(242,242,242,0.35)
	--lens: #141414
	--code-one: #4BC6B9
	--code-two: #96C3CE
	--code-three: #A79AB2
	--code-four: #B57BA6
svg
	height: 10em
.code-block
	animation: read 1s infinite linear
	rect
		fill: var(--code-one)
		&:nth-of-type(5)
			fill: var(--code-four)
		&:nth-of-type(12)
			fill: var(--code-three)
.code-block rect:nth-of-type(8),
.code-block rect:nth-of-type(9)
	fill: var(--code-two)
.bear__fur,
.bear__outer-ear
	fill: var(--fur)
.bear__inner-ear,
.bear__muzzle
	fill: var(--ear)
.bear__cap-strap
	fill: var(--cap-strap--large)
.bear__small-cap-strap
	fill: var(--cap-strap--small)
.bear__cap
	fill: var(--cap)
.lens
	fill: var(--lens)
.lens__shine
	fill: var(--shine)
.shades-dot
	fill: var(--dots)
.shades-frame
	fill: var(--frame)
</style>
