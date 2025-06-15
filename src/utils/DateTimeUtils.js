export function formatISOToReadableDateTime(isoString) {
	const date = new Date(isoString);

	return date.toLocaleString("en-IN", {
		dateStyle: "medium",
		timeStyle: "short",
	});
}
