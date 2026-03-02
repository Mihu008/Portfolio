// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen
        bg-gradient-to-b from-blue-900 to-black
        flex lg:flex-row flex-col-reverse
        items-center justify-between
        lg:px-24 md:px-10 px-4 py-20
        relative
        overflow-hidden"
    >
      {/* Left Section */}
      <div className="z-40 mb-0 lg:mb-0 md:mb-0">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-white text-5xl md:text-7xl lg:text-[7.5rem] font-bold z-10 mb-8 leading-[1.05] tracking-tight"
        >
          Full Stack <br /> Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-blue-100 font-mono md:max-w-xl lg:max-w-2xl text-xl md:text-2xl mb-6 leading-relaxed"
        >
          design and build scalable, secure, and high-performance applications,
          transforming complex requirements into seamless end-to-end digital solutions.
        </motion.p>
      </div>

      {/* Right Section - 3D Model */}
      <Suspense fallback={<div className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0 w-full h-[50vh] flex items-center justify-center text-gray-500 font-mono">Loading 3D...</div>}>
        <Spline
          className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
          scene={import.meta.env.VITE_SPLINE_URL}
        />
      </Suspense>
    </section>
  );
};

export default HeroSection;
