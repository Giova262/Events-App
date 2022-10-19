import { Loading, Notify, SessionStorage, LocalStorage } from "quasar";
import {
  notificarError,
  notificarExito,
} from "src/Services/NotificacionesService";
import { isEmpty, isCorrectFormatDB } from "src/Services/ValidacionesService";
import PersonaAPIService from "src/components/ABM/Persona/PersonaAPIService";

class Persona {
  constructor() {
    this.id = null;
    this.nombre = "";
    this.apellido = "";
    this.sexo = "";
    this.edad = 0;
    this.nacionalidad = "";
    this.documento = "";
    this.madre_id = 0;
    this.padre_id = 0;
    this.profesion = "";
    this.religion = "";
    this.orientacion = "";
    this.fecha_nacimiento = "";
    this.fecha_muerte = "";
    this.personaSelecionada = {};
  }

  fakeData() {
    this.nombre = "nombre Persona";
    this.apellido = "apellido Persona";
    this.sexo = "M";
    this.edad = 15;
    this.nacionalidad = "nacionalidad Persona";
    this.documento = "documento Persona";
    this.madre_id = 0;
    this.padre_id = 0;
    this.profesion = "profesion Persona";
    this.religion = "religion Persona";
    this.orientacion = "orientacion Persona";
    this.fecha_nacimiento = "15/02/1500";
    this.fecha_muerte = "15/02/1510";
  }

  /** Metodos */
  validacionParaCrear() {
    if (isEmpty(this.nombre) || !isCorrectFormatDB(this.nombre, 200)) {
      notificarError(`El Nombre de la Persona es un dato requerido`);
      return false;
    }
    return true;
  }

  getPayload() {
    return {
      id: this.id,
      nombre: this.nombre,
      apellido: this.apellido,
      sexo: this.sexo,
      edad: this.edad,
      nacionalidad: this.nacionalidad,
      documento: this.documento,
      madre_id: this.madre_id,
      padre_id: this.padre_id,
      profesion: this.profesion,
      religion: this.religion,
      orientacion: this.orientacion,
      fecha_nacimiento: this.fecha_nacimiento,
      fecha_muerte: this.fecha_muerte,
    };
  }

  reset(){
    this.id = null;
    this.nombre = "";
    this.apellido = "";
    this.sexo = "";
    this.edad = 0;
    this.nacionalidad = "";
    this.documento = "";
    this.madre_id = 0;
    this.padre_id = 0;
    this.profesion = "";
    this.religion = "";
    this.orientacion = "";
    this.fecha_nacimiento = "";
    this.fecha_muerte = "";
    this.personaSelecionada = {};
  }

  async crear() {
    if (this.id) {
      return { data: { data: { id: this.id } } };
    }
    return await PersonaAPIService.store(this.getPayload());
  }

  async updateVinculo() {
    
  }

  async editar() {
    if (!this.id) {
      this.crear();
      return null;
    }
    return await PersonaAPIService.update(this.getPayload(), this.id);
  }

  cargarDatos(data) {
    console.log('cargarDatos');
    console.log(data);
    this.id = data.id;
    this.nombre = data.nombre;
    this.apellido = data.apellido;
    this.sexo = data.sexo;
    this.edad = data.edad;
    this.nacionalidad = data.nacionalidad;
    this.documento = data.documento;
    this.madre_id = data.madre_id;
    this.padre_id = data.padre_id;
    this.profesion = data.profesion;
    this.religion = data.religion;
    this.orientacion = data.orientacion;
    this.fecha_nacimiento = data.fecha_nacimiento;
    this.fecha_muerte = data.fecha_muerte;
  }
}

export default Persona;
