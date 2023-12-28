// components/Bell.js
// import { motion } from "framer-motion";

// type ball = {
//   isInfoTrue: boolean
// }

// const Bell = ({ isInfoTrue }: ball) => {
//   return (
//     <motion.div
//       animate={{
//         rotate: isInfoTrue ? 0 : -45,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 260,
//         damping: 20,
//       }}
//     >
//       {/* Aquí va el código SVG o icono de la campana */}
//       {/* Por ejemplo: <BellIcon /> */}
//       <h1>HOLA SOY CAMPANA</h1>
//     </motion.div>
//   );
// };

// export default Bell;


import { motion } from 'framer-motion';

const items = [
  "Elemento 1",
  "Elemento 2",
  "Elemento 3",
  // Agrega más elementos si es necesario
];

const Bell = () => {
  return (
    <div>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export default Bell;
