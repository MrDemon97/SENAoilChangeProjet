const Aceite = require('../models/Aceite');

const aceiteCtrl = {};

//Obtener todos los aceites 

aceiteCtrl.getAceites = async (req, res) => {
  try {
    //Recuoerar todos los registros de aceites de la base de datos
    const aceites = await Aceite.find();
    res.json(aceites);
  } catch (err) {
    //Manejar errores y enviar un mensaje de error
    res.status(500).json({ message: err.message });
  }
};

//Obtener un aceite buscado

aceiteCtrl.getAceiteBuscado = async (req, res) => {
  const {referencia, marca, presentacion, tipo} = req.query;
  try {
    //Recuoerar todos los registros de aceites de la base de datos
    const aceite = await Aceite.findOne({referencia, marca, presentacion, tipo});
    if (!aceite){
      return res.status(404).json({message: "No se encontro el aceite buscado"});
    }
    res.json({ id: aceite._id, ...aceite._doc}); // incluimos el id
} catch (err) {
  //Manejar errores y enviar un mensaje de error
  res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo aceite 
aceiteCtrl.createAceite = async (req, res) => {
  const { referencia, marca, presentacion, tipo } = req.body;
  const newAceite = new Aceite({ referencia, marca, presentacion, tipo });
  try {
    // Verificar si un aceite con los mismo valores ya existe
    const existingAceite = await Aceite.findOne({ referencia, marca, presentacion, tipo});
    if (existingAceite) {
      return res.status(400).json({ message: "El aceite ya existe" });
    }

    const savedAceite = await newAceite.save();
    res.status(201).json( {message: "Creado con exito", savedAceite});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar un aceite existente basados en su _id
aceiteCtrl.updateAceiteById = async (req, res) => {
  const { id } = req.params;
  const {referencia, marca, presentacion, tipo} = req.body;
  try {
    //Verificar si una ceite con los mismos valores ya existe
    const existingAceite = await Aceite.FindOne ({
      referencia,
      marca,
      presentacion,
      tipo,
      _id: { $ne:id}//Excluimos el aceite con el mismo id que estamos actaulizando
    });
    if (existingAceite && existingAceite._id.toString() !== _id){ 
      return res.status(400).json({ message: "El aceite ya existe" });
  }
  //Actualizar el aceite con los nuevos valores
  const updatedAceite = await Aceite.findByIdAndUpdate(
    _id,
    {referencia, marca, presentacion, tipo} ,
    {new: true}
  );

  if (!updatedAceite){
    return res.status(404).json({ message: "No se encontro el aceite para actualizar"});
  }
  res.json({ message: "Aceite actualizado con exito", updatedAceite});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar un aceite
aceiteCtrl.deleteAceite = async (req,res) =>{
  const id = req.params.id; // Usar el ID para eliminar
  try {
    const deletedAceite = await Aceite.findByIdAndDelete(id);
    if (!deletedAceite) {
      return res.status(404).json({ message: "No se encontro el aceite para eliminar"});
        }
    res.json({ message: "Aceite eliminado con exito", deletedAceite}); 
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = aceiteCtrl;
