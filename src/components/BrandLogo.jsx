import logoDark from "../assets/images/Logo/Brand-logo-dark.svg";
import logoLight from "../assets/images/Logo/Brand-logo-light.svg";

// Brand logo for light mode
export const BrandLogoDark = ({width = "w-[9rem]", className, ...props}) => {
	return <img src={logoDark} alt="Brand Logo" className={`${width} ${className}`} {...props} />;
};

// Brand logo for dark mode
export const BrandLogoLight = ({width = "w-[9rem]", className, ...props}) => {
	return <img src={logoLight} alt="Brand Logo" className={`${width} ${className}`} {...props} />;
};
