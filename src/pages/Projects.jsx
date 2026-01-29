import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with React, Tailwind CSS, and Framer Motion.",
    images: [
      "/projects/portfolio/1.png",
      "/projects/portfolio/2.png",
      "/projects/portfolio/3.png",
    ],
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Website",
    description:
      "Simple e-commerce UI with product listing and responsive layout.",
    images: [
      "/projects/ecommerce/1.png",
      "/projects/ecommerce/2.png",
    ],
    tech: ["React", "Tailwind"],
    github: "#",
    demo: "#",
  },
];

function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(index === 0 ? images.length - 1 : index - 1);
  const next = () =>
    setIndex(index === images.length - 1 ? 0 : index + 1);

  return (
    <div className="relative w-full h-48 overflow-hidden rounded-lg">
      <img
        src={images[index]}
        alt="Project preview"
        className="w-full h-full object-cover"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-1 rounded-full"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-1 rounded-full"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen px-6 md:px-24 py-20 bg-emerald-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-emerald-900 mb-12">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* SLIDER */}
              <ImageSlider images={project.images} />

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-emerald-700 text-sm mb-4">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1 text-sm text-emerald-900 hover:underline"
                  >
                    <Github size={16} /> GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-1 text-sm text-emerald-900 hover:underline"
                  >
                    <ExternalLink size={16} /> Live Demo
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
