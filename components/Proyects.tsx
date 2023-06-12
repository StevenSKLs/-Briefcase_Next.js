import ProyectsArray from "@/lib/proyects";
import Image from "next/image";
import Link from "next/link";

const Proyects = () => {
    console.log(ProyectsArray)
    return (
        <>
            {
                ProyectsArray.map((proyectos) => {

                    <div key={proyectos.title} className=" rounded-lg flex items-center space-y-7 flex-shrink-0 w-[500px] snap-center bg-black p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
                        <h1>{proyectos.title}</h1>
                        <Image src={proyectos.img} alt={proyectos.alt} width={200} height={200} />
                        <p>{proyectos.description}</p>
                        <Link href={proyectos.urlGithub} >
                            <button>github</button>
                        </Link>
                        <Link href={proyectos.deployments} >
                            <button>deployments</button>
                        </Link>
                    </div>
                })
            }
        </>

    );
};

export default Proyects;