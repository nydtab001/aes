import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { IoMdArrowUp } from "react-icons/io";

export default function ScrollTop() {
     const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight); // adjust threshold as needed
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>   
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-8 right-8 bg-black/80 text-white text-lg md:text-3xl p-3 rounded-full shadow-lg hover:bg-red-700 transition transition-opacity ${ scrolled ? 'opacity-100' : 'opacity-0' } duration-500 ease-in-out z-50`}
            aria-label="Scroll to top"
        >
            <IoMdArrowUp />
        </button>
    </>
  );
}