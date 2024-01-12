# Ticket Management System

This repository contains the source code for the Ticket Management System, a platform that enables students to raise tickets and administrators to manage and respond to those tickets.

## Technology Stack

- **Frontend:** React, Redux Toolkit, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL

## Project Structure

 The project is organized into separate directories for the client-side and server-side components.

## Frontend

The frontend implements a ticket listing page and a ticket details page using React.

 
## Backend

The backend, implemented with Node.js and Express, provides RESTful APIs for managing tickets and communicates with the PostgreSQL database.

### API Endpoints

- `/api/tickets`
  - `GET`: Retrieve a list of tickets.
  - `POST`: Create a new ticket.

- `/api/tickets/:ticketId`
  - `GET`: Retrieve details of a specific ticket.
  - `PUT`: Update the status of a ticket.

- `/api/tickets/status-count`
  - `GET`: Retrieve total ticket count for each status.
   
 
    
## Database

PostgreSQL is used to store ticket information, with a `tickets` table designed to include essential columns.

### Database Schema

The `tickets` table schema:

```sql
CREATE TABLE tickets (
  id SERIAL PRIMARY KEY,
  requested_by VARCHAR(255),
  subject VARCHAR(255),
  status STATUS_ENUM DEFAULT "Open",
  created_date DATE DEFAULT CURRENT_DATE,
  due_date DATE,
  assignee VARCHAR(255),
  priority VARCHAR(255)
);
CREATE TYPE STATUS_ENUM AS ENUM ('Open', 'Closed', 'In Progress');
```

## Environment Variables

 Set up the following environment variables in your `.env` file located in the `server` directory:

```env
USER=your PostgreSQL username.
HOST= PostgreSQL host (e.g., 'localhost').
DATABASE=your PostgreSQL database name.
PASSWORD=your PostgreSQL password.
DB_PORT= PostgreSQL database port (default is 5432).
```

## How to Run the Project

To run the project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/abhijithj37/Ticket-Management-App.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd Ticket-Management-App
   ```
3. **Install Dependencies and Run the Serve:**
   ```bash
   cd server
   npm install
   npm run dev
   ```
4. **Open a New Terminal Window and Navigate to the Client Directory:**
   ```bash
   cd ../client
   npm install
   npm run dev
   ```

