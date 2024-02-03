
import { Image_fields } from "@/lib/typings";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ gmail, facebook, whatsapp, cat }: { whatsapp: Image_fields; cat: Image_fields; gmail: Image_fields; facebook: Image_fields }) => {
    return (
        <footer className=" w-full h-[20vh] mt-5 bg-blue-gray-600  grid grid-cols-[78%,22%]">
            <section className=" w-full h-full grid grid-rows-[60%,40%] place-content-center">
                <p className="py-2 text-center text-[12px] sm:text-[17px] " >
                    ¡Tu opinión es importante para nosotros!
                    <br />
                    Contáctanos a través de nuestras redes sociales.
                </p>
                <div className="grid grid-cols-3 pb-2 w-[80%] justify-self-center">
                    <Link href={'https://www.facebook.com/steven.rojas.33671'} target="_blank" className="relative ">
                        <Image
                            src={`https:${facebook.fields.file.url}`} alt=" "
                            sizes="500px"
                            fill
                            priority
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>
                    <Link href={'mailto:steven.david.rojas.21@gmail.com'} target="_blank" className="relative ">
                        <Image
                            src={`https:${gmail.fields.file.url}`} alt=" "
                            sizes="500px"
                            fill
                            priority
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>
                    <Link href={'https://wa.me/593997426203?text=Hola%2C'} target="_blank" className="relative ">
                        <Image
                            src={`https:${whatsapp.fields.file.url}`} alt=" "
                            sizes="500px"
                            fill
                            priority
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>
                </div>
            </section>

            <div className="relative ">
                <Image
                    src={`https:${cat.fields.file.url}`} alt=" "
                    sizes="500px"
                    fill
                    priority
                />
            </div>

        </footer>
    );
};

export default Footer;