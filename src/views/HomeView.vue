<script lang="ts" setup>
import { ref } from 'vue';
import AppForm from '@/components/AppForm.vue';
import TodoList from '@/components/TodoList.vue';
import HeaderApp from '@/components/HeaderApp.vue';
import UserComponent from '@/components/UserComponent.vue';
import ContentCard from '@/components/ContentCard.vue';
import BaseAlert from '@/components/BaseAlert.vue';

const showHeader = ref(true);
const showAlert = ref(true);

function CloseAlert() { showAlert.value = false; }
</script>

<template>
  <div>
    <HeaderApp v-if="showHeader" />
    <button @click="showHeader = !showHeader">Ativar e desativar header</button>
    <UserComponent />
    <TodoList />
    <AppForm />
    <ContentCard>
      <template v-slot:title>Title</template>
      <template v-slot:subtitle>subtitle</template>
      Content
    </ContentCard>
    <BaseAlert v-if="showAlert" @close="CloseAlert" variant="success" />
  </div>
</template>
