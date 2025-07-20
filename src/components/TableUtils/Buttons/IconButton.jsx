import {Tooltip} from "antd";
import {Eye} from "lucide-react";

const IconButton = ({tooltipTitle = "View", icon = <Eye size="1.1rem" />, onClick, className}) => {
	return (
		<Tooltip title={tooltipTitle}>
			<button onClick={onClick} className={`p-2 hover:brightness-130 rounded-md ${className}`}>
				{icon}
			</button>
		</Tooltip>
	);
};

export default IconButton;
