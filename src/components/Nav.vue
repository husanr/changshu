<script setup>
import {} from "vue"

</script>

<template>
  <nav>
    <ul>
      <li><a href="#weihua">河南卫华</a></li>
      <li><a href="#kuangshan">河南矿山</a></li>
      <li><a href="#dafang">河南大方</a></li>
      <li><a href="#niukelun">纽科伦</a></li>
      <li><a href="#niukelun">纽科伦</a></li>
      <li><a href="#niukelun">纽科伦</a></li>
      <li><a href="#niukelun">纽科伦</a></li>
      <li><a href="#contact">联系方式</a></li>
    </ul>
  </nav>
</template>

<style lang="less" scoped>
nav ul {
  list-style-type: none;
  background: #d71312;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    line-height: 50px;
    margin: 0 30px;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
@media (max-width: 600px) {
  nav ul li {
    width: 25%;
    margin: 0;
    box-sizing: border-box;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }

}
</style>
