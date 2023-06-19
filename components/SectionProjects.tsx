import { motion } from 'framer-motion';
// import {
//     ArrowTopRightOnSquareIcon
// } from "@heroicons/react/24/outline";
// import Image from "next/image";
// import Link from "next/link";

import Projects from './Projects';


const SectionProjects = () => {

    return (
        <>
            <style jsx>{
                `
    .bg_4{
         background: linear-gradient(110deg, rgba(252,252,252,0.2189250700280112) 8%, rgba(252,252,252,1) 18%, rgb(147 147 147) 63%)
    }
   .bg_3{
    background: linear-gradient(270deg, rgba(172,172,172,0.6558998599439776) 0%, rgba(255,255,255,0.6979166666666667) 23%)
   }
   
    `
            }
            </style>
            <div className='bg_4'>

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
