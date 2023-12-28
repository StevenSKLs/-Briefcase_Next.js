"use client"
import ContactMe from "@/components/ContactMe";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";
import { useState } from "react";
import Campana from "../components/Campana";
import Certifics from "../components/Certifics";
import Initial from "../components/Initial";
import Person from "../components/Person";
import Proyects from "../components/SectionProjects";
import SectionSkills from "../components/SectionSkills";

const Home = () => {

  const [card, setCard] = useState(<Initial />);

  const paginas = [
    {
      pag: <Initial />,
      name: 'Initial',
    },
    {
      pag: <Person />,
      name: 'Person',
    },
    {
      pag: <SectionSkills />,
      name: 'SectionSkills',
    },
    {
      pag: <Proyects />,
      name: 'Proyects',
    },
    {
      pag: <WorkExperience />,
      name: 'WorkExperience',
    },
    {
      pag: <Certifics />,
      name: 'Certifics',
    },
    {
      pag: <ContactMe />,
      name: 'ContactMe'
    },
    {
      pag: <Campana />,
      name: 'Campana'
    },
  ]

  return (
    <>
      <Head>
        <title>Portafolio.TSX</title>
        <link rel="icon" href="/imgs/city13.png" />
      </Head>
      <div className="h-screen w-full "
        style={{ background: 'linear-gradient(104deg, rgba(255,255,255,0) 57%, rgba(232,232,232,1) 65%, rgba(115,115,115,1) 91%, rgba(56,56,56,1) 99%)' }}
      >
        <div className=" w-full ">

        </div>
        <div className=" flex ">
          <div className=" w-[27vh] bg-black " >
            {paginas.map(page => [
              <div key={page.name} className=" flex flex-col " >
                <button onClick={() => setCard(page.pag)} className="  text-white ">{page.name}</button>
              </div>
            ])}
          </div>
          {card}

        </div>

      </div>
    </>
  );
};

export default Home;
/* 
      <div className='lineEffect'>
      linear-gradient(307deg, rgba(14,14,14,1) 0%, rgba(33,33,33,1) 10%, rgba(115,115,115,1) 22%, rgba(255,255,255,0) 54%)
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
      </div> */