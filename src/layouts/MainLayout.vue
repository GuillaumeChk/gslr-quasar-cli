<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal :reveal-offset="100" elevated class="bg-white text-brand">
      <q-toolbar class="q-pa-xl justify-between">
        <q-btn
          flat
          dense
          round
          class="lt-sm"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <div class="column q-pr-xl justify-center">
          <q-img
            style="max-width: 150px; min-width: 100px"
            src="GSLR_3_b.svg"
            fit="contain"
          ></q-img>
        </div>
        <div class="column gt-xs text-center">
          <span
            style="font-size: 2.5em; white-space: break-spaces"
            class="text-weight-normal"
            >GSLR Agencements</span
          >
          <span class="wrap text-weight-light" style="font-size: 1.3em">
            Menuiserie    —    Agencements    —    Pose de cuisine    —    Sur
            mesure
          </span>
        </div>
        <div
          class="column q-gutter-y-sm justify-evenly gt-sm text-grey"
          style="font-size: 0.8em"
        >
          <span>2000  Neuchâtel</span>
          <span>Tél: +41 XX XXX XX XX</span>
          <span>Email: contact@gslr.ch</span>
        </div>
        <div class="lt-sm"></div>
      </q-toolbar>

      <q-tabs
        v-model="tab"
        no-caps
        dense
        align="justify"
        class="gt-xs bg-brand text-white"
      >
        <q-route-tab
          v-for="route in routesList"
          :key="route.title"
          :name="route.title"
          exact
          :to="route.to"
        >
          <span class="gt-sm biggerText text-uppercase">{{ route.title }}</span>
          <span class="lt-md text-uppercase">{{ route.title }}</span>
        </q-route-tab>
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" elevated class="col items-center">
      <div class="row justify-center">
        <q-btn
          flat
          rounded
          size="xl"
          class="q-ma-lg text-brand"
          @click="toggleLeftDrawer"
        >
          <q-icon name="close" size="lg" class="textSize" />
        </q-btn>
      </div>
      <q-list class="q-gutter-y-sm text-brand">
        <q-item
          v-for="route in routesList"
          clickable
          tag="to"
          :key="route.to"
          :to="route.to"
          :active="false"
          class="items-center"
        >
          <q-item-section v-if="route.icon" avatar>
            <q-icon :name="route.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ route.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="wrapper q-px-md q-pb-xl">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
// import EssentialLink from "components/EssentialLink.vue";

let tab = ref("unique");

const routesList = [
  {
    title: "Entreprise",
    icon: "apartment",
    to: "/",
  },
  {
    title: "Prestations",
    icon: "design_services",
    to: "/prestations",
  },
  {
    title: "Actualités",
    icon: "newspaper",
    to: "/actualites",
  },
  {
    title: "Contact",
    icon: "contact_page",
    to: "contact",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style>
.biggerText {
  font-size: 1em;
}
</style>
