// components/LoadingScreen.tsx
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ isVisible }) {
  return (
    <AnimatePresence>
    {isVisible && (<motion.div 
    initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
        <div className="relative md:w-[350px] w-[180px] md:h-[350px] h-[180px] flex items-center justify-center">
            {/* Spinner ring */}
            <div className="absolute inset-0 rounded-full border-8 border-gray-300/0 border-t-red-600 animate-spin" />
            {/* Logo centered inside */}
            <img src="/aeslogo.png" alt="AE Solutions Logo" className="w-24 md:w-64 h-auto animate-pulse" />
        </div>
    </motion.div>)}
    </AnimatePresence>
  );
}