import { motion } from "framer-motion";

type Props = {
    directionLeft?: boolean
}
const Skills = ({ directionLeft }: Props) => {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    opacity: 0,
                    x: directionLeft ? -200 : 200
                }}
                transition={{ duretion: 1 }}
                whileInView={{ opacity: 1, x: 0 }}


                src="/others/certific4.png" alt=""

                className=" rounded-full border boreder-gray-500 object-cover w-24 h-24 filter group-hover:grayscale transition duration-3000 ease-in-out   "

            />
            <div className=" absolute opacity-0 group-hover:opacity-80 transtion duration-300 ease-in-out group-hover:bg-white h-24 rounded-full z-0  ">
                <div className=" flex items-center justify-center h-full  "  >
                    <p
                        className=" text-3xl font-bold text-black opscity-100  "
                    >100%</p>
                </div>
            </div>

        </div>
    );
};

export default Skills;