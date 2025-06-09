import TableHeader from "./TableHeader";

const StudentTable = () => {
	// temp data (dummy)
	const students = [
		{
			ID: "1",
			name: "Aarav Sharma",
			avatar: "https://i.pravatar.cc/40?img=1",
			course: "BCA",
			batch: "2023–2026",
			email: "aarav.sharma@example.com",
			mobile: "+91 98765 43210",
			admissionDate: "01 Jun 2024",
		},
		{
			ID: "2",
			name: "Sneha Verma",
			avatar: "https://i.pravatar.cc/40?img=2",
			course: "MCA",
			batch: "2022–2024",
			email: "sneha.verma@example.com",
			mobile: "+91 91234 56789",
			admissionDate: "15 Aug 2023",
		},
		{
			ID: "3",
			name: "Rohan Das",
			avatar: "https://i.pravatar.cc/40?img=3",
			course: "Graphic Design",
			batch: "2024–2025",
			email: "rohan.das@example.com",
			mobile: "+91 99887 77665",
			admissionDate: "10 May 2024",
		},
	];

	const tableRowStyles = "px-4 py-4 border-b dark:text-[#E6EDF3] dark:border-[#30363D]"; // styles for table data

	return (
		<div className="overflow-x-auto rounded-lg">
			<table className="min-w-full table-auto">
				{/* table header */}
				<TableHeader fields={["ID", "Student", "Course", "Batch", "Email", "Mobile", "Admission Date", "Action"]} />
				{/* table body */}
				<tbody>
					{students?.length === 0 ||
						students?.map((student) => {
							return (
								<tr className="dark:even:bg-[#0D1117] dark:odd:bg-transparent dark:hover:bg-[#1A2230] transition" key={student?.ID}>
									<td className={tableRowStyles}>{student?.ID}</td>
									<td className={`${tableRowStyles} flex items-center gap-3`}>
										<img src={student?.avatar} alt="avatar" className="w-9 aspect-square object-cover object-center rounded-full" />
										{student.name}
									</td>
									<td className={tableRowStyles}>{student?.course}</td>
									<td className={tableRowStyles}>{student?.batch}</td>
									<td className={tableRowStyles}>{student?.email}</td>
									<td className={tableRowStyles}>{student?.mobile}</td>
									<td className={tableRowStyles}>{student?.admissionDate}</td>
									<td className={`${tableRowStyles} opacity-60 dark:hover:text-sky-500 cursor-pointer`}>View</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			{/* No data found */}
			{students?.length === 0 ? <div className="text-lg text-center font-medium py-4 bg-white text-gray-600">No students found...</div> : ""}
		</div>
	);
};

export default StudentTable;
