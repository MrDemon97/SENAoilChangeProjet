export interface Aceite{
    referencia: string;
    marca: string;

    //se usa | como tipo enum, es decir solo puede ser cualquiera de las cadenas listadas
    presentacion: 'Galon 4L' | 'Galon 5L' | 'Cuarto Sellado' | 'Cuarto Granel';
    tipo: 'Sintético' | 'Semi' | 'Mineral';
    





}
