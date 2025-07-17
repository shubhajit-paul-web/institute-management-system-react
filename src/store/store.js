import {configureStore} from "@reduxjs/toolkit";
import coursesReducer from "../features/courses/coursesSlice";
import authReducer from "../features/auth/authSlice";
import studentsReducer from "../features/students/studentsSlice";
import toggleViewReducer from "../features/toggleModelView/toggleModelSlice";
import classesReducer from "../features/classes/classesSlice";
import paymentsReducer from "../features/payments/paymentsSlice";
import cardModelReducer from "../features/students/cardModelSlice"

export const store = configureStore({
	reducer: {
		authReducer,
		toggleViewReducer,
		studentsReducer,
		coursesReducer,
		classesReducer,
		paymentsReducer,
		cardModelReducer,
	},
});
