import { Tooltip } from "antd";
import { Eye } from "lucide-react";

const ViewBtn = ({onClick, tooltipTitle = "View"}) => {
	return (
		<Tooltip title={tooltipTitle}>
			<button onClick={onClick} className="bg-sky-400/15 p-2 text-sky-600 rounded-md">
				<Eye size="1.1rem" />
			</button>
		</Tooltip>
	);
};

export default ViewBtn;
