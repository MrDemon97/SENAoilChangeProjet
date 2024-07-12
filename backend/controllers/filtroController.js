// Importamos el modelo Filtro desde el archivo correspondiente
const Filtro = require('../models/Filtro');

// Creamos un objeto vacío para almacenar nuestros controladores
const filtroCtrl = {};

// Obtener todos los registros de filtros
filtroCtrl.getFiltros = async (req, res) => {
    try {
        // Intentamos obtener todos los documentos de la colección Filtro
        const filtros = await Filtro.find();
        // Enviamos los documentos obtenidos en formato JSON como respuesta
        res.json(filtros);
    } catch (err) {
        // Si ocurre un error, enviamos una respuesta con el código de estado 500 y un mensaje de error
        res.status(500).json({ message: err.message });
    }
};

// Crear un nuevo registro de filtro
filtroCtrl.createFiltro = async (req, res) => {
    // Extraemos los datos del cuerpo de la solicitud
    const { marca, disponible, referencia, tipo } = req.body;
    // Creamos una nueva instancia del modelo Filtro con los datos proporcionados
    const newFiltro = new Filtro({ marca, disponible, referencia, tipo });
    try {
        // Intentamos guardar el nuevo documento en la base de datos
        const savedFiltro = await newFiltro.save();
        // Enviamos el documento guardado en formato JSON con el código de estado 201 (Creado)
        res.status(201).json(savedFiltro);
    } catch (err) {
        // Si ocurre un error, enviamos una respuesta con el código de estado 400 y un mensaje de error
        res.status(400).json({ message: err.message });
    }
};

// Obtener un registro de filtro por referencia
filtroCtrl.getFiltroByReferencia = async (req, res) => {
    // Extraemos la referencia de los parámetros de la solicitud
    const referencia = req.params.referencia;
    try {
        // Intentamos obtener un documento de la colección Filtro por su referencia
        const filtro = await Filtro.findOne({ referencia });
        // Si no se encuentra el documento, enviamos una respuesta con el código de estado 404 y un mensaje de error
        if (!filtro) {
            return res.status(404).json({ message: 'Filtro no encontrado' });
        }
        // Enviamos el documento encontrado en formato JSON
        res.json(filtro);
    } catch (err) {
        // Si ocurre un error, enviamos una respuesta con el código de estado 500 y un mensaje de error
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un registro de filtro por referencia
filtroCtrl.updateFiltro = async (req, res) => {
    // Extraemos la referencia de los parámetros de la solicitud
    const referencia = req.params.referencia;
    // Extraemos los datos del cuerpo de la solicitud
    const { marca, disponible, tipo } = req.body;
    try {
        // Intentamos actualizar un documento de la colección Filtro por su referencia
        const updatedFiltro = await Filtro.findOneAndUpdate(
            { referencia },
            { marca, disponible, tipo },
            { new: true } // Esta opción devuelve el documento actualizado
        );
        // Si no se encuentra el documento, enviamos una respuesta con el código de estado 404 y un mensaje de error
        if (!updatedFiltro) {
            return res.status(404).json({ message: 'Filtro no encontrado para actualizar' });
        }
        // Enviamos el documento actualizado en formato JSON
        res.json(updatedFiltro);
    } catch (err) {
        // Si ocurre un error, enviamos una respuesta con el código de estado 400 y un mensaje de error
        res.status(400).json({ message: err.message });
    }
};

// Eliminar un registro de filtro por referencia
filtroCtrl.deleteFiltro = async (req, res) => {
    // Extraemos la referencia de los parámetros de la solicitud
    const referencia = req.params.referencia;
    try {
        // Intentamos eliminar un documento de la colección Filtro por su referencia
        const deletedFiltro = await Filtro.findOneAndDelete({ referencia });
        // Si no se encuentra el documento, enviamos una respuesta con el código de estado 404 y un mensaje de error
        if (!deletedFiltro) {
            return res.status(404).json({ message: 'Filtro no encontrado para eliminar' });
        }
        // Enviamos un mensaje de éxito en formato JSON
        res.json({ message: 'Filtro eliminado correctamente' });
    } catch (err) {
        // Si ocurre un error, enviamos una respuesta con el código de estado 500 y un mensaje de error
        res.status(500).json({ message: err.message });
    }
};

// Exportamos el objeto filtroCtrl para que pueda ser utilizado en otras partes de la aplicación
module.exports = filtroCtrl;