import SkillsArray from "@/lib/skills";
import { motion } from "framer-motion";

type Props = {
    directionLeft?: boolean
}
const Skills = ({ directionLeft }: Props) => {
    return (
        <>
            {
                SkillsArray.map((skills) => {
                    return (
                        <div key={skills.title} className="group relative flex cursor-pointer">
                            <motion.img
                                initial={{
                                    opacity: 0,
                                    x: directionLeft ? -200 : 200
                                }}
                                transition={{ duretion: 1 }}
                                whileInView={{ opacity: 1, x: 0 }}


                                src={skills.img} alt={skills.alt}

                                className=" rounded-[20px] border border-white object-cover w-24 h-24 filter group-hover:grayscale transition duration-3000 ease-in-out"
                                style={{ background: 'linear-gradient(295deg, rgba(163,163,163,0.8407738095238095) 0%, rgba(255,255,255,0.6979166666666667) 41%)' }}
                            />
                            <div className="rounded-[20px] absolute opacity-0 group-hover:opacity-90 transtion duration-300 ease-in-out group-hover:bg-white h-24 z-0  ">
                                <div className=" flex items-center justify-center h-full text-center "  >
                                    <p
                                        className=" text-3xl font-bold text-black opscity-100  "
                                    >{skills.time}</p>
                                </div>
                                <p>{skills.title}</p>
                            </div>

                        </div>
                    )

                })
            }

        </>

    );
};

export default Skills;