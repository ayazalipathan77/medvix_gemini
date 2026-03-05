import { motion } from "motion/react";
import { ArrowUpRight, Clock, CheckCircle } from "lucide-react";

export default function Results() {
  const stats = [
    {
      value: "30%",
      label: "Revenue Increase",
      description: "Average increase in overall practice revenue within 6 months."
    },
    {
      value: "40%",
      label: "Reduction in AR",
      description: "Significant reduction in Accounts Receivable days."
    },
    {
      value: "99%",
      label: "Clean Claim Rate",
      description: "First-pass submission success rate."
    },
  ];

  return (
    <section id="results" className="py-32 bg-gray-50 border-t border-gray-200">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block font-sans text-xs font-medium tracking-[0.2em] text-gray-400 mb-6 uppercase">
              Proven Results
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
              Numbers that speak <br />
              <span className="italic text-gray-500">for themselves.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-gray-200 pt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="font-heading text-6xl md:text-7xl lg:text-8xl text-gray-900 mb-6 group-hover:text-gray-500 transition-colors duration-500">
                {stat.value}
              </div>
              <h4 className="font-heading text-2xl text-gray-900 mb-4">
                {stat.label}
              </h4>
              <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
