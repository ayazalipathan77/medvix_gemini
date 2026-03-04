import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, ShieldCheck, Activity, Stethoscope } from "lucide-react";

export default function Hero() {
  const features = [
    "98%+ Clean Claim Rate",
    "Faster Reimbursements",
    "Aggressive AR Recovery",
    "HIPAA-Compliant Operations",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#f8fafc]"
    >
      {/* Immersive Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#0056b3]/20 to-[#00a651]/20 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00a651]/20 to-[#0056b3]/20 blur-[120px]"
        />

        {/* Floating Glassmorphic Medical/Tech Elements */}
        
        {/* Medical Cross */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-24 h-24 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-xl flex items-center justify-center"
        >
          <div className="w-10 h-10 relative">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-3 bg-gradient-to-b from-[#0056b3] to-[#00a651] rounded-full" />
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-3 bg-gradient-to-r from-[#0056b3] to-[#00a651] rounded-full" />
          </div>
        </motion.div>

        {/* Shield */}
        <motion.div
          animate={{
            y: [0, 50, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[25%] right-[15%] w-28 h-28 bg-white/40 backdrop-blur-md border border-white/60 rounded-full shadow-xl flex items-center justify-center"
        >
          <ShieldCheck className="w-12 h-12 text-[#00a651]" strokeWidth={1.5} />
        </motion.div>

        {/* Tech / Data Node */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] right-[25%] w-20 h-20 bg-white/40 backdrop-blur-md border border-white/60 rounded-xl shadow-xl flex items-center justify-center rotate-12"
        >
          <Activity className="w-10 h-10 text-[#0056b3]" strokeWidth={1.5} />
        </motion.div>

        {/* Stethoscope */}
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[15%] left-[25%] w-24 h-24 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-xl flex items-center justify-center"
        >
           <Stethoscope className="w-10 h-10 text-[#0056b3]" strokeWidth={1.5} />
        </motion.div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmurlCtncmlkKSIvPjwvc3ZnPg==')] opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#0056b3]/10 text-[#0056b3] font-semibold text-sm mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00a651] animate-pulse"></span>
              Precision Billing. Maximum Reimbursement. Zero Guesswork.
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.15] mb-6 tracking-tight">
              We Don't Just Process Claims — We Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0056b3] to-[#00a651]">
                Predictable Revenue Systems.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Expert Medical Billing, Dental Billing, Revenue Cycle Management
              (RCM), and Provider Credentialing services for healthcare
              providers across the US.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-[#00a651] shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-2 bg-[#0056b3] hover:bg-[#004494] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-[#0056b3]/20 hover:shadow-xl hover:-translate-y-1"
              >
                Schedule a Free Analysis
                <ArrowRight size={20} />
              </a>
              <a
                href="#services"
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-sm hover:shadow-md"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/50 backdrop-blur-sm p-2">
              <img
                src="/hero-illustration.svg"
                alt="Healthcare Revenue Cycle Management"
                className="w-full h-auto rounded-xl object-cover aspect-square"
              />

              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#e6f4ea] flex items-center justify-center">
                  <span className="text-[#00a651] font-bold text-xl">↑</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">
                    Revenue Increase
                  </p>
                  <p className="text-2xl font-bold text-gray-900">Up to 30%</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
