<script setup>
import Title from '@/components/Title.vue'
import Nav from '@/components/Nav.vue'
import Banner from '@/components/Banner.vue'

</script>

<template>
  <header>
    <Title></Title>
    <Nav></Nav>
  </header>
  <Banner></Banner>
  <main>
    <section id="about">
      <h2>关于我们</h2>
      <p>这里是关于我们公司的介绍...</p>
    </section>
    <section id="products">
      <h2>产品</h2>
      <p>这里展示我们的产品...</p>
    </section>
    <section id="services">
      <h2>服务</h2>
      <p>这里提供我们的服务内容...</p>
    </section>
    <section id="contact">
      <h2>联系方式</h2>
      <p>这里提供联系信息...</p>
    </section>
  </main>
  <footer>
    <p>&copy; 常熟起重机有限公司. All rights reserved.</p>
  </footer>
</template>

<style lang="less" scoped>
header,
footer {
  padding: 10px 0 0;
  text-align: center;
}
footer {
  background-color: #333;
  color: white;
  padding: 20px;
}


section {
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ddd;
}

@media (max-width: 600px) {

  section {
    margin: 1rem 0;
  }
}

@media (max-width: 400px) {

  header,
  footer {
    padding: 0.5rem 0 0;
  }
  footer {
    padding: 1rem ;
  }

  main {
    padding: 0.5rem;
  }
}
</style>
