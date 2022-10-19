import { Loading, Notify, SessionStorage, LocalStorage } from 'quasar'

class Multimedia {
  constructor() {
    this.dni = ''
    this.sexo = ''
    this.nombre = 'Nombre'
    this.email = ''
    this.apellido = 'Apellido'
    this.telefono = ''
    this.codigoTelefono = ''
    this.numPerson = 0
  }

  async init() {
    // ..
  }

  setDni(dni) {
    this.dni = dni;
  }
  setSexo(sexo) {
    this.sexo = sexo;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  setEmail(email) {
    this.email = email;
  }
  setApellido(apellido) {
    this.apellido = apellido;
  }
  setTelefono(telefono) {
    this.telefono = telefono;
  }
  setCodigoTelefono(codigoTelefono) {
    this.codigoTelefono = codigoTelefono;
  }
  setNumPerson(num) {
    this.numPerson = num;
  }

  guardarLocalStorage() {
    const persona = {
      dni: this.dni,
      sexo: this.sexo,
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      codigoTelefono: this.codigoTelefono,
      telefono: this.telefono,
      numPerson: this.numPerson,
    }
    LocalStorage.set('BPSPerson', persona)
    console.log('Guardando datos localmente..');
  }

  cargarDatosLocalStorage() {
    let datos = {
      dni: '',
      sexo: '',
      nombre: '',
      apellido: '',
      email: '',
      codigoTelefono: '',
      telefono: '',
      numPerson: 0,
    };

    datos = LocalStorage.getItem("BPSPerson");
    console.log('Recuperando datos localmente..');

    this.dni = datos.dni || ''
    this.sexo = datos.sexo || ''
    this.nombre = datos.nombre || ''
    this.apellido = datos.apellido || ''
    this.email = datos.email || ''
    this.telefono = datos.telefono || ''
    this.codigoTelefono = datos.codigoTelefono || ''
    this.numPerson = datos.numPerson || 0

    console.log('Datos recuperados!');
  }

}

export default Multimedia
