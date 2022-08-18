import { createStore } from 'vuex';
import todos from '../utils/todo.json';

export default createStore({
  state: {
    todos,
  },
  getters: {
  },
  mutations: {
    addTodo(state, todo) {
      state.todos = [todo, ...state.todos];
    },
  },
  actions: {
  },
  modules: {
  },
});
