import PageWrapper from "../components/PageWrapper";
import SectionWrapper from "../components/SectionWrapper";
import Model from "../components/Model";
import PaymentsHeader from "../components/Payments/PaymentsHeader";
import PaymentsTable from "../components/Payments/PaymentsTable";
import AddPaymentForm from "../components/Payments/AddPaymentForm";

const Payments = () => {
	return (
		<PageWrapper pageName="Payments">
			<PaymentsHeader />
			<SectionWrapper>
				<PaymentsTable />
			</SectionWrapper>
			<Model modelName="Add Payment" reducerName="paymentModel">
				<AddPaymentForm />
			</Model>
		</PageWrapper>
	);
};

export default Payments;
