/** @format */

export const onSuccess = (string) => {
	return (response) => {
		if (string) {
			console.log(`[${string}] - Request was successful`);
		}
		return {
			success: true,
			data: response.data,
		};
	};
};

export const onError = (string) => {
	return (err) => {
		if (string) {
			console.error(`[${string}] - Request failed`);
		}
		if (err?.response?.data) {
			console.log(err.response.data.errorMessage);
			return {
				success: false,
				data: err.response.data.errorMessage,
			};
		}
		return {
			success: false,
			data: "We are having issues getting your data",
		};
	};
};
