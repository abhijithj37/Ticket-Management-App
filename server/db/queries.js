const getTickets = "SELECT * FROM tickets ORDER BY id DESC OFFSET $1 LIMIT $2";
const getTicketByid = "SELECT * FROM tickets WHERE id = $1";
const addTicket =
  "INSERT INTO tickets (requested_by, subject, due_date, assignee, priority) VALUES ($1, $2, $3, $4, $5) RETURNING *";
const updateTicket = "UPDATE tickets SET status = $1 WHERE id = $2 RETURNING *";
const getTicketCount = `SELECT COUNT(*) FROM tickets`

module.exports = {
  getTickets,
  getTicketByid,
  addTicket,
  updateTicket,
  getTicketCount
};
  