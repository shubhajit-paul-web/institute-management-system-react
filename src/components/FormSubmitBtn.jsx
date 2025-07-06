import {Button} from "antd";
import { UserRoundPlus } from "lucide-react";

const FormSubmitBtn = ({name, loading = false}) => {
	return (
		<Button loading={loading} htmlType="submit" type="primary" size="large" icon={<UserRoundPlus size="1.05rem" />} className="mt-8 w-full py-3 rounded-md font-bold hover:opacity-85" style={{width: "10rem", backgroundColor: "#e36a08", padding: "25px 30px"}}>
			{name}
		</Button>
	);
};

export default FormSubmitBtn;
