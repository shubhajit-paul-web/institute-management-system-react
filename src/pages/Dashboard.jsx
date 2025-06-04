import {Skeleton} from "antd";
import PageWrapper from "../components/PageWrapper";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import OverviewCards from "../components/Dashboard/OverviewCards";
import {useEffect, useRef} from "react";
import {admissionsChart, paymentsChart} from "../utils/dashboardUtils";
import AdmissionsOverviewChart from "../components/Dashboard/AdmissionsOverviewChart";
import PaymentsOverviewChart from "../components/Dashboard/PaymentsOverviewChart";

const Dashboard = () => {
	const admissionsChartContainer = useRef(null);
	const paymentsChartContainer = useRef(null);

	useEffect(() => {
		admissionsChart(admissionsChartContainer);
		paymentsChart(paymentsChartContainer);
	}, []);

	return (
		<PageWrapper pageName="Dashboard">
			<DashboardHeader />
			<OverviewCards>
				<div className="mt-15 flex justify-between gap-20">
					<AdmissionsOverviewChart elem={admissionsChartContainer} />
					<PaymentsOverviewChart elem={paymentsChartContainer} />
				</div>
			</OverviewCards>
		</PageWrapper>
	);
};

export default Dashboard;
