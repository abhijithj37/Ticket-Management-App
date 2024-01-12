import ticketsSlice from "../features/tickets/ticketsSlice";
import { configureStore } from '@reduxjs/toolkit'


export const store=configureStore({
    reducer:{
    tickets:ticketsSlice
    }
})