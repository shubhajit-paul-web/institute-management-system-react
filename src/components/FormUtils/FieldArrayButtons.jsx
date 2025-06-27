import {Plus, Trash2} from "lucide-react";

const FieldArrayButtons = ({append, appendIndex, remove, removeIndex, className}) => {
	return (
		<div className={`${className} flex gap-2`}>
			<AppendField append={append} index={appendIndex} />
			<RemoveField remove={remove} index={removeIndex} />
		</div>
	);
};

export const AppendField = ({index, append, className}) => {
	return (
		<button type="button" onClick={() => append(index)} className={`${className} bg-green-600 hover:bg-green-500 text-white py-3.5 px-4 rounded-md transition duration-200`}>
			<Plus size="1.3rem" />
		</button>
	);
};

export const RemoveField = ({index, remove, className}) => {
	return (
		<button
			type="button"
			onClick={() => index && remove(index)}
			className={`${className} bg-red-600 hover:bg-red-500 text-white py-3 px-4 rounded-md transition duration-200`} disabled={!index}>
			<Trash2 size="1.3rem" />
		</button>
	);
};

export default FieldArrayButtons;
