import Image from "next/image";

const Footer = () => {
    return (
        <footer className=" w-full h-[14vh] bg-blue-gray-600 items-center grid grid-cols-[3fr,1fr] ">

            <p className="text-[11px] sm:text-[17px]  ">
                Cualuier trabajo Web <br /> Ultima actualizacion el 2024
            </p>
            <div className="relative w-full h-full">
                <Image
                    src='/others/cat_word.gif'
                    alt=""
                    style={{ objectFit: 'contain' }}
                    sizes="500px"
                    fill
                    priority
                />
            </div>

        </footer>
    );
};

export default Footer;