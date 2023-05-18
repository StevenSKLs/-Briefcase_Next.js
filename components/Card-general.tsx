import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Typography
} from "@material-tailwind/react";
import Image from "next/image";

const CardGeneral = () => {
    return (
        <>
            <style jsx global>{`
            .continuar{
        position: relative;
        height: 77vh;
        width: 73vh;
        }


        .glow-animation {
            font-size: 24px;
            text-align: center;
            animation: glow 7s infinite;
            
            position: absolute;
            top: 11rem;
            left: 32rem;
            z-index: 3;
            height: 1px;
            width: 1px;
          }
          
          @keyframes glow {
            0% {
              box-shadow: 0 0 20px 13px blue;
            }
            50% {
              box-shadow: 0 0 6px blue, 0 0 6px blue;
            }
            100% {
              box-shadow: 0 0 20px 13px blue;
            }
          }
          
        `}
            </style>
            <div className="glow-animation">

            </div>

            <div className='continuar'>
                <Image src={'/imgs/city0.jpg'} alt="user" fill style={{ objectFit: "cover" }} />
            </div>

            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <div className='lineEffect'>
                        <Image src={'/imgs/user.jpeg'} alt="user" fill />
                    </div>
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        UI/UX Review Check
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by walk
                        and near to &quot;Naviglio&quot; where you can enjoy the main night life
                        in Barcelona.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button>Read More</Button>
                </CardFooter>
            </Card>




            <div className='lineEffect'>
                <p className="hover-underline-animation">
                    Desarrollador web full-stack interesado por el arte y las tecnologías, me he preparado para culminar el curso full- stack de Academlo y también tengo conocimientos en la área de mecánica automotriz y electromecánica. Gracias al aprendizaje adquirido en Academlo estoy buscando aportar el conocimiento inculcado y formar parte de un grupo de trabajo en desarrollo web. Tengo conocimiento en la programación en Html, Css, Js, React.js y Node.js.</p>
            </div>
            <div className="h-32 w-32 relative cursor-pointer mb-5">
                <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl w"></div>

                <div className="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
                    <div className="h-full w-full bg-white rounded-lg shadow-2xl">
                        <h1>hola mundo</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardGeneral;