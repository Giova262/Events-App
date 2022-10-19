import { Loading, Notify, SessionStorage, LocalStorage } from 'quasar'
import {
  notificarError,
  notificarExito,
} from 'src/Services/NotificacionesService'
import { isEmpty, isCorrectFormatDB } from 'src/Services/ValidacionesService'
import TiempoAPIService from 'src/components/ABM/Tiempo/TiempoAPIService'

class Tiempo {
  constructor() {
    this.id = ''
    this.year = ''
    this.month = ''
    this.day = ''
    this.hour = '00'
    this.minute = '00'
    this.second = '00'
    this.duracion = ''
    this.duracion_tipo = ''
    this.nombre = ''
  }

  fakeData() {
    this.year = '1600'
    this.month = '02'
    this.day = '12'
    this.hour = '10'
    this.minute = '05'
    this.second = '10'
    this.duracion = '15'
    this.duracion_tipo = 'Dias'
    this.nombre = 'nombre Tiempo'
  }

  /** Metodos */
  validacionParaCrear() {
    if (isEmpty(this.year) || !isCorrectFormatDB(this.year, 50)) {
      notificarError(`El Año es un dato requerido`)
      return false
    }
    if (isEmpty(this.month) || !isCorrectFormatDB(this.month, 50)) {
      notificarError(`El Mes es un dato requerido`)
      return false
    }
    if (isEmpty(this.day) || !isCorrectFormatDB(this.day, 50)) {
      notificarError(`El Dia es un dato requerido`)
      return false
    }

    return true
  }

  getPayload() {
    return {
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      duracion: this.duracion,
      duracion_tipo: this.duracion_tipo,
      nombre: this.nombre,
      id: this.id,
    }
  }

  async crear() {
    return await TiempoAPIService.store(this.getPayload())
  }

  async editar() {
    if (!this.id) return null;
    return await TiempoAPIService.update(this.getPayload(), this.id)
  }

  cargarDatos(data) {
    this.year = data.year
    this.month = data.month
    this.day = data.day
    this.hour = data.hour
    this.minute = data.minute
    this.second = data.second
    this.duracion = data.duracion
    this.duracion_tipo = data.duracion_tipo
    this.nombre = data.nombre
    this.id = data.id
  }
}

export default Tiempo
