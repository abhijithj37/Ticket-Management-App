import React from "react";
import { useNavigate } from "react-router-dom";

const TicketRow = ({ ticket }) => {
  const navigate = useNavigate();
  return (
    <tr className="bg-white text-center">
      <td className="p-3 text-sm text-gray-500 whitespace-nowrap border border-collapse">
        <p
          onClick={() => navigate(`/${ticket.id}`)}
          className="font-bold text-blue-500 hover:underline cursor-pointer"
        >
          #{ticket.id}
        </p>
      </td>
      <td className=" text-xs text-gray-500 whitespace-nowrap border border-collapse">
        {ticket.requested_by}
      </td>
      <td className=" text-xs text-gray-500 whitespace-nowrap border border-collapse ">
        {ticket.subject}
      </td>
      <td className=" text-xs text-gray-500 whitespace-nowrap border border-collapse">
        {ticket.assignee}
      </td>
      <td className=" text-xs text-gray-700 whitespace-nowrap border border-collapse">
        <span
          className={`px-1.5 py-0.5 text-xs font-medium tracking-wide ${
            ticket.priority === "Medium"
              ? "text-orange-500 bg-yellow-200"
              : ticket.priority === "Low"
              ? "text-gray-500 bg-gray-200"
              : "text-red-500 bg-red-200"
          } rounded-md bg-opacity-50`}
        >
          {ticket.priority}
        </span>
      </td>
      <td className=" text-xs text-gray-700 whitespace-nowrap border border-collapse">
        <span
          className={`px-1.5 py-0.5 text-xs font-medium  tracking-wide text-white ${
            ticket.status === "Open"
              ? "bg-emerald-500"
              : ticket.status === "Closed"
              ? "bg-slate-500"
              : "bg-blue-500"
          }  rounded-md`}
        >
          {ticket.status}
        </span>
      </td>
      <td className=" text-xs text-gray-500 whitespace-nowrap border border-collapse">
        {new Date(ticket.created_date).toLocaleDateString("en-GB")}
      </td>
      <td className=" text-xs text-gray-500 whitespace-nowrap border border-collapse">
        {new Date(ticket.due_date).toLocaleDateString("en-GB")}
      </td>
      <td className=" text-sm tracking-wider text-gray-700 whitespace-nowrap border border-collapse">
        <div
          className="text-lg font-medium cursor-pointer hover:text-sm"
          onClick={() => navigate(`/${ticket.id}`)}
        >
          ...
        </div>
      </td>
    </tr>
  );
};

export default TicketRow;
