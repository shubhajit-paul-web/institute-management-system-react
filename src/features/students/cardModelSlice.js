import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpened: false,
    studentData: null,
}

const cardModelSlice = createSlice({
    name: "cardModel",
    initialState,
    reducers: {
        openModel: (state, action) => {
            state.isOpened = true;
            state.studentData = action.payload;
        },
        closeModel: (state) => {
            state.isOpened = false;
            state.studentData = null; // Clear data on close
        }
    }
});

export const {openModel, closeModel} = cardModelSlice.actions;
export default cardModelSlice.reducer;