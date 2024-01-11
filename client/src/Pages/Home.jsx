import NavBar from "../Components/NavBar";
import { BsTags } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";
import { useState } from "react";
import AddTickets from "../Components/AddTickets";


const Home = () => {
  const [data, setData] = useState([1, 2,3,4,5]);

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
              <h1 className="font-medium text-lg">3947</h1>
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
              <h1 className="font-medium text-lg">3947</h1>
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
              <h1 className="font-medium text-lg">3947</h1>
              <p className="text-sm text-slate-400">Total Tickets</p>
            </span>
          </div>
          {/* grid--- */}
          {/* grid */}
          <div className="flex items center justify-between px-5 py-5 bg-white rounded-sm">
            <span className="bg-red-500 text-white flex w-14 rounded-full justify-center  h-14 items-center">
              <RiDeleteBinLine size={20} />
            </span>
            <span className="flex flex-col gap-1 text-right">
              <h1 className="font-medium text-lg">3947</h1>
              <p className="text-sm text-slate-400">Total Tickets</p>
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
            <AddTickets/>
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
          <div class="overflow-auto hidden md:block mt-6">
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
                {data.map(() => {
                  return (
                    <tr class="bg-white text-center">
                      <td class="p-3 text-sm text-gray-500 whitespace-nowrap border border-collapse">
                        <a
                          href="#"
                          class="font-bold text-blue-500 hover:underline"
                        >
                          #1
                        </a>
                      </td>
                      <td class=" text-xs text-gray-500 whitespace-nowrap border border-collapse">
                        Abhijith J
                      </td>
                      <td class=" text-xs text-gray-500 whitespace-nowrap border border-collapse ">
                        New Submission on your website
                      </td>
                      <td class=" text-xs text-gray-500 whitespace-nowrap border border-collapse">
                        Anirudh P
                      </td>
                      <td class=" text-xs text-gray-700 whitespace-nowrap border border-collapse">
                        <span class="px-1.5 py-0.5 text-xs font-medium tracking-wide text-orange-500 bg-yellow-200 rounded-md bg-opacity-50">
                          Medium
                        </span>
                      </td>
                      <td class=" text-xs text-gray-700 whitespace-nowrap border border-collapse">
                        <span class="px-1.5 py-0.5 text-xs font-medium  tracking-wide text-white bg-emerald-500 rounded-md ">
                          Open
                        </span>
                      </td>
                      <td class=" text-xs text-gray-500 whitespace-nowrap border border-collapse">
                        2014-04-28
                      </td>
                      <td class=" text-xs text-gray-500 whitespace-nowrap border border-collapse">
                        2014-04-28
                      </td>
                      <td class=" text-sm tracking-wider text-gray-700 whitespace-nowrap border border-collapse">
                        <div className="text-lg font-medium">...</div>
                      </td>
                    </tr>
                  );
                })}

                {/* row */}
              </tbody>
            </table>
          </div>

          {/* Table ON sm */}

          <div class="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-4 md:hidden">
            {/* grid-table */}

            {data.map(() => {
              return (
                <div class="bg-white space-y-3 p-4 rounded-lg shadow">
                  <div className="flex items-center justify-between">
                    <div class="flex items-center space-x-2 text-sm">
                      <div>
                        <a
                          href="#"
                          class="text-blue-500 font-bold hover:underline"
                        >
                          #10
                        </a>
                      </div>
                      <div class="text-gray-500">10/10/2021</div>
                      <div>
                        <span class="px-1.5 py-0.5 text-xs font-medium tracking-wide text-white bg-emerald-500 rounded-md ">
                          Open
                        </span>
                      </div>
                    </div>
                    <SlOptions />
                  </div>
                  <div class="text-sm text-gray-700 font-medium">
                    New submission on your website
                  </div>
                  <div class="text-sm text-gray-400">
                    Requested By: <span className="text-gray-700">Abhi</span>
                  </div>
                  <div class="text-sm text-gray-400">
                    Assigned To: <span className="text-gray-700">Abhijith</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-gray-700">
                      11-10-2023 <span className="text-gray-400">(Due)</span>{" "}
                    </p>
                    <p className="text-sm text-gray-400">
                      {" "}
                      Priority:{" "}
                      <span class="px-1.5 py-0.5 text-xs font-medium tracking-wide text-orange-500 bg-yellow-200 rounded-md bg-opacity-50">
                        Medium
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
          <div className="flex justify-between items-center mt-5">
            <div className="flex gap-4 text-xs text-gray-500 items-center">
              <span>
                <label htmlFor="">Display : </label>
                <select name="" className="outline-none w-14 border p-1" id="">
                  <option value="">10</option>
                  <option value="">10</option>
                </select>
              </span>
              <p>
                Page <span className="font-medium">1 of 2</span>
              </p>
            </div>
            <div>Pagination</div>
          </div>

          {/* Pagination--- */}
        </div>

        {/* Data Table--- */}
      </main>
    </>
  );
};

export default Home;
