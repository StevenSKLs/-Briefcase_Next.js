import { TypeAnimation } from 'react-type-animation';


const TextsInitial = () => {
    return (
        <div className=" text-center  z-[6] absolute w-[80%] ">
            <TypeAnimation
                sequence={[
                    '¡Bienvenidos a mi portafolio web!',
                    1400,
                    '¡Disfruta tu visita y regresa pronto!',
                    1400,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block', textShadow: 'rgba(255, 252, 252, 0.76) 2px 1px 0px, #ffffff 1.5px 1px 0em' }}
                repeat={5}
                className=" eurostile font-semibold "
            />
        </div>

    );
};

export default TextsInitial;



