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
        <section className=" h-full w-full grid place-content-center justify-items-center mb-3">

            <h1 className='text-red text-[2rem] my-3 w-full text-center'>Contácteme</h1>

            <Card color="transparent" shadow={true} className="h-full px-3 pt-3 w-[90%] sm:w-[60%] md:w-[50%] ">
                <Typography variant="h4" className='text-[#090C40] ' >
                    Medio de comunicación
                </Typography>
                <Typography className="mt-1 font-normal text-[#023059] ">
                    Puedes crear un correo con el siguiente formato, se abrirá directamente en tu aplicación predeterminada de correos con los datos ingresados.
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-8  w-full">

                    <div className="mb-4 flex flex-col gap-6 text-[#090C40]">
                        <Input size="lg" label="Nombre" color="indigo" {...register("name")} />
                        <Input size="lg" label="Tema" color="indigo" {...register("subjet")} />
                        <Textarea size="lg" label="Mensaje" color="indigo" {...register("message")} />
                    </div>

                    <Button color="gray" fullWidth type="submit" className="mt-6 rounded-b-none" >
                        Crear Correo
                    </Button>
                </form>
            </Card>
        </section>
    );
};

export default ContactMe;