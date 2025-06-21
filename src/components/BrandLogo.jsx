import logoDark from "../assets/images/Logo/Brand-logo-dark.svg";
import logoLight from "../assets/images/Logo/Brand-logo-light.svg";

// Brand lofo for light mode
export const BrandLogoDark = ({width = "w-[9rem]", className}) => {
	return <img src={logoDark} alt="Brand Logo" className={`${width} ${className}`} />;
};

// Brand lofo for dark mode
export const BrandLogoLight = ({width = "w-[9rem]", className}) => {
	return <img src={logoLight} alt="Brand Logo" className={`${width} ${className}`} />;
};
