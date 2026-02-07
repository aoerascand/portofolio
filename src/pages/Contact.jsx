import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-emerald-50 via-emerald-100 to-green-50 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-10 text-center relative z-10"
      >
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4"
        >
          <span className="px-4 py-2 bg-emerald-900/10 text-emerald-900 rounded-full text-sm font-medium">
            💬 Let's Connect
          </span>
        </motion.div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600">
            Contact Me
          </span>
        </h1>

        <p className="text-emerald-700 mb-10 leading-relaxed">
          Feel free to reach out for collaboration, projects, or inquiries.
        </p>

        {/* CONTACT INFO */}
        <div className="space-y-4 mb-10">
          
          {/* EMAIL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 border-2 border-emerald-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Mail size={20} className="text-emerald-600 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-emerald-600 font-medium">Email</p>
            </div>

            <a
              href="mailto:iniraditya15@email.com"
              className="text-lg font-semibold text-emerald-900 hover:text-emerald-700 transition"
            >
              iniraditya15@email.com
            </a>
          </motion.div>

          {/* WHATSAPP */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 border-2 border-emerald-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <MessageCircle size={20} className="text-emerald-600 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-emerald-600 font-medium">WhatsApp</p>
            </div>

            <a
              href="https://wa.me/6285796633875"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-emerald-900 hover:text-emerald-700 transition"
            >
              +62 857-9663-3875
            </a>
          </motion.div>
        </div>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="mailto:iniraditya15@email.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white rounded-xl hover:from-emerald-600 hover:to-emerald-800 hover:shadow-xl transition-all duration-300 font-medium text-lg group"
          >
            <Send
              size={20}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
            <span>Send Message</span>
          </a>
        </motion.div>

        {/* FOOT NOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-sm text-emerald-600"
        >
          ⚡ I usually respond within 24 hours
        </motion.p>
      </motion.div>
    </section>
  );
}
