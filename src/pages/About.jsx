import { motion } from "framer-motion";

const SKILLS = [
  { name: "React", level: 70, icon: "⚛️", color: "from-cyan-500 to-blue-500" },
  { name: "Laravel", level: 90, icon: "📘", color: "from-blue-500 to-indigo-500" },
  { name: "Tailwind CSS", level: 50, icon: "🎨", color: "from-teal-500 to-cyan-500" },
  { name: "PHP", level: 88, icon: "▲", color: "from-slate-700 to-slate-900" },
  { name: "JavaScript", level: 80, icon: "⚡", color: "from-yellow-500 to-orange-500" },
  { name: "HTML/CSS", level: 90, icon: "🌐", color: "from-orange-500 to-red-500" },
];

const SOFT_SKILLS = [
  { name: "Problem Solving", icon: "🧩", description: "Analytical thinking & creative solutions" },
  { name: "Team Collaboration", icon: "🤝", description: "Effective communication & teamwork" },
  { name: "Time Management", icon: "⏰", description: "Prioritization & deadline oriented" },
  { name: "Adaptability", icon: "🔄", description: "Quick learner & flexible mindset" },
];

const STUDY = [
  {
    school: "Universitas Contoh",
    major: "Informatics Engineering",
    year: "2021 – Present",
    description: "Focused on web development, software engineering, and UI/UX.",
  },
  {
    school: "Online Courses & Self Learning",
    major: "Frontend Development",
    year: "2020 – Present",
    description: "React, Tailwind CSS, JavaScript, Git, and real-world projects.",
  },
];

export default function About() {
  return (
    <>
      {/* ABOUT INTRO */}
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
            web interfaces.
          </p>

          <p className="text-emerald-800 leading-relaxed">
            I focus on React, Tailwind CSS, and modern JavaScript while caring
            about performance, accessibility, and UI/UX best practices.
          </p>
        </motion.div>
      </section>

      {/* STUDY / EDUCATION */}
      <section className="py-20 px-6 md:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-900">
            Education & Study
          </h2>

          <div className="space-y-6">
            {STUDY.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-emerald-50 p-6 rounded-lg"
              >
                <h3 className="font-semibold text-lg text-emerald-900">
                  {item.school}
                </h3>
                <p className="text-sm text-emerald-700">
                  {item.major} • {item.year}
                </p>
                <p className="text-sm text-emerald-800 mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="py-20 px-6 md:px-24 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-900">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-lg"
              >
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-emerald-900">
                    {skill.icon} {skill.name}
                  </span>
                  <span className="text-emerald-700 font-bold">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-emerald-200 rounded-full h-2">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOFT SKILLS */}
      <section className="py-20 px-6 md:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-900">
            Soft Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOFT_SKILLS.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-emerald-50 p-6 rounded-lg text-center shadow-md"
              >
                <div className="text-5xl mb-3">{skill.icon}</div>
                <h3 className="font-bold text-emerald-900 mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm text-emerald-700">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
