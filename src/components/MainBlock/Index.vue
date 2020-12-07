<template>
   <div class="grid-container">
    <div class="grid-item item-left">
      <h1>Izquierda</h1>
    </div>
    <div class="grid-item item-right">
      <h1>Derecha</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainBlock',
  props: {
    profileData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus">
  .grid-container
    display grid
    grid-template-columns 1fr

    .grid-item
      &.item-left
        grid-column span 1

      &.item-right
        grid-column span 1

  @media (min-width: 992px)
    .grid-container
      display grid
      grid-template-columns repeat(6, 1fr)

      .grid-item
        &.item-left
          grid-column span 4

        &.item-right
          grid-column span 2
</style>