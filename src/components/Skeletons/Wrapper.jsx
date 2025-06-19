const Wrapper = ({children}) => {
  return (
	<div className="w-screen h-screen dark:bg-bg-surface-dark p-5 flex justify-center items-center">{children}</div>
  )
}

export default Wrapper