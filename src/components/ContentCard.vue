<script setup lang="ts">
import { useSlots } from 'vue';

const slots = useSlots();
const defaultSlot = slots.default;
const titleSlot = slots.title;
const subtitleSlot = slots.subtitle;

</script>

<template>
  <div>
    <div>
    <h2 v-if="titleSlot">
      <slot name="title" />
    </h2>
    <h3 v-if="subtitleSlot">
      <slot name="subtitle" />
    </h3>
    </div>
    <div v-if="defaultSlot">
      <p><slot /></p>
    </div>
  </div>
</template>

<style scoped>

</style>
