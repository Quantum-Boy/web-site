<template>
  <div>
    <router-view/>
    <FooterMenu />
  </div>
</template>



<script>
import FooterMenu from './FooterMenu.vue'
export default {
  components: {
    FooterMenu,
  }
}
</script>

<style>

</style>