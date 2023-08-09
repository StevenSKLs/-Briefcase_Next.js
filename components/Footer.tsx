import Image from "next/image";

const Footer = () => {
    return (
        <div className=" w-full bg-blue-gray-600 flex justify-between absolute bottom-0 items-center ">
            <p className="text-[11px] sm:text-[17px] sm:gap-[4rem] justify-center ">
                Estamos trabajando en un nuevo modelo / Ultima actualizacion el 05/08/2023
            </p>
            <Image src={'/others/cat_word.gif'} alt="cat" width={80} height={100} />
        </div>
    );
};

export default Footer;