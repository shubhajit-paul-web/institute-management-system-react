import {useState} from "react";
import {Space, Switch} from "antd";
import {Tooltip} from "antd";

const ThemeToggle = () => {
	const [checked, setChecked] = useState(true);

	return (
		<Tooltip title="Theme Changer">
			<Space direction="vertical">
				<Switch
					checkedChildren="🌙"
					unCheckedChildren="🌞"
					defaultChecked
					style={{
						backgroundColor: checked ? "#1f2937" : "#6b7280",
						transform: "scale(1.2)",
					}}
					onClick={(checked) => setChecked(checked)}
				/>
			</Space>
		</Tooltip>
	);
};
export default ThemeToggle;
