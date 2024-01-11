import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { IoMdAddCircle } from "react-icons/io";

const AddTickets = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
<button onClick={onOpenModal} className="text-xs px-2 py-1 flex items-center gap-1 rounded-md text-white bg-blue-600">
              <IoMdAddCircle />
              Add Ticket
            </button>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={"bg-red-400"}
        center
      >
        <div className="flex   flex-1 flex-col justify-center  lg:px-8">
          <div className="">
            <h2 className="mt-5 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
              Add ticket
            </h2>
          </div>

          <div className="mt-2 w-64 md:w-96">
            <form className="space-y-4" action="#" method="POST">
              <div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Requested By"
                    className="outline-none w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Assigned To"
                    className="outline-none w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <textarea
                    id="password"
                    name="password"
                    placeholder="Subject"
                    autoComplete="current-password"
                    required
                    className="outline-none w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Due Date
                </label>
                <div className="mt-2">
                  <input
                    id="date"
                    type="date"
                    required
                    placeholder="Due Date"
                    className="outline-none w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add
                </button>
              </div>
            </form>

            <p className="mt-5 text-center text-sm hover:underline text-gray-500">
              Cancel
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddTickets;
