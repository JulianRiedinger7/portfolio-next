import Image from 'next/image';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header() {
	const [menuOpened, setMenuOpened] = useState<boolean>(false);

	const onHandleMenu = () => setMenuOpened(!menuOpened);

	return (
		<header className="fixed top-0 z-10 flex items-center justify-between w-full h-20 px-3 shadow-xl backdrop-blur-sm lg:px-5">
			<Image src="/logo.png" alt="logo jr" width={120} height={120} />
			<nav>
				<ul className="hidden space-x-4 text-xl md:flex">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Skills</a>
					</li>
					<li>
						<a href="#">Projects</a>
					</li>
				</ul>

				<FaBars
					size={30}
					className="cursor-pointer md:hidden"
					onClick={onHandleMenu}
				/>
				<div
					className={
						menuOpened
							? 'absolute top-0 left-0 w-screen h-screen transition-all duration-300 ease-in-out bg-black/70 md:hidden'
							: 'absolute left-[-100%]'
					}
				>
					<div className="w-[70%] h-full bg-[#F1FAEE] p-5">
						<div className="flex items-center justify-between">
							<h3>JulianRiedinger</h3>
							<AiOutlineClose size={30} onClick={onHandleMenu} />
						</div>
						<div className="border-b border-[#1D3557] my-2 pb-2">
							<h4>Construyamos algo juntos!</h4>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
