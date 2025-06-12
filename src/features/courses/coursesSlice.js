import {createSlice, nanoid} from "@reduxjs/toolkit";

export const coursesSlice = createSlice({
	name: "courses",
	initialState: [],
	reducers: {
		addCourse: (state, action) => {
			state.push({
				id: nanoid(),
				courseInfo: action.payload,
			});
		},
		removeCourse: (state, action) => {
			const courseID = action.payload;

			return state.filter((course) => course.id !== courseID);
		},
	},
});

export const {addCourse, removeCourse} = coursesSlice.actions;
export default coursesSlice.reducer;
