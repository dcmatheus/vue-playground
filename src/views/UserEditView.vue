<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
console.log(route.params.id);

const router = useRouter();

function redirectToAbout() {
  router.push('/about');
}

</script>
<template>
  <div>Usuário</div>
  <pre>
    {{ $route }}
  </pre>
  <button @click="redirectToAbout">about</button>
</template>
