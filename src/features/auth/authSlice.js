import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		status: false,
		instituteDetails: null,
	},
	reducers: {
		login: (state, action) => {
			state.status = true;
			state.instituteDetails = action.payload;
		},
		logout: (state) => {
			state.status = false;
			state.instituteDetails = null;
		},
	},
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
