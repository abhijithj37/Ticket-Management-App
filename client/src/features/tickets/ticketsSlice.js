import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";

const TICKETS_URL = "http://localhost:3500/api/tickets";

const ticketsAdapter = createEntityAdapter();
const initialState = ticketsAdapter.getInitialState({
  totalTickets: 0,
  ticket: {},
  ticketStatus:{}
});

export const addNewTicket = createAsyncThunk(
  "tickets/addNewTicket",
  async (data) => {
    try {
      const response = await axios.post(TICKETS_URL, data);
      return response.data;
    } catch (error) {
      let errMessage = error.response?.data?.message;
      if (errMessage) {
        toast.error(errMessage);
      } else {
        toast.error("Fail to add ticket please try  again later!");
      }
    }
  }
);
export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async ({ page, limit }) => {
    try {
      const response = await axios.get(
        `${TICKETS_URL}?page=${page}&pageSize=${limit}`
      );
      return response.data;
    } catch (error) {
      console.log("Error fetching tickets", error);
    }
  }
);
export const fetchTicketsCount = createAsyncThunk(
  "tickets/fetchTicketsCount",
  async () => {
    try {
      const response = await axios.get(`${TICKETS_URL}/count`);
      return response.data;
    } catch (error) {
      console.log("Error fetching tickets count", error);
    }
  }
);

export const fetchStatusCount = createAsyncThunk(
    "tickets/fetchStatusCount",
    async () => {
      try {
        const response = await axios.get(`${TICKETS_URL}/status-count`);
        return response.data;
      } catch (error) {
        console.log("Error fetching status count", error);
      }
    }
  );

export const fetchTicketById = createAsyncThunk(
  "tickets/fetchTicketById",
  async ({ id }) => {
    try {
      const response = await axios.get(`${TICKETS_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.log("Error fetching ticket", error);
    }
  }
);

export const updaTeTicket = createAsyncThunk(
    "tickets/updateTicket",
    async ({ id ,status}) => {
      try {
        const response = await axios.patch(`${TICKETS_URL}/${id}`,{status});
        return response.data;
      } catch (error) {
        console.log("Error Updating status", error);
      }
    }
  );

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addNewTicket.fulfilled, (state, action) => {
        state.totalTickets = Number(state.totalTickets) + 1;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        ticketsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchTicketsCount.fulfilled, (state, action) => {
        state.totalTickets = action.payload;
      })
      .addCase(fetchTicketById.fulfilled, (state, action) => {
        state.ticket = action.payload[0];
      }).addCase(updaTeTicket.fulfilled,(state,action)=>{
        state.ticket=action.payload[0]
        ticketsAdapter.updateOne(state,action.payload[0])
      }).addCase(fetchStatusCount.fulfilled,(state,action)=>{
         const ticketStatus=action.payload?.reduce((result,{status,total_tickets})=>{
         result[status]=total_tickets
         return result
         },{})
         state.ticketStatus=ticketStatus
      })
  },
});

export const { selectAll } = ticketsAdapter.getSelectors(
  (state) => state.tickets
);

export const getTicketsCount = (state) => state.tickets.totalTickets;
export const getTicket = (state) => state.tickets.ticket;
export const getTicketStatus = (state) => state.tickets.ticketStatus;

export default ticketsSlice.reducer;
