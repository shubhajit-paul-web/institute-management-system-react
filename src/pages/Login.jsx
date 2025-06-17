import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import checkAuthStatus from "../appwrite/utils/checkAuth";
import AlreadyLoggedIn from "../components/Login/AlreadyLoggedIn";
import authService from "../appwrite/auth";

const Login = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const isAuthenticated = useSelector((state) => state.authReducer.status);

	// authService.login({EmailAddress: "info@sheryians.com", Password: "123456789"})
	// authService.createAccount({
	// 	EmailAddress: "info@greenvalleyedu.org",
	// 	Password: "GVedu@2025!",
	// 	InstituteName: "Green Valley Institute of Technology",
	// 	RegistrationNumber: "GVIT-REG-90812",
	// 	Type: "Private",
	// 	EstablishedYear: 2008,
	// 	Logo: "https://example.com/logos/gvit.png",
	// 	About: "Green Valley Institute of Technology is a premier private institution offering world-class education in engineering, technology, and applied sciences. With a mission to empower students through practical knowledge and innovation, GVIT stands out for its industry-ready curriculum and global collaborations.",
	// 	Address: "Plot No. 56, Knowledge Park, Sector 15",
	// 	City: "Pune",
	// 	State: "Maharashtra",
	// 	Pincode: "411045",
	// 	Country: "India",
	// 	PhoneNumber: "+91-9823004567",
	// 	OfficialWebsite: "https://www.greenvalleyedu.org",
	// });

	const verify = async () => {
		if (!isAuthenticated) {
			await checkAuthStatus(dispatch);
			setLoading(false);
		}
	};

	useEffect(() => {
		verify();
	}, [dispatch]);

	if (loading) {
		return false;
	}

	if (isAuthenticated) {
		return <AlreadyLoggedIn />;
	}

	return (
		<div>
			<h1 className="text-2xl font-semibold text-white">Login Page</h1>
		</div>
	);
};

export default Login;
