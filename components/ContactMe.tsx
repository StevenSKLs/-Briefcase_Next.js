import { Button, Card, Input, Textarea, Typography } from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";

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
        <section className=" h-full w-full relative grid place-content-center ">

            <h1 className='text-red text-[2rem] my-3 w-full text-center'>Contacteme</h1>

            <Card color="transparent" shadow={true} className="sm:w-[61vh]  w-[94%] px-[1rem] py-[10px] mt-[2rem] sm:mt-0 "
            >
                <Typography variant="h4" className='text-[#090C40] ' >
                    Medio de comunicación
                </Typography>
                <Typography className="mt-1 font-normal text-[#023059] ">
                    Puedes crear un correo con el siguiente formato, se abrirá directamente en tu aplicación predeterminada de correos con los datos ingresados.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full max-w-screen-lg">
                    <div className="mb-4 flex flex-col gap-6 text-[#090C40]">
                        <Input size="lg" label="Nombre" color="indigo" {...register("name")} />
                        <Input size="lg" label="Tema" color="indigo" {...register("subjet")} />
                        <Textarea size="lg" label="Mensaje" color="indigo" {...register("message")} />
                    </div>

                    <Button className="mt-6" color="gray" fullWidth type="submit" >
                        Crear Correo
                    </Button>
                </form>
            </Card>
        </section>
    );
};

export default ContactMe;