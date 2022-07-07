<template>
  <div>
    <HeaderApp v-show="showHeader" />
    <UserComponent />
    <TodoList />
    <AppForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppForm from './components/AppForm.vue';
import TodoList from './components/TodoList.vue';
import HeaderApp from './components/HeaderApp.vue';
import UserComponent from './components/UserComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderApp,
    TodoList,
    AppForm,
    UserComponent,
  },
  data() {
    return {
      showHeader: true,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
