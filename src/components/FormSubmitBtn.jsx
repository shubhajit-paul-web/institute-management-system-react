import {Button} from "antd";
import { CircleFadingPlus } from "lucide-react";

const FormSubmitBtn = ({name, loading = false, icon, marginTop = "mt-0"}) => {
	return (
		<Button loading={loading} htmlType="submit" type="primary" size="large" icon={icon || <CircleFadingPlus size="1.1rem" />} className={`${marginTop} w-full py-3 rounded-md font-bold hover:opacity-85`} style={{width: "fit-content", backgroundColor: "#e36a08", padding: "28px 22px"}}>
			<span className="font-medium text-[1.06rem]">{name}</span>
		</Button>
	);
};

export default FormSubmitBtn;
