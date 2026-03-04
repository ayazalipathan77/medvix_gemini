import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "medical-billing",
      icon: "/assets/icons/service-medical.svg",
      image: "/assets/images/medical-billing-ai.jpg",
      title: "Medical Billing Services",
      description:
        "Complete end-to-end medical billing solutions tailored to your specialty.",
      features: [
        "Insurance Eligibility & Benefits Verification",
        "Charge Entry & Coding Review (CPT, ICD-10, HCPCS)",
        "Electronic & Paper Claim Submission",
        "Payment Posting & Reconciliation",
        "Denial Management & Appeals",
        "Accounts Receivable (AR) Follow-Up",
        "Patient Billing & Statements",
        "Monthly Financial Reporting",
      ],
      specialties: [
        "Family Practice",
        "Internal Medicine",
        "Cardiology",
        "Dermatology",
        "Orthopedics",
        "Behavioral Health",
        "Urgent Care",
        "Physical Therapy",
        "Multi-Specialty Groups",
      ],
    },
    {
      id: "dental-billing",
      icon: "/assets/icons/service-dental.svg",
      image: "/assets/images/dental-billing-ai.jpg",
      title: "Dental Billing Services",
      description:
        "We simplify complex dental insurance workflows and improve collections.",
      features: [
        "Insurance Verification",
        "Pre-Authorizations",
        "Treatment Plan Breakdown",
        "Claim Submission",
        "Insurance Follow-Up",
        "Aging AR Recovery",
        "Coordination of Benefits (COB)",
        "Patient Statements",
      ],
      specialties: [],
    },
    {
      id: "rcm",
      icon: "/assets/icons/service-rcm.svg",
      image: "/assets/images/rcm-ai.jpg",
      title: "Complete RCM",
      description:
        "MEDVIX SOLUTIONS manages the entire revenue cycle in 4 distinct phases.",
      features: [
        "Phase 1: Front-End Optimization (Eligibility, Prior Auth, Demographics)",
        "Phase 2: Claim Creation & Submission (Coding Review, Compliance, Clean Claims)",
        "Phase 3: AR & Denial Management (Daily Tracking, Rejections, Appeals)",
        "Phase 4: Reporting & Growth Strategy (KPIs, AR Aging, Revenue Trends)",
      ],
      specialties: [],
    },
    {
      id: "credentialing",
      icon: "/assets/icons/service-credentialing.svg",
      image: "/assets/images/credentialing-ai.jpg",
      title: "Provider Credentialing",
      description:
        "Credentialing errors delay revenue. We eliminate those risks.",
      features: [
        "CAQH Profile Setup & Maintenance",
        "NPI Registration",
        "PECOS Enrollment",
        "Medicare & Medicaid Enrollment",
        "Commercial Insurance Enrollment",
        "Re-Credentialing",
        "Contracting Support",
      ],
      specialties: [],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0056b3] font-semibold tracking-wider uppercase text-sm mb-3">
              Our Services
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Revenue Cycle Solutions
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              From front-end optimization to aggressive AR recovery, we provide
              end-to-end services designed to maximize your practice's revenue.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Service Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-4 p-6 rounded-2xl text-left transition-all duration-300 ${
                  activeTab === index
                    ? "bg-[#0056b3] text-white shadow-lg shadow-[#0056b3]/20 scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${activeTab === index ? "bg-white/20" : "bg-[#e6f4ea]"}`}
                >
                  <img src={service.icon} alt={service.title} className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{service.title}</h4>
                </div>
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 h-full overflow-hidden relative"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#e6f4ea] flex items-center justify-center shrink-0">
                        <img src={services[activeTab].icon} alt="" className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {services[activeTab].title}
                      </h3>
                    </div>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {services[activeTab].description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                      {services[activeTab].features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-[#00a651] shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {services[activeTab].specialties.length > 0 && (
                      <div className="mt-8 pt-8 border-t border-gray-100">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                          Specialties We Support
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {services[activeTab].specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* AI Generated Image for the specific service */}
                  <div className="md:w-1/3 shrink-0">
                    <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[250px] relative">
                      <img 
                        src={services[activeTab].image} 
                        alt={services[activeTab].title} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0056b3]/60 to-transparent mix-blend-multiply"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
