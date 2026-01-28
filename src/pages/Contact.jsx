import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-emerald-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8"
      >
        <h1 className="text-3xl font-bold text-emerald-900 mb-2 text-center">
          Contact Me
        </h1>

        <p className="text-emerald-700 text-center mb-8">
          Let’s work together or just say hello 👋
        </p>

        <form className="space-y-5">
          {/* NAME */}
          <div>
            <label className="block text-sm font-medium text-emerald-800 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-emerald-800 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full px-4 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-medium text-emerald-800 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 bg-emerald-900 text-white rounded-md hover:bg-emerald-800 transition font-medium"
          >
            Send Message
          </button>
        </form>

        {/* SOCIAL */}
        <div className="mt-8 text-center text-sm text-emerald-700">
          <p>Email: <span className="font-medium">radytia@email.com</span></p>
          <p>GitHub: <span className="font-medium">github.com/radytia</span></p>
        </div>
      </motion.div>
    </section>
  );
}
