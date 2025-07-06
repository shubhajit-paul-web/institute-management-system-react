import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	students: [],
	filteredStudents: [],
};

export const studentsSlice = createSlice({
	name: "students",
	initialState,
	reducers: {
		addStudent: (state, {payload}) => {
			if (Array.isArray(payload)) {
				state.students = payload;
				state.filteredStudents = payload;
			} else {
				state.students.push(payload);
				state.filteredStudents.push(payload);
			}
		},
		removeStudent: (state, action) => {
			state = state.students.filter((student) => student.id !== action.payload);
		},
		searchStudents: (state, action) => {
			const query = action.payload?.toLowerCase()?.trim();

			state.filteredStudents = state.students.filter((student) => {
				return student?.studentName?.toLowerCase()?.includes(query) || student?.email?.toLowerCase()?.includes(query);
			});
		},
	},
});

export const {addStudent, removeStudent, searchStudents} = studentsSlice.actions;
export default studentsSlice.reducer;
