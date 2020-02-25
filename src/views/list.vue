<template>
  <div>
      <ul>
        <li :class="{active: index < 3}" v-for="(item, index) in list" :key="index">
          {{item.authorName}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{item.bookId}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      this.list = JSON.parse(localStorage.getItem('abc')).ranklist0
      this.list.sort((a,b) => {
        return a.bookId - b.bookId
      })
    }
}
</script>

<style scoped>
  .active{
    color: red;
  }
</style>