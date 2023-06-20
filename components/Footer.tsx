import Image from "next/image";

const Footer = () => {
    return (
        <div className=" w-full h-[6%] bg-blue-gray-600 flex justify-between absolute bottom-0 items-center ">
            <p className="text-[11px] sm:text-[17px] sm:gap-[4rem] justify-center ">
                Estamos trabajando / Ultima actualizacion el 19/06/2023 Hora Mexico 1am
            </p>
            <div className="relative w-[23%] h-full ">
                <Image src={'/others/cat_word.gif'} alt="cat" fill />
            </div>

        </div>
    );
};

export default Footer;