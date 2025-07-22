import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import paymentsService from "../../appwrite/services/paymentsService";
import useInstituteId from "../useInstituteId";
import {addPayment} from "../../features/payments/paymentsSlice";

const useFetchPayments = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const instituteID = useInstituteId();

	useEffect(() => {
		paymentsService
			.getAllPayments(instituteID)
			.then((payments) => {
				if (payments?.total) {
					dispatch(addPayment(payments.documents));
				}
			})
			.catch((error) => console.error("useFetchPayments Error:", error.message))
			.finally(() => setLoading(false));
	}, [instituteID, dispatch]);

	return {loading};
};

export default useFetchPayments;
