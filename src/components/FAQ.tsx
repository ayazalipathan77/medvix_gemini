import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What medical specialties do you serve?",
      answer: "We specialize in a wide range of fields including Family Practice, Internal Medicine, Cardiology, Dermatology, Orthopedics, and Behavioral Health. Our team is trained in specialty-specific coding nuances.",
    },
    {
      question: "How quickly can we expect to see results?",
      answer: "Most clients see a noticeable improvement in cash flow within the first 30-45 days. Significant reductions in AR days typically occur within the first 3 months of partnership.",
    },
    {
      question: "Is your team HIPAA compliant?",
      answer: "Absolutely. We adhere to strict HIPAA guidelines. All data is encrypted, and our team undergoes regular compliance training to ensure patient information is always protected.",
    },
    {
      question: "Do you offer denial management services?",
      answer: "Yes. Denial management is a core part of our service. We don't just accept denials; we analyze the root cause, correct errors, and aggressively appeal to recover every dollar owed.",
    },
    {
      question: "What practice management software do you use?",
      answer: "We are software agnostic and have experience with most major EHR/PMS platforms including eClinicalWorks, AthenaHealth, Kareo, AdvancedMD, and many others.",
    },
  ];

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-20">
          <span className="block font-sans text-xs font-medium tracking-[0.2em] text-gray-400 mb-6 uppercase">
            Common Questions
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-gray-900 leading-tight">
            Everything you need <br />
            <span className="italic text-gray-500">to know.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-0"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className="font-heading text-xl md:text-2xl text-gray-900 group-hover:text-gray-600 transition-colors pr-8">
                  {faq.question}
                </span>
                <span className="shrink-0 text-gray-400 group-hover:text-gray-900 transition-colors">
                  {activeIndex === index ? (
                    <Minus size={24} strokeWidth={1} />
                  ) : (
                    <Plus size={24} strokeWidth={1} />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-gray-500 leading-relaxed pb-8 pr-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
