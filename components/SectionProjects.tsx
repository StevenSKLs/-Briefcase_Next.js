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
         background: linear-gradient(108deg,rgb(249 249 249/48%)33%,rgba(252,252,252,1)53%,rgb(141 138 138)100%)
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

                    <div
                        className=" w-full flex space-x-5 overflow-x-scroll p-[1.40rem] snap-x snap-mandatory h-[91vh] "
                    >
                        <Projects />
                    </div>


                </motion.div>
            </div>

        </>
    );
};

export default SectionProjects;

{/* <div className=" rounded-lg flex items-center space-y-7 flex-shrink-0 w-[500px] snap-center bg-black p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
                            <h1>PROYECT3</h1>
                            <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-500" />
                        </div> */}