<template>
  <div>{{ userData }}</div>
  {{ accessLevel }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserComponent',
  data() {
    return {
      name: 'dcmatheus',
      age: 19,
    };
  },
  computed: {
    userData(): string {
      return `Nome: ${this.name}  Idade: ${this.age}`;
    },
    accessLevel(): string {
      return this.age > 18 ? 'admin' : 'marketing';
    },
  },
});
</script>

<style>
.header {
  background: #000;
  color: #fff;
}
</style>
