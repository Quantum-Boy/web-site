import { createRouter,createWebHashHistory } from "vue-router";
import Home from './pages/home'
import Setting from './pages/setting'
import Hot from './pages/hot'
import Follow from './pages/follow'
const routes = [
  {
    path: '/',
    alias: '/home',
    redirect: '/home/hot',
    component: Home,
    children: [
      { path: '/home/hot',  component: Hot },
      { path: '/home/follow',  component: Follow },
    ]
  },
  { path: '/setting',  component: Setting },
]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
export default router