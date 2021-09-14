<template lang="pug">
.hamburguesa
	span
	span
	span
	span
</template>
<script>
export default {
	name: 'Hamburguesa'
}
</script>
<style lang="sass" scoped>
*
  margin: 0
  padding: 0

.hamburguesa
  width: 60px
  height: 45px
  position: relative
  margin: 50px auto
  -webkit-transform: rotate(0deg)
  -moz-transform: rotate(0deg)
  -o-transform: rotate(0deg)
  transform: rotate(0deg)
  -webkit-transition: .5s ease-in-out
  -moz-transition: .5s ease-in-out
  -o-transition: .5s ease-in-out
  transition: .5s ease-in-out
  cursor: pointer

.hamburguesa span
  display: block
  position: absolute
  height: 9px
  width: 100%
  background-color: currentColor
  border-radius: 9px
  opacity: 1
  left: 0
  -webkit-transform: rotate(0deg)
  -moz-transform: rotate(0deg)
  -o-transform: rotate(0deg)
  transform: rotate(0deg)
  -webkit-transition: .25s ease-in-out
  -moz-transition: .25s ease-in-out
  -o-transition: .25s ease-in-out
  transition: .25s ease-in-out

.hamburguesa
  span
    &:nth-child(1)
      top: 0px

    &:nth-child(2), &:nth-child(3)
      top: 18px

    &:nth-child(4)
      top: 36px

  &.abierto span
    &:nth-child(1)
      top: 18px
      width: 0%
      left: 50%

    &:nth-child(2)
      -webkit-transform: rotate(45deg)
      -moz-transform: rotate(45deg)
      -o-transform: rotate(45deg)
      transform: rotate(45deg)

    &:nth-child(3)
      -webkit-transform: rotate(-45deg)
      -moz-transform: rotate(-45deg)
      -o-transform: rotate(-45deg)
      transform: rotate(-45deg)

    &:nth-child(4)
      top: 18px
      width: 0%
      left: 50%

</style>
