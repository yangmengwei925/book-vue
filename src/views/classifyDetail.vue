<template>
  <div style="overflow: hidden;">
      <ul class="oul" v-show="key === $route.query.status" v-for="(item, key, value) in obj" :key="value">
          <li v-for="(items, indexs) in item" @click="itemPush(items)" :key="indexs">
              <div class="left">
                  <img v-lazy="items.coverUrl" alt="">
              </div>
              <div class="right">
                  <h4>
                      {{items.updteChapterName}}
                  </h4>
                  <p class="jianjie">
                      {{items.description}}
                  </p>
              </div>
          </li>
      </ul>

      <!-- 解决初始没有数据 -->
      <ul class="oul" v-if="!$route.query.status">
          <li v-for="(items, indexs) in obj.ranklist1" @click="itemPush(items)" :key="indexs">
              <div class="left">
                  <img v-lazy="items.coverUrl" alt="">
              </div>
              <div class="right">
                  <h4>
                      {{items.updteChapterName}}
                  </h4>
                  <p class="jianjie">
                      {{items.description}}
                  </p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    created() {
        if (localStorage.getItem('abc')) {
            this.obj = JSON.parse(localStorage.getItem('abc'))
        } else {
            axios.get('/getDate').then(res => {
                this.obj = res.data
                localStorage.setItem('abc', JSON.stringify(this.obj))
            })
        }  
    },
    data() {
        return {
            obj: {}
        }
    },
    methods: {
        itemPush(item) {
            this.$router.push({
                path: '/detail',
                query: {
                    obj: item
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
    .oul{
        width: 100%;
        margin-top: 20px;
        padding-left: 20px;
        li{
             width: 100%;
             display: flex;
             height: 70px;
             margin-bottom: 10px;
             .left{
                 flex: 1;
                 img{
                     width: 100%;
                     height: 100%;
                 }
             }
             .right {
                 flex:3.5;
             }
        }
    }
    .jianjie{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        padding-right: 26px;
    }
</style>