import logoDark from "../assets/images/Logo/Brand-logo-dark.svg";
import logoLight from "../assets/images/Logo/Brand-logo-light.svg";

// Brand lofo for light mode
export const BrandLogoDark = ({width = "9rem", className}) => {
  return (
	<img src={logoDark} alt="" className={`w-[${width}] ${className} block`} />
  )
}

// Brand lofo for dark mode
export const BrandLogoLight = ({width = "9rem", className}) => {
  return (
	<img src={logoLight} alt="" className={`w-[${width}] ${className} block`} />
  )
}