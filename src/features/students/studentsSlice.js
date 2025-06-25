import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	students: [],
	filteredStudents: [],
};

export const studentsSlice = createSlice({
	name: "students",
	initialState,
	reducers: {
		addStudent: (state, action) => {
			if (Array.isArray(action.payload)) {
				state.students = action.payload;
				state.filteredStudents = action.payload;
			} else {
				state.students.push(action.payload);
			}
		},
		removeStudent: (state, action) => {
			state = state.students.filter((student) => student.id !== action.payload);
		},
		searchStudents: (state, action) => {
			const query = action.payload?.toLowerCase()?.trim();

			if (query) {
				state.filteredStudents = state.students.filter((student) => {
					return student?.studentName?.toLowerCase()?.includes(query) || student?.email?.toLowerCase()?.includes(query);
				});
			} else {
				state.filteredStudents = [...state.students];
			}
		},
	},
});

export const {addStudent, removeStudent, searchStudents} = studentsSlice.actions;
export default studentsSlice.reducer;
