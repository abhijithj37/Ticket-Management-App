import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { toast } from "sonner";
import { updaTeTicket } from "../features/tickets/ticketsSlice";

const UpdateStatusModal = ({ currentStatus, ticketId }) => {
  const [open, setOpen] = useState(false);
  const [newStatus, setNewStatus] = useState(currentStatus || "");
  const dispatch = useDispatch();
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    if (!newStatus.trim()) return toast.error("Please select a status!");
    if (newStatus.trim() === currentStatus)
      return toast.error("Please select a new status to update!");
    await dispatch(updaTeTicket({ id: ticketId, status: newStatus })).unwrap();
    toast.success("Status succesfully updated");
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={onOpenModal}
        className="text-xs px-2 py-1 flex items-center gap-1 rounded-md text-white bg-violet-500"
      >
        Update
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="flex   flex-1 flex-col justify-center  lg:px-8">
          <div className="">
            <h2 className="mt-5 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
              Update Staus
            </h2>
          </div>

          <div className="mt-2 w-64 md:w-96">
            <form className="space-y-4" onSubmit={handleUpdateStatus}>
              <div>
                <div className="mt-2">
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    required
                    className="outline-none w-full px-3 py-3 rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="" className="text-gray-400">
                      Select Status
                    </option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                    <option value="In Progress">In Progress</option>
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
