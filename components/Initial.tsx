"use client"
import Image from "next/image";
import Cicles from './Cicles';
import TextsInitial from "./Texts-Initial";


const Initial = () => {
    return (
        <>
            <style jsx>{
                `
    .bg_1{
         background:
         linear-gradient(108deg,rgb(249 249 249 / 48%) 56%, rgba(252,252,252,1) 71%, rgba(180,180,180,1) 100%)
    }
   
   
    `
            }
            </style>

            <div className="snap-center h-screen w-full relative bg_1">


                <div className="relative flex justify-center items-center top-[30vh] z-[2]">

                    <div className='absolute h-[80vh] w-[80vh] z-[2] '>
                        <Image src={'/imgs/city13.png'} alt="user" fill />
                    </div>
                    <TextsInitial />
                </div>
                <div className='absolute h-[83vh] w-[80vh] top-0 left-0 z-[0] '>
                    <div className="absolute top-[15rem] left-[4rem] z-[7] h-[1px] w-[1px] animate-[glow1_7s_infinite]" />
                    <div className="absolute top-[7rem] left-[17rem] z-[7] h-[1px] w-[1px] animate-[glow2_3s_infinite]" />
                    <Image src={'/imgs/city0.jpg'} alt="user" fill />
                </div>

                <Cicles />

            </div>







        </>
    );
};

export default Initial;

