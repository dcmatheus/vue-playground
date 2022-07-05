<template>
  <ol>
    <li
      v-for="(todo, index) in todos"
      :class="[...styles, (index == 0 ? 'first' : '')]"
      style="font-size: 1.2rem"
      :style="{ margin: '1rem' }"
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
    background-color: #f5f5f5;
  }

  .light {
    color: #333;
  }
  .first {
    color: red;
  }
</style>
