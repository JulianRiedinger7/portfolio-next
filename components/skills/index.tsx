import {
	SiBootstrap,
	SiCss3,
	SiFirebase,
	SiHtml5,
	SiJavascript,
	SiNextdotjs,
	SiReact,
	SiRedux,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si'
import Technology from '../technology'

export default function Skills() {
	return (
		<section className="pb-20">
			<h2 className="pb-5 text-center">Skills / Tecnologias</h2>
			<div className="flex flex-wrap justify-center gap-10">
				<Technology text="HTML 5" icon={SiHtml5} color="#e34c26" />
				<Technology text="CSS 3" icon={SiCss3} color="#264de4" />
				<Technology text="TAILWIND" icon={SiTailwindcss} color="#38BDF8" />
				<Technology text="BOOTSTRAP" icon={SiBootstrap} color="#7911EE" />
				<Technology text="JAVASCRIPT" icon={SiJavascript} color="#F0DB4F" />
				<Technology text="TYPESCRIPT" icon={SiTypescript} color="#007ACC" />
				<Technology text="REACT" icon={SiReact} color="#61DBFB" />
				<Technology text="FIREBASE" icon={SiFirebase} color="#FFA611" />
				<Technology text="REDUX" icon={SiRedux} color="#764ABC" />
				<Technology text="NEXT.JS" icon={SiNextdotjs} color="#000" />
			</div>
		</section>
	)
}
