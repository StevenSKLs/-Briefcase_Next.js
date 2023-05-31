import Head from "next/head";
import Certifics from "./Certifics";
import Initial from "./Initial";
import Person from "./Person";
import Proyects from "./Proyects";


// import { GetStaticProps, NextPage } from "next";
// type Props = {
//   initial: Initial
// }
// const CardGeneral: NextPage = () => {

const CardGeneral = () => {

  return (
    <>
      <Head>
        <title>Portafolio.TSX</title>
        {/* <link href="" rel="icon"  /> */}
      </Head>
      <div className="snap-mandatory snap-y h-screen w-full overflow-auto scrollbar scrollbar-thumb-[#e73f3f] scrollbar-track-gray-300 ">

        <Initial />
        <Person />
        <Proyects />
        <Certifics />



        <div className="snap-center h-screen w-full bg-red">
          <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center h-screen w-full bg-black">
          <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
      </div>
      {/* <div className="bg-[black]"></div> */}



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

// export const getStaticProps: GetStaticProps<Props> = async () => {

// }