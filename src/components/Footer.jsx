import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* LEFT */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Radytia. All rights reserved.
        </p>

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
            href="mailto:radytia@email.com"
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
