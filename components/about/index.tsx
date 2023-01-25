export default function About() {
	return (
		<section className="pb-20">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
				<path
					fill="#0099ff"
					fillOpacity="0.7"
					d="M0,160L80,170.7C160,181,320,203,480,176C640,149,800,75,960,42.7C1120,11,1280,21,1360,26.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
				></path>
			</svg>
			<div className="max-w-5xl p-5 mx-auto">
				<h2 className="pb-5 text-center">Sobre Mi</h2>
				<p className="text-lg font-medium">
					Mi nombre es Julian Riedinger, tengo 21 años y soy Desarrollador <strong className="highlight">Frontend</strong> especializado en <strong className="highlight">React</strong>. Soy una persona apasionada a la tecnologia, comenzando en el mundo de la programación en el año 2020. A dia de hoy sigo capacitandome con las nuevas tecnologias que surgen en el Frontend. <br />
					En cuanto a lo personal, mi principal hobby son los videojuegos, de todo tipo, y la actividad fisica, como la bicicleta o el gimnasio.
				</p>
			</div>
		</section>
	);
}
