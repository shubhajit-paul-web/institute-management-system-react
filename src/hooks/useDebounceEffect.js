const useDebounceEffect = (callback, delay = 300) => {
	let timerID;

	return (...args) => {
		clearTimeout(timerID);
		timerID = setTimeout(() => {
			callback.apply(this, args);
		}, delay);
	};
};

export default useDebounceEffect;
