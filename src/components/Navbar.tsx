import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 z-50">
              <img
                src="/logo.svg"
                alt="Medvix Solutions"
                className="h-10 md:h-12"
              />
            </a>

            {/* Menu Toggle (Visible on all screens) */}
            <button
              className="text-gray-900 p-2 hover:text-[#0056b3] transition-colors z-50"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={32} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Side Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            
            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-100">
                <img src="/logo.svg" alt="Medvix Solutions" className="h-8" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-900 bg-gray-50 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Navigation</p>
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      className="text-3xl font-bold text-gray-900 hover:text-[#0056b3] transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Get in Touch</p>
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full bg-[#0056b3] hover:bg-[#004494] text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-[#0056b3]/20"
                  >
                    Free Analysis
                    <ArrowRight size={20} />
                  </a>
                  <div className="mt-6 space-y-2 text-gray-600 font-medium">
                    <p>contact@medvixsolutions.com</p>
                    <p>+1 (800) 123-4567</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
