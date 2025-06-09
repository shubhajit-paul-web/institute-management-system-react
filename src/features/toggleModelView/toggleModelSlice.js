import {createSlice} from "@reduxjs/toolkit";

export const toggleModelSlice = createSlice({
	name: "toggleModelSlice",
	initialState: false,
	reducers: {
		openModel: () => true,
		closeModel: () => false,
	},
});

export const {openModel, closeModel} = toggleModelSlice.actions;
export default toggleModelSlice.reducer;
