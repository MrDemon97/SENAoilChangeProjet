export class Vehiculo {
    _id: string; // Sub guión id porque los datos van a venir de MongoDB
    placa: string;
    propietario: {
        nombre: string;
        numeroID: string;
    };
    modelo: {
        ano: number;
        marca: string;
        serie: string;
    };

    constructor(
        _id: string = "",
        placa: string = "",
        propietario: { nombre: string; numeroID: string } = { nombre: "", numeroID: "" },
        modelo: { ano: number; marca: string; serie: string } = { ano: 0, marca: "", serie: "" }
    ) {
        this._id = _id;
        this.placa = placa;
        this.propietario = propietario;
        this.modelo = modelo;
    }
}
