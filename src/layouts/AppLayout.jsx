import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import MainSkeleton from "../components/Skeletons/MainSkeleton";

const AppLayout = () => {
	// const [loading, setLoading] = useState(true);

	// if (loading) return <MainSkeleton />;

	return (
		<div className="w-full min-h-screen flex gap-5 p-5 dark:bg-bg-surface-dark">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default AppLayout;
