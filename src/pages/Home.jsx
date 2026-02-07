import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants untuk text elements
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.15,
        ease: [0.25, 0.4, 0.25, 1], // cubic-bezier untuk smooth easing
      },
    }),
  };

  // Animation variants untuk image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: [0.34, 1.56, 0.64, 1], // elastic ease
      },
    },
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 gap-12 bg-gradient-to-br from-emerald-50 via-emerald-100 to-green-50 relative overflow-hidden">
        
        {/* Background Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-20 right-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-20 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
        />
        
        {/* TEXT */}
        <div className="max-w-xl text-center md:text-left z-10">
          {/* Badge */}
          <motion.span
            custom={0}
            initial="hidden"
            animate={loaded ? "visible" : "hidden"}
            variants={textVariants}
            className="inline-block mb-4 px-4 py-2 bg-emerald-900/10 text-emerald-900 rounded-full text-sm font-medium"
          >
            👋 Welcome to my portfolio
          </motion.span>

          {/* Title */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate={loaded ? "visible" : "hidden"}
            variants={textVariants}
            className="text-5xl md:text-6xl font-bold mb-3 text-emerald-900"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600">
              Radytia
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            custom={2}
            initial="hidden"
            animate={loaded ? "visible" : "hidden"}
            variants={textVariants}
            className="text-2xl md:text-3xl text-emerald-700 mb-6 font-semibold"
          >
            Frontend Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            custom={3}
            initial="hidden"
            animate={loaded ? "visible" : "hidden"}
            variants={textVariants}
            className="text-emerald-800 leading-relaxed text-lg mb-8"
          >
            I build interactive and responsive web interfaces using modern web
            technologies like <strong>React</strong>,{" "}
            <strong>Tailwind CSS</strong>, and <strong>JavaScript</strong>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={4}
            initial="hidden"
            animate={loaded ? "visible" : "hidden"}
            variants={textVariants}
            className="flex gap-4 justify-center md:justify-start flex-wrap"
          >
            <Link
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-emerald-900 text-emerald-900 rounded-lg hover:bg-emerald-900 hover:text-white transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          className="relative z-10"
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          variants={imageVariants}
        >
          {/* Decorative ring with smooth pulse */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{
              duration: 1,
              delay: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute -inset-4 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 rounded-full blur"
          />

          <motion.img
            src={`${import.meta.env.BASE_URL}radit.jpeg`}
            alt="Radytia - Frontend Developer"
            className="relative w-60 h-60 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          />
        </motion.div>
      </section>
    </>
  );
}