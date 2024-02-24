import { configureStore } from "@reduxjs/toolkit";
import { smsSlice } from "./store/SmsSlice";

export const store = configureStore({
    reducer:{smsSlice : smsSlice.reducer},
});