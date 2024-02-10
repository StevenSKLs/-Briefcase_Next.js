import { Proyectos } from "@/lib/typings";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DeviceSize from "./Ancho";

const WorkExperience = ({ proyectos }: { proyectos: Proyectos[] }) => {
    const { width } = DeviceSize();
    const ancho = width > 768 ? 3 : width > 600 ? 2 : 1

    return (
        <section className=" relative w-full h-full  "
        >
            <h1 className='text-red text-[2rem] my-3 w-full text-center'>Experiencia Laboral</h1>

            <Swiper
                slidesPerView={ancho}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper !h-[60vh] sm:!h-[72vh]"
            >
                {proyectos.map((project, index) => (
                    <SwiperSlide key={index} >
                        <article className="rounded-[20px] bg-white w-[90%] h-full inline-block ">
                            <div className="w-full relative h-[49%]">
                                <Image src={`https:${project.fields.image.fields.file.url}`}
                                    alt="" style={{ objectFit: 'cover' }}
                                    className="rounded-t-[20px]"
                                    sizes="500px"
                                    fill
                                    priority />
                            </div>
                            <div className="mb-3 h-[51%] px-2">
                                <Typography variant="h5" color="blue-gray" className='my-2' >
                                    {project.fields.title}
                                </Typography>
                                <p className="text-[12px] sm:text-[13px] text-justify">
                                    {project.fields.image.fields.description}
                                </p>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
};

export default WorkExperience;