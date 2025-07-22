import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import useFetchCourses from "../hooks/data/useFetchCourses";
import useFetchStudents from "../hooks/data/useFetchStudents";
import useFetchPayments from "../hooks/data/useFetchPayments";

const AppLayout = () => {
	useFetchCourses();
	useFetchStudents();
	useFetchPayments();

	return (
		<div className="w-full min-h-screen flex gap-5 p-5 dark:bg-bg-surface-dark">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default AppLayout;
