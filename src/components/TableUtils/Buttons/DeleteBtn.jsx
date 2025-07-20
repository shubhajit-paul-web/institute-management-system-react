import IconButton from "./IconButton";
import {Trash2} from "lucide-react";

const DeleteBtn = ({onClick, tooltipTitle = "Delete"}) => {
	return <IconButton onClick={onClick} tooltipTitle={tooltipTitle} icon={<Trash2 size="1.1rem" />} className="bg-red-600/20 text-red-600" />;
};

export default DeleteBtn;
