import { motion } from "framer-motion";
import Skills from "./Skills";

const SectionSkills = () => {
    return (
        <>
            <style jsx>{
                `
    .bg_5{
        background: linear-gradient(180deg, rgba(163,163,163,0.8407738095238095) 0%, rgba(255,255,255,0.6979166666666667) 41%)
    }
   .bg_3{
    background: linear-gradient(270deg, rgba(172,172,172,0.6558998599439776) 0%, rgba(255,255,255,0.6979166666666667) 23%)
   }
   
    `
            }
            </style>
            <div className="bg_5" >
                <motion.div
                    initial={{
                        opacity: 0,

                    }}
                    transition={{ duretion: 1 }}
                    whileInView={{ opacity: 1 }}


                    className="flex relavite flex-col text-venter snap-center h-screen w-full justify-center items-center "
                >
                    <div className="grid grid-cols-4 gap-[2rem]  ">
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />
                        <Skills />

                    </div>
                </motion.div>
            </div>

        </>

    );
};

export default SectionSkills;