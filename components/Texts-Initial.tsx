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
            <style jsx>{
                `
.textShadow{
    text-shadow: 2px 2px 0#fffcfcc2, 0 0 1em blue;
    
}

`
            }
            </style>

            <div className="absolute w-[80%] sm:w-[120vh] text-center top-[2vh] z-[2] ">
                <h1 className="textShadow text-[2.4vh] sm:text-[2.2rem]">
                    <span>
                        {text}
                    </span>
                    <Cursor cursorColor="red" />
                </h1>
                <h2 className="textShadow text-[2vh] sm:text-[1.3rem] mt-[30%] ms:mt-[12.5rem] mb-[4rem]">
                    Estoy emocionado de compartir mi trabajo y proyectos a lo largo de mi estudio.
                    <br />
                    Si tienes alguna pregunta o estás interesado/a en colaborar, no dudes en contactarme.
                </h2>
                <h2 className="textShadow text-red text-[1.5vh] sm:text-[1rem]">
                    Explora y descubre todo lo que tenemos para ofrecerte. Encuentra información, recursos y contenido relevante.
                </h2>
            </div>
        </>
    );
};

export default TextsInitial;



