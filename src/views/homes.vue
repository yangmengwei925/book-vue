<template>
  <div>
      <div class="topDiv">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img style="width:100%" :src="image" />
            </van-swipe-item>
        </van-swipe>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg'
            ]
        }
    }
}
</script>

<style scoped>

</style>