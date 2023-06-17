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

import { Pagination } from "swiper";

const Projects = () => {

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    ProjectsArray.map((project) => {
                        return (
                            <SwiperSlide key={project.title}>
                                <Card
                                    shadow={false}
                                    className="relative grid h-[37rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center mt-3 "
                                >
                                    <CardHeader
                                        floated={false}
                                        shadow={false}
                                        color="transparent"
                                        className="absolute inset-0 m-0 h-full w-full rounded-none"
                                    >
                                        <Image src={project.img} alt={project.alt} fill />
                                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                                    </CardHeader>
                                    <CardBody className="relative py-14 px-6 md:px-12 h-full ">
                                        <Typography
                                            variant="h2"
                                            color="white"
                                            className="mb-6 font-medium leading-[1.5]"
                                        >
                                            {project.title}
                                        </Typography>
                                        <Typography variant="h5" className="mb-4 text-gray-400 text-[14px]  " >
                                            {project.description}
                                        </Typography>
                                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">

                                            <Tooltip content="2 bedrooms">

                                                <Link href={project.deployments} target="_blank" >
                                                    <Avatar
                                                        size="xl"
                                                        variant="circular"
                                                        alt="candice wu"
                                                        className="border-2 border-white"
                                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                                    />
                                                </Link>
                                            </Tooltip>
                                            <Tooltip content="And +20 more">
                                                <Link href={project.urlGithub} target="_blank" >
                                                    <Avatar
                                                        size="xl"
                                                        variant="circular"
                                                        alt="candice wu"
                                                        className="border-2 border-white"
                                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
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