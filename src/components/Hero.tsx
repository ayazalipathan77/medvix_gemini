import { motion } from "motion/react";
import { ArrowRight, Check, Activity, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 bg-white overflow-hidden"
    >
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 -right-1/2 w-[100vw] h-[100vw] bg-gradient-to-b from-gray-100 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/4 -left-1/4 w-[80vw] h-[80vw] bg-gradient-to-tr from-gray-50 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 pt-8"
          >
            <span className="block font-sans text-xs font-medium tracking-[0.2em] text-gray-500 mb-8 uppercase">
              Revenue Cycle Management
            </span>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-gray-900 mb-10 tracking-tight">
              Precision billing <br />
              <span className="italic text-gray-400">for modern</span> <br />
              healthcare.
            </h1>

            <p className="font-sans text-lg md:text-xl text-gray-600 mb-12 max-w-xl leading-relaxed font-light">
              We build predictable revenue systems for forward-thinking providers. 
              Expert medical billing, RCM, and credentialing services.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <a
                href="#contact"
                className="group flex items-center gap-4 text-gray-900 pb-2 border-b border-gray-900 hover:opacity-70 transition-all"
              >
                <span className="font-sans text-sm tracking-widest uppercase">Free Analysis</span>
                <ArrowRight size={18} strokeWidth={1} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-12 border-t border-gray-100 pt-12">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Activity size={20} strokeWidth={1} className="text-gray-900" />
                  <span className="font-heading text-3xl text-gray-900">30%</span>
                </div>
                <p className="font-sans text-xs text-gray-500 uppercase tracking-wider">Revenue Increase</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Shield size={20} strokeWidth={1} className="text-gray-900" />
                  <span className="font-heading text-3xl text-gray-900">99%</span>
                </div>
                <p className="font-sans text-xs text-gray-500 uppercase tracking-wider">Clean Claim Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000"
                alt="Modern Healthcare Office"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
