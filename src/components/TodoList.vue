<template>
  <div>
    <li v-for="todo in todos" v-bind:key="todo.id">{{ todo.title }}</li>
  </div>
</template>

<script lang="ts">
import todos from '../utils/todo.json';

export default {
  name: 'TodoList',
  data() {
    return {
      todos,
    };
  },
};
</script>
