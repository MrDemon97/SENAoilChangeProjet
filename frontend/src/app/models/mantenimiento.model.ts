// src/app/models/mantenimiento.model.ts

export class Mantenimiento {
  _id?: string; // Identificador único del mantenimiento (opcional si se crea después)
  fecha: Date;
  kilometraje: number;
  vehiculo: string; // ID del vehículo (referencia al modelo Vehiculo)
  aceite: {
    tipo1: string; // ID del primer tipo de aceite (referencia al modelo Aceite)
    cantidadGalones: number; // Cantidad total en galones
    cantidadCuartos: number; // Cantidad total en cuartos
  };
  filtro: {
      aire: string; // ID del filtro de aire (referencia al modelo Filtro)
      aceite: string; // ID del filtro de aceite (referencia al modelo Filtro)
  };
  tecnico: {
      numeroId: string;
      nombre: string;
  };

  constructor(
      _id: string = "",
      fecha: Date = new Date(),
      kilometraje: number = 0,
      vehiculo: string = "",
      aceite: { 
        tipo1: string; 
        cantidadGalones: number; 
        cantidadCuartos: number; 
      } = { tipo1: "", cantidadGalones: 0, cantidadCuartos: 0 },
      filtro: { aire: string; aceite: string } = { aire: "", aceite: "" },
      tecnico: { numeroId: string; nombre: string } = { numeroId: "", nombre: "" }
  ) {
      this._id = _id;
      this.fecha = fecha;
      this.kilometraje = kilometraje;
      this.vehiculo = vehiculo;
      this.aceite = aceite;
      this.filtro = filtro;
      this.tecnico = tecnico;
  }
}
