import { Component } from '@angular/core';
import { VehiculoService } from '../../../services/vehiculo.service'; // Importamos el servicio VehiculoService para interactuar con la API de vehículos
import { Vehiculo } from '../../../models/vehiculo.model'; // Importamos el modelo Vehiculo para definir la estructura de los datos de vehículo
import { FormsModule } from '@angular/forms'; // Importamos FormsModule para utilizar el ngModel en los formularios
import { CommonModule } from '@angular/common'; // Importamos CommonModule para usar directivas comunes de Angular
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http'; // Importamos HttpClientModule para realizar peticiones HTTP y HttpErrorResponse para manejar errores HTTP

@Component({
  selector: 'app-vehiculo-search', // Selector del componente
  standalone: true, // Definimos el componente como independiente
  imports: [CommonModule, FormsModule, HttpClientModule], // Importamos los módulos necesarios para el componente
  templateUrl: './vehiculo-search.component.html', // Plantilla HTML del componente
  styleUrls: ['./vehiculo-search.component.css'] // Estilos CSS del componente
})
export class VehiculoSearchComponent {
  placa = ''; // Variable para almacenar la placa del vehículo a buscar
  propietarioId = ''; // Variable para almacenar el ID del propietario del vehículo a buscar

  vehiculoEncontrado: Vehiculo | undefined; // Variable para almacenar el vehículo encontrado, inicialmente undefined

  constructor(private vehiculoService: VehiculoService) {} // Constructor del componente, inyectamos el servicio VehiculoService

  // Método para buscar un vehículo según la placa o el ID del propietario
  getVehiculoBuscado(): void {
    if (this.placa) { // Si se ha ingresado una placa
      this.vehiculoService.getVehiculoByPlaca(this.placa) // Llamamos al método del servicio para buscar por placa
        .subscribe(
          (vehiculo) => { // Callback en caso de éxito
            if (vehiculo) { // Si se encontró un vehículo
              alert('Vehículo encontrado.'); // Mostramos alerta de éxito
              this.vehiculoEncontrado = vehiculo; // Asignamos el vehículo encontrado a la variable
            } else { // Si no se encontró ningún vehículo
              alert('No se encontró el vehículo.'); // Mostramos alerta de error
              this.vehiculoEncontrado = undefined; // Reiniciamos la variable de vehículo encontrado
            }
          },
          (error) => { // Callback en caso de error
            this.handleError(error); // Llamamos al método para manejar el error
          }
        );
    } else if (this.propietarioId) { // Si se ha ingresado un ID de propietario
      this.vehiculoService.getVehiculosByPropietarioId(this.propietarioId) // Llamamos al método del servicio para buscar por ID de propietario
        .subscribe(
          (vehiculo) => { // Callback en caso de éxito
            if (vehiculo) { // Si se encontró uno o varios vehículos
              alert('Vehículo(s) encontrado(s).'); // Mostramos alerta de éxito
              this.vehiculoEncontrado = vehiculo; // Asignamos el vehículo encontrado a la variable
            } else { // Si no se encontró ningún vehículo
              alert('No se encontró el vehículo.'); // Mostramos alerta de error
              this.vehiculoEncontrado = undefined; // Reiniciamos la variable de vehículo encontrado
            }
          },
          (error) => { // Callback en caso de error
            this.handleError(error); // Llamamos al método para manejar el error
          }
        );
    } else { // Si no se ha ingresado ni la placa ni el ID de propietario
      alert('Por favor, ingrese la placa o el ID del propietario.'); // Mostramos alerta para que el usuario ingrese datos
    }
  }

  // Método para manejar errores HTTP
  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) { // Si el error es una instancia de HttpErrorResponse (error HTTP)
      if (error.status === 404) { // Si el código de estado es 404 (no encontrado)
        alert('Vehículo no encontrado.'); // Mostramos alerta de vehículo no encontrado
      } else { // Para otros códigos de estado de error
        alert('Error buscando el vehículo.'); // Mostramos alerta de error genérico
      }
    } else { // Si el error no es de tipo HttpErrorResponse (error desconocido)
      alert('Error desconocido: ' + error.message); // Mostramos alerta con el mensaje de error desconocido
    }
    this.vehiculoEncontrado = undefined; // Reiniciamos la variable de vehículo encontrado
  }
}
