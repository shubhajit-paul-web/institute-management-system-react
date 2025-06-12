const InputWrapper = ({name, children, required}) => {
	return (
		<div className="w-full">
			<label className="text-gray-300 dark:text-gray-300 text-lg mb-1.5 block">
				{name}
				{required && <span className="ml-1 text-red-400">*</span>}
			</label>
			{children}
		</div>
	);
};

export default InputWrapper;
