import ProjectsArray from "@/lib/projects";
import {
    Avatar
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DeviceSize from "./Ancho";

const Projects = () => {
    const { width } = DeviceSize();
    const ancho = width > 768 ? 3 : width > 600 ? 2 : 1
    return (
        < section className="w-full h-full">
            <h1 className='text-red text-[2rem] mb-3 w-full text-center'>Projectos</h1>
            <Swiper
                grabCursor={true}
                slidesPerView={ancho}
                grid={{
                    rows: 2,
                }}
                spaceBetween={25}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Grid, Pagination, Navigation]}
                className="mySwiper !h-[55vh] sm:!h-[80vh] ">

                {ProjectsArray.map((project) => (
                    <SwiperSlide key={project.title} className="relative">
                        <Image
                            src={project.img}
                            alt=""
                            style={{ objectFit: 'contain' }}
                            sizes="500px"
                            fill
                            priority
                        />
                        <Link href={project.deployments} target="_blank" >
                            <Avatar
                                size="xl"
                                variant="circular"
                                alt="candice wu"
                                className="border-2 border-white"
                                src="/others/deploy2.png"
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ section>
    );
};

export default Projects;