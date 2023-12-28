// pages/index.js (o cualquier otra página donde desees mostrar la campana)
// import React, { useState } from "react";
import { useState } from 'react';
import Bell from "../components/Bell";
import Drawer from '../components/Drawer';
// const Campana = () => {
//     const [info, setInfo] = useState(false);

//     return (
//         <div>
//             {/* Tu lógica para cambiar el estado de 'info' aquí */}
//             <button onClick={() => setInfo(!info)}>Cambiar información</button>

//             {/* Renderizar la campana con la animación */}
//             <Bell isInfoTrue={info} />
//         </div>
//     );
// };

// export default Campana;

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>

            <div>
                <button onClick={toggleDrawer}>Abrir Drawer</button>
                <Drawer isOpen={isOpen} onClose={toggleDrawer}>
                    Contenido del Drawer
                </Drawer>
            </div>

            <h1>Animación en Cascada</h1>
            <Bell />

        </>
    );
};

export default HomePage;
