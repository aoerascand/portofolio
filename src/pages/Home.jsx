import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 gap-12 bg-emerald-50">
      
      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-emerald-900">
          Radytia
        </h1>

        <h2 className="text-xl md:text-2xl text-emerald-700 mb-4">
          Frontend Developer
        </h2>

        <p className="text-emerald-800 leading-relaxed">
          I build interactive and responsive web interfaces using modern web
          technologies.
        </p>

        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          <Link
            to="/projects"
            className="px-6 py-3 bg-emerald-900 text-white rounded-md hover:bg-emerald-800 transition"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 border border-emerald-900 text-emerald-900 rounded-md hover:bg-emerald-900 hover:text-white transition"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      {/* IMAGE */}
      <motion.img
        src="/profile.png"
        alt="Profile"
        className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-lg border-4 border-emerald-900"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
    </section>
  );
}
