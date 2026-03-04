import { motion } from "motion/react";
import {
  TrendingUp,
  UserCheck,
  BarChart3,
  Search,
  DollarSign,
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <TrendingUp className="w-6 h-6 text-[#00a651]" />,
      title: "Revenue-Focused Approach",
      description:
        "We measure success by increased collections — not just submitted claims.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#0056b3]" />,
      title: "Dedicated Account Manager",
      description:
        "Single point of contact for smooth coordination and personalized support.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#00a651]" />,
      title: "Transparent Reporting",
      description:
        "Weekly & Monthly KPI performance reports to keep you informed.",
    },
    {
      icon: <Search className="w-6 h-6 text-[#0056b3]" />,
      title: "Aggressive AR Recovery",
      description:
        "We pursue every unpaid dollar with relentless follow-up and appeals.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#00a651]" />,
      title: "Cost-Effective Outsourcing",
      description:
        "High-quality US billing support with optimized operational costs.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0056b3] font-semibold tracking-wider uppercase text-sm mb-3">
              Why Choose Medvix Solutions?
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              We Partner With You For{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0056b3] to-[#00a651]">
                Long-Term Success
              </span>
            </h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Choosing the right billing partner is critical to your practice's
              financial health. Here's why healthcare providers trust MEDVIX
              SOLUTIONS.
            </p>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {reason.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src="/why-choose-us.svg"
                alt="Medical Billing Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0056b3]/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-2xl font-bold mb-2">
                    "Our goal: Increase Net Collection Ratio & Reduce AR Days."
                  </p>
                  <p className="text-white/80 font-medium">
                    — Medvix Solutions Team
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00a651]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0056b3]/10 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
