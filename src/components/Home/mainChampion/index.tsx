import Link from "next/link"
import ChampImage from "./ChampImage"

const MainChampion = () => {
	return (
		<div className="bg-champion w-screen bg-cover pt-60 pb-60 overflow-hidden">
			<div className="max-w-[1350px] w-[90vw] flex justify-between text-white mx-auto items-center">
				<div className="flex flex-col gap-5 w-[60%] xl:w-full md:text-center">
					<h1 className="text-4xl font-bold uppercase">
						Labore duis dolor deserunt minim elit aliquip mollit sunt sint.
					</h1>
					<h2 className="text-xl">
						Tempor ipsum mollit tempor quis. Laboris nostrud ea elit consectetur voluptate laboris culpa proident
						commodo aliqua culpa consectetur nulla. Commodo occaecat Lorem labore dolore officia proident consequat
						occaecat ut ut anim cupidatat eiusmod id.
					</h2>
					<div className="flex gap-7 uppercase md:mx-auto">
						<Button title="Button #1" color="bg-blue-500" />
						<Button title="Button #2" color="bg-green-400" />
					</div>
				</div>
				<ChampImage />
			</div>
		</div>
	)
}

interface ButtonProps {
	title: string
	link?: string
	color: string
}

const Button = ({ title, color, link = "#" }: ButtonProps) => {
	return (
		<Link href={link}>
			<div
				className={`${color} 00 px-14 md:px-5 py-3 rounded font-medium cursor-pointer hover:brightness-90 transition-all"`}>
				{title}
			</div>
		</Link>
	)
}

export default MainChampion
