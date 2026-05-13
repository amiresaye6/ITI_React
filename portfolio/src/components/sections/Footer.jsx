import { Cat, Link, Mail, Bird, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Branding & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Amir <span className="text-indigo-500">Alsayed</span>
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            © {currentYear} — Built with React & Tailwind CSS.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="github">
            <Cat className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="linkedin">
            <Link className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="twitter">
            <Bird className="w-5 h-5" />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-indigo-500 transition-all group"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Bottom Status/Availability */}
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-900/50 flex justify-center">
        <div className="flex items-center gap-2 px-3 py-1 bg-indigo-500/5 rounded-full border border-indigo-500/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-[10px] uppercase tracking-wider font-semibold text-indigo-400">
            Available for new opportunities
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;