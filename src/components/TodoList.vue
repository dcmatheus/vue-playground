<template>
  <div>
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
    </div>
    <div>
      <span>Página:</span>
      <button
        v-for="page in pages.totalOfPages"
        :key="page"
        @click="() => changePage(page)"
        :class="['page', page === pages.currentPage && 'active']"
      >
        {{ page }}
      </button>
    </div>
    <div>
      <h2>Completas</h2>
      <p v-for="todo in completedTodos" :key="todo.id">{{ todo.title }}</p>
    </div>
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
      todos: todos[0],
      styles: ['bg', 'light'],
      pages: {
        currentPage: 1,
        totalOfPages: todos.length,
      },
    };
  },
  computed: {
    completedTodos(): Todo[] {
      return this.todos.filter((todo) => todo.completed);
    },
    totalOfPages(): number {
      return todos.length;
    },
  },
  methods: {
    changePage(page: number) {
      this.pages.currentPage = page;
    },
  },
  watch: {
    pages: {
      handler(pages: { currentPage: number; totalOfPages: number }) {
        this.todos = todos[pages.currentPage - 1];
      },
      deep: true,
    },
    todos(newVal, oldVal) {
      console.log(newVal, oldVal);
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

.active {
  background-color: #333;
  color: #fff;
}

.completed {
  text-decoration: line-through;
}
</style>
