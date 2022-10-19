<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-10 text-white shadow-2">
        <q-btn stretch flat label="Ver Eventos" to="/evento/ver"/>
        <q-separator dark vertical inset />
        <q-space />
        <q-separator dark vertical />
        <q-btn stretch flat class="text-grey-3" label="Nuevo Evento" to="/evento/crear"/>
        <q-separator dark vertical />
        <q-btn stretch flat class="text-grey-3" label="Modificar Evento" to="/evento/modificar"/>
        <q-separator dark vertical />
        <q-btn stretch flat class="text-grey-3" label="Eliminar Evento" to="/evento/eliminar"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view class=""/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    // ..
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  }
});
</script>
