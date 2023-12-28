import { motion, Variants } from 'framer-motion';

const backdropVariants: Variants = {
    open: { opacity: 1, pointerEvents: 'auto' },
    closed: { opacity: 0, pointerEvents: 'none' },
};

const drawerVariants: Variants = {
    open: { x: 0 },
    closed: { x: '-100%' },
};

const Drawer = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) => {
    return (
        <>
            <motion.div
                className="backdrop"
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                variants={backdropVariants}
                onClick={onClose}
            />
            <motion.div
                className="drawer"
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                variants={drawerVariants}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
                <button onClick={onClose}>Cerrar</button>
                {children}
            </motion.div>
        </>
    );
};

export default Drawer;
