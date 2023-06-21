import {
    Card,
    CardBody,
    CardHeader,
    Typography
} from "@material-tailwind/react";

const WorkExperience = () => {
    return (
        <div className="flex relative flex-col snap-center h-screen w-full justify-center items-center "
            style={{ background: 'linear-gradient(110deg,rgb(255 255 255)-1%,rgb(147 147 147)44%)' }}
        >
            <h1 className='text-red absolute text-[2rem] top-[12px] left-[2%] nunito'>Experiencia Laboral</h1>
            <div className="flex gap-3 mt-[1rem] sm:w-auto w-full space-x-5 overflow-x-scroll p-[1.40rem] snap-x snap-mandatory h-[91vh] scrollbar scrollbar-thumb-[#F7A00A]/80 scrollbar-track-[#F7A00A]/0">
                <Card className="sm:w-auto sm:max-w-[26rem] shadow-lg snap-center w-[54vh] ">
                    <CardHeader floated={false} className="w-[50vh] sm:w-auto " color="blue-gray">
                        <img
                            src="/others/Banco-Ecu.jpg"
                            alt="Banco"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray" className="font-medium">
                                Taller Ecufix Car
                            </Typography>

                        </div>
                        <Typography color="gray" className='text-[12px] sm:text-[15px]  ' >
                            Adquirí habilidades de desarrollo, análisis en circuitos y bases de programación en Arduino, a base de pruebas y de errores que arrogaba los diferentes esquemas de Bancos y de ECU’s;
                            Me desempeñe en ayudar a compañeros del taller en el área de circuitos y de conexiones del vehículo mediante esquemas de programación de las ECU’s.
                        </Typography>

                    </CardBody>

                </Card>
                <Card className="sm:w-auto sm:max-w-[26rem] shadow-lg snap-center w-[54vh] ">
                    <CardHeader floated={false} className="w-[50vh] sm:w-auto " color="blue-gray">
                        <img
                            src="/others/coworking_front-end4.png"
                            alt="CoworingLab"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />

                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray" className="font-medium">
                                Coworking Front-end
                            </Typography>
                        </div>
                        <Typography color="gray" className='text-[12px] sm:text-[15px]  ' >
                            Formé parte de un equipo que creó una aplicación web colaborativa para la búsqueda de residencias en México.
                            Trabajamos utilizando TypeScript en Next.js, y nos dividimos para desarrollar diferentes funcionalidades. Colaboré en la parte de registro de usuarios con la implementar de autenticación por cookies.
                        </Typography>

                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default WorkExperience;