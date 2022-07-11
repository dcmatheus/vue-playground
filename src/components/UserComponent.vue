<script lang="ts" setup>
import { ref, computed } from 'vue';

const name = ref('dcmatheus');
const age = ref(19);
const userData = computed(() => `Nome: ${name.value} - Idade: ${age.value}`);
const accessLevel = computed(() => (age.value > 18 ? 'admin' : 'marketing'));
</script>

<template>
  <div>{{ userData }}</div>
  {{ accessLevel }}
</template>
