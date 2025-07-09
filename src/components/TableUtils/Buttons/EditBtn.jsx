import {Tooltip} from "antd";
import { Edit } from "lucide-react";

const EditBtn = ({onClick, tooltipTitle = "View"}) => {
	return (
		<Tooltip title={tooltipTitle}>
			<button onClick={onClick} className="bg-green-400/15 p-2 text-green-600 rounded-md">
				<Edit size="1.1rem" />
			</button>
		</Tooltip>
	);
};

export default EditBtn;
