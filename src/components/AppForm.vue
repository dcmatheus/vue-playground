<template>
  <form @submit.prevent="submit">
    <h1>Assine nossa newsletter e acompanhe as últimas notícias da NBA</h1>
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
    <div ref="teste">
      <input
        v-model="array"
        type="checkbox"
        @click.middle="events('teste', $event)"
        value="blue"
      >
      Azul
      <input v-model="array" type="checkbox" value="red">Vermelho
      <input v-model="array" type="checkbox" value="green">Verde
      <p
        @copy="emptyArray"
      >
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
        <option
          v-for="{ simpleName } in franchises"
          :key="simpleName"
          :value="simpleName"
        >
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

<script lang="ts">
import { defineComponent } from 'vue';
import franchises from '../utils/franchises.json';

export default defineComponent({
  name: 'AppForm',
  data() {
    return {
      email: '',
      name: '',
      accompaniesNBA: '',
      franchises,
      franchise: '',
      terms: false,
      array: [],
      teste: this.$refs.teste as ((payload: FocusEvent) => void),
    };
  },
  methods: {
    submit($evt: Event) {
      this.empty();
      console.log(
        this.email,
        this.name,
        this.accompaniesNBA,
        this.franchise,
        this.terms,
        this.array,
        $evt,
      );
    },
    empty() {
      this.email = '';
      this.name = '';
      this.accompaniesNBA = '';
      this.franchise = '';
      this.terms = false;
      this.array = [];
    },
    emptyArray() {
      this.array = [];
    },
    events(teste: string, $evt: Event) {
      console.log(teste, $evt);
    },
  },
});
</script>
