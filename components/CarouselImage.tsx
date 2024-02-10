import { ArrowPathRoundedSquareIcon, MagnifyingGlassPlusIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CarouselImage({ images, widthImg, heightImg }: { images: string; heightImg: number; widthImg: number }) {
    const [isMessageVisible, setIsMessageVisible] = useState(false);
    const [vertical, setVertical] = useState(false);

    useEffect(() => {
        setVertical(false);
    }, [images]);

    const toggleMessage = () => {
        setIsMessageVisible(!isMessageVisible);
        setVertical(false)
    };

    const handleClick = () => {
        setVertical(!vertical);
    };

    return (
        <>
            <div className=' absolute top-0 bottom-0 right-0 left-0 z-[3] group  ' onClick={toggleMessage} >
                <MagnifyingGlassPlusIcon className="h-6 w-6 sm:h-10 sm:w-10 text-light-blue-400 group-hover:text-white group-hover:bg-light-blue-400 bg-white absolute top-0 z-[2] rounded-[50%] border-2 border-light-blue-400 " />
            </div>

            <AnimatePresence>
                {isMessageVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                        }}
                        onClick={toggleMessage}
                        className='z-10'
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            className="z-[11] w-full sm:w-[80%]"
                        >
                            <ArrowPathRoundedSquareIcon className="fixed top-0 z-20 h-11 sm:h-14 w-11 sm:w-14 text-light-blue-400 rounded-[50%] border-2 border-light-blue-400 bg-white 
        hover:bg-light-blue-400 hover:text-white hover:border-white"
                                onClick={handleClick} />
                            <Image src={`https:${images}`} alt=" "
                                width={widthImg}
                                height={heightImg}
                                priority
                                className={` ${vertical ? 'rotate-90 scale-[145%] sm:scale-[80%]' : ''}`}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}