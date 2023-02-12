<template>
  <a-carousel arrows autoplay :after-change="onChange">
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <div v-for="item in imgList" :key="item.key">
      <img class="img" :src="item.url" alt="">
    </div>
  </a-carousel>
</template>

<script>
import { defineComponent } from 'vue';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
  },
  data () {
    return {
      imgList: [
        {
          url: require('@/assets/1.webp'),
          key: '1'
        },
        {
          url: require('@/assets/2.webp'),
          key: '2'
        },
        {
          url: require('@/assets/3.webp'),
          key: '3'
        }
      ]
    }
  },
  methods: {
    onChange (current) {
      console.log(current)
    }
  }
})
</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 400px;
  line-height: 160px;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.img {
  width: 100%;
  height: 400px;
}
</style>