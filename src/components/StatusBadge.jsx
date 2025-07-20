const StatusBadge = ({status, color, className}) => {
	let badgeColors = "";

	if (color === "red") {
		badgeColors = "dark:bg-red-400/10 dark:text-red-300 dark:ring-red-500/30";
	} else if (color === "green") {
		badgeColors = "dark:bg-green-400/10 dark:text-green-300 dark:ring-green-500/30";
	} else if (color === "yellow") {
		badgeColors = "dark:bg-yellow-400/10 dark:text-yellow-300 dark:ring-yellow-500/30";
	}

	return <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium shadow-sm ring-1 ring-inset transition-all hover:opacity-85 ${badgeColors} ${className}`}>{status}</span>;
};

export default StatusBadge;
