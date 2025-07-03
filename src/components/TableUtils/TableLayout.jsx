import TableHeader from "./TableHeader";

const TableLayout = ({tableName = "", tableFields = [], dataLength, children}) => {
	return (
		<div className="w-full overflow-x-auto rounded-lg">
			<table className="w-full table-auto">
				{/* table header */}
				<TableHeader fields={tableFields} />
				{/* table body/data */}
				<tbody>{children}</tbody>
			</table>
			{/* No data found - msg */}
			{dataLength === 0 ? <div className="text-lg text-center font-medium py-8 dark:bg-bg-dark dark:text-gray-600">No {tableName} found...</div> : ""}
		</div>
	);
};

export default TableLayout;
