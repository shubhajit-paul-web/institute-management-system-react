import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/SectionWrapper";
import Model from "../components/Model";
import PaymentsTable from "../components/Payments/PaymentsTable";
import AddPaymentForm from "../components/Payments/AddPaymentForm";
import {searchPayments} from "../features/payments/paymentsSlice";

const Payments = () => {
	return (
		<PageWrapper pageName="Payments">
			<PageHeader placeholder="Search payments by name or student ID..." btnText="Add Payment" name="payments" onSearch={searchPayments} />
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
