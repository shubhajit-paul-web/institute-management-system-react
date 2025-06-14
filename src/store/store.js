import {configureStore} from "@reduxjs/toolkit";
import studentsReducer from "../features/students/studentsSlice";
import toggleViewReducer from "../features/toggleModelView/toggleModelSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
	reducer: {
		studentsReducer,
		toggleViewReducer,
		authReducer,
	},
});
