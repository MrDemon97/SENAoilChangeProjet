export class Mantenimiento {
    _id: string; // Sub guión id porque los datos van a venir de MongoDB
    vehiculo: string;
    fecha: Date;
    kilometraje: number;
    cantidadAceite: number;
    aceiteUtilizado: string;
    filtroAceite: string;
    filtroAire: string;
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
        aceiteUtilizado: string = "",
        filtroAceite: string = "",
        filtroAire: string = "",
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
