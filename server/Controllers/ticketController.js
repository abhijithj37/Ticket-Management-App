const client = require("../db/config");
const queries = require("../db/queries");

module.exports = {


  getAllTickets: (req, res, next) => {
    const page = req.query.page * 1 || 1;
    const pageSize = req.query.pageSize * 1 || 5;
    const skip = (page - 1) * pageSize;
    client.query(queries.getTickets, [skip, pageSize], (err, results) => {
      if (err) return next(err);
      res.status(200).json(results.rows);
    });
  },


  addTickets: (req, res, next) => {
    const { requested_by, subject, status, created_date, due_date, assignee } =
      req.body;
    client.query(
      queries.addTicket,
      [requested_by, subject, status, created_date, due_date, assignee],
      (err, result) => {
        if (err) return next(err);
        res.status(201).json(result.rows);
      }
    );
  },


  upDateTicket: (req, res, next) => {
    const { status } = req.body;
    const id = parseInt(req.params.ticketId);
    client.query(queries.updateTicket, [status, id], (err, result) => {
      if (err) return next(err);
      res.status(200).json(result.rows);
    });
  },


  getTicket: (req, res, next) => {
    const id = parseInt(req.params.ticketId);
    client.query(queries.getTicketByid, [id], (err, result) => {
      if (err) return next(err);
      res.status(200).json(result.rows);
    });
  },

  
};
