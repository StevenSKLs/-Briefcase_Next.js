import { Project } from "@/lib/typings";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { Grid, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DeviceSize from "./Ancho";

const Projects = ({ recipes }: { recipes: Project[] }) => {
    const { width } = DeviceSize();
    const ancho = width > 768 ? 3 : width > 600 ? 2 : 1

    return (
        < section className="w-full h-full">
            <h1 className='text-red text-[2rem] mb-3 w-full text-center'>Proyectos</h1>

            <Swiper
                grabCursor={true}
                slidesPerView={ancho}
                grid={{
                    rows: 2,
                }}
                spaceBetween={25}
                navigation={true}
                modules={[Grid, Navigation]}
                className="mySwiper !h-[65vh] sm:!h-[80vh] sm:!px-2 !px-5 ">

                {recipes.map((project, index) => (
                    <SwiperSlide key={index} className="relative overflow-hidden">
                        <Image
                            src={`https:${project.fields.image[0].fields.file.url}`}
                            alt=""
                            style={{ objectFit: 'unset' }}
                            sizes="500px"
                            fill
                            priority
                        />
                        <Link href={`/project/${project.fields.slug}`}>
                            <motion.div
                                className="absolute top-0 h-[130%] right-0 left-0 flex items-end justify-center heredero"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                whileHover={{ y: -25 }}
                            >
                                <Typography variant="h6" className="h-[40%] w-full project rounded-t-[20px] pt-2">
                                    {project.fields.tilte}
                                </Typography>
                            </motion.div>
                        </Link>

                        <Link href={project.fields.deploy} target="_blank" className="h-[10vh] w-[10vh] absolute top-0 left-0 border-[2px] border-[#ff8139] bg-white rounded-[50%] p-[9px] drop " >
                            <Image
                                src={"/projects/deploy.png"}
                                alt=""
                                width={512} height={512}
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ section>
    );
};

export default Projects;