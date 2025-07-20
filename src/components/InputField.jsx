import {Tooltip} from "antd";
import {Info} from "lucide-react";
import {useId} from "react";

const InputField = ({label, type = "text", placeholder, register, validate = {}, name, defaultValue, readOnly, info, errors = false, isTextArea, rows, options, optionsValues = [], className}) => {
	const lableID = useId();

	return (
		<div>
			<label className="text-white text-sm font-semibold flex items-center gap-2.5" htmlFor={lableID}>
				{label}
				{info && (
					<Tooltip title={info}>
						<Info size="0.94rem" className="text-orange-300 cursor-pointer" />
					</Tooltip>
				)}
			</label>

			{isTextArea ? (
				<textarea
					{...register(name, {required: errors && `${label} is required`})}
					id={lableID}
					placeholder={placeholder}
					rows={rows || 5}
					value={defaultValue}
					readOnly={readOnly}
					className={`${className} ${readOnly && "bg-[#3C3F48] text-gray-300 cursor-not-allowed"} w-full p-4 mt-1 bg-[#2C2F38] text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500`}
				/>
			) : type === "select" ? (
				<select {...register(name, {required: `${label} is required`})} id={lableID} className={`${className} w-full p-4 mt-1 bg-[#2C2F38] text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500`}>
					<option value="">Select {label}</option>
					{options &&
						options.map((option, index) => {
							const optionValue = optionsValues[index];

							return (
								<option key={index} value={optionValue || option}>
									{option}
								</option>
							);
						})}
				</select>
			) : (
				<input
					{...register(name, {required: errors && `${label} is required`, validate})}
					id={lableID}
					type={type}
					placeholder={placeholder}
					value={defaultValue}
					readOnly={readOnly}
					className={`${className} ${
						readOnly && "bg-[#3C3F48] text-gray-300 cursor-not-allowed"
					} w-full p-4 mt-1 bg-[#2C2F38] text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 file:bg-[#e36a08] file:text-white file:text-sm file:py-0.5 file:px-3 file:rounded-md file:border-0 file:cursor-pointer`}
					accept={type === "file" ? "image/*" : "false"}
				/>
			)}

			{errors[name] && <p className="text-red-500 font-medium text-sm mt-1">{errors[name].message}</p>}
		</div>
	);
};

export default InputField;
