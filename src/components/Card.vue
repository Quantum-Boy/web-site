<template>
  <a-card hoverable class="card-container">
    <template #cover>
      <img
        alt="example"
        :src="cardData.imgUrl"
      />
    </template>
    <template #actions>
      <edit-outlined key="edit" @click="editData"/>
      <delete-outlined key="delete" />
    </template>
    <a-card-meta :description="cardData.description">
      <template #title>
        <a-input
          v-if="isEdit"
          v-model:value="cardData.title"
        >
          <!-- <template #enterButton>
            <check-outlined @click="saveData('title')"/>
            <close-outlined @click="cancleEdit"/>
          </template> -->
          <template #addonAfter>
            <check-outlined @click="saveData('title')" style="marginRight: 16px"/>
            <close-outlined @click="cancleEdit"/>
          </template>
        </a-input>
        <span v-else>{{cardData.title}}</span>
      </template>
      <template #avatar>
        <a-avatar :src="cardData.avatarUrl" />
      </template>
    </a-card-meta>
  </a-card>
</template>
<script>
import { DeleteOutlined, EditOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    DeleteOutlined,
    EditOutlined,
    CheckOutlined,
    CloseOutlined
  },
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      cardData: {},
      isEdit: false
    }
  },
  watch: {
    'value':  {
      handler(val) {
        this.cardData = val
      },
      immediate: true
    }
  },
  methods: {
    editData () {
      this.isEdit = true
    },
    saveData () {
      this.$emit('input', this.cardData)
      this.isEdit = false
    },
    cancleEdit () {
      this.$emit('input', this.value)
      this.isEdit = false
    }
  }
});
</script>
<style scoped>
@media (max-width: 600px) {
  .card-container {
    width: 80vh;
    margin: .9vw;
  }
}
@media (min-width: 600px) {
  .card-container {
    width: 18vw;
    margin: .9vw;
  }
}

</style>