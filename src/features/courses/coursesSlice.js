import {createSlice} from "@reduxjs/toolkit";

export const coursesSlice = createSlice({
	name: "courses",
	initialState: [],
	reducers: {
		addCourse: (state, {payload}) => {
			if (Array.isArray(payload)) {
				state.push(...payload);
			} else {
				state.push(payload);
			}
		},
		removeCourse: (state, action) => {
			const courseID = action.payload;

			return state.filter((course) => course.id !== courseID);
		},
	},
});

export const {addCourse, removeCourse} = coursesSlice.actions;
export default coursesSlice.reducer;
