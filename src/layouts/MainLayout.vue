<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="wrapper">
        <q-btn
          flat
          dense
          round
          class="lt-sm"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-img
          class="q-ma-md"
          style="max-width: 200px; min-width: 50px"
          src="../assets/quasar-logo-vertical.svg"
          fit="contain"
        ></q-img>
        <q-toolbar-title>
          <h3>GSLR Agencements</h3>
          <p>Menuiserie — Agencements — Pose de cuisine — Sur mesure…</p>
        </q-toolbar-title>
        <div class="column justify-center">
          <p>2000  Neuchâtel</p>
          <p>TÉL. +41 XX XXX XX XX</p>
          <p>Email contact@gslr.ch</p>
        </div>
      </q-toolbar>

      <q-tabs
        v-model="tab"
        no-caps
        align="justify"
        class="gt-xs text-white wrapper"
      >
        <q-route-tab
          v-for="route in routesList"
          :key="route.title"
          :name="route.title"
          exact
          :to="route.to"
        >
          <span class="gt-sm biggerText">{{ route.title }}</span>
          <span class="lt-md">{{ route.title }}</span>
        </q-route-tab>
        <!-- <q-route-tab name="unique" exact to="/prestations">
          <span class="gt-sm biggerText">Unique</span>
          <span class="lt-md">Unique</span>
        </q-route-tab>
        <q-route-tab name="loisirs" exact to="/loisirs">
          <span class="gt-sm biggerText">Loisirs</span>
          <span class="lt-md">Loisirs</span>
        </q-route-tab>
        <q-route-tab name="plaisirs" exact to="/plaisirs">
          <span class="gt-sm biggerText">Plaisirs</span>
          <span class="lt-md">Plaisirs</span>
        </q-route-tab>
        <q-route-tab name="autour" exact to="/autour">
          <span class="gt-sm biggerText">Autour</span>
          <span class="lt-md">Autour</span>
        </q-route-tab> -->
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item
          v-for="route in routesList"
          clickable
          tag="to"
          :key="route.to"
          :to="route.to"
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

    <q-page-container>
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
  font-size: 20px;
}
</style>
