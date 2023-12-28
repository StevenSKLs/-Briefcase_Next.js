import { motion } from "framer-motion";
import Image from "next/image";
import Projects2 from "./Projects2";
import Skills from "./Skills";

const SectionSkills = () => {
    return (
        <>
            <div className=" relative w-full h-screen flex flex-col justify-center items-center">
                <h1 className='text-red text-[2rem] top-[12px] left-[2%] nunito absolute z-[2]'>Habilidades y tiempo</h1>
                <div
                    // initial={{
                    //     opacity: 0,
                    // }}
                    // transition={{ duretion: 0.5 }}
                    // whileInView={{ opacity: 1 }}
                    className='absolute top-[0] left-0 z-[0] h-[65vh] w-[23vh] sm:h-[90vh] sm:w-[70vh] '>
                    <Image src={'/imgs/city29.png'} alt="user" fill />
                </div>

                <div className=" flex ">
                    <motion.div
                        initial={{
                            opacity: 0,

                        }}
                        transition={{ duretion: 1 }}
                        whileInView={{ opacity: 1 }}

                        className="flex relative flex-col text-venter snap-center h-screen w-[70%] justify-center items-center z-[3]">
                        <div className="grid grid-cols-4 gap-y-[2rem] gap-x-[1rem] sm:gap-[2rem] z-[1] w-[90%] sm:w-auto ">
                            <Skills />
                        </div>

                        <div className='absolute h-[70vh] w-[70vh] top-[15vh] z-[0] '>
                            <Image src={'/imgs/city25.png'} alt="user" fill />
                        </div>
                    </motion.div>

                    <div className=" w-[70vh] h-full ">
                        <Projects2 />
                    </div>
                </div>

            </div>
        </>
    );
};

export default SectionSkills;