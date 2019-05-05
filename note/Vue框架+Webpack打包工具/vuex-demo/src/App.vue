<template>
  <div id="app">
    <div id="nav">
      <shopping></shopping>
      <hr>
      <cart></cart>
    </div>
  </div>
</template>

<script>
import Cart from '@/components/Cart'
import Shopping from '@/components/Shopping'

export default {
  name:'app',
  components:{
    Cart,
    Shopping
  }
}
</script>


<style lang="scss">
</style>
