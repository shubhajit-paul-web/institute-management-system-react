import {lazy} from "react";

import {Route, Routes} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
const AppLayout = lazy(() => import("../layouts/AppLayout"));
const Dashboard = lazy(() => import("../pages/Dashboard"));	
const Students = lazy(() => import("../pages/Students"));
const Courses = lazy(() => import("../pages/Courses"));
const Classes = lazy(() => import("../pages/Classes"));
const Payments = lazy(() => import("../pages/Payments"));
const Teachers = lazy(() => import("../pages/Teachers"));
const Expenses = lazy(() => import("../pages/Expenses"));
const Salaries = lazy(() => import("../pages/Salaries"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Settings = lazy(() => import("../pages/Settings"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<ProtectedRoute />}>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<Dashboard />} />
					<Route path="/students" element={<Students />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/classes" element={<Classes />} />
					<Route path="/payments" element={<Payments />} />
					<Route path="/teachers" element={<Teachers />} />
					<Route path="/expenses" element={<Expenses />} />
					<Route path="/salaries" element={<Salaries />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="*" element={<PageNotFound />} />
				</Route>
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
		</Routes>
	);
};

export default AppRoutes;
