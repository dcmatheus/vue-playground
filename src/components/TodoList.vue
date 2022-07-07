<template>
  <div>
    <h2>Lista de tarefas</h2>
    <label
      v-for="(todo, index) in todos"
      :class="[...styles, index === 0 && 'first', todo.completed && 'completed']"
      style="font-size: 1.2rem; display: block"
      :style="{ margin: '1rem' }"
      :key="todo.id"
      :for="`${todo.id}`"
    >
      <input type="checkbox" :id="`${todo.id}`" v-model="todo.completed" />
      <span>{{ todo.title }}</span>
    </label>
    <h2>Completas</h2>
    <p v-for="todo in completedTodos" :key="todo.id">{{ todo.title }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import todos from '../utils/todo.json';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default defineComponent({
  name: 'TodoList',
  data() {
    return {
      todos,
      styles: ['bg', 'light'],
    };
  },
  computed: {
    completedTodos(): Todo[] {
      return this.todos.filter((todo) => todo.completed);
    },
  },
});
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

.completed {
  text-decoration: line-through;
}
</style>
