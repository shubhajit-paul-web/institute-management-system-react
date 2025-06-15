const InputTextBox = ({value, inputStyles}) => {
	console.log(inputStyles);

	return <input className={`${inputStyles} block dark:text-text-main-dark/92 font-semibold border dark:border-zinc-700 dark:bg-white/8 py-1.5 px-3 rounded-md`} type="text" value={value} disabled />;
};

export default InputTextBox;
