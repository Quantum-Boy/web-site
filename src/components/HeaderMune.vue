<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="item in menuList" :to="item.url" :key="item.name" :title="item.key" :name="item.name">
      <router-view/>
    </van-tab>
  </van-tabs>
</template>

<script>
export default {
  data () {
    return {
      active: 'hot',
      menuList: [
        {
          name: 'hot',
          key: '热点',
          url: '/home/hot',
        },
        {
          name: 'follow',
          key: '关注',
          url: '/home/follow',
        },
      ],
    }
  },
  methods: {
  }
}
</script>

<style scoped>
::v-deep .login {
  position: absolute !important;
  right: 10px;
}
</style>