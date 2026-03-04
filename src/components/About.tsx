import { motion } from "motion/react";
import { Target, ShieldCheck, Users } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Target className="w-8 h-8 text-[#0056b3]" />,
      title: "Performance-Driven",
      description:
        "Dedicated to helping healthcare providers increase collections, reduce denials, and streamline operations.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00a651]" />,
      title: "Certified Specialists",
      description:
        "Our team understands payer guidelines, CPT/ICD-10 coding standards, and HIPAA compliance regulations.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#0056b3]" />,
      title: "Extension of Practice",
      description:
        "We operate as an extension of your practice — not just a third-party vendor.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0056b3] font-semibold tracking-wider uppercase text-sm mb-3">
              About Medvix Solutions
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Maximize Your Revenue While You Focus on Patient Care.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              MEDVIX SOLUTIONS is a performance-driven medical billing company.
              We don't just process claims; we build predictable revenue systems
              that empower healthcare providers across the United States.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {card.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
