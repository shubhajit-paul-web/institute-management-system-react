import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const useDynamicTitle = () => {
	const {pathname} = useLocation();

	useEffect(() => {
		const titleMap = {
			"/": "Dashboard",
			"/students": "Students",
			"/courses": "Courses",
			"/classes": "Classes",
			"/payments": "Payments",
			"/teachers": "Teachers",
			"/expenses": "Expenses",
			"/salaries": "Salaries",
			"/settings": "Settings",
		};

		const pageName = titleMap[pathname];
		document.title = pageName ? `${pageName} | Classify` : "Classify";
	}, [pathname]);
};

export default useDynamicTitle;
