import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000" 
                alt="Medvix Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 border border-gray-100 max-w-xs hidden md:block">
              <p className="font-heading text-2xl text-gray-900 mb-2">15+ Years</p>
              <p className="font-sans text-xs text-gray-500 uppercase tracking-widest">
                Of Excellence in RCM
              </p>
            </div>
          </div>

          <div>
            <span className="block font-sans text-xs font-medium tracking-[0.2em] text-gray-400 mb-6 uppercase">
              Who We Are
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-gray-900 leading-tight mb-8">
              More than just a <br />
              <span className="italic text-gray-500">billing company.</span>
            </h2>
            <p className="font-sans text-gray-500 text-lg leading-relaxed mb-8">
              At Medvix Solutions, we believe that financial health is just as important as patient health. We are a team of dedicated RCM experts, certified coders, and data analysts working together to transform your practice's revenue cycle.
            </p>
            <p className="font-sans text-gray-500 text-sm leading-relaxed mb-12">
              Our mission is simple: to provide transparent, efficient, and compliant billing solutions that allow healthcare providers to focus on what they do best—caring for patients.
            </p>

            <div className="space-y-4">
              {[
                "Certified Professional Coders (CPC)",
                "HIPAA Compliant Processes",
                "Data-Driven Financial Strategies",
                "24/7 Client Support"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-8 h-px bg-gray-200 group-hover:bg-gray-900 transition-colors"></div>
                  <span className="font-sans text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
