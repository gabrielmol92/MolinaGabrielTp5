const Transaccion = require("../models/transaccion");
const transaccionCtrl = {};


 transaccionCtrl.getTransacciones = async (req, res) => {
  var transacciones = await Transaccion.find();
  res.json(transacciones);
}; 

transaccionCtrl.createTransaccion = async (req, res) => {
  var transaccion = new Transaccion(req.body);
  try {
    await transaccion.save();
    res.json({
      status: "1",
      msg: "Transaccion guardado.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};


/* transaccionCtrl.getTransaccionesPorEmail = async (req, res) => {
  
  let criterio = {}
  if ((req.query.emailCliente != null) && (req.query.emailCliente !="")){
    criterio.emailCliente = req.query.emailCliente;
  }
  var transacciones = await Transaccion.find(criterio)
  res.json(transacciones);
}; */

transaccionCtrl.getTransaccionesPorEmail = async (req, res) => {
  const {emailCliente} = req.params;
  
  var transacciones = await Transaccion.find({emailCliente})
  res.json(transacciones);
};



transaccionCtrl.getTransaccionesPorDivisas  = async (req, res) => {
  
  let criterio = {}
  if (((req.query.monedaOrigen != null) && (req.query.monedaOrigen !="")) &&((req.query.monedaDestino != null) && (req.query.monedaDestino !=""))){
    criterio.monedaOrigen = req.query.monedaOrigen;
    criterio.monedaDestino = req.query.monedaDestino;
  }
  var transacciones = await Transaccion.find(criterio)
  res.json(transacciones);
};


module.exports = transaccionCtrl;
