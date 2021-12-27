import Link from "next/link"

import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
	const [mobile, setMobile] = useState(false)

	return (
		<nav className="z-30 absolute w-screen flex justify-around bg-opacity-50 bg-black items-center py-6 text-white uppercase">
			<Logo />
			<div
				className={`flex gap-6 items-center transition-all md:overflow-hidden 
				md:justify-end duration-200 md:text-xl md:flex-col 
				${mobile ? "md:h-[350px]" : "md:h-20 md:opacity-0"}`}>
				<HeaderItem name="Home" />
				<HeaderItem name="About" />
				<HeaderItem name="Products" />
				<HeaderItem name="Faq" />
				<HeaderItem name="Contact" destaque />
			</div>
			<GiHamburgerMenu
				className="hidden md:flex md:absolute top-14 right-10"
				color="#fff"
				size={40}
				onClick={() => setMobile(!mobile)}
			/>
		</nav>
	)
}

const Logo = () => {
	return (
		<div className="cursor-pointer md:absolute top-14 left-10">
			<Link href="/">
				<div className="text-3xl font-bold">Group Smurf</div>
			</Link>
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
