<template>
  <van-tabbar v-model="active">
    <van-tabbar-item
      v-for="item in menuList"
      :key="item.name"
      :icon="item.icon"
      :name="item.name"
      replace
      :to="item.url"
    >
    {{item.key}}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data () {
    return {
      active: 'home',
      menuList: [
        {
          name: 'home',
          key: '首页',
          url: '/home',
          icon: 'home-o'
        },
        {
          name: 'setting1',
          key: '设置',
          url: '/setting',
          icon: 'home-o'
        },
        {
          name: 'setting2',
          key: '设置',
          url: '/setting',
          icon: 'home-o'
        },
                {
          name: 'setting3',
          key: '设置',
          url: '/setting',
          icon: 'home-o'
        },
      ],
      userInfo: {
        name: '哥哥偏头痛'
      }
    }
  },
}
</script>

<style>

</style>