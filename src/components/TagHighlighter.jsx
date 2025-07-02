function TagHighlighter({tag}) {
	const tagColors = {
		rose: {
			text: "#FF80AB",
			bg: "#FF80AB33",
		},
		green: {
			text: "#3FB950",
			bg: "#3FB95033",
		},
		sky: {
			text: "#38BDF8",
			bg: "#38BDF833",
		},
		violet: {
			text: "#A78BFA",
			bg: "#A78BFA33",
		},
		orange: {
			text: "#FB923C",
			bg: "#FB923C33",
		},
		yellow: {
			text: "#FACC15",
			bg: "#FACC1533",
		},
		teal: {
			text: "#2DD4BF",
			bg: "#2DD4BF33",
		},
		indigo: {
			text: "#6366F1",
			bg: "#6366F133",
		},
		red: {
			text: "#EF4444",
			bg: "#EF444433",
		},
		lime: {
			text: "#84CC16",
			bg: "#84CC1633",
		},
		cyan: {
			text: "#06B6D4",
			bg: "#06B6D433",
		},
	};

	const tagLength = tag.length;
	let colorKey = "rose";

	if (tagLength <= 2) colorKey = "lime";
	else if (tagLength <= 4) colorKey = "sky";
	else if (tagLength <= 6) colorKey = "rose";
	else if (tagLength <= 8) colorKey = "green";
	else if (tagLength <= 10) colorKey = "violet";
	else if (tagLength <= 12) colorKey = "cyan";

	return (
		<span className={`text-xs font-medium py-1 px-2.5 rounded-md cursor-default transition-all hover:opacity-85`} style={{backgroundColor: tagColors[colorKey].bg, color: tagColors[colorKey].text}}>
			{tag}
		</span>
	);
}

export default TagHighlighter;
