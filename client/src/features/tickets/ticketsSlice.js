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
      });
  },
});


export const { selectAll, selectById, selectIds } = ticketsAdapter.getSelectors(
  (state) => state.tickets
);

export const getTicketsCount = (state) => state.tickets.totalTickets;

export default ticketsSlice.reducer;
