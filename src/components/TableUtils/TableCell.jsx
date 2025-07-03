const TableCell = ({children, className}) => {
	return <td className={`whitespace-nowrap px-4 py-4 dark:text-[#E6EDF3] ${className}`}>{children}</td>;
};

export default TableCell;
