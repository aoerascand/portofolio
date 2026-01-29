import { Github, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* LEFT */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-sm">
            © {new Date().getFullYear()} aoerascand. All rights reserved.
          </p>
          <p className="text-xs text-emerald-300 italic">
            “Because every wound brings change, let's make sure that change is a step towards maturity and goodness.”
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex gap-6">
          <a
            href="https://github.com/aoerascand"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href="https://instagram.com/rradyy7_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>

          <a
            href="mailto:iniraditya15@gmail.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
