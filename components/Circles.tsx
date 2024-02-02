import { motion } from "framer-motion";

export default function Circles() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 2,
            }}
            className="relative flex justify-center items-center   z-[1]">
            <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] animate-ping " />
            <div className="rounded-full border border-[#333333] sm:h-[150px] sm:w-[150px] h-[95px] w-[95px] absolute z-10" />
            <div className="rounded-full border border-[#333333] sm:h-[450px] sm:w-[450px] h-[225px] w-[225px] absolute " />
            <div className="rounded-full border-[2.6px] border-[#ff1100] sm:h-[350px] sm:w-[350px] h-[175px] w-[175px] absolute animate-pulse" />
            <div className="rounded-full border border-[#333333] sm:h-[470px] sm:w-[470px] h-[235px] w-[235px] absolute " />
        </motion.div>

    );
}