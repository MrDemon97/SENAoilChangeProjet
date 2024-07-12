// Importamos el modelo Aceite desde el archivo correspondiente
const Aceite = require("../models/Aceite");

// Creamos un objeto vacío para almacenar nuestros controladores
const aceiteCtrl = {};

// Obtener todos los registros de aceite
aceiteCtrl.getAceites = async (req, res) => {
  try {
    // Intentamos obtener todos los documentos de la colección Aceite
    const aceites = await Aceite.find();
    // Enviamos los documentos obtenidos en formato JSON como respuesta
    res.json(aceites);
  } catch (err) {
    // Si ocurre un error, enviamos una respuesta con el código de estado 500 y un mensaje de error
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo registro de aceite
aceiteCtrl.createAceite = async (req, res) => {
  // Extraemos los datos del cuerpo de la solicitud
  const { marca, presentacion, tipo, referencia } = req.body;
  // Creamos una nueva instancia del modelo Aceite con los datos proporcionados
  const newAceite = new Aceite({ marca, presentacion, tipo, referencia });
  try {
    // Intentamos guardar el nuevo documento en la base de datos
    const savedAceite = await newAceite.save();
    // Enviamos el documento guardado en formato JSON con el código de estado 201 (Creado)
    res.status(201).json(savedAceite);
  } catch (err) {
    // Si ocurre un error, enviamos una respuesta con el código de estado 400 y un mensaje de error
    res.status(400).json({ message: err.message });
  }
};

// Obtener un registro de aceite por referencia
aceiteCtrl.getAceiteByReferencia = async (req, res) => {
  // Extraemos la referencia de los parámetros de la solicitud
  const referencia = req.params.referencia;
  try {
    // Intentamos obtener un documento de la colección Aceite por su referencia
    const aceite = await Aceite.findOne({ referencia });
    // Si no se encuentra el documento, enviamos una respuesta con el código de estado 404 y un mensaje de error
    if (!aceite) {
      return res.status(404).json({ message: "Aceite no encontrado" });
    }
    // Enviamos el documento encontrado en formato JSON
    res.json(aceite);
  } catch (err) {
    // Si ocurre un error, enviamos una respuesta con el código de estado 500 y un mensaje de error
    res.status(500).json({ message: err.message });
  }
};

// Actualizar un registro de aceite por referencia
aceiteCtrl.updateAceite = async (req, res) => {
  // Extraemos la referencia de los parámetros de la solicitud
  const referencia = req.params.referencia;
  // Extraemos los datos del cuerpo de la solicitud
  const { marca, presentacion, tipo } = req.body;
  try {
    // Intentamos actualizar un documento de la colección Aceite por su referencia
    const updatedAceite = await Aceite.findOneAndUpdate(
      { referencia },
      { marca, presentacion, tipo },
      { new: true } // Esta opción devuelve el documento actualizado
    );
    // Si no se encuentra el documento, enviamos una respuesta con el código de estado 404 y un mensaje de error
    if (!updatedAceite) {
      return res
        .status(404)
        .json({ message: "Aceite no encontrado para actualizar" });
    }
    // Enviamos el documento actualizado en formato JSON
    res.json(updatedAceite);
  } catch (err) {
    // Si ocurre un error, enviamos una respuesta con el código de estado 400 y un mensaje de error
    res.status(400).json({ message: err.message });
  }
};

// Eliminar un registro de aceite por referencia
aceiteCtrl.deleteAceite = async (req, res) => {
  // Extraemos la referencia de los parámetros de la solicitud
  const referencia = req.params.referencia;
  try {
    // Intentamos eliminar un documento de la colección Aceite por su referencia
    const deletedAceite = await Aceite.findOneAndDelete({ referencia });
    // Si no se encuentra el documento, enviamos una respuesta con el código de estado 404 y un mensaje de error
    if (!deletedAceite) {
      return res
        .status(404)
        .json({ message: "Aceite no encontrado para eliminar" });
    }
    // Enviamos un mensaje de éxito en formato JSON
    res.json({ message: "Aceite eliminado correctamente" });
  } catch (err) {
    // Si ocurre un error, enviamos una respuesta con el código de estado 500 y un mensaje de error
    res.status(500).json({ message: err.message });
  }
};

// Exportamos el objeto aceiteCtrl para que pueda ser utilizado en otras partes de la aplicación
module.exports = aceiteCtrl;
