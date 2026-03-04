import { motion } from "motion/react";
import {
  ArrowUpRight,
  Clock,
  CheckCircle,
  TrendingDown,
  DollarSign,
} from "lucide-react";

export default function Results() {
  const stats = [
    {
      icon: <ArrowUpRight className="w-8 h-8 text-white" />,
      value: "30%",
      label: "Revenue Increase",
      description: "Up to 30% increase in overall practice revenue.",
      color: "bg-[#0056b3]",
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      value: "40%",
      label: "Reduction in AR Days",
      description: "20–40% reduction in Accounts Receivable days.",
      color: "bg-[#00a651]",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      value: "99%",
      label: "Clean Claim Rate",
      description: "95–99% first-pass clean claim submission rate.",
      color: "bg-[#0056b3]",
    },
  ];

  return (
    <section
      id="results"
      className="py-24 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#00a651] font-semibold tracking-wider uppercase text-sm mb-3">
              Proven Results
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Numbers That Speak For Themselves
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              We deliver measurable improvements to your bottom line, ensuring
              your practice thrives financially.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-gray-600 transition-all group ${index === 0 ? 'sm:col-span-2' : ''}`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${stat.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <h4 className="text-xl font-semibold text-gray-200 mb-3">
                  {stat.label}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-700 bg-white p-2">
              <img 
                src="/assets/illustrations/revenue-chart.svg" 
                alt="Revenue Growth Chart" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            {/* Decorative glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00a651]/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0056b3]/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
