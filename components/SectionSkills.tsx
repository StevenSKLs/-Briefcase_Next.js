import { motion } from "framer-motion";
import Image from "next/image";
import Skills from "./Skills";

const SectionSkills = () => {
    return (
        <>
            <style jsx>{
                `
    .bg_5{
        background: linear-gradient(110deg, rgba(252,252,252,0.2189250700280112) 16%, rgba(252,252,252,1) 37%, rgb(147 147 147) 82%)
    }
   .bg_3{
    background: linear-gradient(270deg, rgba(172,172,172,0.6558998599439776) 0%, rgba(255,255,255,0.6979166666666667) 23%)
   }
   
    `
            }
            </style>
            <div className="bg_5 relative " >
                <div className='absolute top-[0] z-[0] h-[65vh] w-[23vh] sm:h-[93vh] sm:w-[100vh] '>
                    <Image src={'/imgs/city29.png'} alt="user" fill />
                </div>
                <motion.div
                    initial={{
                        opacity: 0,

                    }}
                    transition={{ duretion: 1 }}
                    whileInView={{ opacity: 1 }}

                    className="flex relative flex-col text-venter snap-center h-screen w-full justify-center items-center z-[3]"
                >
                    <h1 className='text-red text-[2rem] top-[12px] left-[2%] nunito absolute'>Habilidades y tiempo</h1>
                    <div className="grid grid-cols-4 gap-[1rem] sm:gap-[2rem] z-[1] w-[90%] sm:w-auto ">
                        <Skills />

                    </div>
                    {/* <div className='absolute h-[70vh] w-[70vh] top-[15vh] z-[0] '>
                        <Image src={'/imgs/city25.png'} alt="user" fill />
                    </div> */}
                </motion.div>

            </div>

        </>

    );
};

export default SectionSkills;