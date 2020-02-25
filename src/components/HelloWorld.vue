<template>
  <div class="hello">
    <div class="topBox">
      <router-link active-class="active" v-for="(item, index) in list" :to="item.path" tag="span" :key="index">
        {{item.title}}
      </router-link>
    </div>
    <div class="section">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      list: [
        {
          title: '首页',
          path: '/home/homes'        
        },
        {
          title: '分类',
          path: '/classify'        
        },
        {
          title: '排行',
          path: '/home/list'        
        },
        {
          title: '书架',
          path: '/home/book'        
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .topBox{
    width: 100%;
    display: flex;
    span{
      flex: 1;
      text-align: center;
      line-height: 46px;
      background: black;
      color: #eeeeee;
    }
  }
  .active{
      background: #000000b0 !important;
      color: #fff !important;
      font-weight: 600;
  }
</style>
