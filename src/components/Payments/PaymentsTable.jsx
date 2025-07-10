import DeleteBtn from "../TableUtils/Buttons/DeleteBtn";
import EditBtn from "../TableUtils/Buttons/EditBtn";
import ViewBtn from "../TableUtils/Buttons/ViewBtn";
import TableCell from "../TableUtils/TableCell";
import TableLayout from "../TableUtils/TableLayout";
import TableRow from "../TableUtils/TableRow";

const PaymentsTable = () => {
	const paymentsData = [
		{
			paymentId: "PAY-1001",
			studentName: "Rohit Singh",
			studentId: "STU-2023",
			course: "B.Tech Computer Science",
			paymentDate: "2025-07-05",
			paymentMode: "UPI",
			amountPaid: 15000,
			totalFees: 60000,
			dueAmount: 45000,
			status: "Partially Paid",
			receiptNo: "RCPT-9001",
		},
		{
			paymentId: "PAY-1002",
			studentName: "Sneha Roy",
			studentId: "STU-1987",
			course: "M.Sc Chemistry",
			paymentDate: "2025-07-02",
			paymentMode: "Cash",
			amountPaid: 50000,
			totalFees: 50000,
			dueAmount: 0,
			status: "Paid",
			receiptNo: "RCPT-9002",
		},
		{
			paymentId: "PAY-1003",
			studentName: "Aditya Patel",
			studentId: "STU-2123",
			course: "B.Com",
			paymentDate: "2025-06-28",
			paymentMode: "Card",
			amountPaid: 10000,
			totalFees: 40000,
			dueAmount: 30000,
			status: "Partially Paid",
			receiptNo: "RCPT-9003",
		},
		{
			paymentId: "PAY-1004",
			studentName: "Neha Kapoor",
			studentId: "STU-2456",
			course: "MBA",
			paymentDate: "2025-07-01",
			paymentMode: "Net Banking",
			amountPaid: 60000,
			totalFees: 120000,
			dueAmount: 60000,
			status: "Partially Paid",
			receiptNo: "RCPT-9004",
		},
		{
			paymentId: "PAY-1005",
			studentName: "Vikram Joshi",
			studentId: "STU-3001",
			course: "BA English",
			paymentDate: "2025-07-03",
			paymentMode: "Cheque",
			amountPaid: 25000,
			totalFees: 25000,
			dueAmount: 0,
			status: "Paid",
			receiptNo: "RCPT-9005",
		},
		{
			paymentId: "PAY-1006",
			studentName: "Priya Mehta",
			studentId: "STU-3222",
			course: "B.Sc Physics",
			paymentDate: "2025-06-30",
			paymentMode: "UPI",
			amountPaid: 5000,
			totalFees: 35000,
			dueAmount: 30000,
			status: "Partially Paid",
			receiptNo: "RCPT-9006",
		},
		{
			paymentId: "PAY-1007",
			studentName: "Arjun Yadav",
			studentId: "STU-2789",
			course: "BBA",
			paymentDate: "2025-07-04",
			paymentMode: "Card",
			amountPaid: 20000,
			totalFees: 55000,
			dueAmount: 35000,
			status: "Partially Paid",
			receiptNo: "RCPT-9007",
		},
		{
			paymentId: "PAY-1008",
			studentName: "Shreya Desai",
			studentId: "STU-1981",
			course: "MCA",
			paymentDate: "2025-07-06",
			paymentMode: "Cash",
			amountPaid: 75000,
			totalFees: 75000,
			dueAmount: 0,
			status: "Paid",
			receiptNo: "RCPT-9008",
		},
	];

	function paymentStatusSymbol(status) {
		if (status === "Paid") return "🟢";
		else if (status === "Partially Paid") return "🟠";
		else return "🔴";
	}

	return (
		<TableLayout tableName="payments" tableFields={["Payment ID", "Student Name", "Student ID", "Course", "Payment Date", "Payment Mode", "Amount Paid", "Total Fees", "Due Amount", "Status", "Receipt No.", "Actions"]} dataLength={paymentsData.length}>
			{paymentsData.length === 0 ||
				paymentsData.map((payment, index) => {
					return (
						<TableRow key={index}>
							<TableCell>{payment.paymentId}</TableCell>
							<TableCell>{payment.studentName}</TableCell>
							<TableCell>{payment.studentId}</TableCell>
							<TableCell>{payment.course}</TableCell>
							<TableCell>{payment.paymentDate}</TableCell>
							<TableCell>{payment.paymentMode}</TableCell>
							<TableCell>{payment.amountPaid.toLocaleString()}</TableCell>
							<TableCell>{payment.totalFees.toLocaleString()}</TableCell>
							<TableCell>{payment.dueAmount.toLocaleString()}</TableCell>
							<TableCell className="text-center">{paymentStatusSymbol(payment.status)}</TableCell>
							<TableCell>{payment.receiptNo}</TableCell>
							<TableCell className="flex items-center gap-2">
								<ViewBtn tooltipTitle="View Receipt" />
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
