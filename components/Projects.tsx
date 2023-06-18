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
                            <SwiperSlide key={project.title} className="w-[70%]" >
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
                                    <CardBody className="relative py-14 px-6 md:px-12 text-white h-full flex justify-center "
                                        style={{ textShadow: '-2px 3px 0 #000000' }}
                                    >
                                        <Typography
                                            variant="h2"
                                            color="white"
                                            className="mb-6 font-medium leading-[1.5] absolute"
                                        >
                                            {project.title}
                                        </Typography>
                                        <Typography variant="h5" className="mt-[6rem] text-[14px]  " >
                                            {project.description}
                                        </Typography>
                                        <div className="group mt-8 inline-flex flex-wrap items-center absolute top-[75%] gap-3">

                                            <Tooltip content="GitHub">

                                                <Link href={project.deployments} target="_blank" >
                                                    <Avatar
                                                        size="xl"
                                                        variant="circular"
                                                        alt="candice wu"
                                                        className="border-2 border-white"
                                                        src="/others/github.png"
                                                    />
                                                </Link>
                                            </Tooltip>
                                            <Tooltip content="Deploy">
                                                <Link href={project.urlGithub} target="_blank" >
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