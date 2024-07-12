## SENAoilChangeProjet
Proyecto SENA, construccion de aplicacion web usando estandar MEAN
Registro de Cambios de Aceite
##Descripción
Esta aplicación web permite registrar y gestionar el mantenimiento de cambios de aceite de vehículos. Permite llevar un registro detallado de los cambios de aceite realizados, incluyendo información sobre el vehículo, el aceite, los filtros y el técnico encargado.

##Funcionalidades Clave
#1. Registrar Cambios de Aceite
Placa del vehículo (e.g., BMR-683)
Fecha actual
Kilometraje actual
Cantidad de aceite
Referencia del aceite
Referencia del filtro de aceite
Referencia del filtro de aire
Técnico encargado del mantenimiento
#2. CRUD de Clientes
Nombre
Número de identificación (ID/CC)
Vehículos asociados
#3. CRUD de Vehículos
Placa
Modelo
Referencia
Propietario
#4. CRUD de Referencias de Aceite
Marca
Presentación (4L galón, 5L galón, cuarto sellado, cuarto granel)
Estado (disponible/agotado)
#5. CRUD de Referencias de Filtros de Aire
Referencia
Marca
Estado (disponible/agotado)
#6. CRUD de Referencias de Filtros de Aceite
Referencia
Marca
Estado (disponible/agotado)
#7. CRUD de Técnicos
Nombre
Número de cédula
#8. Listar Cambios por Técnico
Mostrar todos los cambios de aceite realizados por cada técnico.
#9. Historial de Vehículos
Buscar historial de mantenimiento por placa o propietario.
#10. Listar Todas las Entidades
Clientes
Vehículos
Referencias de Aceite
Referencias de Filtros de Aire
Referencias de Filtros de Aceite
Técnicos
Estructura del Proyecto
Backend con Node.js y Express.js
Configurar servidor Express.
Conectar a MongoDB.
Crear modelos y esquemas.
Implementar rutas para CRUD y operaciones adicionales.
Frontend con Angular
Crear componentes para cada sección (Clientes, Vehículos, Referencias, Técnicos).
Implementar servicios para consumir la API del backend.
Crear vistas para listar y gestionar cada entidad.


