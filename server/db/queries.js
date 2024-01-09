const getTickets = "SELECT * FROM tickets OFFSET $1 LIMIT $2";
const getTicketByid = "SELECT * FROM tickets WHERE id = $1";
const addTicket =
  "INSERT INTO tickets (requested_by, subject, status, created_date, due_date, assignee) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
const updateTicket = "UPDATE tickets SET status = $1 WHERE id = $2 RETURNING *";

module.exports = {
  getTickets,
  getTicketByid,
  addTicket,
  updateTicket,
};
