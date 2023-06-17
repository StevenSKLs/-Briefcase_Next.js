import { motion } from "framer-motion";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";


const Certifics = () => {
    return (
        <>
            <style jsx global>{
                `
                .bg_4 {
                    background: linear-gradient(180deg, rgba(163,163,163,0.8407738095238095) 0%, rgba(255,255,255,0.6979166666666667) 41%)
                }
            
   
    `
            }
            </style>

            <motion.div
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 1.4
                }}
                className=' snap-center h-screen w-full flex justify-center items-center relative'

            >
                <h1 className='text-red text-[2rem] top-[9px] left-[2%] nunito absolute z-[3]'>Cursos Online</h1>


                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <motion.img
                            src="/others/certific1.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.img

                            src="/others/certific2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.img

                            src="/others/certific3.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.img

                            src="/others/certific4.png" />
                    </SwiperSlide>



                </Swiper>




                <Image src={'/imgs/city17.jpg'} alt="user" fill />

            </motion.div>


        </>
    );
};

export default Certifics;

//prototipo  

// animate={{
//     rotate: [0, -10, 10, -10, 10, -5, 5, -2, 2, 0],
// }}
// transition={{
//     repeat: Infinity,
//     duration: 2.2,
//     repeatDelay: 1,
// }}


{/* <div>
                    <motion.svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <motion.path
                            d="M50 10C50 10 10 30 10 55C10 80 40 90 50 90C60 90 90 80 90 55C90 30 50 10 50 10Z"
                            fill="#f2f2f2"
                            stroke="#000000"
                            strokeWidth="2"
                            whileHover={{ fill: '#ff0000' }}
                            whileTap={{ scale: 0.8 }}
                        />
                        <motion.path
                            d="M25 55H75"
                            stroke="#000000"
                            strokeWidth="2"
                            animate={{
                                rotate: [0, -10, 10, -10, 10, -5, 5, -2, 2, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                repeatDelay: 1,
                            }}
                        />
                        <motion.path
                            d="M50 75C45 75 40 80 40 85H60C60 80 55 75 50 75Z"
                            fill="#f2f2f2"
                            stroke="#000000"
                            strokeWidth="2"
                            animate={{
                                rotate: [0, -10, 10, -10, 10, -5, 5, -2, 2, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                repeatDelay: 1,
                            }}
                        />
                    </motion.svg>
                </div> */}