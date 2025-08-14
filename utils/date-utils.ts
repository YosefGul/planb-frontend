export const formatPublishDate = (dateString: string): string => {
	try {
		const date = new Date(dateString);

		// Check if date is valid
		if (isNaN(date.getTime())) {
			return "Publish Date";
		}

		// Format options
		const options: Intl.DateTimeFormatOptions = {
			year: "numeric",
			month: "long",
			day: "numeric",
		};

		return date.toLocaleDateString("en-US", options);
	} catch (error) {
		console.warn("Error formatting date:", error);
		return "Publish Date";
	}
};

export const formatPublishDateShort = (dateString: string): string => {
	try {
		const date = new Date(dateString);

		// Check if date is valid
		if (isNaN(date.getTime())) {
			return "Publish Date";
		}

		// Format options for shorter version
		const options: Intl.DateTimeFormatOptions = {
			year: "numeric",
			month: "short",
			day: "numeric",
		};

		return date.toLocaleDateString("en-US", options);
	} catch (error) {
		console.warn("Error formatting date:", error);
		return "Publish Date";
	}
};
