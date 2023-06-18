import {
    Button,
    Card,
    Input,
    Textarea,
    Typography
} from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";
import Footer from "./Footer";


type Inputs = {
    name: string,
    subjet: string,
    message: string,
};



const ContactMe = () => {

    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        window.location.href = `mailto:steven.david.rojas.21@gmail.com?subject=${data.subjet}&body=Hola, mi nombre es ${data.message}. ${data.message} `
    }

    // "mailto:steven.david.rojas.21@gmail.com"

    return (

        <div className="snap-center h-screen w-full bg_2 relative flex flex-col items-center justify-center"
            style={{ background: 'radial-gradient(circle, rgba(191,191,191,0.9220063025210083) 14%, rgba(97,97,97,1) 100%)' }}
        >
            <h1 className='text-red absolute text-[2rem] top-[12px] left-[2%] nunito'>Contacteme</h1>

            <Card color="transparent" shadow={true} className=" w-[61vh] px-[1rem] py-[10px]  "
                style={{ background: 'radial-gradient(circle, rgb(255 255 255 / 30%) 53%, rgb(169 169 169 / 0%) 100%);' }}
            >
                <Typography variant="h4" className='text-[#090C40] ' >
                    Medio de comunicación
                </Typography>
                <Typography className="mt-1 font-normal text-[#023059] ">
                    Puedes crear un correo con el siguiente formato, se abrirá directamente en tu aplicación predeterminada de correos con los datos ingresados.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full max-w-screen-lg">
                    <div className="mb-4 flex flex-col gap-6 text-[#090C40]">
                        <Input size="lg" label="Name" color="indigo" {...register("name")} />
                        <Input size="lg" label="Tema" color="indigo" {...register("subjet")} />
                        <Textarea size="lg" label="Message" color="indigo" {...register("message")} />
                    </div>

                    <Button className="mt-6" color="gray" fullWidth type="submit" >
                        Crear Correo
                    </Button>
                    {/* 
                    <Button color="indigo">hola </Button>
                    <Button color="teal">hola </Button> */}

                </form>
            </Card>



            <Footer />
        </div>

    );
};

export default ContactMe;