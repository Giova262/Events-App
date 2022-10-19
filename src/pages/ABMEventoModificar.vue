<template>
  <q-page>
    <div class="row">
      <div class="col-12 text-center q-py-sm">Modificar Evento</div>

      <div class="fit q-my-md">
        <ModificarEvento />
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import CrearEvento from 'src/components/ABM/Evento/CrearEvento'
import EliminarEvento from 'src/components/ABM/Evento/EliminarEvento'
import ModificarEvento from 'src/components/ABM/Evento/ModificarEvento'

export default defineComponent({
  name: 'PageIndex',
  components: {
    CrearEvento,
    EliminarEvento,
    ModificarEvento,
  },
  setup() {
    const $q = useQuasar()
    const router = useRouter()

    const verComponente = ref('CREAR')

    return {
      verComponente,
    }
  },
})
</script>
