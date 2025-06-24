// Converts Appwrite error messages into user-friendly messages
function getFriendlyErrorMessage(error) {
	if (!error || !error.message) return "Something went wrong.";

	if (error.message.includes("Invalid `password` param")) {
		return "Password must be at least 8 characters.";
	}

	if (error.message.includes("Invalid credentials")) {
		return "Invalid email or password. Please try again.";
	}

	if (error.message.includes("Missing required parameter: email")) {
		return "Email is required.";
	}

	if (error.message.includes("already exists")) {
		return "This account already exists.";
	}

	if (error.message.includes("Rate limit")) {
		return "Too many attempts! Please wait a moment before trying again.";
	}

	// fallback
	return error.message;
}

export default getFriendlyErrorMessage;
