import { Image_fields } from "@/lib/typings";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ media }: { media: Image_fields[] }) => {
    return (
        <footer className=" w-full h-[17vh] mt-5 bg-blue-gray-600  grid grid-rows-[60%,40%] ">
            <p className="py-2 text-center text-[13px] sm:text-[17px] " >
                ¡Tu opinión es importante para nosotros!
                <br />
                Contáctanos a través de nuestras redes sociales.
            </p>
            <div className="grid grid-cols-5 pb-2 w-[80%] m768:w-[60%] justify-self-center">
                {media.map((item, index) => (
                    <Link href={item.fields.description} target="_blank" className="relative " key={index}>
                        <Image
                            src={`https:${item.fields.file.url}`} alt=" "
                            sizes="500px"
                            fill
                            priority
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>
                ))}
            </div>
        </footer>
    );
};

export default Footer;