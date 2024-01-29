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