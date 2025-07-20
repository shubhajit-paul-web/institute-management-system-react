import {useDispatch, useSelector} from "react-redux";
import DeleteBtn from "../TableUtils/Buttons/DeleteBtn";
import EditBtn from "../TableUtils/Buttons/EditBtn";
import ViewBtn from "../TableUtils/Buttons/ViewBtn";
import TableCell from "../TableUtils/TableCell";
import TableLayout from "../TableUtils/TableLayout";
import TableRow from "../TableUtils/TableRow";
import {useEffect, useState} from "react";
import paymentsService from "../../appwrite/services/paymentsService";
import {addPayment} from "../../features/payments/paymentsSlice";
import SkeletonBlock from "../Skeletons/SkeletonBlock";
import useGetCourseTitle from "../../hooks/useGetCourseTitle";
import {notifyError} from "../../utils/ToastNotification";
import StatusBadge from "../StatusBadge";

const PaymentsTable = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const getCourseTitle = useGetCourseTitle();
	const instituteID = useSelector((state) => state.authReducer.instituteDetails.$id);
	const paymentsData = useSelector((state) => state.paymentsReducer.filteredPayments);

	async function fetchPayments() {
		try {
			const {documents: payments} = await paymentsService.getAllPayments(instituteID);
			if (payments.length) {
				dispatch(addPayment(payments));
			}
		} catch (error) {
			notifyError("Something went wrong while loading payments.");
			console.error(error.message);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchPayments();
	}, [dispatch]);

	function paymentStatusBadge(status) {
		if (status === "Paid") {
			return <StatusBadge status={status} color="green" />;
		} else if (status === "Partially Paid") {
			return <StatusBadge status={status} color="yellow" />;
		} else if (status === "Pending") {
			return <StatusBadge status={status} color="red" />;
		}
	}

	return loading ? (
		<SkeletonBlock height="h-25" className="text-lg text-white/70 text-center content-center">
			Loading...
		</SkeletonBlock>
	) : (
		<TableLayout tableName="payments" tableFields={["Student ID", "Student Name", "Course", "Date", "Paid", "Fees", "Due", "Status", "Actions"]} dataLength={paymentsData.length}>
			{paymentsData.length === 0 ||
				paymentsData.map((payment, index) => {
					return (
						<TableRow key={index}>
							<TableCell>{payment.studentId}</TableCell>
							<TableCell>{payment.studentName}</TableCell>
							<TableCell>{getCourseTitle(payment.course)}</TableCell>
							<TableCell>{payment.paymentDate}</TableCell>
							<TableCell>{"₹" + Number(payment.amountPaid).toLocaleString()}</TableCell>
							<TableCell>{"₹" + Number(payment.totalFees).toLocaleString()}</TableCell>
							<TableCell>{payment.dueAmount ? "₹" + Number(payment.dueAmount).toLocaleString() : "N/A"}</TableCell>
							<TableCell className="cursor-default">{paymentStatusBadge(payment.status)}</TableCell>
							<TableCell className="flex items-center gap-2">
								<ViewBtn tooltipTitle="View More Details" />
								<EditBtn />
								<DeleteBtn />
							</TableCell>
						</TableRow>
					);
				})}
		</TableLayout>
	);
};

export default PaymentsTable;
