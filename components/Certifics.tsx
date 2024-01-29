import Image from "next/image";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DeviceSize from "./Ancho";

export default function Certifics() {
    const { width } = DeviceSize();
    const ancho = width > 600 ? 2 : 1
    const slidesData = [
        "/others/certific1.png",
        "/others/certific2.png",
        "/others/certific3.png",
        "/others/certific4.png",
    ];
    return (
        <section className="w-full h-full px-3 relative">
            <h1 className='text-red text-[2rem] my-3 w-full text-center'>Cursos Online</h1>
            <Swiper
                slidesPerView={ancho}
                grid={{
                    rows: 2,
                }}
                spaceBetween={25}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper !h-[55vh] sm:!h-[80vh] ">

                {slidesData.map((src, index) => (
                    <SwiperSlide key={index} className="h-[calc((100%-30px)/2)]">
                        <Image
                            src={src}
                            alt=""
                            style={{ objectFit: 'contain' }}
                            sizes="500px"
                            fill
                            priority
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Image src={'/imgs/city30.png'} alt="user" width={1280} height={959}
                className="absolute bottom-0 left-0" />

        </section>
    );
}