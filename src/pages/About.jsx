import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen px-6 md:px-24 py-16 bg-emerald-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
          About Me
        </h1>

        <p className="text-emerald-800 leading-relaxed mb-4">
          Hi, I’m <span className="font-semibold">Radytia</span>, a frontend
          developer who enjoys building clean, responsive, and user-friendly
          web interfaces. I focus on turning designs into high-quality code
          using modern frontend technologies.
        </p>

        <p className="text-emerald-800 leading-relaxed mb-8">
          I have experience working with React, Tailwind CSS, and JavaScript.
          I care about performance, accessibility, and good UI/UX practices.
          Currently, I’m continuously learning and improving my skills by
          building real-world projects.
        </p>

        {/* SKILLS */}
        <div>
          <h2 className="text-2xl font-semibold text-emerald-900 mb-4">
            Skills & Technologies
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Laravel",
              "PHP",
              "Git & GitHub",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-emerald-200 rounded-full text-emerald-800 text-sm shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
