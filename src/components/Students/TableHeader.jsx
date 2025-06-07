const TableHeader = () => {
	return (
		<thead className="bg-[#475472] text-gray-50">
			<tr className="text-left text-[1.08rem]">
				<th className="px-4 py-4 font-medium">ID</th>
				<th className="px-4 py-4 font-medium">Student</th>
				<th className="px-4 py-4 font-medium">Course</th>
				<th className="px-4 py-4 font-medium">Batch</th>
				<th className="px-4 py-4 font-medium">Email</th>
				<th className="px-4 py-4 font-medium">Mobile</th>
				<th className="px-4 py-4 font-medium">Admission Date</th>
				<th className="px-4 py-4 font-medium">Action</th>
			</tr>
		</thead>
	);
};

export default TableHeader;
