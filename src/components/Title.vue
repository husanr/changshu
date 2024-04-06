<script setup>
import {} from "vue"

</script>

<template>
  <div class="title">
    <h1>苏州市常熟起重机总销售</h1>
    <div class="tel">
      <p>联系电话</p>
      <p>15512345678</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.title {
  max-width: 1200px;
  display: flex;
  align-items: center;
  padding: 20px;
  margin: auto;
  justify-content: space-between;
  h1 {
    font-size: 30px;
  }

  .tel {
    width: 200px;
    font-size: 30px;
    font-weight: 600;
    color: #d71312;
    text-align: left;
    p:nth-child(1) {
      font-size: 12px;
      color: #333;
      font-weight: 400;
    }
  }
}


@media (max-width: 600px) {

  .tel {
    display: none;
  }
}
</style>
