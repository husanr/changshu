<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => ([])
  }
})

const getUrl = (url) => {
  return new URL(url, import.meta.url).href
}
</script>

<template>
  <div class="products">
    <ul>
      <template v-for="(item, index) in list" :key="index">
        <li>
          <img :src="getUrl(item.url)" alt="">
          <p>{{ item.text }}</p>
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.products {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 48%;
      text-align: center;
      margin-bottom: 20px;
      font-size: 0;
      img {
        width: 100%;
      }
      p {
        font-size: 18px;
        line-height: 34px;
        background: #eee;
      }
    }
  }
}
</style>