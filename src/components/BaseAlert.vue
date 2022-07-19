<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';

interface Props {
  variant?: 'success' | 'danger' | 'warning' | 'info';
}

const emits = defineEmits(['close']);

const props = defineProps<Props>();

const computedVariant = computed(() => (props.variant ? `alert-${props.variant}` : ''));

</script>
<template>
<div :class="`alert ${computedVariant}`">
  <p>Seu formulário foi enviado com sucesso!</p>
  <button @click="() => emits('close')">x</button>
</div>
</template>

<style scoped>

.alert {
  padding: 5px;
  border-radius : 6px;
  color: gray;
  background: #ddd;
  display: flex;
  justify-content: space-between;
}

.alert-success {
  background: #42b983;
  color: #fff;
}

.alert-danger {
  background: #f44336;
  color: #fff;
}

</style>
