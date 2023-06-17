<template>
  <div>hot</div>
</template>

<script>
import { getHTMLText } from '../../utils/index'
export default {
  mounted () {
    getHTMLText('/weibo.com/')
  }
}
</script>

<style>

</style>