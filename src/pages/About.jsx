import { motion } from "framer-motion";

const SKILLS = [
  { name: "React", level: 70, icon: "⚛️", color: "from-cyan-500 to-blue-500" },
  { name: "Laravel", level: 90, icon: "📘", color: "from-red-500 to-orange-500" },
  { name: "Tailwind CSS", level: 50, icon: "🎨", color: "from-teal-500 to-cyan-500" },
  { name: "PHP", level: 88, icon: "🐘", color: "from-indigo-500 to-purple-500" },
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
    school: "SMKN 64 Jakarta",
    major: "Rekayasa Perangkat Lunak",
    year: "2023 – Present",
    description: "Focused on web development, software engineering, and UI/UX design principles.",
    status: "Current Student",
  },
];


export default function About() {
  return (
    <>
      {/* ABOUT INTRO WITH GRADIENT */}
      <section className="min-h-[60vh] px-6 md:px-24 py-20 bg-gradient-to-br from-emerald-50 via-emerald-100 to-green-50 relative overflow-hidden flex items-center">
        {/* Background Decoration */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-emerald-900/10 text-emerald-900 rounded-full text-sm font-medium">
              👨‍💻 Get to know me
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600">
              About Me
            </span>
          </h1>

          <p className="text-emerald-800 leading-relaxed text-lg mb-4">
            Hi, I'm <span className="font-bold text-emerald-900">Radytia</span>, a passionate frontend
            developer who enjoys building clean, responsive, and user-friendly
            web interfaces that make a difference.
          </p>

          <p className="text-emerald-800 leading-relaxed text-lg">
            I focus on <span className="font-semibold">React</span>, <span className="font-semibold">Tailwind CSS</span>, and modern <span className="font-semibold">JavaScript</span> while caring
            about performance, accessibility, and UI/UX best practices. Currently expanding my skills in full-stack development with Laravel.
          </p>
        </motion.div>
      </section>


      {/* STUDY / EDUCATION */}
      <section className="py-20 px-6 md:px-24 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-emerald-900">
              Education & Study
            </h2>
            <p className="text-center text-emerald-700 mb-12 max-w-2xl mx-auto">
              My academic journey in software engineering
            </p>
          </motion.div>

          <div className="space-y-6">
            {STUDY.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-emerald-600 hover:shadow-xl transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-emerald-900 mb-1">
                      {item.school}
                    </h3>
                    <p className="text-emerald-700 font-medium">
                      {item.major}
                    </p>
                  </div>
                  <div className="mt-3 md:mt-0 flex flex-col items-start md:items-end gap-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                      {item.status}
                    </span>
                    <span className="text-emerald-600 font-semibold">
                      {item.year}
                    </span>
                  </div>
                </div>
                <p className="text-emerald-800 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="py-20 px-6 md:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-emerald-900">
              Technical Skills
            </h2>
            <p className="text-center text-emerald-700 mb-12 max-w-2xl mx-auto">
              Technologies and tools I work with daily
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-xl shadow-md hover:shadow-xl transition border border-emerald-100"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="font-bold text-lg text-emerald-900">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-emerald-700 font-bold text-lg">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-emerald-100 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOFT SKILLS */}
      <section className="py-20 px-6 md:px-24 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-emerald-900">
              Soft Skills
            </h2>
            <p className="text-center text-emerald-700 mb-12 max-w-2xl mx-auto">
              Beyond code - skills that make me a better team player
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOFT_SKILLS.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border border-emerald-100"
              >
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="font-bold text-emerald-900 mb-2 text-lg">
                  {skill.name}
                </h3>
                <p className="text-sm text-emerald-700 leading-relaxed">
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