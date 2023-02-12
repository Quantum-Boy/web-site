<template>
  <div>
     <Picture />
     <div class="card-wrap">
      <Card v-for="item in cardData" :key="item.key" :value="item"/>
     </div>
  </div>
</template>



<script>
import Picture from './picture.vue'
import Card from '@/components/Card.vue'
export default {
  components: {
    Picture,
    Card
  },
  data () {
    return {
      cardData: [
        {
          key: '1',
          title: '挪威的森林',
          description: '挪威的森林简介',
          imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          avatarUrl: 'https://joeschmoe.io/api/v1/random'
        },
        {
          key: '2',
          title: '浪潮之巅',
          description: '浪潮之巅简介',
          imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          avatarUrl: 'https://joeschmoe.io/api/v1/random'
        },
        {
          key: '3',
          title: '浪潮之巅3',
          description: '浪潮之巅简介3',
          imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          avatarUrl: 'https://joeschmoe.io/api/v1/random'
        },
        {
          key: '4',
          title: '浪潮之巅4',
          description: '浪潮之巅简介4',
          imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          avatarUrl: 'https://joeschmoe.io/api/v1/random'
        },
        {
          key: '5',
          title: '浪潮之巅5',
          description: '浪潮之巅简介5',
          imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          avatarUrl: 'https://joeschmoe.io/api/v1/random'
        },
        {
          key: '6',
          title: '浪潮之巅6',
          description: '浪潮之巅简介6',
          imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          avatarUrl: 'https://joeschmoe.io/api/v1/random'
        },
        {
          key: '7',
          title: '浪潮之巅7',
          description: '浪潮之巅简介7',
          imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          avatarUrl: 'https://joeschmoe.io/api/v1/random'
        }
      ]
    }
  },
}
</script>

<style scoped>
.card-wrap {
  display: flex;
  flex-wrap: wrap;
}
</style>