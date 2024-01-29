import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DeviceSize from "./Ancho";

const WorkExperience = () => {
    const { width } = DeviceSize();
    const ancho = width > 768 ? 3 : width > 600 ? 2 : 1

    const slidesData = [
        {
            imageSrc: '/others/Banco-Ecu.jpg',
            title: 'Taller Ecufix Car',
            description:
                'Adquirí habilidades de desarrollo, análisis en circuitos y bases de programación en Arduino, a base de pruebas y de errores de diferentes esquemas de Bancos de ECU’s; Me desempeñé en ayudar a compañeros del taller en el área de circuitos y de conexiones.',
        },
        {
            imageSrc: '/others/coworking_front-end4.png',
            title: 'Coworking Front-end',
            description:
                'Formé parte de un equipo que creó una aplicación web colaborativa para la búsqueda de residencias en México. Trabajamos utilizando TypeScript en Next.js, y nos dividimos para desarrollar diferentes funcionalidades. Colaboré en la parte de registro de usuarios con la implementación de autenticación por cookies.',
        },
        {
            imageSrc: '/others/Banco-Ecu.jpg',
            title: 'Taller Ecufix Car',
            description:
                'Adquirí habilidades de desarrollo, análisis en circuitos y bases de programación en Arduino, a base de pruebas y de errores de diferentes esquemas de Bancos de ECU’s; Me desempeñé en ayudar a compañeros del taller en el área de circuitos y de conexiones.',
        },
        {
            imageSrc: '/others/coworking_front-end4.png',
            title: 'Coworking Front-end',
            description:
                'Formé parte de un equipo que creó una aplicación web colaborativa para la búsqueda de residencias en México. Trabajamos utilizando TypeScript en Next.js, y nos dividimos para desarrollar diferentes funcionalidades. Colaboré en la parte de registro de usuarios con la implementación de autenticación por cookies.',
        },
    ];

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
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index} >
                        <article className="rounded-[20px] bg-white w-[90%] h-full inline-block ">
                            <div className="w-full relative h-[49%]">
                                <Image src={slide.imageSrc}
                                    alt="" style={{ objectFit: 'cover' }}
                                    className="rounded-t-[20px]"
                                    sizes="500px"
                                    fill
                                    priority />
                            </div>
                            <div className="mb-3 h-[51%] px-2">
                                <Typography variant="h5" color="blue-gray" className='my-2' >
                                    {slide.title}
                                </Typography>
                                <p className="text-[12px] sm:text-[13px] text-justify">
                                    {slide.description}
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