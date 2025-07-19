const StatusBadge = ({status, className}) => {
	return <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium shadow-sm ring-1 ring-inset ${className}`}>{status}</span>;
};

export default StatusBadge;
