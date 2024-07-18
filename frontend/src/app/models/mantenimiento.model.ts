export class Aceite {
  referencia: string;
  marca: string;
  cantidad: number;

  constructor(
    referencia: string = "",
    marca: string = "",
    cantidad: number = 0
  ) {
    this.referencia = referencia;
    this.marca = marca;
    this.cantidad = cantidad;
  }
}

export class Filtro {
  referencia: string;
  marca: string;

  constructor(
    referencia: string = "",
    marca: string = ""
  ) {
    this.referencia = referencia;
    this.marca = marca;
  }
}

export class Mantenimiento {
  _id: string;
  vehiculo: {
    placa: string;
    modelo: string;
    propietario: {
      nombre: string;
      numeroId: string;
    };
  };
  fecha: Date;
  kilometraje: number;
  aceitesUsados: Aceite[];
  filtroAceite: Filtro[];
  filtroAire: Filtro[];
  tecnico: {
    nombre: string;
    numeroId: string;
  };

  constructor(
    _id: string = "",
    vehiculo: {
      placa: string;
      modelo: string;
      propietario: {
        nombre: string;
        numeroId: string;
      };
    } = { placa: "", modelo: "", propietario: { nombre: "", numeroId: "" } },
    fecha: Date = new Date(),
    kilometraje: number = 0,
    aceitesUsados: Aceite[] = [],
    filtroAceite: Filtro[] = [],
    filtroAire: Filtro[] = [],
    tecnico: { nombre: string; numeroId: string } = { nombre: "", numeroId: "" }
  ) {
    this._id = _id;
    this.vehiculo = vehiculo;
    this.fecha = fecha;
    this.kilometraje = kilometraje;
    this.aceitesUsados = aceitesUsados;
    this.filtroAceite = filtroAceite;
    this.filtroAire = filtroAire;
    this.tecnico = tecnico;
  }
}
