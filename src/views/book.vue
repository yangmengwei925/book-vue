<template>
  <div>
    <div class="top">
      <span :class="{active: index === count}" @click="tabItem(index)" v-for="(item, index) in tabList" :key="index">
        {{item}}
      </span>
    </div>
    <!-- 我的书架 -->
    <ul v-show="count === 0" class="oul">
      <li v-for="(item, index) in this.$store.state.bookList" :key="index">
          <div class="left">
            <img v-lazy="item.coverUrl" alt="">
          </div>
          <div class="right">
              <p>
                  {{item.authorName}}
              </p>
              <p>
                <button @click="delBook(index)">点我删除</button>
              </p>
          </div>
      </li>
    </ul>

    <!-- 最近阅读 -->
    <ul v-show="count === 1" class="oul">
      <li v-for="(item, index) in this.$store.state.readBookList" :key="index">
          <div class="left">
            <img v-lazy="item.coverUrl" alt="">
          </div>
          <div class="right">
              <p>
                  {{item.authorName}}
              </p>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newObj: {},
      tabList: [
        '我的书架',
        '最近阅读'
      ],
      count: 0
    }
  },
  created() {

  },
  methods: {
    tabItem(index) {
      this.count = index
    },
    delBook(index) {
      this.$store.commit('delBookList', index)
    }
  }
}
</script>

<style scoped lang="scss">
.top{
  width: 100%;
  display: flex;
  span{
    flex: 1;
    text-align: center;
    line-height: 40px;
  }
}
.oul{
  width: 100%;
  li{
     display: flex;
        width: 100%;
        .left{
            flex: 1;
            img{
                width: 100%;
            }
        }
        .right{
            flex: 3;
        }
  }
}

.active{
  color: red;
}
       
        
</style>