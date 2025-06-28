import {configureStore} from "@reduxjs/toolkit";
import coursesReducer from "../features/courses/coursesSlice";
import studentsReducer from "../features/students/studentsSlice";
import toggleViewReducer from "../features/toggleModelView/toggleModelSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
	reducer: {
		studentsReducer,
		coursesReducer,
		toggleViewReducer,
		authReducer,
	},
});
