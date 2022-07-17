<script setup lang="ts">
import {
  onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref,
} from 'vue';

const size = ref(`${window.innerWidth} x ${window.innerHeight}`);
const root = ref<HTMLElement | null>(null);

function resize($evt: Event) {
  console.log($evt);
  size.value = `${window.innerWidth} x ${window.innerHeight}`;
}

// Criação
//    Preparar o componente
//    Ajax, inicializar algumas variáveis
//    Não tem acesso ao template (DOM)
// console.log('created');
// console.log('Estado:', size.value);
// console.log('DOM:', root.value);
// console.log('----------------------------------------------------');

// // Montagem
// //    Inicializar um lib externa (new Lib())
// //    Precisa de acesso ao template (DOM)
// //    Tem acesso ao template (DOM)
// onBeforeMount(() => {
//   console.log('beforeMount');
//   console.log('Estado:', size.value);
//   console.log('DOM:', root.value);
//   console.log('----------------------------------------------------');
// });

// onMounted(() => {
//   console.log('mounted');
//   console.log('Estado:', size.value);
//   console.log('DOM:', root.value);
//   window.addEventListener('resize', resize);
//   console.log('----------------------------------------------------');
// });

// // Atualização
// //    Debug
// //    Update
// onBeforeUpdate(() => {
//   console.log('beforeUpdate');
//   console.log('Estado:', size.value);
//   console.log('DOM:', root.value);
//   console.log('----------------------------------------------------');
// });

// onUpdated(() => {
//   console.log('updated');
//   console.log('Estado:', size.value);
//   console.log('DOM:', root.value);
//   console.log('----------------------------------------------------');
// });

// // Desmontagem
// //    Remover tudo o que for necessário (lib->destroy())
// //    para liberar memória
// onBeforeUnmount(() => {
//   // Destruir as nossas libs
//   // Eventos
//   // Listeners
//   console.log('beforeUnmount');
//   console.log('Estado:', size.value);
//   console.log('DOM:', root.value);
//   window.removeEventListener('resize', resize);
//   console.log('----------------------------------------------------');
// });

// onUnmounted(() => {
//   console.log('unmounted');
//   console.log('Estado:', size.value);
//   console.log('DOM:', root.value);
//   console.log('----------------------------------------------------');
// });

</script>

<template>
  <header class="header" ref="root">{{ size }}</header>
</template>

<style scoped>
.header {
  background: #000;
  color: #fff;
}
</style>
