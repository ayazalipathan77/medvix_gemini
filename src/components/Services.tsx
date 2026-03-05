import { useState } from "react";
import { motion } from "motion/react";
import { Stethoscope, Activity, FileText, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "medical-billing",
      icon: <Stethoscope size={48} strokeWidth={1} />,
      title: "Medical Billing",
      description: "End-to-end billing solutions tailored to your specialty. We handle everything from eligibility to payment posting.",
      features: ["Eligibility Verification", "Coding Review", "Claim Submission", "Denial Management"]
    },
    {
      id: "dental-billing",
      icon: <Activity size={48} strokeWidth={1} />,
      title: "Dental Billing",
      description: "Simplifying complex dental insurance workflows to improve collections and reduce administrative burden.",
      features: ["Pre-Authorizations", "Treatment Plans", "Aging Recovery", "Patient Statements"]
    },
    {
      id: "rcm",
      icon: <FileText size={48} strokeWidth={1} />,
      title: "Revenue Cycle",
      description: "Comprehensive management of your entire revenue cycle, optimizing every step for maximum financial health.",
      features: ["Front-End Optimization", "Claim Creation", "AR Management", "Growth Strategy"]
    },
    {
      id: "credentialing",
      icon: <ShieldCheck size={48} strokeWidth={1} />,
      title: "Credentialing",
      description: "Eliminating revenue delays with proper provider enrollment and maintenance across all payers.",
      features: ["CAQH Maintenance", "NPI Registration", "Commercial Enrollment", "Contracting"]
    },
  ];

  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="mb-20 border-b border-gray-200 pb-8 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="block font-sans text-xs font-medium tracking-[0.2em] text-gray-400 mb-4 uppercase">
              Our Expertise
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-gray-900 leading-tight">
              Comprehensive <br />
              <span className="italic text-gray-500">solutions.</span>
            </h2>
          </div>
          <p className="font-sans text-gray-500 max-w-md text-sm leading-relaxed">
            From front-end optimization to aggressive AR recovery, we provide the specialized services your practice needs to thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 lg:p-12 hover:bg-gray-50 transition-colors group relative h-full flex flex-col"
            >
              <div className="text-gray-900 mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                {service.icon}
              </div>
              
              <h3 className="font-heading text-2xl text-gray-900 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
              </h3>
              
              <p className="font-sans text-sm text-gray-500 mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="font-sans text-xs text-gray-400 flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-sans text-xs uppercase tracking-widest text-gray-900">Learn More</span>
                <ArrowUpRight size={16} strokeWidth={1} className="text-gray-900" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
