import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 pt-24 pb-12 relative overflow-hidden"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 mb-16 border-b border-gray-800 pb-16">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Improve Your Revenue?
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
              Let MEDVIX SOLUTIONS manage your billing while you focus on
              patient care. Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contact@medvixsolutions.com"
                className="inline-flex justify-center items-center gap-2 bg-[#00a651] hover:bg-[#008c44] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Book a Free Consultation
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+18001234567"
                className="inline-flex justify-center items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-sm hover:shadow-md"
              >
                Request Practice Analysis
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Us Today
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gray-700 text-[#00a651] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">
                    Call Us
                  </p>
                  <a
                    href="tel:+18001234567"
                    className="text-lg text-white font-semibold hover:text-[#00a651] transition-colors"
                  >
                    +1 (800) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gray-700 text-[#0056b3] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">
                    Email Us
                  </p>
                  <a
                    href="mailto:contact@medvixsolutions.com"
                    className="text-lg text-white font-semibold hover:text-[#0056b3] transition-colors"
                  >
                    contact@medvixsolutions.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gray-700 text-gray-300 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">
                    Location
                  </p>
                  <p className="text-lg text-white font-semibold">
                    United States
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="Medvix Solutions"
              className="h-8 brightness-0 invert opacity-80"
            />
          </div>
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} MEDVIX SOLUTIONS. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
