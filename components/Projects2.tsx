import ProjectsArray from "@/lib/projects";
import { motion } from 'framer-motion';
import Image from "next/image";

const Projects2 = () => {
    return (
        <div className=" flex flex-col items-center">
            <div className=" grid-cols-2 ">
                {ProjectsArray.map((project, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Image src={project.img} alt=" " width={100} height={100} />
                            <p>

                                {project.title}
                            </p>
                        </motion.div>

                    )
                })}

            </div>

        </div>
    );
};

export default Projects2;