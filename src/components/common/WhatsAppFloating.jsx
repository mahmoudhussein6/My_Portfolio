import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppFloating = () => {
    return (
        <motion.a
            href="https://wa.me/201288845234"
            target="_blank"
            rel="noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-32 right-10 z-[100] w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/50 hover:bg-green-600 transition-colors border border-white/20"
        >
            <FaWhatsapp size={32} />
            {/* Pulsing Ring Effect */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 pointer-events-none" />
        </motion.a>
    );
};

export default WhatsAppFloating;
