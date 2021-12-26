import Link from "next/link"

const Header = () => {
	return (
		<div className="z-30 absolute w-screen flex justify-around bg-opacity-50 bg-black items-center py-6 text-white uppercase">
			<div className="text-3xl font-bold">Group Smurf</div>
			<div className="flex gap-5 items-center font-medium">
				<HeaderItem name="Home" />
				<HeaderItem name="About" />
				<HeaderItem name="Products" />
				<HeaderItem name="Faq" />
				<HeaderItem name="Contact" destaque />
			</div>
		</div>
	)
}

interface IProps {
	name: string
	link?: string
	destaque?: boolean
}

const HeaderItem = ({ name, link = "#", destaque }: IProps) => {
	return (
		<Link href={link}>
			<div className={destaque && "px-6 py-3 bg-blue-500 rounded-lg"}>{name}</div>
		</Link>
	)
}

export default Header
