import {createSlice} from "@reduxjs/toolkit";

export const toggleModelSlice = createSlice({
	name: "toggleModelSlice",
	initialState: {
		studentModel: false,
		courseModel: false,
		classModel: false,
		paymentModel: false,
		closeModel: false,
	},
	reducers: {
		openStudentModel: (state, action) => {
			state.studentModel = action;
		},
		openCourseModel: (state, action) => {
			state.courseModel = action;
		},
		openClassModel: (state, action) => {
			state.classModel = action;
		},
		openPaymentModel: (state, action) => {
			state.paymentModel = action;
		},
		closeModel: (state) => {
			state.studentModel = false;
			state.courseModel = false;
			state.classModel = false;
			state.paymentModel = false;
		},
	},
});

export const {openStudentModel, openCourseModel, openClassModel, closeModel, openPaymentModel} = toggleModelSlice.actions;
export default toggleModelSlice.reducer;
