import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { IoMdAddCircle } from "react-icons/io";

const UpdateStatusModal = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
<button onClick={onOpenModal} className="text-xs px-2 py-1 flex items-center gap-1 rounded-md text-white bg-blue-600">
              <IoMdAddCircle />
              Update
            </button>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
      >
        <div className="flex   flex-1 flex-col justify-center  lg:px-8">
          <div className="">
            <h2 className="mt-5 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
              Update Staus
            </h2>
          </div>

          <div className="mt-2 w-64 md:w-96">
            <form className="space-y-4" action="#" method="POST">
               
               
              <div>
                 
                <div className="mt-2">
                  <select
                    required
                    className="outline-none w-full px-3 py-3 rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select Status</option>
                    <option value="">Open</option>
                    <option value="">Closed</option>
                    <option value="">In Progress</option>
                  </select>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
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

export default UpdateStatusModal;
