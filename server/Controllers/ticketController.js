const client = require("../db/config");
const queries = require("../db/queries");

module.exports = {


  getAllTickets: (req, res, next) => {
    console.log('calling all')
    const page = req.query.page * 1 || 1;
    const pageSize = req.query.pageSize * 1 || 5;
    const skip = (page - 1) * pageSize;
    client.query(queries.getTickets, [skip, pageSize], (err, results) => {
      if (err) return next(err);
      res.status(200).json(results.rows);
    });
  },


  addTickets: (req, res, next) => {
    console.log('calling add');
    const { requested_by, subject, due_date, assignee,priority } =
      req.body;
    client.query(
      queries.addTicket,
      [requested_by, subject, due_date, assignee, priority],
      (err, result) => {
        if (err) return next(err);
        res.status(201).json(result.rows);
      }
    );
  },


  upDateTicket: (req, res, next) => {
    console.log('calling update');
    const { status } = req.body;
    const id = parseInt(req.params.ticketId);
    client.query(queries.updateTicket, [status, id], (err, result) => {
      if (err) return next(err);
      res.status(200).json(result.rows);
    });
  },


  getTicket: (req, res, next) => {
    console.log('calling get tic by id');
    const id = parseInt(req.params.ticketId);
    client.query(queries.getTicketByid, [id], (err, result) => {
      if (err) return next(err);
      res.status(200).json(result.rows);
    });
  },

  getTotalTicketsCount: (req, res, next) => {
    console.log('calling count');
    client.query(queries.getTicketCount, (err, result) => {
      if (err) return next(err);
      res.status(200).json(result.rows[0].count);
    });
  },
  getStatusCount:(req,res,next)=>{
    console.log('calling status count');
    client.query(queries.getStatusCount,(err,result)=>{
      if(err)return next(err)
      res.status(200).json(result.rows)
    })
  }


  
};
