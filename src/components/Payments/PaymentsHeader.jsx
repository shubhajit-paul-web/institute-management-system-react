import {useForm} from "react-hook-form";
import PageHeader from "../PageHeader";
import {useEffect} from "react";
import useDebounceEffect from "../../hooks/useDebounceEffect";
import {useDispatch} from "react-redux";
import {searchPayments} from "../../features/payments/paymentsSlice";

const PaymentsHeader = () => {
	const dispatch = useDispatch();
	const {register, watch} = useForm();
	const searchPaymentsDebounced = useDebounceEffect((query) => dispatch(searchPayments(query)), 200);

	useEffect(() => {
		searchPaymentsDebounced(watch("payments"));
	}, [watch("payments")]);

	return <PageHeader placeholder="Search payments by name or student ID..." btnText="Add Payment" name="payments" register={register} />;
};

export default PaymentsHeader;
