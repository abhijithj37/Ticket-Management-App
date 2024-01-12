import NavBar from "../Components/NavBar";
import { BsTags } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import { useEffect} from "react";
import AddTickets from "../Components/AddTickets";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStatusCount,
  fetchTickets,
  fetchTicketsCount,
  getTicketStatus,
  getTicketsCount,
  selectAll,
} from "../features/tickets/ticketsSlice";
import useLocalStorage from "../hooks/useLocalStorage";
import ReactPaginate from 'react-paginate'
import { useNavigate } from "react-router-dom";
import { TbTicketOff } from "react-icons/tb";


const Home = () => {
  const [page, setPage] = useLocalStorage("page", 1);
  const [limit, setLimit] = useLocalStorage("limit", 5);
  const ticketsCount = useSelector(getTicketsCount);
  const pageCount = Math.ceil(ticketsCount / limit);
  const tickets = useSelector(selectAll);
  const ticketStatus=useSelector(getTicketStatus)
  const dispatch = useDispatch();
  const navigate=useNavigate()

  useEffect(() => {
    dispatch(fetchTickets({ page, limit }));
  },[page,limit,ticketsCount]);
  useEffect(()=>{
  dispatch(fetchTicketsCount())
  },[])
  useEffect(()=>{
  dispatch(fetchStatusCount())
  },[ticketsCount])
  
  const handlePageClick = (e) => {
  setPage(e.selected + 1);
  };

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
        {/* Grids */}
        <div className="grid grid-rows-4 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-3 mt-4 md:gap-4">
          {/* grid */}
          <div className="flex items center justify-between px-5 py-5 bg-white rounded-sm">
            <span className="bg-violet-600 text-white flex w-14 rounded-full justify-center  h-14 items-center">
              <BsTags size={20} />
            </span>
            <span className="flex flex-col gap-1 text-right">
              <h1 className="font-medium text-lg">{ticketsCount}</h1>
              <p className="text-sm text-slate-400">Total Tickets</p>
            </span>
          </div>
          {/* grid--- */}
          {/* grid */}
          <div className="flex items center justify-between px-5 py-5 bg-white rounded-sm">
            <span className="bg-yellow-400 text-white flex w-14 rounded-full justify-center  h-14 items-center">
              <FiClock size={20} />
            </span>
            <span className="flex flex-col gap-1 text-right">
              <h1 className="font-medium text-lg">{ticketStatus['In Progress']??0}</h1>
              <p className="text-sm text-slate-400">Pending Tickets</p>
            </span>
          </div>
          {/* grid--- */}
          {/* grid */}
          <div className="flex items center justify-between px-5 py-5 bg-white rounded-sm">
            <span className=" bg-emerald-500	 text-white flex w-14 rounded-full justify-center  h-14 items-center">
              <FiCheckCircle size={20} />
            </span>
            <span className="flex flex-col gap-1 text-right">
              <h1 className="font-medium text-lg">{ticketStatus['Open']??0}</h1>
              <p className="text-sm text-slate-400">Open Tickets</p>
            </span>
          </div>
          {/* grid--- */}
          {/* grid */}
          <div className="flex items center justify-between px-5 py-5 bg-white rounded-sm">
            <span className="bg-red-500 text-white flex w-14 rounded-full justify-center  h-14 items-center">
              <TbTicketOff size={20} />
            </span>
            <span className="flex flex-col gap-1 text-right">
              <h1 className="font-medium text-lg">{ticketStatus['Closed']??0}</h1>
              <p className="text-sm text-slate-400">Closed Tickets</p>
            </span>
          </div>
          {/* grid--- */}
        </div>
        {/* Grids--- */}

        {/* Data Table */}

        <div className="mt-5 bg-white px-4 py-6 min-h-[525px]">
          {/* head */}
          <div className="flex justify-between items-center">
            <p className="font-medium text-sm">Manage Tickets</p>
            <AddTickets />
          </div>
          {/* head-- */}
          {/* search */}
          <div className="flex mt-7 gap-1 items-center ">
            <label htmlFor="search" className="text-sm text-gray-500">
              Search :
            </label>
            <input
              type="search"
              id="search"
              className="p-1 outline-none border rounded-md placeholder:text-sm"
              placeholder="15 records..."
            />
          </div>
          {/* search ---*/}

          {/* Table */}
          <div class="overflow-auto hidden md:block mt-6 min-h-80">
            <table class="w-full border border-collapse">
              <thead class="bg-sky-50 text-center">
                <tr>
                  <th class=" p-3 text-sm font-semibold  border border-collapse">
                    ID
                  </th>
                  <th class=" text-sm font-semibold   border border-collapse">
                    Requested By
                  </th>
                  <th class=" text-sm font-semibold   border border-collapse">
                    Subject
                  </th>
                  <th class=" text-sm font-semibold  border border-collapse">
                    Assignee
                  </th>
                  <th class=" text-sm font-semibold     border border-collapse">
                    Priority
                  </th>
                  <th class=" text-sm font-semibold     border border-collapse">
                    Status
                  </th>
                  <th class=" text-sm font-semibold     border border-collapse">
                    Created Date
                  </th>
                  <th class=" text-sm font-semibold     border border-collapse">
                    Due Date
                  </th>
                  <th class=" text-sm font-semibold     border border-collapse">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                {/* row */}
                {tickets?.map((e) => {
                  return (
                    <tr key={e.id} class="bg-white text-center">
                      <td class="p-3 text-sm text-gray-500 whitespace-nowrap border border-collapse">
                        <a
                          href="#"
                          class="font-bold text-blue-500 hover:underline"
                        >
                          #{e.id}
                        </a>
                      </td>
                      <td class=" text-xs text-gray-500 whitespace-nowrap border border-collapse">
                        {e.requested_by}
                      </td>
                      <td class=" text-xs text-gray-500 whitespace-nowrap border border-collapse ">
                        {e.subject}
                      </td>
                      <td class=" text-xs text-gray-500 whitespace-nowrap border border-collapse">
                        {e.assignee}
                      </td>
                      <td class=" text-xs text-gray-700 whitespace-nowrap border border-collapse">
                        <span class={`px-1.5 py-0.5 text-xs font-medium tracking-wide ${e.priority==='Medium'?'text-orange-500 bg-yellow-200':e.priority==='Low'?'text-gray-500 bg-gray-200':'text-red-500 bg-red-200'} rounded-md bg-opacity-50`}>
                          {e.priority}
                        </span>
                      </td>
                      <td class=" text-xs text-gray-700 whitespace-nowrap border border-collapse">
                        <span class={`px-1.5 py-0.5 text-xs font-medium  tracking-wide text-white ${e.status==='Open'?'bg-emerald-500':e.status==='Closed'?'bg-slate-500':'bg-blue-500'}  rounded-md`}>
                          {e.status}
                        </span>
                      </td>
                      <td class=" text-xs text-gray-500 whitespace-nowrap border border-collapse">
                        {new Date(e.created_date).toLocaleDateString('en-GB')}
                      </td>
                      <td class=" text-xs text-gray-500 whitespace-nowrap border border-collapse">
                        {new Date(e.due_date).toLocaleDateString('en-GB')}
                      </td>
                      <td class=" text-sm tracking-wider text-gray-700 whitespace-nowrap border border-collapse">
                        <div className="text-lg font-medium cursor-pointer hover:text-sm" onClick={()=>navigate(`/${e.id}`)}>...</div>
 
                      </td>
                    </tr>
                  );
                })}

                {/* row */}
              </tbody>
            </table>
            {!tickets.length?<p className="text-gray-400 text-center mt-16">No tickets to display !</p>:<></>}
          </div>
           
          {/* Table ON sm */}
          {!tickets.length?<p className="text-gray-400 text-center mt-16 md:hidden">No tickets to display !</p>:<></>}
          <div class="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-4 md:hidden min-h-72">

            {/* grid-table */}
            {tickets.map((e) => {
              return (
                <div
                  key={e.id}
                  class="bg-white space-y-3 p-4 rounded-lg shadow"
                >
                  <div className="flex items-center justify-between">
                    <div class="flex items-center space-x-2 text-sm">
                      <div>
                        <a
                          href="#"
                          class="text-blue-500 font-bold hover:underline"
                        >
                          #{e.id}
                        </a>
                      </div>
                      <div class="text-gray-500">{new Date(e.created_date).toLocaleDateString('en-GB')}</div>
                      <div>
                        <span class={`px-1.5 py-0.5 text-xs font-medium tracking-wide text-white ${e.status==='Open'?'bg-emerald-500':e.status==='Closed'?'bg-slate-500':'bg-blue-500'} rounded-md `}>
                          {e.status}
                        </span>
                      </div>
                    </div>
                    <SlOptions className="text-gray-700 cursor-pointer hover:size-5" onClick={()=>navigate(`/${e.id}`)} />
                  </div>
                  <div class="text-sm text-gray-700 font-medium">
                    {e.subject}
                  </div>
                  <div class="text-sm text-gray-400">
                    Requested By: <span className="text-gray-700">{e.requested_by}</span>
                  </div>
                  <div class="text-sm text-gray-400">
                    Assigned To: <span className="text-gray-700">{e.assignee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-gray-700">
                      {new Date(e.due_date).toLocaleDateString('en-GB')}<span className="text-gray-400">(Due)</span>{" "}
                    </p>
                    <p className="text-sm text-gray-400">
                      {" "}
                      Priority:{" "}
                      <span class={`${e.priority==='Medium'?'text-orange-500 bg-yellow-200':e.priority==='Low'?'text-gray-500 bg-gray-200':'text-red-500 bg-red-200'} px-1.5 py-0.5 text-xs font-medium tracking-wide rounded-md bg-opacity-50`}>
                        {e.priority}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}

            {/* grid-table */}
          </div>

          {/* Table on SM----- */}

          {/* Pagination */}
    {tickets.length?  <div className="flex justify-between items-center mt-5">
            <div className="flex gap-4 text-xs text-gray-500 items-center">
              <span>
                <label htmlFor="">Display : </label>
                <select name="" className="outline-none w-14 border p-1" id="" value={limit} onChange={(e)=>setLimit(e.target.value)}>
                <option value={5}>5  </option>
               <option value={8}>8  </option>
               <option value={12}>12  </option>
                <option value={15}>15  </option>
                </select>
              </span>
              <p>
                Page <span className="font-medium">{page} of {pageCount}</span>
              </p>
            </div>
            <div>
              {/* Pagination ui */}
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName="flex gap-2"
                pageClassName="rounded-full text-violet-500  w-6 text-center  h-6 flex item-center justify-center hover:bg-violet-500 hover:text-white"
                pageLinkClassName="text-sm text-center"
                previousClassName="text-sm text-gray-400"
                nextClassName="text-sm text-gray-400"
                breakLinkClassName="text-gray-400"
                activeClassName="bg-violet-500"
                activeLinkClassName="text-white"
                forcePage={page - 1}
              />
            </div>
          </div>:<></>}

          {/* Pagination--- */}
        </div>

        {/* Data Table--- */}
      </main>
    </>
  );
};

export default Home;
