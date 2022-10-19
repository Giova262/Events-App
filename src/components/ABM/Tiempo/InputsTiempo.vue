<style lang="sass" scoped>
.my-input
  max-width: 250px
</style>

<template>
  <div class="">
    <div v-if="isReady" class="row q-gutter-y-sm bg-white q-pa-md">
      <div class="col-12">
        <span class="q-mr-sm">Datos Cronologicos</span>
        <q-icon
          v-if="verMas"
          name="minimize"
          size="xs"
          class=""
          @click="verMas = false"
        />
        <q-icon v-else name="add" size="xs" class="" @click="verMas = true" />
      </div>

      <q-input
        v-if="verMas"
        dense
        clearable
        :disable="modoVista"
        v-model="tiempo.nombre"
        label="Nombre"
        class="col-6 q-px-sm "
        type="text"
        maxlength="200"
        hint="Nombre identificador"
        hide-bottom-space
      />
      <q-input
        filled
        dense
        clearable
        :disable="modoVista"
        v-model="tiempo.day"
        label="Dia"
        class="col-2 q-mx-sm"
        type="number"
        maxlength="200"
        hint="Ej: 26"
        hide-bottom-space
      />
      <q-input
        filled
        dense
        clearable
        :disable="modoVista"
        v-model="tiempo.month"
        label="Mes"
        class="col-2 q-pr-sm"
        type="number"
        maxlength="200"
        hint="Ej: 07"
        hide-bottom-space
      />
      <q-input
        filled
        dense
        clearable
        :disable="modoVista"
        v-model="tiempo.year"
        label="Año"
        class="col-2 q-pr-sm"
        type="number"
        maxlength="200"
        hint="Ej: 2022"
        hide-bottom-space
      />
  
      <q-input
        v-if="verMas"
        dense
        clearable
        :disable="modoVista"
        v-model="tiempo.hour"
        label="Hora"
        class="col-2 q-pr-sm"
        type="number"
        maxlength="50"
        hint="Ej: 26"
        hide-bottom-space
      />
      <q-input
        v-if="verMas"
        dense
        clearable
        :disable="modoVista"
        v-model="tiempo.minute"
        label="Minuto"
        class="col-2 q-pr-sm"
        type="number"
        maxlength="50"
        hint="Ej: 26"
        hide-bottom-space
      />
      <q-input
        v-if="verMas"
        dense
        clearable
        :disable="modoVista"
        v-model="tiempo.second"
        label="Segundo"
        class="col-2 q-pr-sm"
        type="number"
        maxlength="50"
        hint="Ej: 26"
        hide-bottom-space
      />
      <q-input
        v-if="verMas"
        dense
        clearable
        :disable="modoVista"
        v-model="tiempo.duracion"
        label="Duracion"
        class="col-2 q-pr-sm"
        type="number"
        maxlength="50"
        hint="Ej: 100"
        hide-bottom-space
      />
      <q-input
        v-if="verMas"
        dense
        clearable
        :disable="modoVista"
        v-model="tiempo.duracion_tipo"
        label="Tipo de la Duracion"
        class="col-2"
        type="text"
        maxlength="50"
        hint="Ej: Años, Meses, Dias, etc.."
        hide-bottom-space
      />
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { defineComponent, ref, onMounted } from 'vue'
import Tiempo from 'src/Models/Tiempo'

export default defineComponent({
  name: 'EventoCrearAbm',
  components: {
    // ..,
  },
  props: {
    tiempo: {
      type: Tiempo,
      required: false,
    },
    modoVista: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  setup({ tiempo }) {
    const $q = useQuasar()
    const isReady = ref(false)
    const verMas = ref(false)

    function onResetClick() {
      tiempo = new Tiempo()
    }

    function onGrabarClick() {
      if (tiempo.validacionParaCrear()) {
        tiempo.crear()
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
