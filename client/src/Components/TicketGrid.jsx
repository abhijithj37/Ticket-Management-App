import React from "react";
import { useNavigate } from "react-router-dom";
import { SlOptions } from "react-icons/sl";

const TicketGrid = ({ ticket }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white space-y-3 p-4 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm">
          <div>
            <p
              className="text-blue-500 font-bold hover:underline cursor-pointer"
              onClick={() => navigate(`/${ticket.id}`)}
            >
              #{ticket.id}
            </p>
          </div>
          <div className="text-gray-500">
            {new Date(ticket.created_date).toLocaleDateString("en-GB")}
          </div>
          <div>
            <span
              className={`px-1.5 py-0.5 text-xs font-medium tracking-wide text-white ${
                ticket.status === "Open"
                  ? "bg-emerald-500"
                  : ticket.status === "Closed"
                  ? "bg-slate-500"
                  : "bg-blue-500"
              } rounded-md `}
            >
              {ticket.status}
            </span>
          </div>
        </div>
        <SlOptions
          className="text-gray-700 cursor-pointer hover:size-5"
          onClick={() => navigate(`/${ticket.id}`)}
        />
      </div>
      <div className="text-sm text-gray-700 font-medium">{ticket.subject}</div>
      <div className="text-sm text-gray-400">
        Requested By:{" "}
        <span className="text-gray-700">{ticket.requested_by}</span>
      </div>
      <div className="text-sm text-gray-400">
        Assigned To: <span className="text-gray-700">{ticket.assignee}</span>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium text-gray-700">
          {new Date(ticket.due_date).toLocaleDateString("en-GB")}
          <span className="text-gray-400">(Due)</span>{" "}
        </p>
        <p className="text-sm text-gray-400">
          {" "}
          Priority:{" "}
          <span
            className={`${
              ticket.priority === "Medium"
                ? "text-orange-500 bg-yellow-200"
                : ticket.priority === "Low"
                ? "text-gray-500 bg-gray-200"
                : "text-red-500 bg-red-200"
            } px-1.5 py-0.5 text-xs font-medium tracking-wide rounded-md bg-opacity-50`}
          >
            {ticket.priority}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TicketGrid;
