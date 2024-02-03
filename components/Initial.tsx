import { Image_fields } from "@/lib/typings";
import Image from "next/image";
import Circles from "./Circles";
import TextsInitial from "./Texts-Initial";

export default function Initial({ city0, city }: { city0: Image_fields; city: Image_fields }) {
    return (
        <section className="h-screen w-full relative flex flex-col items-center justify-center ">
            <div className='absolute bottom-[33px] h-full w-full  ' >
                <Image src={`https:${city.fields.file.url}`} alt=" "
                    style={{ objectFit: 'contain' }}
                    sizes="500px"
                    fill
                    priority
                />
            </div>
            <TextsInitial />
            <Circles />

            <article className="absolute top-[5.7rem] sm:top-[15rem] left-[2.8rem] sm:left-[4rem] z-[7] h-[1px] w-[1px] animate-[glow1_7s_infinite]" />
            <article className="absolute top-[3.3rem] left-[8.5rem] sm:top-[7rem] sm:left-[17rem] z-[7] h-[1px] w-[1px] animate-[glow2_3s_infinite]" />
            <Image src={`https:${city0.fields.file.url}`} alt=" "
                style={{ objectFit: 'contain' }}
                className="!w-auto !h-auto "
                sizes="500px"
                fill
                priority
            />

            <div className="absolute bottom-3 grid w-[90%] text-center z-[4]" >
                <h2 className=" text-[15px] sm:text-[1.3rem]  ms:mt-[12.5rem] mb-[2rem]"
                    style={{ textShadow: '2px 2px 0#fffcfcc2, 0 0 1em blue' }}
                >
                    Estoy emocionado de compartir mi trabajo y proyectos a lo largo de mi estudio.
                    <br />
                    Si tienes alguna pregunta o estás interesado/a en colaborar, no dudes en contactarme.
                </h2>
            </div>
        </section>
    );
}