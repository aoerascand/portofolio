import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-emerald-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-white rounded-xl shadow-lg p-10 text-center"
      >
        <h1 className="text-3xl font-bold text-emerald-900 mb-3">
          Contact Me
        </h1>

        <p className="text-emerald-700 mb-10">
          Feel free to reach out for collaboration, projects, or inquiries.
        </p>

        {/* CONTACT INFO */}
        <div className="space-y-6">
          {/* EMAIL */}
          <div className="p-5 border border-emerald-200 rounded-lg">
            <p className="text-sm text-emerald-600 mb-1">Email</p>
            <a
              href="mailto:iniraditya15@email.com"
              className="text-lg font-semibold text-emerald-900 hover:underline"
            >
              iniraditya15@email.com
            </a>
          </div>

          {/* WHATSAPP */}
          <div className="p-5 border border-emerald-200 rounded-lg">
            <p className="text-sm text-emerald-600 mb-1">WhatsApp</p>
            <a
              href="https://wa.me/6285796633875"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-emerald-900 hover:underline"
            >
              +62 857-9663-3875
            </a>
          </div>
        </div>

        {/* FOOT NOTE */}
        <p className="mt-10 text-sm text-emerald-600">
          I usually respond within 24 hours.
        </p>
      </motion.div>
    </section>
  );
}
