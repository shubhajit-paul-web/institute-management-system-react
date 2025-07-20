const shortenTextWithDots = (text = "", maxLength = 0) => {
	if (text.length > maxLength) {
		return text.slice(0, maxLength).trimEnd() + "...";
	}
	return text;
};

export default shortenTextWithDots;
