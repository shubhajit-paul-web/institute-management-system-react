import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	classes: [],
	filteredClasses: [],
};

const classesSlice = createSlice({
	name: "Classes",
	initialState,
	reducers: {
		addClass: (state, {payload}) => {
			if (Array.isArray(payload)) {
				state.classes = payload;
				state.filteredClasses = payload;
			} else {
				state.classes.push(payload);
				state.filteredClasses.push(payload);
			}
		},
		searchClasses: (state, {payload}) => {
			const query = payload?.toLowerCase()?.trim();
			
			state.filteredClasses = state.classes.filter((classDetails) => classDetails.classTopic.toLowerCase().includes(query) || classDetails.course.toLowerCase().includes(query));
		},
	},
});

export const {addClass, searchClasses} = classesSlice.actions;
export default classesSlice.reducer;