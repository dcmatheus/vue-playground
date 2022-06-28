<template>
  <ol>
    <li
      v-for="(todo, index) in todos"
      :class="[...styles, (index == 0 ? 'first' : '')]"
      style="margin-bottom: 1rem"
      :style="{ marginLeft: '10rem' }"
      :key="todo.id"
    >{{ todo.title }}</li>
  </ol>
</template>

<script lang="ts">
import todos from '../utils/todo.json';

export default {
  name: 'TodoList',
  data() {
    return {
      todos,
      styles: ['bg', 'light'],
    };
  },
};
</script>

<style scoped>

  .bg {
    background-color: blue;
  }

  .light {
    color: #333;
  }
  .first {
    color: red;
  }
</style>
