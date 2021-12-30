import Link from "next/link"

const Footer = () => {
	return (
		<div className="w-screen bg-black/90 py-4 mt-40 flex">
			<h1 className="text-white text-lg mx-auto">
				Made By <Link href={"https://pedromdsn.com"}>Pedromdsn</Link>
			</h1>
		</div>
	)
}

export default Footer
