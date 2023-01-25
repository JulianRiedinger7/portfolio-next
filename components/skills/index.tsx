import { SiBootstrap, SiCss3, SiFirebase, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'

export default function Skills(){
  return(
    <section className="pb-20">
      <h2 className="pb-5 text-center">Skills / Tecnologias</h2>
      <div className='flex flex-wrap justify-center gap-10'>
        <SiHtml5  size={50} color='#E34C26'/>
        <SiCss3 size={50} color='#264de4' />
        <SiTailwindcss  size={50} color='#38BDF8'/>
        <SiBootstrap size={50} color='#7911EE' />
        <SiJavascript  size={50} color='#F0DB4F' className='bg-[#323330]' />
        <SiTypescript  size={50} color='#007ACC'/>
        <SiReact size={50} color='#61DBFB' />
        <SiFirebase  size={50} color='#FFA611'/>
        <SiRedux size={50} color='#764ABC' />
        <SiNextdotjs size={50} />
      </div>
    </section>
  )
}