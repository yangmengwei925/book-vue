import Vue from 'vue'
import Vuex from 'vuex'
import { Toast } from 'vant';

Vue.use(Toast);

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 我的书架的数据
    bookList: [],
    // 最近阅读
    readBookList: []
  },
  mutations: {
    addBooks(state, action) {
      state.bookList.push(action)
      Toast.success('帅哥，添加成功');
    },
    addReadBooks(state, action) {
      state.readBookList.push(action)
    },
    delBookList(state, action) {
      state.bookList.splice(action, 1)
      Toast({
        message: '删除成功',
        icon: 'like-o'
      });
    }
  },
  actions: {

  }
})
