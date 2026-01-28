import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const STATS = [
  { value: "50+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "30+", label: "Happy Clients" },
  { value: "100%", label: "Satisfaction" },
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION - ORIGINAL */}
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

      {/* STATS SECTION */}
      <section className="py-16 px-6 md:px-24 bg-emerald-900">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center text-white"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-emerald-200 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECHNICAL SKILLS SECTION */}
      <section className="py-20 px-6 md:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-900">
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
                className="bg-emerald-50 p-6 rounded-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold text-emerald-900">{skill.name}</span>
                  </div>
                  <span className="text-emerald-700 font-bold">{skill.level}%</span>
                </div>

                <div className="w-full bg-emerald-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOFT SKILLS SECTION */}
      <section className="py-20 px-6 md:px-24 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-900">
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
                className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition"
              >
                <div className="text-5xl mb-3">{skill.icon}</div>
                <h3 className="font-bold text-emerald-900 mb-2">{skill.name}</h3>
                <p className="text-sm text-emerald-700">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}