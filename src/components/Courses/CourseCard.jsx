import { SquarePen, Timer, Trash2 } from "lucide-react"

const CourseCard = () => {
  return (
	<div className="bg-white p-3.5 rounded-xl w-[19rem]">
		<img src="https://ik.imagekit.io/sheryians/courses_gif/undefined-maxresdefault_5-AHh9_1Y.jpg" alt="" className="rounded-xl" />
		<div className="mt-2.5 flex flex-col gap-2">
			<div className="text-xl font-medium">Three.js Domination</div>
			<div className="font-medium flex gap-4">
				<span>🕒 3 Months</span>
				<span>💰 ₹12,000</span>
			</div>
			<div className="flex items-center gap-2 mt-2">
				<span className="bg-pink-100 text-xs font-medium text-pink-400 py-1 px-2.5 rounded-md">Programming</span>
				<span className="bg-green-100 text-xs font-medium text-green-600 py-1 px-2.5 rounded-md">Web</span>
			</div>
			<p className="text-zinc-700 leading-tight mt-2">Lorem ipsum dolor sit amet conse...</p>
			<div className="text-sm font-medium flex gap-2 mt-3.5">
				<button className="flex items-center gap-1.5 bg-green-600 text-zinc-50 px-2.5 py-1.5 rounded-md"><SquarePen size="1.04rem" /> Edit</button>
				<button className="flex items-center gap-1.5 bg-red-400 text-zinc-50 px-2.5 py-1.5 rounded-md"><Trash2 size="1.04rem" /> Delete</button>
			</div>
		</div>
	</div>
  )
}

export default CourseCard