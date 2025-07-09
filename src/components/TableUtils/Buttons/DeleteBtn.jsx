import {Tooltip} from "antd";
import {Trash2} from "lucide-react";

const DeleteBtn = ({onClick, tooltipTitle = "Delete"}) => {
	return (
		<Tooltip title={tooltipTitle}>
			<button onClick={onClick} className="bg-red-600/20 p-2 text-red-600 rounded-md">
				<Trash2 size="1.1rem" />
			</button>
		</Tooltip>
	);
};

export default DeleteBtn;
