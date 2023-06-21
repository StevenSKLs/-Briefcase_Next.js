import { motion } from 'framer-motion';
// import {
//     ArrowTopRightOnSquareIcon
// } from "@heroicons/react/24/outline";

import Projects from './Projects';


const SectionProjects = () => {

    return (
        <>
            <div className=''
                style={{ background: 'linear-gradient(110deg, rgba(252,252,252,0.2189250700280112) 8%, rgba(252,252,252,1) 18%, rgb(147 147 147) 63%)' }}
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
                    className='snap-center flex justify-center items-center h-screen w-full relative'>

                    <h1 className='text-red text-[2rem] top-[9px] left-[2%] nunito absolute'>Proyectos</h1>

                    <Projects />
                </motion.div>
            </div>

        </>
    );
};

export default SectionProjects;
