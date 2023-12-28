import { Button } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import WorkExperience from './WorkExperience';

const Person = () => {
    return (
        <>
            <div className="snap-start h-screen w-full relative"
            // style={{ background: 'linear-gradient(108deg,rgb(249 249 249/48%)33%,rgba(252,252,252,1)53%,rgb(141 138 138)100%)' }}
            >

                <h1 className='text-red absolute text-[2rem] top-[12px] left-[2%] z-[3] nunito'>Acerca de mí</h1>
                <div className='absolute h-[65vh] w-[23vh] top-[35%] sm:h-[90vh] sm:w-[70vh] sm:top-[67px] z-[0] '>
                    <Image src={'/imgs/city30.png'} alt="user" fill />
                </div>

                <div
                    className=" flex flex-col relative mx-auto items-center "
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
                        className='flex gap-[1px] sm:gap-[2px] z-[2] justify-center items-center flex-col sm:flex-row sm:items-start '>

                        <div className='order-1 hidden sm:block' >
                            <motion.img
                                initial={{

                                    opacity: 0
                                }}
                                transition={{
                                    duration: 1
                                }}
                                whileInView={{
                                    opacity: 1,

                                }}
                                viewport={{
                                    once: true
                                }}
                                src="/others/user.jpeg" alt="hola"
                                className='flex-shrink-0 w-[15vh] sm:w-[27vh] object-cover z-[2]'
                            />
                        </div>
                        <div className='rounded-[2vh] p-[1rem] order-2 sm:order-1 sm:w-[68%] w-[90%] '
                            style={{ background: 'linear-gradient(270deg, rgba(172,172,172,0.6558998599439776) 0%, rgba(255,255,255,0.6979166666666667) 23%)' }}
                        >
                            <h1 className='text-red font-semibold'>
                                Hola, Soy Steven David Rojas Miño</h1>
                            <h2 className='text-red font-semibold text-[12px]  '>
                                Ecuador, Quito</h2>
                            <h3 className='text-red nunito text-[12px] '>
                                12/05/2001</h3>
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
                                className=' w-[15vh] sm:w-[37vh] ml-1 rounded-full z-[2] float-right sm:hidden  '
                            />

                            <p
                                className='flex-shrink-0 object-cover text-[80%] sm:text-[13px] mulish text-justify'
                            >
                                Desarrollador web full-stack apasionado por el arte y la tecnología. He completado el curso full-stack de Academlo y también tengo conocimientos en mecánica automotriz y electromecánica. Me gustaría aplicar mis habilidades y formar parte de un equipo de desarrollo web. Tengo experiencia en programación en Arduino, así como en tecnologías web como HTML, CSS, JavaScript, React.js, Node.js, TypeScript y Next.js. En mi tiempo libre, disfruto dibujar en Adobe Illustrator y salir a pasear con mi perro.
                            </p>
                            <div className=" flex gap-1 justify-center mt-[1rem] ">

                                <a href="/cv/CV-Next.pdf" download >
                                    <Button color='white' variant="outlined" className=' bg-black drop-shadow-{black} ' >Descargar CV</Button>
                                </a>
                                <a href="/cv/CV-Next.pdf" target="_blank" >
                                    <Button color='white' variant="outlined" className=' bg-black drop-shadow-{amount} backdrop-invert '
                                        style={{ filter: 'invert(1)' }}
                                    >Ver CV</Button>
                                </a>
                            </div>
                        </div>

                    </motion.div>

                    <div className='absolute h-[75vh] w-[40vh] sm:h-[95vh] sm:w-[100vh] top-0 z-[0] '>
                        <Image src={'/imgs/city9.png'} alt="user" fill />
                    </div>
                </div>
                <WorkExperience />
            </div>
        </>
    );
};

export default Person;

