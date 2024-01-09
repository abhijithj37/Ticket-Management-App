const express = require("express");
const ticketController = require("../Controllers/ticketController");
const router = express.Router();

router
  .route("/")
  .get(ticketController.getAllTickets)
  .post(ticketController.addTickets);

router
  .route("/:ticketId")
  .get(ticketController.getTicket)
  .patch(ticketController.upDateTicket);

module.exports = router;
