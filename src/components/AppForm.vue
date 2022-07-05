<template>
  <form>
    <h1>Acompanhe as últimas notícias da NBA</h1>
    <label for="name">
      Nome
      <input type="text" v-model="name" class="form-control" id="name" placeholder="Nome"/>
    </label>
    <p>{{ name }}</p>
    <label for="email">
      E-mail
      <input type="email" v-model="email" class="form-control" id="email" placeholder="E-mail"/>
    </label>
    <p>{{ email }}</p>
    <div>
      <h3>Acompanha NBA?</h3>
      <label for="yes">
        <input type="radio" v-model="like" value="Sim" id="yes" />
        Sim
      </label>
      <label for="no">
        <input type="radio" v-model="like" value="Não" id="no" />
        Não
      </label>
    </div>
    <div v-if="like === 'Sim'">
      <h4>Para qual franquia você torce?</h4>
      <select>
        <option>Selecione</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
  </form>
</template>

<script lang="ts">
import franchises from '../utils/franchises.json';

export default {
  name: 'AppForm',
  data() {
    return {
      email: '',
      name: '',
      like: '',
      franchises,
    };
  },
};
</script>
