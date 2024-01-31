import SkillsArray from '@/lib/skills';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { Autoplay, Grid, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import DeviceSize from './Ancho';

const ShakeContainer = ({ children, isActive }: { children: React.ReactNode; isActive: boolean }) => {
    return (
        <motion.div
            initial={{ rotate: 0 }}
            animate={isActive ? { rotate: [45, -45, 45, 0] } : { rotate: 0 }}
            transition={{ duration: 0.9 }}
            style={{ display: 'inline-block' }}
            className='relative h-full w-full '
        >
            {children}
        </motion.div>
    );
};

const ExampleComponent = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { width } = DeviceSize();
    const ancho = width > 768 ? 4 : width > 600 ? 3 : 2
    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * SkillsArray.length);
            setActiveIndex(randomIndex);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Swiper
            slidesPerView={ancho}
            grid={{
                rows: 3,
            }}
            spaceBetween={25}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation, Grid]}
            className="mySwiper !h-[60vh] sm:!h-[70vh] ">

            {SkillsArray.map((materia, index) => (
                <SwiperSlide key={index} className="h-[calc((100%-30px)/2)] px-2 ">
                    <motion.div
                        className='mb-3 z-[3] my-2 py-2 sm:py-1 m768:w-[70%] w-[80%] h-[14vh] rounded-t-[20px] border border-white inline-block '
                        style={{ background: 'linear-gradient(295deg, rgba(163,163,163,0.8407738095238095) 0%, rgba(255,255,255,0.6979166666666667) 41%)' }}
                        whileHover={{ background: `${materia.background}` }}
                    >
                        <ShakeContainer isActive={index === activeIndex}>
                            <Image
                                src={materia.img}
                                alt=""
                                style={{ objectFit: 'contain' }}
                                sizes="500px"
                                fill
                                priority
                            />
                        </ShakeContainer>
                        <p className='text-center rounded-b-[20px] border border-white'
                            style={{ background: 'linear-gradient(295deg, rgba(163,163,163,0.8407738095238095) 0%, rgba(255,255,255,0.6979166666666667) 41%)' }}>
                            {materia.title}
                        </p>
                    </motion.div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ExampleComponent;