import { IoIosArrowBack, IoIosArrowForward, } from "react-icons/io";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

function ResponsiveImage({ slide }) {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 769 });

  const imageSrc = isMobile
    ? slide.src2
    : isTablet
    ? slide.src2
    : slide.src;

  return (
    <img
      src={imageSrc}
      alt={slide.alt}
      className="w-full h-full object-cover"
      loading="eager"
      decoding="sync"
    />
  );
}

function BgCarousel({ slides, children }) {
    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
  };

  const resetAutoplay = () => {
    // restart the interval so manual navigation pauses then resumes autoplay
    startAutoplay();
  }
    const previousSlide = () => {
        if (currentIndex === 0) setCurrentIndex(slides.length - 1);
        else setCurrentIndex(currentIndex - 1);
        resetAutoplay();
    }

    const nextSlide = () => {
        if (currentIndex === slides.length - 1) setCurrentIndex(0);
        else setCurrentIndex(currentIndex + 1);
        resetAutoplay();
    }

    useEffect(() => {
      // start autoplay on mount and whenever slides.length changes
      startAutoplay();
      return () => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
      }
    }, [slides.length]);


    return (
      <>
        <div className="relative w-full h-full overflow-hidden">
        <div className={`flex transition-transform duration-700 ease-in-out w-full h-full`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            {slides.map((slide, index) => (
                <div key={index} className={"w-full h-full flex-shrink-0"}>
                <ResponsiveImage slide={slide} />
                </div>
            ))}
            {children}
        </div>
        <div className="absolute top-1/2 w-full items-center flex justify-between md:text-4xl max-sm:text-lg text-2xl text-black/50 z-40 pointer-events-auto">
        <button onClick={previousSlide} className="bg-black/50 rounded-r-md px-2 py-4 border-none text-white/80 hover:text-white transition">
            <IoIosArrowBack/>
        </button>
        <button onClick={nextSlide} className="bg-black/50 rounded-l-md px-2 py-4 border-none text-white/80 hover:text-white transition">
            <IoIosArrowForward />
        </button>
        </div>
        <div className="absolute bottom-4 w-full flex justify-center gap-2 z-40">
           {slides.map((s,i) => (
            <div key={i} onClick={() => { setCurrentIndex(i); resetAutoplay(); }} className={`max-sm:h-3 max-sm:w-3 h-5 w-5 rounded-full cursor-pointer ${i===currentIndex ? 'bg-white' : 'bg-none border-2'}`}></div>
           ))}
        </div>
        </div>
                                    <AnimatePresence>
    <motion.div
       key={slides[currentIndex].h1} // ensures unique animation per slide
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.1, ease: "easeIn" } }}
      className="absolute inset-0 h-full w-full flex flex-col justify-center items-center text-center px-0 z-30"
    >
      <h1 className="text-2xl md:text-5xl px-8 md:pt-12 font-bold text-white text-shadow-lg drop-shadow-lg pointer-events-none">
        {slides[currentIndex].h1}
      </h1>
      <p className="text-sm md:text-3xl px-8 mt-4 text-white text-shadow-lg drop-shadow-md pointer-events-none">
        {slides[currentIndex].p}
      </p>
      <div className="mt-6 z-50">
          {currentIndex==0 && (
    <motion.button
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }}
    exit={{ opacity: 0, transition: { duration: 0.1, ease: "easeIn" } }}
    onClick={() => navigate("/services")}
    className="bg-white/70 text-gray-700 max-sm:hidden max-sm:text-sm px-6 z-40 py-3 font-semibold rounded-md border-none drop-shadow-lg transition-colors duration-200 hover:bg-white hover:text-gray-800 mt-6"
  >
    Explore Our Services
  </motion.button>
  )
  }
   {currentIndex==1 && (
    <motion.button
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }}
    exit={{ opacity: 0, transition: { duration: 0.1, ease: "easeIn" } }}
    onClick={() => navigate("/services")}
    className="bg-white/70 text-gray-700 max-sm:hidden max-sm:text-sm px-6 z-40 py-3 font-semibold rounded-md border-none drop-shadow-lg transition-colors duration-200 hover:bg-white hover:text-gray-800 mt-6"
  >
    View Our Projects
  </motion.button>
  )
  }
  {currentIndex==2 && (
    <motion.button
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }}
    exit={{ opacity: 0, transition: { duration: 0.1, ease: "easeIn" } }}
    onClick={() => navigate("/services")}
    className="bg-white/70 text-gray-700 max-sm:hidden max-sm:text-sm px-6 z-40 py-3 font-semibold rounded-md border-none drop-shadow-lg transition-colors duration-200 hover:bg-white hover:text-gray-800 mt-6"
  >
    Learn More
  </motion.button>
  )
  }
      </div>
    </motion.div>
</AnimatePresence>
        </>
    );
}

export default BgCarousel;