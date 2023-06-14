import ProjectsArray from "@/lib/projects";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {

    return (
        <>
            {
                ProjectsArray.map((project) => {
                    return (
                        <div key={project.title} className=" rounded-lg flex items-center space-y-7 flex-shrink-0 w-[500px] snap-center bg-black p-2 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden text-white flex-col relative ">
                            <h1>{project.title}</h1>
                            <div className=" w-[34vh] h-[41vh] relative top-0 " >
                                <Image src={project.img} alt={project.alt} fill />
                            </div>

                            <p className="text-[15px] " >{project.description}</p>
                            <div className="flex absolute top-[88%] gap-[2rem] " >
                                <Link href={project.urlGithub} target="_blank" >
                                    <Button>github</Button>
                                </Link>
                                <Link href={project.deployments} target="_blank" >
                                    <Button>deploy</Button>
                                </Link>
                            </div>

                        </div>
                    )

                })
            }
        </>

    );
};

export default Projects;