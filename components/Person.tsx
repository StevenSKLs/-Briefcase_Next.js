import { Button } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Person = () => {
    return (
        <>
            <style jsx>{
                `
    .bg_2{
         background: linear-gradient(108deg,rgb(249 249 249/48%)33%,rgba(252,252,252,1)53%,rgb(141 138 138)100%)
    }
   .bg_3{
    background: linear-gradient(270deg, rgba(172,172,172,0.6558998599439776) 0%, rgba(255,255,255,0.6979166666666667) 23%)
   }
   
    `
            }
            </style>
            <div className="snap-center h-screen w-full bg_2 relative">

                <h1 className='text-red absolute text-[2rem] top-[12px] left-[2%] z-[3] nunito'>Acerca de mí</h1>
                <div className='absolute h-[65vh] w-[23vh] top-[35%] sm:h-[93vh] sm:w-[100vh] sm:top-[43px] z-[0] '>
                    <Image src={'/imgs/city30.png'} alt="user" fill />
                </div>


                <div
                    className=" flex flex-col relative h-full justify-evenly mx-auto items-center "
                >
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 1.4
                        }}
                        className='flex gap-[1vw] sm:gap-[8vw] z-[2] items-center flex-col sm:flex-row sm:items-start '>
                        <div className='rounded-[2vh] bg_3 p-[1rem] order-2 sm:order-1 '>
                            <h1 className='text-red font-semibold text-[3vh]  '>Hola, Soy Steven David Rojas Miño</h1>

                            <h1 className='text-red font-semibold text-[2vh]  '>Ecuador, Quito</h1>

                            <h1 className='text-red nunito'>2001/05/12</h1>

                            <p
                                className='flex-shrink-0 object-cover text-[98%] sm:text-[16px] sm:h-[50vh] sm:w-[50vh] mulish text-justify'
                            >
                                Desarrollador web full-stack interesado por el arte y las tecnologías,
                                me he preparado para culminar el curso full-stack de Academlo y también tengo conocimientos
                                en la área de mecánica automotriz y electromecánica. Gracias al aprendizaje adquirido en
                                Academlo estoy buscando aportar el conocimiento inculcado y formar parte de un grupo de trabajo en
                                desarrollo web. Tengo conocimiento en la programación en Arduino, Html, Css, JS, React.js, Node.js, TypeScript y Next.js.
                                <br /><br />
                                Me gusta también dibujar en mi tiempo libre en Adobe Illustrator y salir de paseo con mi perro.
                            </p>

                        </div>
                        <div className='order-1' >
                            <motion.img
                                initial={{
                                    x: -200,
                                    opacity: 0
                                }}
                                transition={{
                                    duration: 1
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                src="/others/user.jpeg" alt="hola"
                                className='flex-shrink-0 w-[15vh] sm:w-[37vh] rounded-full object-cover z-[2]'
                            />

                            <div className=" flex gap-1 ">
                                <a href="/cv/CV-Next.pdf" download >
                                    <Button color="blue-gray">Descargar CV</Button>
                                </a>
                                <a href="/cv/CV-Next.pdf" target="_blank" >
                                    <Button color="deep-purple">Ver CV</Button>
                                </a>
                            </div>
                        </div>
                    </motion.div>


                    <div className='absolute h-[75vh] w-[40vh] sm:h-[95vh] sm:w-[100vh] top-0 z-[0] '>
                        <Image src={'/imgs/city9.png'} alt="user" fill />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Person;

