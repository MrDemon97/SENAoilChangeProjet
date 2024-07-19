import { Aceite } from './aceite.model';
import { Filtro } from './filtro.model';
import { Vehiculo } from './vehiculo.model';

export class Mantenimiento {
  _id?: string; // Campo opcional para ID
  vehiculo: Vehiculo;
  fecha: Date;
  kilometraje: number;
  aceitesUsados: {
    aceiteUsado1: Aceite;
    aceiteUsado2: Aceite;
  };
  filtroAceite: Filtro;
  filtroAire: Filtro;
  tecnico: {
    nombre: string;
    numeroId: string;
  };

  constructor(
    _id?: string,
    vehiculo: Vehiculo = new Vehiculo(),
    fecha: Date = new Date(),
    kilometraje: number = 0,
    aceitesUsados: { aceiteUsado1: Aceite; aceiteUsado2: Aceite } = { aceiteUsado1: new Aceite(), aceiteUsado2: new Aceite() },
    filtroAceite: Filtro = new Filtro(),
    filtroAire: Filtro = new Filtro(),
    tecnico: { nombre: string; numeroId: string } = { nombre: '', numeroId: '' }
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
