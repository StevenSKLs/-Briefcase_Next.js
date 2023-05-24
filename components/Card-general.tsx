import Image from "next/image";


import { motion } from "framer-motion";

const CardGeneral = () => {

  return (
    <>
      <style jsx global>{`
            .continuar{
                position: absolute;
                height: 77vh;
                width: 73vh;
                top: 0px;
                left: 0px;
                z-index: -1;
        }


        .led_sky_blue_1{
            font-size: 24px;
            text-align: center;
            animation: glow 5s infinite;
            position: absolute;
            top: 15rem;
            left: 4rem;
            z-index: 3;
            height: 1px;
            width: 1px;
          }
          .led_sky_blue_2{
            font-size: 24px;
            text-align: center;
            animation: glow2 5s infinite;
            position: absolute;
            top: 7rem;
            left: 17rem;
            z-index: 3;
            height: 1px;
            width: 1px;
          }
          
          @keyframes glow {
            0% {
              box-shadow: 0 0 20px 13px #0b9aff;
            }
            50% {
              box-shadow: 0 0 6px #0b9aff, 0 0 6px #0b9aff;
            }
            100% {
              box-shadow: 0 0 20px 13px #0b9aff;
            }
          }

          @keyframes glow2 {
            0% {
              box-shadow: 0 0 20px 13px #45B1D7;
            }
            50% {
              box-shadow: 0 0 6px #45B1D7, 0 0 6px #45B1D7;
            }
            100% {
              box-shadow: 0 0 20px 13px #45B1D7;
            }
          }
          
        `}
      </style>

      <div className="led_sky_blue_1">
      </div>
      <div className="led_sky_blue_2">
      </div>
      {/* <div className="absolute top-[15rem] left-[30rem] h-[4rem] w-[7rem] animate-[wiggle_1s_infinite]">
                <h1>prueba completada</h1>
            </div> */}

      <div className='continuar'>
        <Image src={'/imgs/city0.jpg'} alt="user" fill />
      </div>


      <div className="bg-[black]">
        <div className="h-screen flex flex-col space-y-10 items-center text-center overflow-hidden ">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              scale: [1, 2, 2, 3, 1],
              opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"]
            }}
            transition={{
              duration: 3,
            }}

            className="relative flex justify-center items-center">
            <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping " />
            <div className="rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52 " />
            <div className="rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52 " />
            <div className="rounded-full border border-[#ff1100] h-[650px] w-[650px] absolute mt-52 animate-pulse" />
            <div className="rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52 " />
          </motion.div>
        </div>
      </div>



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
      </div>
    </>
  );
};

export default CardGeneral;