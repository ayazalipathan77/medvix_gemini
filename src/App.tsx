/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Results from "./components/Results";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#00a651]/20 selection:text-[#0056b3]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Results />
        
        {/* Promo Banner Section */}
        <section className="py-12 bg-white">
          <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img 
                src="/assets/marketing/promo-banner.svg" 
                alt="Maximize Your Practice Revenue" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
