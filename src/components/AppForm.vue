<script setup lang="ts">
import { ref } from 'vue';
import franchisesJson from '../utils/franchises.json';

const email = ref('');
const name = ref('');
const accompaniesNBA = ref('');
const franchise = ref('');
const franchises = ref(franchisesJson);
const terms = ref(false);
const array = ref([]);

function empty() {
  email.value = '';
  name.value = '';
  accompaniesNBA.value = '';
  franchise.value = '';
  terms.value = false;
  array.value = [];
}

function submit($evt: Event) {
  empty();
  console.log(
    email.value,
    name.value,
    accompaniesNBA.value,
    franchise.value,
    terms.value,
    array.value,
    $evt,
  );
}

function emptyArray() {
  array.value = [];
}

function events(teste: string, $evt: Event) {
  console.log(teste, $evt);
}
</script>

<template>
  <form @submit.prevent="submit">
    <h1>Assine nossa newsletter e acompanhe as últimas notícias da NBA</h1>
    <label for="name">
      Nome
      <input type="text" v-model="name" class="form-control" id="name" placeholder="Nome" />
    </label>
    <p>{{ name }}</p>
    <label for="email">
      E-mail
      <input type="email" v-model="email" class="form-control" id="email" placeholder="E-mail" />
    </label>
    <p>{{ email }}</p>
    <div>
      <input v-model="array" type="checkbox" @click.middle="events('teste', $event)" value="blue" />
      Azul
      <input v-model="array" type="checkbox" value="red" />Vermelho
      <input v-model="array" type="checkbox" value="green" />Verde
      <p @copy="emptyArray">
        {{ array }}
      </p>
    </div>
    <div>
      <h3>Acompanha NBA?</h3>
      <label for="yes">
        <input type="radio" v-model="accompaniesNBA" value="Sim" id="yes" />
        Sim
      </label>
      <label for="no">
        <input type="radio" v-model="accompaniesNBA" value="Não" id="no" />
        Não
      </label>
    </div>
    <div v-if="accompaniesNBA === 'Sim'">
      <h4>Para qual franquia você torce?</h4>
      <select v-model="franchise">
        <option v-for="{ simpleName } in franchises" :key="simpleName" :value="simpleName">
          {{ simpleName }}
        </option>
      </select>
      {{ franchise }}
    </div>
    <label for="terms" v-if="franchise">
      <input type="checkbox" v-model="terms" id="terms" />
      Li e concordo com os termos do contrato.
    </label>
    <button v-if="terms" type="submit">Assinar</button>
  </form>
</template>
