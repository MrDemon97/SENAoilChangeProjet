export interface Vehiculo {
    placa: String;
    propietario:{
        nombre: String;
        numeroID: String;
    };
    modelo: {
        ano: number;
        marca: String;
        serie: String;
    };
}