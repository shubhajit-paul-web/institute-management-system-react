import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	courses: [],
	filteredCourses: [],
};

export const coursesSlice = createSlice({
	name: "courses",
	initialState,
	reducers: {
		addCourse: (state, {payload}) => {
			if (Array.isArray(payload)) {
				state.courses = payload;
				state.filteredCourses = payload;
			} else {
				state.courses.push(payload);
			}
		},
		removeCourse: (state, action) => {
			const courseID = action.payload;
			return state.filter((course) => course.id !== courseID);
		},
		searchCourses: (state, action) => {
			const query = action.payload?.toLowerCase()?.trim();

			state.filteredCourses = state.courses.filter((course) => course?.title?.toLowerCase()?.includes(query));
		},
	},
});

export const {addCourse, removeCourse, searchCourses} = coursesSlice.actions;
export default coursesSlice.reducer;
