import {useForm} from "react-hook-form";
import InputField from "../InputField";
import {useState} from "react";
import FormSubmitBtn from "../FormSubmitBtn";
import { useSelector } from "react-redux";

const AddPaymentForm = () => {
	const [loading, setLoading] = useState(false);
	const [appwriteError, setAppwriteError] = useState("");
	const coursesData = useSelector((state) => state.coursesReducer.courses);
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	function addPaymentData(paymentData) {
		console.log(paymentData);
	}

	return (
		<form onSubmit={handleSubmit(addPaymentData)} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 text-white rounded">
			<InputField label="Payment ID" name="paymentId" placeholder="e.g. PAY-1001" register={register} errors={errors} />

			<InputField label="Student Name" name="studentName" placeholder="e.g. Rohit Singh" register={register} errors={errors} />

			<InputField label="Student ID" name="studentId" placeholder="e.g. STU-2023" register={register} errors={errors} />

			<InputField type="select" label="Course" name="course" options={coursesData.map((course) => course?.title)} register={register} errors={errors} />

			<InputField label="Payment Date" name="paymentDate" placeholder="Select payment date" type="date" register={register} errors={errors} />

			<InputField type="select" label="Payment Mode" name="paymentMode" options={["Cash", "UPI", "Card", "Net Banking", "Cheque"]} register={register} errors={errors} />

			<div className="col-span-2 grid grid-cols-3 gap-8">
				<InputField label="Amount Paid" name="amountPaid" placeholder="e.g. 15000" type="number" register={register} errors={errors} />

				<InputField label="Total Fees" name="totalFees" placeholder="e.g. 60000" type="number" register={register} errors={errors} />

				<InputField label="Due Amount (Optional)" name="dueAmount" placeholder="e.g. 45000" type="number" register={register} />
			</div>

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
