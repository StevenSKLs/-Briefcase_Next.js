import {
    Button,
    Card,
    Input,
    Typography
} from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    name: string,
    subjet: string,
    message: string,
    email: string,
};

const ContactMe = () => {

    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        window.location.href = `mailto:steven.david.rojas.21@gmail.com?subject=${data.subjet}&body=Hola, mi nombre es ${data.message}. ${data.message} `
    }

    // "mailto:steven.david.rojas.21@gmail.com"

    return (
        <div className="snap-center h-screen w-full bg_2 relative">

            <h1 className='text-red absolute text-[2rem] top-[12px] left-[2%] nunito'>Contacteme</h1>


            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to register.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Name" defaultValue="test" {...register("name")} />
                        <Input size="lg" label="Email" defaultValue="test" {...register("email")} />
                        <Input size="lg" label="Tema" {...register("subjet", { required: true })} />
                        <Input size="lg" label="Mensaje" {...register("message", { required: true })} />
                    </div>


                    <Button className="mt-6" fullWidth type="submit" >
                        Register
                    </Button>

                </form>
            </Card>

        </div>
    );
};

export default ContactMe;