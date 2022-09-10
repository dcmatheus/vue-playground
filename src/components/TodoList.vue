<script setup lang="ts">
import {
  computed, reactive, ref, watch,
} from 'vue';
import { useStore } from 'vuex';

const { state, commit } = useStore();

function addTodo() {
  commit('addTodo', {
    userId: Math.random(),
    id: Math.random(),
    title: 'New Todo',
    completed: false,
  });
}

const styles = ['bg', 'light'];
const todos = ref(state.todos);
const completedTodos = computed(() => todos.value.filter((todo: any) => todo.completed));
const totalPages = Math.ceil(state.todos.length / 5);

const pages = reactive({
  currentPage: 1,
  totalPages,
});

const todosOfPages = ref(todos.value.slice(pages.currentPage * 5 - 5, pages.currentPage * 5));

console.log(todosOfPages);

function changePage(page: number) {
  pages.currentPage = page;
}

watch(todos, (newValue, oldValue) => {
  console.log('Todos:', newValue);
  console.log('Todos antes:', oldValue);
});

watch(pages, (newValue, oldValue) => {
  console.log('Páginas:', newValue);
  console.log('Páginas antes:', oldValue);
  todosOfPages.value = todos.value.slice(pages.currentPage * 5 - 5, pages.currentPage * 5);
});
</script>

<template>
  <div>
    <div>
      <h2>Lista de tarefas</h2>
      <button @click="addTodo">Adicionar Tarefa</button>
      <label
        v-for="(todo, index) in todosOfPages"
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
        v-for="page in pages.totalPages"
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
