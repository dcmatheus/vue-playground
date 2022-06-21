<template>
  <div>
    <HeaderApp v-show="showHeader" />
    <div>
      Nome: {{ name }}
      Idade: {{ age }}
    </div>
    <div v-if="accessLevel === 'admin'">Admin</div>
    <div v-else-if="accessLevel === 'marketing'">Marketing</div>
    <div v-else>User</div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import HeaderApp from './components/HeaderApp.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    HeaderApp,
  },
  data() {
    return {
      showHeader: true,
      name: 'dcmatheus',
      age: 19,
      accessLevel: 'marketing',
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
