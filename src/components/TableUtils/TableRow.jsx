const TableRow = ({className, children}) => {
	return <tr className={`dark:even:bg-[#0D1117] dark:odd:bg-transparent border-b dark:border-[#30363D] dark:hover:bg-[#1A2230] transition ${className}`}>{children}</tr>;
};

export default TableRow;
