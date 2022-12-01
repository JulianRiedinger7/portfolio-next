import Image from 'next/image';

export default function Header() {
	return (
		<header className="fixed top-0 flex items-center justify-between w-full h-20 shadow-xl lg:px-4">
			<Image src="/logo.png" alt="vercel" width={120} height={120} />
			<nav>
				<ul className="flex space-x-4 text-xl">
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
			</nav>
		</header>
	);
}
