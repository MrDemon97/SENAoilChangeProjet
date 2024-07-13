export interface Mantenimiento {
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
}