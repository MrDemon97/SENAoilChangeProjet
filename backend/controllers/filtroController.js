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

/* /Obtener un aceite por busqueda 
filtroCtrl.getFiltroBuscado = async (req, res) =>{
    const { referencia, marca, tipo} = req.query;
    try {
        // Intentamos obtener todos los documentos de la colección Filtro
        const filtros = await Filtro.findOne({referencia, marca, tipo});

        if(!filtro){
            return res.status(404).json({message: 'No se encontró el filtro'});
        }
        // Enviamos los documentos obtenidos en formato JSON como respuesta
        res.json({ id: filtro._id, ...aceite._doc});
    } catch (err) {
        // Si ocurre un error, enviamos una respuesta con el código de estado 500
        res.status(500).json({ message: err.message });
    }
}; */



// Crear un nuevo registro de filtro
filtroCtrl.createFiltro = async (req, res) => {

    // Extraemos los datos del cuerpo de la solicitud
    const { marca, disponible, referencia, tipo } = req.body;

    // Creamos una nueva instancia del modelo Filtro con los datos proporcionados
    const newFiltro = new Filtro({ marca, referencia, tipo });
    try {
        // Verificamos si un filtro con los mismos valores ya existe
        const existingFiltro = await Filtro.findOne({ marca, referencia, tipo });

        if (existingFiltro) {
            // Si existe, enviamos una respuesta con el código de estado 400 y un mensaje
            res.status(400).json({ message: 'El filtro ya existe' });
        }

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

// Actualizar un registro de filtro por su id
filtroCtrl.updateFiltro = async (req, res) => {
    try {
        // Extraemos el id del filtro a actualizar de los parámetros de la solicitud
        const { _id } = req.params;
        // Extraemos los datos del cuerpo de la solicitud
        const { marca, referencia, tipo } = req.body;

        //Buscamos el id y actualizamos los parametros proporcionados
        const updatedFiltro = await Filtro.findByIdAndUpdate(
            _id,
            { marca, referencia, tipo },
            { new: true }
        );
        // si el filtro no es encontrado se devuelve un codigo de estado http con 404 que es no encontrado
        if (!updatedFiltro) {
            return res.status(404).json({ message: 'Filtro no encontrado para actualizar' });
        }

        //Si se encuentra se envia mensaje actualizado con exito
        res.json({ message: "Filtro Actualizado con exito", updatedAceite });
    } catch (err) {
        //Si ocurre un error se envia un codigo de estado http con 500
        res.status(500).json({ message: err.message });
    }
};

filtroCtrl.deleteFiltro = async (req, res) => {
    const { _id } = req.params; // usamos ID para eliminar
    try {
        // Buscamos el id y lo eliminamos
        const deletedFiltro = await Filtro.findByIdAndDelete(_id);
        // si el filtro no es encontrado se devuelve un codigo de estado http con 404 que es
        if (!deletedFiltro) {
            return res.status(404).json({ message: 'Filtro no encontrado para eliminar' });
        }
        //Si se encuentra se envia mensaje eliminado con exito
        res.json({ message: "Filtro Eliminado con exito", deletedFiltro });
    } catch (err) {
        //Si ocurre un error se envia un codigo de estado http con 500
        res.status(500).json({ message: err.message });
    }

};


// Exportamos el objeto filtroCtrl para que pueda ser utilizado en otras partes de la aplicación
module.exports = filtroCtrl;