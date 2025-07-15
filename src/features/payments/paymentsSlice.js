import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	payments: [],
	filteredPayments: [],
};

const paymentsSlice = createSlice({
	name: "payments",
	initialState,
	reducers: {
		addPayment: (state, {payload}) => {
			if (Array.isArray(payload)) {
				state.payments = payload;
				state.filteredPayments = payload;
			} else {
				state.payments.push(payload);
				state.filteredPayments.push(payload);
			}
		},
		searchPayments: (state, {payload}) => {
			const query = payload?.toLowerCase()?.trim();

			state.filteredPayments = state.payments.filter((payment) => payment?.studentName?.toLowerCase()?.includes(query) || payment?.studentId?.toLowerCase()?.includes(query));
		},
	},
});

export const {addPayment, searchPayments} = paymentsSlice.actions;
export default paymentsSlice.reducer;
