<script setup>
import {} from "vue"

</script>

<template>
  <nav>
    <ul>
      <li><a href="#about">关于我们</a></li>
      <li><a href="#products">产品</a></li>
      <li><a href="#services">服务</a></li>
      <li><a href="#contact">联系方式</a></li>
    </ul>
  </nav>
</template>

<style lang="less" scoped>
nav ul {
  list-style-type: none;
  background: #d71312;

  li {
    display: inline;
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
    display: block;
    margin-left: 0;
    margin-right: 0;
    border-bottom: 1px solid #995454;
  }

}
</style>
