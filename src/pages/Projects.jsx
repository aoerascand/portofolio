import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Fintech",
    description:
      "Financial Technology built with Laravel,PHP, and Database MySql.",
    images: [
     `${import.meta.env.BASE_URL}project/fintech/1.png`,
     `${import.meta.env.BASE_URL}project/fintech/2.png`,
     `${import.meta.env.BASE_URL}project/fintech/3.png`,
    ],
    tech: ["Laravel", "PHP", "Blade", "MySQL"],
    github: "https://github.com/aoerascand/fintech",
    demo: "https://fintech.com",
  },
  {
    title: "Kelola-Resto",
    description:
      "restaurant cashier with CRUD features and restaurant reports",
    images: [
     `${import.meta.env.BASE_URL}project/resto/1.png`, 
     `${import.meta.env.BASE_URL}project/resto/2.jpeg`,
       ],
    tech: ["Laravel", "PHP", "Blade", "MySQL"],
    github: "https://github.com/aoerascand/kelola-resto",
    demo: "https://restaurant.com",
  },
  {
    title: "Website Aspirasi",
    description:
      "The Aspiration website was created to convey students' aspirations to the school",
    images: [
       `${import.meta.env.BASE_URL}project/aspirasi/1.png`, 
        `${import.meta.env.BASE_URL}project/aspirasi/2.png`,
        `${import.meta.env.BASE_URL}project/aspirasi/3.png`,
        `${import.meta.env.BASE_URL}project/aspirasi/4.png`,
    ],
    tech: ["Laravel", "PHP", "Blade", "MySQL"],
    github: "https://github.com/aoerascand/aspirasi",
    demo: "https://aspirasi.com",  
  },
  {
    title: "Website Company",
    description:
      "A company website is a platform that presents comprehensive information about a company and includes a dashboard feature for managing and organizing data efficiently.",
    images: [
        `${import.meta.env.BASE_URL}project/company/1.png`, 
        `${import.meta.env.BASE_URL}project/company/2.png`,
        `${import.meta.env.BASE_URL}project/company/3.png`,
        `${import.meta.env.BASE_URL}project/company/4.png`,
    ],
    tech: ["React", "Laravel", "PHP", "JavaScript", "MySQL"],
    github: "https://github.com/aoerascand/Company-Project",
    demo: "https://company.com",
  },
];

function ImageSlider({ images, interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const prev = () => {
    resetTimer();
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const next = () => {
    resetTimer();
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  /* AUTO SLIDE */
  useEffect(() => {
    if (images.length <= 1) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [images.length, interval]);

  /* SWIPE HANDLER */
  const handleDragEnd = (_, info) => {
    resetTimer();
    if (info.offset.x < -100) next();
    if (info.offset.x > 100) prev();
  };

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-emerald-100 group">
      <motion.img
        key={index}
        src={images[index]}
        alt="Project preview"
        className="w-full h-full object-cover cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.35 }}
      />

      {images.length > 1 && (
        <>
          {/* PREV */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1.5 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronLeft size={18} />
          </button>

          {/* NEXT */}
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1.5 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronRight size={18} />
          </button>

          {/* DOTS */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "bg-white w-6" : "bg-white/50 w-1.5"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen px-6 md:px-24 py-20 bg-emerald-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-emerald-900 mb-3">
            Projects
          </h1>
          <p className="text-emerald-700">
            A collection of projects I've built
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <ImageSlider images={project.images} />

              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-emerald-700 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-emerald-900 text-emerald-900 rounded-lg hover:bg-emerald-900 hover:text-white transition"
                  >
                    <Github size={16} /> Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
