<template>
  <div>
        <header class="header">
          <span @click="$router.push('/home/homes')">
              《
          </span>
          我是标题
      </header>
      <div class="topBox">
          <!-- <router-link :class="{active: count === index}" v-for="(item, index) in list" :to="item.path" tag="span" :key="index" @click="itemClick(item, index)">
              {{item.title}}
          </router-link> -->
          <span :class="{active: count === index}" v-for="(item, index) in list" :key="index" @click="itemClick(item, index)">
              {{item.title}}
          </span>
      </div>

      <div class="section">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            list: [
                {
                    title: '热门',
                    path: '/classify/classifyDetail?status=ranklist1'
                },
                {
                    title: '新书',
                    path: '/classify/classifyDetail?status=ranklist2'
                },
                {
                    title: '免费',
                    path: '/classify/classifyDetail?status=ranklist3'
                },
                {
                    title: '完本',
                    path: '/classify/classifyDetail?status=ranklist0'
                }
            ],
            obj: {}
        }
    },
    methods: {
        itemClick(item, index) {
            this.$router.push(item.path)
            this.count = index
        }
    }
}
</script>

<style scoped lang="scss">
      .topBox{
        width: 100%;
        display: flex;
        margin-top: 15px;
            span{
                flex: 1;
                text-align: center;
                line-height: 46px;
                background: #eeeeee;
                color: black;
                margin: 0 10px;
                border-radius: 5px;
            }
    }
    .active{
        background: pink !important;
        color: #fff !important;
    }
    .header{
        width: 100%;
        position: relative;
        text-align: center;
        line-height: 40px;
        font-size: 24px;
        font-weight: 600;
        span{
            position: absolute;
            left: 20px;
        }
    }
</style>