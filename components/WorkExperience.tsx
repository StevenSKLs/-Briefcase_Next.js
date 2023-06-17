import {
    HeartIcon,
    StarIcon
} from "@heroicons/react/24/solid";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    IconButton,
    Typography
} from "@material-tailwind/react";

const WorkExperience = () => {
    return (
        <div className="snap-center h-screen w-full bg_2 relative"
            style={{ background: 'linear-gradient(110deg,rgb(255 255 255)-1%,rgb(147 147 147)44%)' }}
        >
            <h1 className='text-red absolute text-[2rem] top-[12px] left-[2%] nunito'>Experiencia Laboral</h1>
            <div className="flex">
                <Card className="w-full max-w-[26rem] shadow-lg">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="ui/ux review check"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                        <IconButton
                            size="sm"
                            color="red"
                            variant="text"
                            className="!absolute top-4 right-4 rounded-full"
                        >
                            <HeartIcon className="h-6 w-6" />
                        </IconButton>
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray" className="font-medium">
                                Wooden House, Florida
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray">
                            Formé parte de un equipo que creó una aplicación web colaborativa para la búsqueda de residencias en México.

                            Trabajamos utilizando TypeScript en Next.js, y nos dividimos para desarrollar diferentes funcionalidades. Colaboré en la parte de registro de usuarios con la implementar de autenticación por cookies.
                        </Typography>

                    </CardBody>
                    <CardFooter className="pt-3">
                        <Button size="lg" fullWidth={true}>
                            Reserve
                        </Button>
                    </CardFooter>
                </Card>


                <a href="/cv/CV-Next.pdf" download >
                    <Button>Descargar CV</Button>
                </a>




            </div>


        </div>
    );
};

export default WorkExperience;