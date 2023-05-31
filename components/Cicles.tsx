import { motion } from "framer-motion";
const Cicles = () => {
    return (

        <div className="h-full w-full absolute left-0 flex flex-col items-center text-center overflow-hidden z-0">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 2,
                    // repeat: Infinity,
                    // repeatDelay: 3
                }}

                className="relative flex justify-center items-center top-[20vh] z-[1]">

                <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-52 animate-ping " />
                <div className="rounded-full border border-[#333333] h-[150px] w-[150px] absolute mt-52 z-10" />
                <div className="rounded-full border border-[#333333] h-[450px] w-[450px] absolute mt-52 " />
                <div className="rounded-full border-[2.6px] border-[#ff1100] h-[350px] w-[350px] absolute mt-52 animate-pulse" />
                <div className="rounded-full border border-[#333333] h-[470px] w-[470px] absolute mt-52 " />
            </motion.div>
        </div>
    );
};

export default Cicles;