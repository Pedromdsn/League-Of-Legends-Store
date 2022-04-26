import Link from "next/link"

import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
	const [mobile, setMobile] = useState(false)

	return (
		<header className="z-30 absolute w-screen flex justify-around bg-opacity-50 bg-black items-center py-6 text-white uppercase">
			<Logo />
			<ul
				className={`flex gap-6 items-center transition-all md:overflow-hidden 
				md:justify-end duration-200 md:text-xl md:flex-col
				${mobile ? "md:h-[350px]" : "md:h-20 md:opacity-0"}`}>
				<HeaderItem name="Home" />
				<HeaderItem name="About" link="/#about"/>
				<HeaderItem name="Products" link="/#products"/>
				<HeaderItem name="Contact" destaque />
			</ul>
			<GiHamburgerMenu
				className="hidden md:flex md:absolute top-14 right-10"
				color="#fff"
				size={40}
				onClick={() => setMobile(!mobile)}
			/>
		</header>
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
			<li className={`cursor-pointer ${destaque && "px-6 py-3 bg-blue-600 rounded-lg "}`}>{name}</li>
		</Link>
	)
}

export default Header
