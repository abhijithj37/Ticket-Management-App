import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import { FiDownload } from "react-icons/fi";
import { FaReply } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTicketById, getTicket } from "../features/tickets/ticketsSlice";
import UpdateStatusModal from "../Components/UpdateStatusModal";

const TicketDetails = () => {
  const { id } = useParams();
  const ticket = useSelector(getTicket);
  const dispatch = useDispatch();

  if (!ticket) {
    return (
      <section>
        <h2>Ticket not found!</h2>
      </section>
    );
  }
  useEffect(() => {
    dispatch(fetchTicketById({ id }));
  }, []);
  return (
    <>
      <NavBar />
      <main className="px-4 py-4 bg-gray-100 min-h-screen md:px-6">
        {/* ...... */}
        <div className="flex items-center justify-between">
          <p className="font-medium">Ticket List</p>
          <div className="text-xs text-gray-600 flex gap-2">
            <span>ScholarCred</span>
            <span>{">"}</span>
            <span>Tickets</span>
            <span>{">"}</span>
            <span className="text-gray-400">Ticket List</span>
          </div>
        </div>
        {/* ...... */}

        <div className="flex flex-col gap-x-4 md:flex-row">
          {/* ticket details */}
          <div className="p-4 bg-white mt-5 space-y-8 text-gray-600 flex-1 lg:flex-auto">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">#{ticket.id}</p>

              <UpdateStatusModal
                currentStatus={ticket.status}
                ticketId={ticket.id}
              />
            </div>

            <div>
              <p className="text-sm">Ticket Title : </p>
              <p className="mt-2 font-medium">{ticket.subject}</p>
            </div>
            {/* ........ */}
            <div className="flex justify-between">
              <div className="w-[50%]">
                <p className="text-sm">Reported By : </p>
                <p className="font-medium">{ticket.requested_by}</p>
              </div>
              <div className="w-[50%] flex  flex-row-reverse lg:flex-row text-right lg:text-left">
                <span>
                  <p className="text-sm">Assigned To : </p>
                  <p className="font-medium">{ticket.assignee}</p>
                </span>
              </div>
            </div>
            {/* ........  */}

            {/* ........ */}
            <div className="flex justify-between">
              <div className="w-[50%]">
                <p className="text-sm">Created On : </p>
                <p className="font-medium">
                  {new Date(ticket.created_date).toLocaleDateString("en-GB")}
                </p>
              </div>
              <div className="w-[50%] flex flex-row-reverse lg:flex-row text-right lg:text-left">
                <span>
                  <p className="text-sm">Due On : </p>
                  <p className="font-medium">
                    {new Date(ticket.due_date).toLocaleDateString("en-GB")}
                  </p>
                </span>
              </div>
            </div>
            {/* ........  */}

            {/* ........ */}
            <div className="flex justify-between">
              <div className="w-[50%]">
                <p className="text-sm">Status : </p>
                <div className="px-5 py-1 border text-xs font-medium w-24">
                  {ticket.status}
                </div>
              </div>
              <div className="w-[50%] flex flex-row-reverse lg:flex-row text-right lg:text-left">
                <div>
                  <p className="text-sm">Priority : </p>
                  <div className="px-5 py-1 border text-xs font-medium w-24">
                    {ticket.priority}
                  </div>
                </div>
              </div>
            </div>
            {/* ........  */}

            <div>
              <p>Overview : </p>
              <p className="text-sm text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
          {/* ticket details */}

          {/* Attachments */}
          <div className="p-4 bg-white mt-5 flex-1 lg:flex-auto ">
            <p className="text-gray-500 font-medium">Attachments</p>
            <div className="flex gap-2 flex-col mt-4">
              {/* pdf */}
              <div className="border p-3 rounded-md flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="bg-violet-100 text-xs text-violet-600 rounded-md font-medium p-2">
                    pdf
                  </span>
                  <span className="text-xs font-medium text-gray-400">
                    <p className="truncate">invoice-dec-2019.pdf</p>
                    <p>2.3 MB</p>
                  </span>
                </div>
                <FiDownload className="text-gray-400 ml-2" />
              </div>
              {/* pdf */}
              {/* pdf */}
              <div className="border p-3 rounded-md flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="bg-violet-100 text-xs text-violet-600 rounded-md font-medium p-2">
                    pdf
                  </span>
                  <span className="text-xs font-medium text-gray-400">
                    <p>invoice-dec-2019.pdf</p>
                    <p>2.3 MB</p>
                  </span>
                </div>
                <FiDownload className="text-gray-400" />
              </div>
              {/* pdf */}
              {/* pdf */}
              <div className="border p-3 rounded-md flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="bg-violet-100 text-xs text-violet-600 rounded-md font-medium p-2">
                    pdf
                  </span>
                  <span className="text-xs font-medium text-gray-400">
                    <p>invoice-dec-2019.pdf</p>
                    <p>2.3 MB</p>
                  </span>
                </div>
                <FiDownload className="text-gray-400" />
              </div>
              {/* pdf */}
            </div>
          </div>
          {/* Attachments */}
        </div>
        {/* Discussions */}
        <div className="p-4 bg-white mt-5 lg:w-[75%]">
          <div className="flex items-center justify-between">
            <p className="text-gray-800 font-medium">Discussions(68)</p>
            <select
              name=""
              id=""
              className="outline-none border p-1 text-gray-400"
            >
              <option value="">Recent</option>
            </select>
          </div>
          <div className="flex gap-5 flex-col mt-4">
            {/* comment */}
            <div className=" flex justify-between items-center">
              <div className="flex gap-3">
                <span className="mt-1">
                  <img
                    class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                </span>
                <span className="space-y-2">
                  <p className="text-sm font-medium">Jonathan Andrews</p>
                  <p className="text-gray-400 text-xs">
                    Nice work, makes me think of the money pit.
                  </p>
                  <p className="text-gray-400 text-xs flex items-center gap-1">
                    <span>
                      <FaReply />
                    </span>
                    Replay
                  </p>
                </span>
              </div>
              <p className="text-xs text-gray-400 font-medium">3 hours ago</p>
            </div>
            {/* comment */}
            {/* comment */}
            <div className=" flex justify-between items-center">
              <div className="flex gap-3">
                <span className="mt-1">
                  <img
                    class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                </span>
                <span className="space-y-2">
                  <p className="text-sm font-medium">Jonathan Andrews</p>
                  <p className="text-gray-400 text-xs">
                    Nice work, makes me think of the money pit.
                  </p>
                  <p className="text-gray-400 text-xs flex items-center gap-1">
                    <span>
                      <FaReply />
                    </span>
                    Replay
                  </p>
                </span>
              </div>
              <p className="text-xs text-gray-400 font-medium">3 hours ago</p>
            </div>
            {/* comment */}
            {/* comment */}
            <div className=" flex justify-between items-center">
              <div className="flex gap-3">
                <span className="mt-1">
                  <img
                    class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                </span>
                <span className="space-y-2">
                  <p className="text-sm font-medium">Jonathan Andrews</p>
                  <p className="text-gray-400 text-xs">
                    Nice work, makes me think of the money pit.
                  </p>
                  <p className="text-gray-400 text-xs flex items-center gap-1">
                    <span>
                      <FaReply />
                    </span>
                    Replay
                  </p>
                </span>
              </div>
              <p className="text-xs text-gray-400 font-medium">3 hours ago</p>
            </div>
            {/* comment */}
          </div>
        </div>
        {/* Discussions--- */}
      </main>
    </>
  );
};

export default TicketDetails;
