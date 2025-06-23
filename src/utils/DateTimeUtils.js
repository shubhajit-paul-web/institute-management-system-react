// Format ISO to readable date & time
export function formatISOToReadableDateTime(isoString) {
	return new Date(isoString).toLocaleString("en-IN", {
		dateStyle: "medium",
		timeStyle: "short",
	});
}

// Converts the current timestamp to a human-readable date
export function formatDateForDisplay(isoString) {
	return new Date(isoString).toLocaleDateString("en-GB", {
	  day: "numeric",
	  month: "long",
	  year: "numeric",
	});
}

