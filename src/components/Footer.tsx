import Link from "next/link"

const Footer = () => {
	return (
		<footer className="w-screen bg-black/90 py-4 mt-40 flex">
			<h3 className="text-white text-lg mx-auto">
				Made By <Link href={"https://pedromdsn.com"}>Pedromdsn</Link>
			</h3>
		</footer>
	)
}

export default Footer
