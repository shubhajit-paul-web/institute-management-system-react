import {forwardRef} from "react";

const InputField = ({inputType = "text", icon, bgColor = "dark:bg-white/10", textColor, extraStyles, ...props}, ref) => {
	return (
		<div className={`${bgColor} ${textColor} ${extraStyles} w-full flex items-center text-[1.1rem] gap-4 py-3 px-4.5 rounded-lg mt-3`}>
			<span className="text-[#B3B3B3]">{icon}</span>
			<input type={inputType} {...props} className="outline-none w-full h-full" ref={ref} />
		</div>
	);
}

export default forwardRef(InputField);
