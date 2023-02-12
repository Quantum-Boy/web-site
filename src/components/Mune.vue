<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item v-for="item in menuList" :key="item.key">
      <router-link :to="item.url">{{item.name}}</router-link>
    </a-menu-item>
    <a-menu-item class="login">
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
          {{userInfo.name}} 您好！
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">登录</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        {
          key: 'home',
          name: '首页',
          url: '/home'
        },
        {
          key: 'setting',
          name: '设置',
          url: '/setting'
        },
      ],
      current: ['home'],
      userInfo: {
        name: '哥哥偏头痛'
      }
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