import ProjectsArray from "@/lib/projects";
import {
    Avatar,
    Card,
    CardBody,
    CardHeader,
    Tooltip,
    Typography
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useState } from 'react';
import { Pagination } from "swiper";


const Projects = () => {
    const [dimension, setDimension] = useState({ width: 0 });
    useEffect(() => {
        const handleResize = () => {
            setDimension({ width: window.innerWidth });
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);

        };
    }, []);
    const dimensions = Number(dimension.width)

    const whitScreen = dimensions >= 601 && dimensions <= 850 ? 2 : dimensions <= 600 ? 1 : 3
    return (
        <>

            <Swiper
                grabCursor={true}
                slidesPerView={whitScreen}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className=" h-[90%!important] w-[90%!important] sm:h-auto sm:w-auto mt-[1rem!important]  "
            >
                {
                    ProjectsArray.map((project) => {
                        return (
                            <SwiperSlide key={project.title} >
                                <Card
                                    shadow={true}
                                    className="relative grid h-[98%] sm:h-[37rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center mt-3 "
                                >
                                    <CardHeader
                                        floated={false}
                                        shadow={true}
                                        color="transparent"
                                        className="absolute inset-0 m-0 h-full w-full rounded-none"
                                    >
                                        <Image src={project.img} alt={project.alt} fill />
                                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                                    </CardHeader>
                                    <CardBody className="relative py-14 px-6 md:px-12 text-white h-full flex justify-center "
                                        style={{ textShadow: '-2px 3px 0 #000000' }}
                                    >
                                        <Typography
                                            variant="h2"
                                            color="white"
                                            className="mb-6 font-medium leading-[1.5] text-[1.7rem] absolute"
                                        >
                                            {project.title}
                                        </Typography>
                                        <Typography variant="h5" className="mt-[6rem] text-[14px]  " >
                                            {project.description}
                                        </Typography>
                                        <div className="group mt-8 inline-flex flex-wrap items-center absolute top-[75%] gap-3">

                                            <Tooltip content="Deploy">
                                                <Link href={project.deployments} target="_blank" >
                                                    <Avatar
                                                        size="xl"
                                                        variant="circular"
                                                        alt="candice wu"
                                                        className="border-2 border-white"
                                                        src="/others/deploy2.png"
                                                    />
                                                </Link>
                                            </Tooltip>
                                        </div>

                                    </CardBody>
                                </Card>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
};

export default Projects;