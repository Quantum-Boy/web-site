<template>
  <div>
    <Layout/>
    <router-view></router-view>
  </div>
</template>

<script>
import Layout from './components/Layout.vue'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
</style>
