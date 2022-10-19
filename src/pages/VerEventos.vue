<style lang="sass" scoped>
.my-card
  width: 360px
</style>

<style>
.container {
  overflow: hidden;
}
.sliding-background {
  /*background: url("../static/Escena1.jpg");*/
  animation: bgScroll 10s linear infinite;
  background-image: url("../static/Escena1.jpg");
  background-repeat: repeat;
  position: absolute;
  height: 100%;
  width: 99vw;
}

@keyframes bgScroll {
  0% {
    background-position : 0px 0px
  }
  100% {
    background-position : 0px -808px
  }
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-500px, 0, 0); /* The image width */
  }
}
</style>

<template>
  <q-page class="">

    <div class="row bg-black flex flex-center text-white">

      <div class="col-12 bg-black">
        <div class="sliding-background"></div>
      </div>

      <div class="col-12 row">
        <div class="col-2 q-mx-md q-my-sm">
          <q-input
            dark
            color="orange"
            filled
            dense
            clearable
            v-model="personaSelected.nombre"
            label="Filtrar por persona"
          >
            <q-popup-edit v-model="personaSelected" auto-save v-slot="scope">
              <q-input
                v-model="buscarPersonaInput"
                dense
                autofocus
                counter
                clearable
                @keyup.enter="scope.set"
              />
              <q-virtual-scroll
                style="max-height: 300px"
                :items="opcionesPersonasComputed"
                separator
                v-slot="{ item, index }"
              >
                <q-item :key="index" dense>
                  <q-item-section
                    @click="() => onPersonaClick(item)"
                    v-close-popup
                  >
                    <q-item-label class="text-grey-9">
                      {{ item.nombre }}
                    </q-item-label>
                    <q-item-label class="text-grey-6">
                      {{ item.id }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-virtual-scroll>
            </q-popup-edit>
          </q-input>
        </div>

        <!-- <div class="col-2 q-mx-md q-my-sm">
          <q-select
              filled
              v-model="multiple"
              multiple
              :options="options"
              label="Multiple"
              style="width: 250px"
            />
        </div> -->

        <div class="col q-mx-md q-py-xs0">
          <q-btn
            flat
            filled
            color="green-5"
            @click="onCargarGrilla"
            round
            size="sm"
            icon="play_arrow"
            class="bg-white q-my-sm"
          >
            <q-tooltip>Cargar</q-tooltip>
          </q-btn>
        </div>
      </div>

      <div class="col-12 row">
        <q-virtual-scroll
          v-if="isReady"
          :items="eventos"
          :virtual-scroll-horizontal="true"
          v-slot="{ item, index }"
          class=" q-pt-md q-pb-xl bg-transparent "
          style="width: 100%; z-index: 9;"
        >
          <div :key="index" class="row items-center">
            <q-card
              class="my-card"
              flat
              bordered
              style="height: 78vh !important"
            >
              <div
                class="text-caption bg-grey-3 text-grey-9 text-center q-px-sm"
              >
                {{ item.nombrePersona }}
              </div>

              <div class="q-pa-sm q-ma-none ">
                <div class="text-green-9 text-bold jg-text-16 text-center">
                  {{ item.day }}/{{ item.month }}/{{ item.year }}
                </div>
                <div class="text-blue-9 jg-text-14">
                  {{ item.nombreEvento }}
                </div>
                <div class="text-caption text-grey-8 jg-text-12">
                  ({{ item.id }}) {{ item.titulo }}
                </div>
              </div>

              <q-img
                v-if="item.foto"
                :src="item.foto"
                loading
                fetchpriority
                :fit="'contain'"
                height="240px"
                class="bg-black"
              >
                <template v-slot:error>
                  <div
                    class="absolute-full flex flex-center bg-negative text-white"
                  >
                    Cannot load image
                  </div>
                </template>
              </q-img>
              <q-img v-else src="defecto.jpg" height="240px"/>

              <q-card-section
                class="text-grey-8 scroll jg-text-12 bg-grey-2"
                style="height: 240px !important"
              >
                {{ item.descripcion }}
              </q-card-section>

              <q-card-actions>
                <q-space />
                <q-btn
                  flat
                  color="dark"
                  label="Editar"
                  @click="() => onModificarClick(item)"
                  class="col-6 fit"
                />
              </q-card-actions>
            </q-card>

            <q-separator vertical spaced />
          </div>
        </q-virtual-scroll>

        <q-dialog v-model="abrirEditar">
          <ModificarEvento
            v-if="eventoSeleccionado"
            :idEvento="eventoSeleccionado.id"
            @onresetview="onresetview"
          />
        </q-dialog>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

import EventoApiService from "src/components/ABM/Evento/EventoAPIService";
import PersonaAPIService from "src/components/ABM/Persona/PersonaAPIService";
import ModificarEvento from "src/components/ABM/Evento/ModificarEvento";

export default defineComponent({
  name: "PageIndex",
  components: {
    ModificarEvento,
  },
  setup(props, { root, emit }) {
    const $q = useQuasar();
    const router = useRouter();

    const isReady = ref(false);
    const abrirEditar = ref(false);
    const eventos = ref([]);
    const opcionesFiltros = ref([]);
    const opcionesPersonas = ref([]);
    const eventoSeleccionado = ref(null);

    const personaSelected = ref({
      nombre: "Todos",
      id: -1,
    });
    const buscarPersonaInput = ref(null);

    const opcionesPersonasComputed = computed(() => {
      let listaFiltrada = opcionesPersonas.value;
      if (buscarPersonaInput.value) {
        listaFiltrada = listaFiltrada.filter((p) => {
          return p.nombre
            .toLowerCase()
            .includes(buscarPersonaInput.value.toLowerCase());
        });
      }
      return listaFiltrada;
    });

    function clearDatos() {
      eventos.value = [];
    }

    async function getEventos() {
      clearDatos();
      const respond = await EventoApiService.getEventosCompletos();
      if (respond) {
        respond.data.forEach((element) => {
          element.abrir = false;
          eventos.value.push(element);
        });
        sortEventos();
      }
    }

    function sortEventos() {
      eventos.value.sort((a,b) => { 
          if (Number(a.year) === Number(b.year)) {
              if (Number(a.month) === Number(b.month)) {
                  return (Number(a.day) < Number(b.day)) ? -1 : (Number(a.day) > Number(b.day)) ? 1 : 0;
              } else {
                  return (Number(a.month) < Number(b.month)) ? -1 : 1;
              }
          } else {
                return (Number(a.year) < Number(b.year)) ? -1 : 1;
          }
        })
    }

    async function getEventosByPersona(id_persona) {
      clearDatos();
      const respond = await EventoApiService.getEventosByPersona(id_persona);
      if (respond) {
        respond.data.forEach((element) => {
          element.abrir = false;
          eventos.value.push(element);
        });
        sortEventos();
      }
    }

    async function getPersonas() {
      const respond = await PersonaAPIService.getPersonas();
      if (respond) {
        opcionesPersonas.value = respond.data;
        opcionesPersonas.value.unshift({
          nombre: "Todos",
          id: -1,
        });
      }
    }

    function onModificarClick(evento) {
      eventoSeleccionado.value = evento;
      abrirEditar.value = true;
    }

    function onresetview() {
      console.log("onresetview");
    }

    function onPersonaClick(item) {
      personaSelected.value = { ...item };
    }

    async function onCargarGrilla() {
      isReady.value = false;
      if (personaSelected.value) {
        switch (personaSelected.value.nombre) {
          case "Todos":
            await getEventos();
            break;

          default:
            await getEventosByPersona(personaSelected.value.id);
            break;
        }
      }
      isReady.value = true;
    }

    onMounted(async () => {
      await getPersonas();
      // await onCargarGrilla();
      isReady.value = true;
    });

    return {
      onCargarGrilla,
      onPersonaClick,
      onresetview,
      onModificarClick,
      buscarPersonaInput,
      eventoSeleccionado,
      abrirEditar,
      eventos,
      isReady,
      expanded: ref(false),
      personaSelected,
      opcionesPersonas,
      opcionesPersonasComputed,
    };
  },
});
</script>
