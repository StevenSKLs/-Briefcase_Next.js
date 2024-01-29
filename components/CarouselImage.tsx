'use client'

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CarouselImage({ children, images }: { children: React.ReactNode, images: string[] }) {
    const [isMessageVisible, setIsMessageVisible] = useState(false);

    const toggleMessage = () => {
        setIsMessageVisible(!isMessageVisible);
    };

    return (
        <div>
            <article onClick={toggleMessage} className=' grid w-full h-full grid-cols-2 bg-black '>
                {children}
            </article>
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
                            className='z-10 w-full bg-black px-4 '
                        >
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={6}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper !h-[70vh]">
                                {images.map((product, index) => (
                                    <SwiperSlide className=" !flex !justify-center px-[3%] " key={index} >
                                        <Image src={product} alt=" "
                                            style={{ objectFit: 'contain' }}
                                            className="rounded-[10px]"
                                            sizes="500px"
                                            fill
                                            priority
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

    )
}