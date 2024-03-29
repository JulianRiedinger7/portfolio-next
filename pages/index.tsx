import Head from 'next/head';
import Image from 'next/image';
import { About, Header, Skills } from '../components';

export default function Home() {
	return (
		<>
			<Head>
				<title>JulianRiedinger - Frontend Developer</title>
				<meta name="description" content="Developer Portfolio of Julian Riedinger" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className='h-full scrollbar scrollbar-thumb-rose-500 '>
				<div className="relative flex flex-col items-center justify-center h-screen overflow-hidden lg:flex-row lg:justify-around">
					<Header />
					<div className="text-center">
						<h1 className='sm:w-full sm:typing'>Hola! Soy Julian Riedinger</h1>
						<h2>Frontend Developer</h2>
						<a href="/cv-Julian-Riedinger.pdf" download className="btn-cv">
							Descargar CV
						</a>
					</div>
					<div className="relative mt-5 w-60 h-60 md:h-80 md:w-80">
						<Image
							src="/yo.jpeg"
							alt="Julian Riedinger"
							fill
							priority
							className="object-cover rounded-full aspect-square"
						/>
					</div>
					<video
						src="/background.mp4"
						autoPlay
						loop
						muted
						className="absolute w-auto min-w-full min-h-full -z-10 max-w-none"
					></video>
				</div>

		
				<About />
				<Skills />
			</main>
		</>
	);
}
