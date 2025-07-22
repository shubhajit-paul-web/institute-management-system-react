import {lazy, useEffect, useMemo, useRef} from "react";
import PageWrapper from "../components/PageWrapper";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import {admissionsChart, paymentsChart} from "../utils/dashboardUtils";
import {useSelector} from "react-redux";
const OverviewCards = lazy(() => import("../components/Dashboard/OverviewCards"));
const AdmissionsOverviewChart = lazy(() => import("../components/Dashboard/AdmissionsOverviewChart"));
const PaymentsOverviewChart = lazy(() => import("../components/Dashboard/PaymentsOverviewChart"));

const Dashboard = () => {
	const admissionsChartContainer = useRef(null);
	const paymentsChartContainer = useRef(null);
	const paymentsData = useSelector((state) => state.paymentsReducer.payments);

	// Compute the total amount paid and due across all payments
	const paymentSummary = useMemo(() => {
		return paymentsData.reduce(
			(totals, payment) => {
				totals.amountPaid += Number(payment?.amountPaid) || 0;
				totals.amountDue += Number(payment?.dueAmount) || 0;

				return totals;
			},
			{amountPaid: 0, amountDue: 0}
		);
	}, [paymentsData]);

	useEffect(() => {
		const chart1 = admissionsChart(admissionsChartContainer);
		const chart2 = paymentsChart(paymentsChartContainer, [paymentSummary.amountPaid, paymentSummary.amountDue]);

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
