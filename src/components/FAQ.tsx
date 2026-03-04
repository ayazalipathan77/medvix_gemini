import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you work with small practices?",
      answer:
        "Yes. We support solo providers, startups, group practices, and multi-location clinics. Our services scale to meet your specific needs.",
    },
    {
      question: "How quickly can you transition billing?",
      answer:
        "Most practices are fully onboarded within 1–2 weeks. We ensure a seamless transition with minimal disruption to your daily operations.",
    },
    {
      question: "Do you sign Business Associate Agreements (BAA)?",
      answer:
        "Yes. We provide signed BAA to ensure complete HIPAA compliance and data security for your practice and patients.",
    },
    {
      question: "What software do you support?",
      answer:
        "We integrate seamlessly with leading Practice Management and EHR systems including Kareo, AdvancedMD, eClinicalWorks, Dentrix, Open Dental, and many more.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e6f4ea] text-[#00a651] mb-6">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-[#0056b3] font-semibold tracking-wider uppercase text-sm mb-3">
              Frequently Asked Questions
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Got Questions? We've Got Answers.
            </h3>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#0056b3]" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
