const SingleOverviewCard = ({icon, name, data}) => {
	// #1e130c, #9a8478)
	// #485563, #29323c)
	// #fe8c00, #f83600)
	// #606c88, #3f4c6b)
  return (
	<div className="flex-1 aspect-[4/2] w-fit px-9 py-7 rounded-xl flex justify-center items-center gap-5 bg-pink-700" style={{background: "linear-gradient(to right, #606c88, #3f4c6b)"}}>
		{/* left */}
		<div className="bg-white w-[4.3rem] aspect-square flex justify-center items-center rounded-full">
			<div>{icon}</div>
		</div>
		{/* right */}
		<div className="text-zinc-100">
			<strong className="block text-2xl">{name}</strong>
			<div className="text-lg">{data}</div>
		</div>
	</div>
  )
}

export default SingleOverviewCard