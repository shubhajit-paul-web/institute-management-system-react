import {lazy, useEffect, useMemo, useRef, useState} from "react";
import PageWrapper from "../components/PageWrapper";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import {admissionsChart, paymentsChart} from "../utils/dashboardUtils";
import {useSelector} from "react-redux";
import SkeletonBlock from "../components/Skeletons/SkeletonBlock";
const OverviewCards = lazy(() => import("../components/Dashboard/OverviewCards"));
const AdmissionsOverviewChart = lazy(() => import("../components/Dashboard/AdmissionsOverviewChart"));
const PaymentsOverviewChart = lazy(() => import("../components/Dashboard/PaymentsOverviewChart"));

const Dashboard = () => {
	const admissionsChartContainer = useRef(null);
	const paymentsChartContainer = useRef(null);
	const [isPaymentsChartLoading, setIsPaymentsChartLoading] = useState(true);
	const paymentsData = useSelector((state) => state.paymentsReducer.payments);

	// Compute the total amount paid and due across all payments
	const paymentSummary = useMemo(() => {
		return paymentsData.reduce(
			(totals, payment, index) => {
				totals.amountPaid += Number(payment?.amountPaid) || 0;
				totals.amountDue += Number(payment?.dueAmount) || 0;

				if (paymentsData.length - 1 === index) {
					setIsPaymentsChartLoading(false);
				}

				return totals;
			},
			{amountPaid: 0, amountDue: 0}
		);
	}, [paymentsData]);

	useEffect(() => {
		const chart1 = admissionsChart(admissionsChartContainer);
		const chart2 = paymentsChart(paymentsChartContainer, [paymentSummary?.amountPaid, paymentSummary?.amountDue]);

		return () => {
			chart1?.destroy();
			chart2?.destroy();
		};
	}, [paymentSummary]);

	return (
		<PageWrapper pageName="Dashboard">
			<DashboardHeader />
			<OverviewCards amountPaid={paymentSummary?.amountPaid}>
				<div className="mt-15 flex justify-between gap-20">
					<AdmissionsOverviewChart elem={admissionsChartContainer} />
					{isPaymentsChartLoading ? <SkeletonBlock width="w-1/2" height="h-[24rem]" /> : <PaymentsOverviewChart elem={paymentsChartContainer} />}

					{/* TODO: loaders */}
					{/* <SkeletonBlock width="w-7/6" height="h-[24rem]" />
					<SkeletonBlock width="w-3/4" height="h-[24rem]" /> */}
				</div>
			</OverviewCards>
		</PageWrapper>
	);
};

export default Dashboard;
