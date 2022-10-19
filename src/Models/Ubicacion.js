import { Loading, Notify, SessionStorage, LocalStorage } from 'quasar'
import {
  notificarError,
  notificarExito,
} from 'src/Services/NotificacionesService'
import { isEmpty, isCorrectFormatDB } from 'src/Services/ValidacionesService'
import UbicacionAPIService from 'src/components/ABM/Ubicacion/UbicacionAPIService'

class Ubicacion {
  constructor() {
    this.id = null
    this.continente = null
    this.pais = ''
    this.provincia = ''
    this.direccion = ''
    this.lat = 0
    this.lng = 0
    this.otro = ''
  }

  fakeData() {
    this.continente = 'continente Ubicacion'
    this.pais = 'pais Ubicacion'
    this.provincia = 'provincia Ubicacion'
    this.direccion = 'direccion Ubicacion'
    this.lat = 54.00
    this.lng = -34.00
    this.otro = 'otro Ubicacion'
  }

  /** Metodos */
  validacionParaCrear() {
    if (isEmpty(this.continente) || !isCorrectFormatDB(this.continente, 200)) {
      notificarError(`El Continente es un dato requerido`)
      return false
    }
    if (isEmpty(this.pais) || !isCorrectFormatDB(this.pais, 200)) {
      notificarError(`El Pais es un dato requerido`)
      return false
    }
    return true
  }

  getPayload() {
    return {
      continente: this.continente,
      pais: this.pais,
      provincia: this.provincia,
      direccion: this.direccion,
      lat: this.lat,
      lng: this.lng,
      otro: this.otro,
      id: this.id,
    }
  }

  async crear() {
    return await UbicacionAPIService.store(this.getPayload())
  }

  async editar() {
    if (!this.id) return null;
    return await UbicacionAPIService.update(this.getPayload(), this.id)
  }

  cargarDatos(data) {
    this.id = data.id
    this.continente = data.continente
    this.pais = data.pais
    this.provincia = data.provincia
    this.direccion = data.direccion
    this.lat = data.lat
    this.lng = data.lng
    this.otro = data.otro
  }
}

export default Ubicacion
