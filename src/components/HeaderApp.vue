<template>
  <header class="header">{{ size }}</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderApp',
  data() {
    return {
      size: `${window.innerWidth} x ${window.innerHeight}`,
    };
  },
  // Criação
  //    Preparar o componente
  //    Ajax, inicializar algumas variáveis
  //    Não tem acesso ao template (DOM)
  // Montagem
  //    Inicializar um lib externa (new Lib())
  //    Precisa de acesso ao template (DOM)
  //    Tem acesso ao template (DOM)
  // Atualização
  //    Debug
  //    Update
  // Desmontagem
  //    Remover tudo o que for ncessário (lib->destroy())
  //    para liberar memória

  beforeUpdate() {
    console.log('beforeUpdate', this.size);
  },
  updated() {
    console.log('updated', this.size);
  },
  beforeCreate() {
    console.log('beforeCreate');
    console.log('Estado:', this.size);
    console.log('DOM:', this.$el);
  },
  created() {
    console.log('created');
    console.log('Estado:', this.size);
    console.log('DOM:', this.$el);
  },
  beforeMount() {
    console.log('beforeMount');
    console.log('Estado:', this.size);
    console.log('DOM:', this.$el);
  },
  mounted() {
    console.log('mounted');
    console.log('Estado:', this.size);
    console.log('DOM:', this.$el);
    window.addEventListener('resize', this.resize);
  },
  beforeUnmount() {
    // Destruir as nossas libs
    // Eventos
    // Listeners
    console.log('beforeUnmount');
    window.removeEventListener('resize', this.resize);
  },
  unmounted() {
    console.log('unmounted');
  },
  methods: {
    resize($evt: Event) {
      console.log($evt);
      this.size = `${window.innerWidth} x ${window.innerHeight}`;
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
