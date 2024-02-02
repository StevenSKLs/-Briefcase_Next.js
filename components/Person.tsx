import { Button } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ExampleComponent from './Fugas';
import WorkExperience from './WorkExperience';

export default function Person() {
    return (
        <section className="w-full h-full relative">

            <h1 className="text-red mb-3 w-full text-center text-[2rem]">Acerca de mí</h1>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.4 }}
                className="grid sm:grid-cols-[1fr,3fr] w-full sm:px-[10%] h-full">
                <div className=" hidden sm:block relative">
                    <Image
                        src="/others/user.jpeg"
                        alt=""
                        style={{ objectFit: 'contain' }}
                        sizes="500px"
                        fill
                        priority
                    />
                </div>
                <div className="rounded-[2vh] p-[1rem] w-full"
                    style={{ background: 'linear-gradient(270deg, rgba(172,172,172,0.6558998599439776) 0%, rgba(255,255,255,0.6979166666666667) 23%)' }}>
                    <h1 className="text-red font-semibold mb-1">Hola, Soy Steven David Rojas Miño</h1>
                    <h2 className="text-red font-semibold  mb-1">Ecuador, Quito</h2>
                    <h3 className="text-red nunito  mb-3">12/05/2001</h3>
                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="w-[20%] m-2 z-[2] relative float-right sm:hidden"
                    >
                        <Image
                            src="/others/user.jpeg"
                            alt=""
                            style={{ objectFit: 'contain' }}
                            className=" rounded-[20px]"
                            sizes="500px"
                            fill
                            priority
                        />
                    </motion.div>
                    <p className="text-[14px] text-justify font-nunito">
                        Desarrollador web full-stack apasionado por el arte y la tecnología. He completado el curso full-stack de Academlo y también tengo conocimientos en mecánica automotriz y electromecánica. <br />
                        Me gustaría aplicar mis habilidades y formar parte de un equipo de desarrollo web. Tengo experiencia en programación en Arduino, así como en tecnologías web como HTML, CSS, JavaScript, React.js, Node.js, TypeScript y Next.js. En mi tiempo libre, disfruto dibujar en Adobe Illustrator y salir a pasear con mi perro.
                    </p>
                    <div className="flex gap-1 justify-center mt-[1rem]" >
                        <Link href="/cv/CV-Next.pdf" download>
                            <Button color='white' variant="outlined" className="bg-black drop-shadow-[black]">Descargar CV</Button>
                        </Link>
                        <Link href="/cv/CV-Next.pdf" target="_blank">
                            <Button color='white' variant="outlined" className="bg-black drop-shadow-[amount] backdrop-invert" style={{ filter: 'invert(1)' }}>Ver CV</Button>
                        </Link>
                    </div>
                </div>
            </motion.div>

            <Image src={'/imgs/city9.png'} alt="user" width={837} height={836}
                className="absolute bottom-[40%] z-[-1] right-0" />

            <h1 className="text-red text-[2rem] mb-3 w-full text-center">Habilidades</h1>

            <ExampleComponent />

            <WorkExperience />
        </section>
    );
}
