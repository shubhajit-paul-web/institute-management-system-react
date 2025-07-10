import PageWrapper from "../components/PageWrapper";
import SectionWrapper from "../components/SectionWrapper";
import Model from "../components/Model";
import PaymentsHeader from "../components/Payments/PaymentsHeader";
import PaymentsTable from "../components/Payments/PaymentsTable";

const Payments = () => {
	return (
		<PageWrapper pageName="Payments">
			<PaymentsHeader />
			<SectionWrapper>
				<PaymentsTable />
			</SectionWrapper>
			<Model modelName="Add Payment" reducerName="paymentModel" />
		</PageWrapper>
	);
};

export default Payments;
