<style lang="sass" scoped>
.my-input
  max-width: 250px
</style>

<template>
  <div class="">
    <div v-if="isReady" class="row q-gutter-y-sm bg-white q-pa-md">
      <div class="col-12">
        <span class="q-mr-sm">Datos Geograficos</span>
        <q-icon
          v-if="verMas"
          name="minimize"
          size="xs"
          class=""
          @click="verMas = false"
        />
        <q-icon v-else name="add" size="xs" class="" @click="verMas = true" />
      </div>

      <q-select
        v-model="ubicacion.continente"
        :options="['America Sur', 'America Central', 'America Norte', 'Asia', 'Africa', 'Antartida', 'Europa', 'Oceania']"
        label="Continente"
        :disable="modoVista"
        virtual-scroll-slice-size="60"
        clearable
        filled dense
        class="col-6 q-pr-sm"
        options-selected-class="text-deep-orange"
      >
      </q-select>

      <q-input
        filled
        dense
        clearable
        :disable="modoVista"
        v-model="ubicacion.pais"
        label="Pais"
        class="col-6 q-pr-sm"
        type="text"
        maxlength="200"
        hint="Ej: China"
        hide-bottom-space
      />
      <q-input
        v-if="verMas"
        dense
        clearable
        :disable="modoVista"
        v-model="ubicacion.provincia"
        label="Provincia"
        class="col-6 q-pr-sm"
        type="text"
        maxlength="200"
        hint="Ej: Berlin"
        hide-bottom-space
      />
      <q-input
        v-if="verMas"
        dense
        clearable
        :disable="modoVista"
        v-model="ubicacion.direccion"
        label="Direccion"
        class="col-6 q-pr-sm"
        type="text"
        maxlength="200"
        hint="Ej: Calle falsa 123"
        hide-bottom-space
      />
      <q-input
        v-if="verMas"
        dense
        clearable
        :disable="modoVista"
        v-model="ubicacion.lat"
        label="Latitud"
        class="col-6 q-pr-sm"
        type="text"
        maxlength="200"
        hint="Ej: 54.000"
        hide-bottom-space
      />
      <q-input
        v-if="verMas"
        dense
        clearable
        :disable="modoVista"
        v-model="ubicacion.lng"
        label="Longitud"
        class="col-6 q-pr-sm"
        type="text"
        maxlength="200"
        hint="Ej: -34.00"
        hide-bottom-space
      />
      <q-input
        v-if="verMas"
        dense
        clearable
        :disable="modoVista"
        v-model="ubicacion.otro"
        label="Otro"
        class="col-6 q-pr-sm"
        type="text"
        maxlength="200"
        hint="Ej: Planeta Marte"
        hide-bottom-space
      />
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { defineComponent, ref, onMounted } from 'vue'
import Ubicacion from 'src/Models/Ubicacion'

export default defineComponent({
  name: 'EventoCrearAbm',
  components: {
    // ..,
  },
  props: {
    ubicacion: {
      type: Ubicacion,
      required: false,
    },
    modoVista: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  setup({ ubicacion }) {
    const $q = useQuasar()
    const isReady = ref(false)
    const verMas = ref(false)

    function onResetClick() {
      ubicacion = new Ubicacion()
    }

    function onGrabarClick() {
      if (ubicacion.validacionParaCrear()) {
        ubicacion.crear()
      }
    }

    onMounted(async () => {
      isReady.value = true
    })

    return {
      isReady,
      verMas,
      onResetClick,
      onGrabarClick,
    }
  },
})
</script>
