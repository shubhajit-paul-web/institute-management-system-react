import {createSlice} from "@reduxjs/toolkit";

export const toggleModelSlice = createSlice({
	name: "toggleModelSlice",
	initialState: {
		studentModel: false,
		courseModel: false,
		classModel: false,
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
		closeModel: (state) => {
			state.studentModel = false;
			state.courseModel = false;
			state.classModel = false;
		},
	},
});

export const {openStudentModel, openCourseModel, openClassesModel, closeModel} = toggleModelSlice.actions;
export default toggleModelSlice.reducer;
