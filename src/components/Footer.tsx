import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-24 pb-12">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5 lg:col-span-4">
            <a href="#" className="font-heading text-3xl text-gray-900 tracking-tight mb-8 block">
              MEDVIX.
            </a>
            <p className="font-sans text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
              Precision revenue cycle management for modern healthcare providers. We optimize your financial health so you can focus on patient care.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Linkedin size={20} strokeWidth={1} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Twitter size={20} strokeWidth={1} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Instagram size={20} strokeWidth={1} />
              </a>
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-8 grid sm:grid-cols-3 gap-12">
            <div>
              <h4 className="font-sans text-xs font-medium tracking-[0.2em] text-gray-900 mb-8 uppercase">
                Company
              </h4>
              <ul className="space-y-4">
                <li><a href="#about" className="font-sans text-sm text-gray-500 hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#services" className="font-sans text-sm text-gray-500 hover:text-gray-900 transition-colors">Services</a></li>
                <li><a href="#why-choose-us" className="font-sans text-sm text-gray-500 hover:text-gray-900 transition-colors">Why Us</a></li>
                <li><a href="#results" className="font-sans text-sm text-gray-500 hover:text-gray-900 transition-colors">Results</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-xs font-medium tracking-[0.2em] text-gray-900 mb-8 uppercase">
                Legal
              </h4>
              <ul className="space-y-4">
                <li><a href="#" className="font-sans text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="font-sans text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="font-sans text-sm text-gray-500 hover:text-gray-900 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-xs font-medium tracking-[0.2em] text-gray-900 mb-8 uppercase">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:hello@medvix.com" className="font-sans text-sm text-gray-500 hover:text-gray-900 transition-colors block">
                    hello@medvix.com
                  </a>
                </li>
                <li>
                  <a href="tel:+15551234567" className="font-sans text-sm text-gray-500 hover:text-gray-900 transition-colors block">
                    (555) 123-4567
                  </a>
                </li>
                <li className="font-sans text-sm text-gray-500">
                  123 Medical Plaza,<br />
                  Suite 400<br />
                  New York, NY 10001
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-xs text-gray-400">
            © {new Date().getFullYear()} Medvix Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-sans text-xs text-gray-400">Designed with precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
