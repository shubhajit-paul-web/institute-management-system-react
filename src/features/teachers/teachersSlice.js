import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	teachers: [],
	filteredTeachers: [],
};

const teachersSlice = createSlice({
	name: "teachers",
	initialState,
	reducers: {
		addTeacher: (state, {payload}) => {
			if (Array.isArray(payload)) {
				state.teachers = payload;
				state.filteredTeachers = payload;
			} else {
				state.teachers.push(payload);
				state.filteredTeachers.push(payload);
			}
		},
		removeTeacher: (state, action) => {
			state.teachers = state.teachers.filter((teacher) => teacher.id !== action.payload);
			state.filteredTeachers = state.filteredTeachers.filter((teacher) => teacher.id !== action.payload);
		},
		searchTeachers: (state, action) => {
			const query = action.payload?.toLowerCase()?.trim();

			state.filteredTeachers = state.teachers.filter((teacher) => {
				return teacher?.teacherName?.toLowerCase()?.includes(query) || teacher?.email?.toLowerCase()?.includes(query);
			});
		},
	},
});

export const {addTeacher, removeTeacher, searchTeachers} = teachersSlice.actions;
export default teachersSlice.reducer;
