import {useForm} from "react-hook-form";
import InputField from "../InputField";
import {useState} from "react";
import FormSubmitBtn from "../FormSubmitBtn";
import {useDispatch, useSelector} from "react-redux";
import paymentsService from "../../appwrite/services/paymentsService";
import {addPayment} from "../../features/payments/paymentsSlice";
import {notifySuccess} from "../../utils/ToastNotification";
import {closeModel} from "../../features/toggleModelView/toggleModelSlice";

const AddPaymentForm = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [appwriteError, setAppwriteError] = useState("");
	const coursesData = useSelector((state) => state.coursesReducer.courses);
	const instituteID = useSelector((state) => state.authReducer.instituteDetails.$id);
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm();

	async function addPaymentData(paymentData) {
		setAppwriteError("");
		setLoading(true);

		try {
			const createdPayment = await paymentsService.addPayment({
				instituteID,
				...paymentData,
			});

			if (createdPayment) {
				dispatch(addPayment(createdPayment));

				notifySuccess("Payment added successfully!");
				dispatch(closeModel());
				reset(); // clear all the input fields
			}
		} catch (error) {
			setAppwriteError(error.message);
		} finally {
			setLoading(false);
		}

		console.log(paymentData);
	}

	return (
		<form onSubmit={handleSubmit(addPaymentData)} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 text-white rounded">
			<InputField label="Student Name" name="studentName" placeholder="e.g. Rohit Singh" register={register} errors={errors} />

			<InputField label="Student ID" name="studentId" placeholder="e.g. STU-2023" register={register} errors={errors} />

			<InputField type="select" label="Course" name="course" options={coursesData.map((course) => course?.title)} optionsValues={coursesData.map((course) => course?.$id)} register={register} errors={errors} />

			<InputField label="Payment Date" name="paymentDate" placeholder="Select payment date" type="date" register={register} errors={errors} />

			<InputField type="select" label="Payment Mode" name="paymentMode" options={["Cash", "UPI", "Card", "Net Banking", "Cheque"]} register={register} errors={errors} />

			<InputField label="Amount Paid" name="amountPaid" placeholder="e.g. 15000" type="number" register={register} errors={errors} />

			<InputField label="Total Fees" name="totalFees" placeholder="e.g. 60000" type="number" register={register} errors={errors} />

			<InputField label="Due Amount (Optional)" name="dueAmount" placeholder="e.g. 45000" type="number" register={register} />

			<InputField type="select" label="Status" name="status" options={["Paid", "Partially Paid", "Pending"]} register={register} errors={errors} />

			<InputField label="Receipt No." name="receiptNo" placeholder="e.g. RCPT-9001" register={register} errors={errors} />

			{/* Appwrite error message */}
			{appwriteError && <p className="col-span-2 text-red-600 font-medium">{appwriteError}</p>}

			{/* Submit button */}
			<div className="col-span-2">
				<FormSubmitBtn loading={loading} name="Add New Payment" marginTop="mt-4" />
			</div>
		</form>
	);
};

export default AddPaymentForm;
