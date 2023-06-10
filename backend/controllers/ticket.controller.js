const Ticket = require("../models/ticket");
const ticketCtrl = {};


ticketCtrl.getTickets = async (req, res) => {
  var tickets = await Ticket.find().populate("espectador");
  res.json(tickets);
}; 

ticketCtrl.createTicket = async (req, res) => {
  var ticket = new Ticket(req.body);
  try {
    await ticket.save();
    res.json({
      status: "1",
      msg: "Ticket guardado.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};

ticketCtrl.getUnTicket = async (req, res) => {
  
  var tickets = await Ticket.findById(req.params.id)
  res.json(tickets);
};


ticketCtrl.editTicket = async (req, res) => {
    const vticket = new Ticket(req.body);
    try {
      await Ticket.updateOne({ _id: req.body._id }, vticket);
      res.json({
        status: "1",
        msg: "Ticket actualizado con exito",
      });
    } catch (error) {
      res.status(400).json({
        status: "0",
        msg: "Error procesando la operacion",
      });
    }
  };
  
  
  ticketCtrl.deleteTicket = async (req, res) => {
    try {
      await Ticket.deleteOne({ _id: req.params.id });
      res.json({
        status: "1",
        msg: "Ticket Eliminado",
      });
    } catch (error) {
      res.status(400).json({
        status: "0",
        msg: "Error procesando la operacion",
      });
    }
  };
  

 ticketCtrl.getTicketsByEspectador = async (req, res) => {
 let criterio = {}
  if ((req.query.categoriaEspectador != null) && (req.query.categoriaEspectador !="")){
    criterio.categoriaEspectador = req.query.categoriaEspectador;
  }

  var tickets = await Ticket.find(criterio);
  res.json(tickets);
};



module.exports = ticketCtrl;
