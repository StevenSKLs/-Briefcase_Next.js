'use client'

import { MagnifyingGlassPlusIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CarouselImage({ images, width, height }: { images: string; height: number; width: number }) {
    const [isMessageVisible, setIsMessageVisible] = useState(false);

    const toggleMessage = () => {
        setIsMessageVisible(!isMessageVisible);
    };

    return (
        <>
            <div className=' absolute top-0 bottom-0 right-0 left-0 z-[3] group  ' onClick={toggleMessage} >
                <MagnifyingGlassPlusIcon className="h-10 w-10 text-light-blue-400 group-hover:text-white group-hover:bg-light-blue-400 bg-white absolute top-0 z-[2] rounded-[50%] border-2 border-light-blue-400 " />
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
                            className='z-[11] w-[80%] '
                        >
                            <Image src={`https:${images}`} alt=" "
                                width={width}
                                height={height}
                                priority
                            />
                        </motion.div>


                    </motion.div>
                )}
            </AnimatePresence>

        </>
    )
}