import { useForm } from "react-hook-form";
import PageHeader from "../PageHeader";
import { useEffect } from "react";

const PaymentsHeader = () => {
	const {register, watch} = useForm();

	useEffect(() => {
		watch("payments");
	}, [watch("payments")])

	return (
		<PageHeader placeholder="Search payments by id" btnText="Add Payment" name="payments" register={register} />
	)
}

export default PaymentsHeader