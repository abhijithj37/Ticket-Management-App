import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { IoMdAddCircle } from "react-icons/io";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { addNewTicket } from "../features/tickets/ticketsSlice";

const AddTickets = () => {
  const [open, setOpen] = useState(false);
  const [requested_by,setRequestedBy]=useState('')
  const [assignee,setAssignee]=useState('')
  const [subject,setSubject]=useState('')
  const [due_date,setDueDate]=useState('')
  const [priority,setPriority]=useState('')
  
  const dispatch=useDispatch()
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleDiscard=()=>{
    setRequestedBy('')
    setAssignee('')
    setSubject('')
    setDueDate('')
    setPriority('')
    setOpen(false)
  }

  const handleAddTicket=async(e)=>{
    e.preventDefault()
    if(!requested_by.trim() ||!assignee.trim() ||!subject.trim() ||!due_date.trim() ||!priority.trim()){
      return toast.error('Please fill all the feilds!')
    }
    await dispatch(addNewTicket({requested_by,assignee,subject,due_date,priority})).unwrap()
    toast.success('Your ticket has been created')
    handleDiscard()
  }
 
  return (
    <div>
      <button
        onClick={onOpenModal}
        className="text-xs px-2 py-1 flex items-center gap-1 rounded-md text-white bg-blue-600"
      >
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
            <form className="space-y-4" onSubmit={handleAddTicket}>
              <div>
                <div className="mt-2">
                  <input
                    type="text"
                    required
                    onChange={(e)=>setRequestedBy(e.target.value)}
                    placeholder="Requested By"
                    className="outline-none w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <input
                    type="text"
                    required
                    onChange={(e)=>setAssignee(e.target.value)}
                    placeholder="Assigned To"
                    className="outline-none w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <select
                  onChange={(e)=>setPriority(e.target.value)}
                    required
                    className="outline-none w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option  value="">Select a Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <textarea
                    placeholder="Subject"
                    required
                    onChange={(e)=>setSubject(e.target.value)}
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
                    type="date"
                    required
                    onChange={(e)=>setDueDate(e.target.value)}
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

            <p onClick={handleDiscard} className="mt-5 text-center text-sm hover:underline text-gray-500">
              Cancel
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddTickets;
