const createDebouncedFunction = (callback, delay = 200) => {
	let timerID;

	return (...args) => {
		clearTimeout(timerID);
		timerID = setTimeout(() => {
			callback.apply(this, args);
		}, delay);
	};
};

export default createDebouncedFunction;
