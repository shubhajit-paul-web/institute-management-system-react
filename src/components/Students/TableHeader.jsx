const TableHeader = ({fields}) => {
	return (
		<thead className="bg-[#475472] text-gray-50">
			<tr className="text-left text-[1.08rem]">
				{fields.map((item, index) => {
					return (
						<th className="px-4 py-4 font-medium" key={index}>
							{item}
						</th>
					);
				})}
			</tr>
		</thead>
	);
};

export default TableHeader;
