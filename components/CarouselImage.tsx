'use client'

import { Image_fields } from "@/lib/typings";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CarouselImage({ children, images }: { children: React.ReactNode, images: Image_fields[] }) {
    const [isMessageVisible, setIsMessageVisible] = useState(false);

    const toggleMessage = () => {
        setIsMessageVisible(!isMessageVisible);
    };
    return (
        <>
            <motion.div
                onClick={toggleMessage}
                className="absolute top-0 h-[130%] right-0 left-0 flex items-end justify-center heredero"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ y: -25 }}
            >
                {children}
            </motion.div>
            <AnimatePresence>
                {isMessageVisible && (

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={6}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper ">
                        <div className="absolute bg-red top-0 right-0 z-20 h-10 w-10" onClick={toggleMessage}>
                            X
                        </div>
                        {images.map((img, index) => (
                            <SwiperSlide className=" !flex !justify-center px-[3%] " key={index} >
                                <Image src={`https:${img.fields.file.url}`} alt=" "
                                    style={{ objectFit: 'contain' }}
                                    sizes="500px"
                                    fill
                                    priority
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </AnimatePresence>
        </>
    )
}