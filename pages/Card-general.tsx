// "use client"
import Head from "next/head";
import Certifics from "../components/Certifics";
import Initial from "../components/Initial";
import Person from "../components/Person";
import Proyects from "../components/SectionProyects";
import SectionSkills from "../components/SectionSkills";





const CardGeneral = () => {

  return (
    <>
      <Head>
        <title>Portafolio.TSX</title>

      </Head>
      <div className="snap-mandatory snap-y h-screen w-full overflow-auto scrollbar scrollbar-thumb-[#e73f3f] scrollbar-track-gray-300 ">

        <Initial />
        <Person />
        <SectionSkills />
        <Proyects />
        <Certifics />



        <div className="snap-center h-screen w-full bg-black">


        </div>
      </div>


      {/* 
      <div className='lineEffect'>
        <p className="hover-underline-animation">
          Desarrollador web full-stack interesado por el arte y las tecnologías, me he preparado para culminar el curso full- stack de Academlo y también tengo conocimientos en la área de mecánica automotriz y electromecánica. Gracias al aprendizaje adquirido en Academlo estoy buscando aportar el conocimiento inculcado y formar parte de un grupo de trabajo en desarrollo web. Tengo conocimiento en la programación en Html, Css, Js, React.js y Node.js.</p>
      </div>
      <div className="h-32 w-32 relative cursor-pointer mb-5">
        <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl w"></div>

        <div className="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
          <div className="h-full w-full bg-white rounded-lg shadow-2xl">
            <h1>hola mundo</h1>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CardGeneral;