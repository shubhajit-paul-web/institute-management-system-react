import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import authService from "../appwrite/auth";
import {login, logout} from "../features/auth/authSlice";

const AppLayout = () => {
	// const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		// authService.createAccount({
		// 	EmailAddress: "info@sheryians.com",
		// 	Password: "abcd123456",
		// 	InstituteName: "Sheryians Coding School",
		// 	RegistrationNumber: "SCS-2020-IND-0456",
		// 	Type: "Private",
		// 	EstablishedYear: 2015,
		// 	Logo: "https://sheryians.com/logo.png",
		// 	About: "Sheryians Coding School is an industry-leading coding bootcamp and training institute empowering students with real-world skills in web development and tech.",
		// 	Address: "2nd Floor, STPI Building, Ring Road No.1",
		// 	City: "Raipur",
		// 	State: "Chhattisgarh",
		// 	Pincode: 492001,
		// 	Country: "India",
		// 	PhoneNumber: 9109109155,
		// 	OfficialWebsite: "https://sheryians.com",
		// });

		// authService.login({EmailAddress: "infovvv@sheryisgsgasfs.com", Password:"waab13##**"})
		// authService.logout();
		authService
			.getCurrentAccount()
			.then((accountData) => dispatch(login(accountData)))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="w-full min-h-screen flex gap-5 p-5 dark:bg-bg-surface-dark">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default AppLayout;
