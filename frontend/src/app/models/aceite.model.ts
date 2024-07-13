export class Aceite {
    _id: string; // Sub guión id porque los datos van a venir de MongoDB
    referencia: string;
    marca: string;
    presentacion: 'Galon 4L' | 'Galon 5L' | 'Cuarto Sellado' | 'Cuarto Granel';
    tipo: 'Sintético' | 'Semi' | 'Mineral';

    constructor(
        _id: string = "",
        referencia: string = "",
        marca: string = "",
        presentacion: 'Galon 4L' | 'Galon 5L' | 'Cuarto Sellado' | 'Cuarto Granel' = 'Galon 4L',
        tipo: 'Sintético' | 'Semi' | 'Mineral' = 'Sintético'
    ) {
        this._id = _id;
        this.referencia = referencia;
        this.marca = marca;
        this.presentacion = presentacion;
        this.tipo = tipo;
    }
}
