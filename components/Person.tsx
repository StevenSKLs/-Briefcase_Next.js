import { Image_fields } from '@/lib/typings';
import { DocumentIcon } from '@heroicons/react/20/solid';
import { Button } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ExampleComponent from './Fugas';

export default function Person({ user, city }: { user: Image_fields; city: Image_fields }) {
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
                        src={`https:${user.fields.file.url}`} alt=" "
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
                        className="w-[18vh] h-[18vh] z-[2] relative float-right sm:hidden"
                    >
                        <Image
                            src={`https:${user.fields.file.url}`} alt=" "
                            style={{ objectFit: 'contain' }}
                            sizes="500px"
                            fill
                            priority
                        />
                    </motion.div>
                    <p className="text-[14px] text-justify font-nunito">
                        Desarrollador web full-stack apasionado por el arte y la tecnología. He completado el curso full-stack de Academlo y también tengo conocimientos en mecánica automotriz y electromecánica. <br />
                        Me gustaría aplicar mis habilidades y formar parte de un equipo de desarrollo web. Tengo experiencia en programación en Arduino, así como en tecnologías web como HTML, CSS, JavaScript, React.js, Node.js, TypeScript y Next.js. En mi tiempo libre, disfruto dibujar en Adobe Illustrator y salir a pasear con mi perro.
                    </p>
                    <div className='grid place-content-center mt-4'>
                        <Link href="https://drive.google.com/file/d/1ZBYR0Dg8HGLRNsX0AcB5LJiNur_xGctx/view?usp=drive_link" target="_blank" className='contents'>
                            <Button className='grid grid-cols-2 gap-2 items-center rounded-none'>
                                Ver CV
                                <DocumentIcon className="h-6 w-6 text-blueLight justify-self-center" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.div>

            <Image src={`https:${city.fields.file.url}`} alt=" "
                width={city.fields.file.details.image.width}
                height={city.fields.file.details.image.height}
                className="absolute bottom-[40%] z-[-1] right-0 elemento-animado" />

            <h1 className="text-red text-[2rem] mb-3 w-full text-center">Habilidades</h1>

            <ExampleComponent />

        </section>
    );
}
