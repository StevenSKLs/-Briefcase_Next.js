import { Cursor, useTypewriter } from "react-simple-typewriter";



const TextsInitial = () => {
    const [text, count] = useTypewriter({
        words: [
            '¡Bienvenido/a a mi portafolio web!',
            "¡Disfruta tu visita y regresa pronto!"
        ],
        loop: true,
        delaySpeed: 10000,
    })

    return (
        <>
            <div className="absolute w-full sm:w-[120vh] flex flex-col justify-center text-center top-[2vh] z-[2] ">
                <div>
                    <h1 className=" text-[3.3vh] sm:text-[2.2rem]"
                        style={{ textShadow: '2px 2px 0#fffcfcc2, 0 0 1em blue' }}
                    >
                        <span>
                            {text}
                        </span>
                        <Cursor cursorColor="red" />
                    </h1>
                </div>
                <div>
                    <h2 className=" text-[15px] sm:text-[1.3rem] mt-[30%] ms:mt-[12.5rem] mb-[4rem]"
                        style={{ textShadow: '2px 2px 0#fffcfcc2, 0 0 1em blue' }}
                    >
                        Estoy emocionado de compartir mi trabajo y proyectos a lo largo de mi estudio.
                        <br />
                        Si tienes alguna pregunta o estás interesado/a en colaborar, no dudes en contactarme.
                    </h2>
                    <h2 className=" text-red text-[15] sm:text-[1rem]"
                        style={{ textShadow: '2px 2px 0#fffcfcc2, 0 0 1em blue' }}
                    >
                        Explora y descubre todo lo que tenemos para ofrecerte. Encuentra información, recursos y contenido relevante.
                    </h2>
                </div>

            </div>

        </>
    );
};

export default TextsInitial;



