// Importamos el modelo Vehiculo desde el archivo correspondiente
const Vehiculo = require('../models/Vehiculo');

// Creamos un objeto vacío para almacenar nuestros controladores
const vehiculoCtrl = {};

// Obtener todos los vehículos
vehiculoCtrl.getVehiculos = async (req, res) => {
    try {
        // Intentamos obtener todos los documentos de la colección Vehiculo
        const vehiculos = await Vehiculo.find();
        // Enviamos los documentos obtenidos en formato JSON como respuesta
        res.json(vehiculos);
    } catch (err) {
        // Si ocurre un error, enviamos una respuesta con el código de estado 500 y un mensaje de error
        res.status(500).json({ message: err.message });
    }
};

vehiculoCtrl.getPropietarios = async (req, res) => {
    try {
        // optenemos todos los propietarios de la coleccion vehiculos
        const propietarios = await Vehiculo.find({},'propietario.nombre propietario.numeroId placa');

        // enviamos los propietarios en formato JSON como respuesta
        res.json(propietarios);
    } catch (err) {

        // Si ocurre un error, enviamos una respuesta con el código de estado 500
        res.status(500).json({ message: err.message });
    }
};

// Obtener un vehículo por su placa
vehiculoCtrl.getVehiculoByPlaca = async (req, res) => {
    // Extraemos la placa de los parámetros de la solicitud
    const placa = req.params.placa;
    try {
        // Intentamos obtener un documento de la colección Vehiculo por su placa
        const vehiculo = await Vehiculo.findOne({ placa });
        // Si no se encuentra el documento, enviamos una respuesta con el código de estado 404 y un mensaje de error
        if (!vehiculo) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }
        // Enviamos el documento encontrado en formato JSON
        res.json(vehiculo);
    } catch (err) {
        // Si ocurre un error, enviamos una respuesta con el código de estado 500 y un mensaje de error
        res.status(500).json({ message: err.message });
    }
};

// Obtener vehiculos por id del propietario
vehiculoCtrl.getVehiculosByPropietarioId = async (req, res) =>{
    
    // Extraemos el id del propietario de los parámetros de la solicitud
    const numeroId = req.params.numeroId;

    try{
        // Intentamos obtener un documento de la colección Vehiculo por su id del propietario
        const vehiculos = await Vehiculo.find({ 'propietario.numeroId' : numeroId });
        
        // Si no se encuentra el documento, enviamos una respuesta con el código de estado 404 y un mensaje de error
        
        if (vehiculos.length === 0) {
            return res.status(404).json({ message: 'Id no relacionado a ningun vehiculo' });
        }
        
        res.json(vehiculos);

    } catch (err) {
        // Si ocurre un error, enviamos una respuesta con el código de estado 500
        res.status(500).json({ message: err.message });
    }
};

    // Crear un nuevo vehículo
    vehiculoCtrl.createVehiculo = async (req, res) => {
        // Extraemos los datos del cuerpo de la solicitud
        const { placa, propietario, modelo } = req.body;
        // Creamos una nueva instancia del modelo Vehiculo con los datos proporcionados
        const newVehiculo = new Vehiculo({ placa, propietario, modelo });
        try {

            //Verificamos si un vehiculos con los mismos datos ya existe
            const existingVehiculo = await Vehiculo.findOne({ placa, propietario, modelo });

            if (existingVehiculo) {
                return res.status(400).json({ message: 'Vehiculo ya existe' });
            }

            // Intentamos guardar el nuevo documento en la base de datos
            const savedVehiculo = await newVehiculo.save();
            // Enviamos el documento guardado en formato JSON con el código de estado 201 (Creado)
            res.status(201).json({ message: "Creado con exito", savedVehiculo });
        } catch (err) {
            // Si ocurre un error, enviamos una respuesta con el código de estado 400 y un mensaje de error
            res.status(400).json({ message: "Error creando el aceite" });
        }
    };


// Actualizar un vehículo por el id
vehiculoCtrl.updateVehiculo = async (req, res) => {
    // Extraemos la placa de los parámetros de la solicitud
    const {_id} = req.params;
    const { placa, propietario, modelo} = req.body;
    try {
        // Intentamos actualizar un documento de la colección Vehiculo por su placa
        const updatedVehiculo = await Vehiculo.findByIdAndUpdate(
            _id,
            { placa, propietario, modelo },
            { new: true } // Esta opción devuelve el documento actualizado
        );
        // Si no se encuentra el documento, enviamos una respuesta con el código de estado 404 y un mensaje de error
        if (!updatedVehiculo) {
            return res.status(404).json({ message: 'Vehículo no encontrado para actualizar' });
        }
        // Enviamos el documento actualizado en formato JSON
        res.json({ message: "Vehiculo Actualizado con exito",updatedVehiculo});
    } catch (err) {
        // Si ocurre un error, enviamos una respuesta con el código de estado 400 y un mensaje de error
        res.status(400).json({ message: err.message });
    }
};

// Eliminar un vehículo por su id
vehiculoCtrl.deleteVehiculo = async (req, res) => {

    //Extraemos el id de los parametros d
    const {_id} = req.params;
    try {
        // Intentamos eliminar un documento de la colección Vehiculo por su placa
        const deletedVehiculo = await Vehiculo.findByIdAndDelete({ _id });
        // Si no se encuentra el documento, enviamos una respuesta con el código de estado 404 y un mensaje de error
        if (!deletedVehiculo) {
            return res.status(404).json({ message: 'Vehículo no encontrado para eliminar' });
        }
        // Enviamos un mensaje de éxito en formato JSON
        res.json({ message: 'Vehículo eliminado correctamente' });
    } catch (err) {
        // Si ocurre un error, enviamos una respuesta con el código de estado 500 y un mensaje de error
        res.status(500).json({ message: err.message });
    }
};

// Exportamos el objeto vehiculoCtrl para que pueda ser utilizado en otras partes de la aplicación
module.exports = vehiculoCtrl;