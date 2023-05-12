<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal :reveal-offset="100" elevated class="bg-white text-brand">
      <q-toolbar class="justify-between q-pa-md">
        <q-btn
          flat
          dense
          round
          class="lt-sm q-mx-sm"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <div class="q-pa-xs q-px-lg">
          <q-img
            style="max-width: 150px; min-width: 100px"
            src="GSLR_3_b.svg"
            fit="contain"
          ></q-img>
        </div>
        <div class="gt-xs q-gutter-x-lg q-px-md">
          <div
            style="
              font-size: 1.8em;
              font-weight: 500;
              letter-spacing: 0;
              font-family: 'Inconsolata';
            "
            class="gt-xs column inline"
          >
            GSLR Agencements
          </div>
          <div
            class="gt-sm column inline text-uppercase text-weight-light"
            style="font-size: 1em"
          >
            Menuiserie    —    Agencements    —    Pose de cuisine    —    Sur
            mesure
          </div>
        </div>
        <div
          class="gt-xs column q-gutter-y-sm justify-evenly text-grey"
          style="font-size: 0.6em"
        >
          <div style="display: inline-block; white-space: nowrap">
            <q-icon name="phone" />  +41 00 000 00 00
          </div>
          <div style="display: inline-block; white-space: nowrap">
            <q-icon name="mail" />  contact@gslr.ch
          </div>
        </div>
        <div class="lt-sm" style="width: 50px"></div>
      </q-toolbar>

      <q-tabs
        v-model="tab"
        no-caps
        dense
        align="justify"
        class="gt-xs bg-brand text-white"
        style="font-size: 10px"
      >
        <q-route-tab
          v-for="route in routesList"
          :key="route.title"
          :name="route.title"
          exact
          :to="route.to"
        >
          <span class="gt-sm" style="font-size: 0.9em">{{ route.title }}</span>
          <span class="lt-md text-uppercase" style="font-size: 0.9em">{{
            route.title
          }}</span>
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
