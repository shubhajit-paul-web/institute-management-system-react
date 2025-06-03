import {Skeleton} from "antd";
import PageWrapper from "../components/PageWrapper";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import OverviewCards from "../components/Dashboard/OverviewCards";

const Dashboard = () => {
	return (
		<PageWrapper pageName="Dashboard">
			<DashboardHeader />
			<OverviewCards />
		</PageWrapper>
	);
};

export default Dashboard;
