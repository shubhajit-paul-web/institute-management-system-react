const ButtonOne = ({icon, text}) => {
  return (
	<button className="flex items-center gap-2 px-6 rounded-lg text-lg font-medium bg-[#475472] text-white hover:bg-[#3f4b67]">{icon} {text}</button>
  )
}

export default ButtonOne