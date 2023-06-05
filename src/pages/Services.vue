<template>
  <q-page class="wrapper q-pa-md">
    <q-tabs v-model="tab" dense style="color: #395875">
      <q-tab name="menuiserie" label="Menuiserie" />
      <q-tab name="cuisine" label="Cuisine" />
      <q-tab name="sur mesure" label="Sur mesure" />
    </q-tabs>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
let tab = ref("menuiserie");
</script>
