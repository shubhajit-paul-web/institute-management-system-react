import {Route, Routes} from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Dashboard from "../pages/Dashboard";
import Students from "../pages/Students";
import Courses from "../pages/Courses";
import Classes from "../pages/Classes";
import Payments from "../pages/Payments";
import Teachers from "../pages/Teachers";
import Expenses from "../pages/Expenses";
import Salaries from "../pages/Salaries";
import PageNotFound from "../pages/PageNotFound";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route index element={<Dashboard />} />
				<Route path="/students" element={<Students />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/classes" element={<Classes />} />
				<Route path="/payments" element={<Payments />} />
				<Route path="/teachers" element={<Teachers />} />
				<Route path="/expenses" element={<Expenses />} />
				<Route path="/salaries" element={<Salaries />} />
				<Route path="*" element={<PageNotFound />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
