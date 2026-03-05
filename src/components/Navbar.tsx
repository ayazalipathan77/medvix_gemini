import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

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
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 z-50 relative">
               <Logo className="h-10 w-auto" />
            </a>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-sm font-medium text-gray-600 hover:text-[#0056b3] transition-colors tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden lg:flex items-center gap-2 bg-[#0056b3] hover:bg-[#004494] text-white px-5 py-2.5 rounded-lg font-sans text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Get Started
                <ArrowRight size={16} />
              </a>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors z-50"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Menu"
              >
                <Menu size={28} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
            />
            
            {/* Mobile Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] flex flex-col shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <Logo className="h-8 w-auto" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <X size={24} strokeWidth={2} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 text-gray-900 font-sans font-medium text-lg transition-colors group"
                  >
                    {link.name}
                    <ArrowRight size={18} className="text-gray-400 group-hover:text-[#0056b3] -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                ))}
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-[#0056b3] hover:bg-[#004494] text-white px-6 py-4 rounded-xl font-sans font-semibold text-base transition-all shadow-lg shadow-[#0056b3]/20"
                >
                  Free Analysis
                </a>
                <div className="mt-6 text-center space-y-1 text-gray-500 font-sans text-sm">
                  <p>contact@medvixsolutions.com</p>
                  <p>+1 (800) 123-4567</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
