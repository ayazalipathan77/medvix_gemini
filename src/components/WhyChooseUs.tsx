import { motion } from "motion/react";
import { Target, Clock, TrendingUp, Users, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Target size={32} strokeWidth={1} />,
      title: "98% Clean Claim Rate",
      description: "Our rigorous coding reviews ensure nearly every claim is accepted on the first submission."
    },
    {
      icon: <Clock size={32} strokeWidth={1} />,
      title: "Faster Reimbursements",
      description: "We reduce days in AR by up to 40%, getting you paid significantly faster."
    },
    {
      icon: <TrendingUp size={32} strokeWidth={1} />,
      title: "Revenue Growth",
      description: "Most clients see a 15-30% increase in overall revenue within the first 6 months."
    },
    {
      icon: <Users size={32} strokeWidth={1} />,
      title: "Dedicated Experts",
      description: "You get a dedicated account manager and a team of certified billing specialists."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Header */}
          <div className="lg:col-span-4">
            <span className="block font-sans text-xs font-medium tracking-[0.2em] text-gray-400 mb-6 uppercase">
              Why Partner With Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-gray-900 leading-tight mb-8">
              The Medvix <br />
              <span className="italic text-gray-500">Difference.</span>
            </h2>
            <p className="font-sans text-gray-500 text-sm leading-relaxed mb-12">
              We don't just process claims; we optimize your entire financial ecosystem. Our data-driven approach ensures you collect every dollar you earn.
            </p>
            
            <div className="hidden lg:block">
              <a href="#contact" className="inline-block border-b border-gray-900 pb-1 text-gray-900 font-sans text-sm uppercase tracking-widest hover:opacity-60 transition-opacity">
                Get Started
              </a>
            </div>
          </div>

          {/* Grid */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="mb-6 text-gray-900 group-hover:text-gray-500 transition-colors duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="font-heading text-2xl text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 aspect-[16/9] bg-gray-100 overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000" 
                alt="Data Analytics" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
