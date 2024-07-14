export class Aceite {
    referencia: string;
  
    constructor(referencia: string = "") {
      this.referencia = referencia;
    }
  }
  
  export class Filtro {
    referencia: string;
  
    constructor(referencia: string = "") {
      this.referencia = referencia;
    }
  }
  
  export class Mantenimiento {
    _id: string; // Sub guión id porque los datos van a venir de MongoDB
    vehiculo: string;
    fecha: Date;
    kilometraje: number;
    cantidadAceite: number;
    aceiteUtilizado: Aceite;
    filtroAceite: Filtro;
    filtroAire: Filtro;
    tecnico: {
      nombre: string;
      numeroId: string;
    };
  
    constructor(
      _id: string = "",
      vehiculo: string = "",
      fecha: Date = new Date(),
      kilometraje: number = 0,
      cantidadAceite: number = 0,
      aceiteUtilizado: Aceite = new Aceite(),
      filtroAceite: Filtro = new Filtro(),
      filtroAire: Filtro = new Filtro(),
      tecnico: { nombre: string; numeroId: string } = { nombre: "", numeroId: "" }
    ) {
      this._id = _id;
      this.vehiculo = vehiculo;
      this.fecha = fecha;
      this.kilometraje = kilometraje;
      this.cantidadAceite = cantidadAceite;
      this.aceiteUtilizado = aceiteUtilizado;
      this.filtroAceite = filtroAceite;
      this.filtroAire = filtroAire;
      this.tecnico = tecnico;
    }
  }
  