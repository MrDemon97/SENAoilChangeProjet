export class Filtro {
    _id: string; // Sub guión id porque los datos van a venir de MongoDB
    referencia: string;
    marca: string;
    tipo: 'Aire' | 'Aceite';

    constructor(
        _id: string = "",
        referencia: string = "",
        marca: string = "",
        tipo: 'Aire' | 'Aceite'
    ) {
        this._id = _id;
        this.referencia = referencia;
        this.marca = marca;
        this.tipo = tipo;
    }
}
