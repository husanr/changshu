<script setup>
import {} from "vue"

</script>

<template>
  <div class="banner">
    <van-swipe class="my-swipe"  indicator-color="white">
      <van-swipe-item>
        <img src="@/assets/img/banner/banner0.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/img/banner/banner1.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/img/banner/banner2.png" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
.banner {

  .my-swipe {

    img {
      width: 100%;
    }
  }
}

@media (max-width: 600px) {
  .banner {
    .my-swipe {
      .van-swipe-item {
        display: flex;
        justify-content: center;
        overflow: hidden;
        img {
          width: 600px;
          margin: auto;
        }
      }
    }
  }
}
</style>
