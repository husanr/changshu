<script setup>
import Title from '@/components/Title.vue'
import Nav from '@/components/Nav.vue'
import Banner from '@/components/Banner.vue'
import Products from '@/components/Products.vue'
import products from '@/assets/json/products.json'

</script>

<template>
  <header>
    <Title></Title>
    <Nav></Nav>
  </header>
  <Banner></Banner>
  <main>
    <template v-for="item in products" :key="item.id">
      <section :id="item.id">
        <h2>{{ item.title }}</h2>
        <Products :list="item.products"></Products>
      </section>
    </template>
    <section id="contact">
      <h2>联系方式</h2>
      <p>联系电话：15212345678</p>
    </section>
  </main>
  <footer>
    <p>&copy; 苏州市常熟起重机总销售. All rights reserved.</p>
  </footer>
</template>

<style lang="less" scoped>
header,
footer {
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

  footer {
    padding: 1rem ;
  }

  main {
    padding: 0.5rem;
  }
}
</style>
