import {lazy, useEffect, useRef} from "react";
import PageWrapper from "../components/PageWrapper";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import {admissionsChart, paymentsChart} from "../utils/dashboardUtils";
const OverviewCards = lazy(() => import("../components/Dashboard/OverviewCards"));
const AdmissionsOverviewChart = lazy(() => import("../components/Dashboard/AdmissionsOverviewChart"));
const PaymentsOverviewChart = lazy(() => import("../components/Dashboard/PaymentsOverviewChart"));

const Dashboard = () => {
	const admissionsChartContainer = useRef(null);
	const paymentsChartContainer = useRef(null);

	useEffect(() => {
		const chart1 = admissionsChart(admissionsChartContainer);
		const chart2 = paymentsChart(paymentsChartContainer);

		return () => {
			chart1?.destroy();
			chart2?.destroy();
		};
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
