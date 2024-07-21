// Modelo para la entidad Mantenimiento
export class Mantenimiento {
  _id?: string; // Identificador único del mantenimiento (opcional si se crea después)
  fecha: Date; // Fecha del mantenimiento
  kilometraje: number; // Kilometraje en el momento del mantenimiento
  vehiculo: {
    _id: string; // Identificador único del vehículo (viene de MongoDB)
    placa: string; // Placa del vehículo
    propietario: {
      nombre: string; // Nombre del propietario
      numeroId: string; // Número de identificación del propietario
    };
    modelo: {
      ano: number; // Año del modelo del vehículo
      marca: string; // Marca del vehículo
      serie: string; // Serie del vehículo
    };
  }; // Objeto completo del vehículo en lugar de solo el ID
  aceite: {
    tipo1: {
      referencia: string; // Referencia del aceite tipo 1
      marca: string; // Marca del aceite tipo 1
      presentacion: string; // Presentación del aceite tipo 1
      tipo: string; // Tipo del aceite tipo 1
      cantidad: number; // Cantidad de aceite tipo 1
    };
    tipo2: {
      referencia: string; // Referencia del aceite tipo 2
      marca: string; // Marca del aceite tipo 2
      presentacion: string; // Presentación del aceite tipo 2
      tipo: string; // Tipo del aceite tipo 2
      cantidad: number; // Cantidad de aceite tipo 2
    };
  };
  filtro: {
    aire: {
      referencia: string; // ID del filtro de aire
      marca: string; // Marca del filtro de aire
      tipo: string; // Tipo del filtro de aire
    };
    aceite: {
      referencia: string; // ID del filtro de aceite
      marca: string; // Marca del filtro de aceite
      tipo: string; // Tipo del filtro de aceite
    };
  };
  tecnico: {
    numeroId: string; // Número de ID del técnico
    nombre: string; // Nombre del técnico
  };

  constructor(
    _id: string = "", // Inicializa el identificador único del mantenimiento (opcional)
    fecha: Date = new Date(), // Inicializa la fecha del mantenimiento
    kilometraje: number = 0, // Inicializa el kilometraje del mantenimiento
    vehiculo: {
      _id: string; // Inicializa el identificador del vehículo
      placa: string; // Inicializa la placa del vehículo
      propietario: {
        nombre: string; // Inicializa el nombre del propietario
        numeroId: string; // Inicializa el número de identificación del propietario
      };
      modelo: {
        ano: number; // Inicializa el año del modelo del vehículo
        marca: string; // Inicializa la marca del vehículo
        serie: string; // Inicializa la serie del vehículo
      };
    } = {
      _id: "",
      placa: "",
      propietario: {
        nombre: "",
        numeroId: ""
      },
      modelo: {
        ano: 0,
        marca: "",
        serie: ""
      }
    },
    aceite: {
      tipo1: {
        referencia: string; // Inicializa la referencia del aceite tipo 1
        marca: string; // Inicializa la marca del aceite tipo 1
        presentacion: string; // Inicializa la presentación del aceite tipo 1
        tipo: string; // Inicializa el tipo del aceite tipo 1
        cantidad: number; // Inicializa la cantidad del aceite tipo 1
      };
      tipo2: {
        referencia: string; // Inicializa la referencia del aceite tipo 2
        marca: string; // Inicializa la marca del aceite tipo 2
        presentacion: string; // Inicializa la presentación del aceite tipo 2
        tipo: string; // Inicializa el tipo del aceite tipo 2
        cantidad: number; // Inicializa la cantidad del aceite tipo 2
      };
    } = {
      tipo1: {
        referencia: "",
        marca: "",
        presentacion: "",
        tipo: "",
        cantidad: 0
      },
      tipo2: {
        referencia: "",
        marca: "",
        presentacion: "",
        tipo: "",
        cantidad: 0
      }
    },
    filtro: {
      aire: {
        referencia: string; // Inicializa la referencia del filtro de aire
        marca: string; // Inicializa la marca del filtro de aire
        tipo: string; // Inicializa el tipo del filtro de aire
      };
      aceite: {
        referencia: string; // Inicializa la referencia del filtro de aceite
        marca: string; // Inicializa la marca del filtro de aceite
        tipo: string; // Inicializa el tipo del filtro de aceite
      };
    } = {
      aire: {
        referencia: "",
        marca: "",
        tipo: ""
      },
      aceite: {
        referencia: "",
        marca: "",
        tipo: ""
      }
    },
    tecnico: {
      numeroId: string; // Inicializa el número de ID del técnico
      nombre: string; // Inicializa el nombre del técnico
    } = { numeroId: "", nombre: "" }
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
