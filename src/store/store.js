import {configureStore} from "@reduxjs/toolkit";
import coursesReducer from "../features/courses/coursesSlice";
import authReducer from "../features/auth/authSlice";
import studentsReducer from "../features/students/studentsSlice";
import toggleViewReducer from "../features/toggleModelView/toggleModelSlice";
import classesReducer from "../features/classes/classesSlice";

export const store = configureStore({
	reducer: {
		authReducer,
		studentsReducer,
		coursesReducer,
		classesReducer,
		toggleViewReducer,
	},
});
