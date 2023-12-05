import { Navbar } from './Navbar'

export const Header = () => {
	return (
		<div className="flex flex-row justify-between fixed top-0 ml-[10%] w-[80%] h-24 text-xl tracking-[.015em] text-[#211f20] font-['Georgia_serif'] bg-[bisque] rounded-b-lg shadow-[0_7px_10px_#333] z-10">
			<Navbar />
		</div>
	)
}
