<template>
  <div>
    <div class="box">
        <div class="left">
            <img v-lazy="obj.coverUrl" alt="">
        </div>
        <div class="right">
            <p>
                {{obj.categoryName}}
            </p>
            <button @click="addBook">+书架</button>
        </div>
        
    </div>
    <div class="bottomDiv">
            <span  @click="addReadBook">立即阅读</span>
            <span>客户端看免费</span>
        </div>
        
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return  {
            obj: this.$route.query.obj,
            arr: []
        }
    },
    created() {
        console.log(this.obj)
    },
    methods: {
         ...mapMutations(['addBooks']),
        addBook() {
            this.$store.commit('addBooks', this.obj)
             //addBooks()
        },
        addReadBook() {
            this.$store.commit('addReadBooks', this.obj)
        }
    }
}
</script>

<style scoped lang="scss">
    .box{
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
    .bottomDiv{
        width: 100%;
        display: flex;
        span{
            flex: 1;
            text-align: center;
            line-height: 40px;
            border: 1px solid pink;
        }
    }
</style>