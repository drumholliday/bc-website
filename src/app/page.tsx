"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900 scroll-smooth">
      {/* NAVBAR */}
<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm px-6 md:px-10 py-5">
  
  <div className="flex items-center justify-between">
    
    {/* LOGO */}
    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
      Bankruptcy Control™
    </h1>

    {/* DESKTOP NAV */}
    <div className="hidden xl:flex gap-6 md:gap-8 text-lg md:text-xl font-medium items-center">
      <a href="#home" className="hover:text-blue-700 transition">
        Home
      </a>

      <a
        href="#why-bankruptcy-control"
        className="hover:text-blue-700 transition"
      >
        Why Bankruptcy Control
      </a>

      <a href="#product" className="hover:text-blue-700 transition">
        Product
      </a>

      <a href="#about" className="hover:text-blue-700 transition">
        About
      </a>

      <a href="#trust" className="hover:text-blue-700 transition">
        Trusted
      </a>

      <a href="#faq" className="hover:text-blue-700 transition">
        FAQ
      </a>

      <a href="#contact" className="hover:text-blue-700 transition">
        Contact
      </a>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          alert("Client login coming soon");
        }}
        className="text-gray-500 hover:text-gray-900 ml-2"
      >
        Client Login
      </a>
    </div>

    {/* MOBILE BUTTON */}
    <button
      className="xl:hidden text-4xl"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      ☰
    </button>
  </div>

  {/* MOBILE MENU */}
  {mobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="xl:hidden flex flex-col gap-6 text-xl font-medium mt-8 pb-6"
    >
      <a
        href="#home"
        onClick={() => setMobileMenuOpen(false)}
        className="hover:text-blue-700 transition"
      >
        Home
      </a>

      <a
        href="#why-bankruptcy-control"
        onClick={() => setMobileMenuOpen(false)}
        className="hover:text-blue-700 transition"
      >
        Why Bankruptcy Control
      </a>

      <a
        href="#product"
        onClick={() => setMobileMenuOpen(false)}
        className="hover:text-blue-700 transition"
      >
        Product
      </a>

      <a
        href="#about"
        onClick={() => setMobileMenuOpen(false)}
        className="hover:text-blue-700 transition"
      >
        About
      </a>

      <a
        href="#trust"
        onClick={() => setMobileMenuOpen(false)}
        className="hover:text-blue-700 transition"
      >
        Trusted
      </a>

      <a
        href="#faq"
        onClick={() => setMobileMenuOpen(false)}
        className="hover:text-blue-700 transition"
      >
        FAQ
      </a>

      <a
        href="#contact"
        onClick={() => setMobileMenuOpen(false)}
        className="hover:text-blue-700 transition"
      >
        Contact
      </a>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setMobileMenuOpen(false);
          alert("Client login coming soon");
        }}
        className="text-gray-500 hover:text-gray-900 transition"
      >
        Client Login
      </a>
    </motion.div>
  )}
</nav>

      {/* HERO */}
      <section
        id="home"
        className="scroll-mt-32 bg-blue-900 text-white py-28 md:py-36 px-6 md:px-8"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Bankruptcy Management Platform
              <br className="hidden md:block" />
              for Creditors & Servicers
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Track bankruptcy plans, maintain compliance, and improve recovery
              with a platform built specifically for creditors.
            </p>

            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              Built to operate outside your servicing system—so you stay
              compliant, even when bankruptcy plans don’t align with loan
              structures.
            </p>

            <a
              href="#contact"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded font-semibold text-lg hover:bg-gray-100 transition"
            >
              Schedule a Demo →
            </a>
          </div>

          {/* RIGHT */}
          <div className="bg-white/10 rounded-2xl shadow-2xl overflow-hidden min-h-[420px] p-8 md:p-10">
            <div className="space-y-4 font-mono text-sm md:text-lg">
              <p className="text-gray-300 animate-pulse">
                $ Loading bankruptcy case data...
              </p>

              <p className="text-gray-300 animate-pulse delay-150">
                $ Connecting to court systems...
              </p>

              <p className="text-green-400 animate-pulse delay-300">
                $ Sync complete ✔
              </p>

              <div className="grid grid-cols-2 gap-5 mt-8">
                <div className="bg-white/20 rounded-xl p-8">
                  <p className="text-sm text-gray-300">Active Cases</p>
                  <p className="text-3xl font-bold">1,248</p>
                </div>

                <div className="bg-white/20 rounded-xl p-8">
                  <p className="text-sm text-gray-300">Claims Filed</p>
                  <p className="text-3xl font-bold">3,912</p>
                </div>

                <div className="bg-white/20 rounded-xl p-8">
                  <p className="text-sm text-gray-300">Alerts</p>
                  <p className="text-3xl font-bold text-yellow-400">12</p>
                </div>

                <div className="bg-white/20 rounded-xl p-8">
                  <p className="text-sm text-gray-300">Recovery</p>
                  <p className="text-3xl font-bold text-green-400">$2.4M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divide Blue to Gray */}
      {/* <div className="h-24 bg-gradient-to-b from-blue-900 to-gray-50" /> */}

      {/* WHY */}
      <motion.section
        id="why-bankruptcy-control"
        className="scroll-mt-32 py-28 md:py-36 px-6 md:px-8 bg-gray-50"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Why Use Bankruptcy Control
            </h3>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Managing bankruptcy accounts within your servicing platform
              introduces risk and audit challenges. Bankruptcy plans often
              conflict with standard loan requirements, making accurate tracking
              difficult.
            </p>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Bankruptcy Control™ is purpose-built for bankruptcy case
              management—tracking plan changes in real time and helping ensure
              compliance with accounting and reporting standards.
            </p>

            <a
              href="#contact"
              className="inline-block bg-blue-900 text-white px-8 py-4 rounded font-semibold text-lg hover:bg-blue-800 transition"
            >
              Learn More →
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-xl min-h-[420px] p-10 flex items-center justify-center">
            <div className="w-full max-w-lg space-y-8">
              {[
                [
                  "1",
                  "Account Identified",
                  "Bankruptcy filing detected and linked to account",
                ],
                [
                  "2",
                  "Plan Tracking",
                  "Monitor plan changes and amendments in real time",
                ],
                [
                  "3",
                  "Compliance Maintained",
                  "Ensure reporting aligns with accounting standards",
                ],
                [
                  "✔",
                  "Recovery Optimized",
                  "Improve performance with better visibility and control",
                ],
              ].map(([step, title, text]) => (
                <div key={title} className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center text-lg font-bold">
                    {step}
                  </div>

                  <div>
                    <p className="font-semibold text-xl text-gray-800 mb-2">
                      {title}
                    </p>

                    <p className="text-gray-500 text-lg">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gradient Divide Gray to White */}
      <div className="h-20 bg-gradient-to-b from-gray-50 to-white" />

      {/* PRODUCT */}
      <motion.section
        id="product"
        className="scroll-mt-32 py-28 md:py-36 px-6 md:px-8 bg-white"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="h-px bg-gray-200 mb-16" />

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
                A Complete Platform for Bankruptcy Case Management
              </h3>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Bankruptcy Control provides a centralized system for managing
                bankrupt accounts, tracking claims, ensuring compliance, and
                integrating with key data sources.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
                {[
                  "Automated document generation",
                  "Real-time bankruptcy tracking",
                  "System integrations",
                  "Workflow management tools",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-gray-50 rounded-xl p-6"
                  >
                    <span className="text-green-500 mt-1 text-xl">✔</span>

                    <p className="font-medium text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl shadow-2xl p-10 text-white">
              <p className="text-base text-gray-400 mb-8">
                Bankruptcy Control Dashboard
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800 p-8 rounded-xl">
                  <p className="text-sm text-gray-400">Active Cases</p>
                  <p className="text-4xl font-bold">1,248</p>
                </div>

                <div className="bg-gray-800 p-8 rounded-xl">
                  <p className="text-sm text-gray-400">Claims Filed</p>
                  <p className="text-4xl font-bold">3,912</p>
                </div>

                <div className="bg-gray-800 p-8 rounded-xl">
                  <p className="text-sm text-gray-400">Compliance Alerts</p>
                  <p className="text-4xl font-bold text-yellow-400">12</p>
                </div>

                <div className="bg-gray-800 p-8 rounded-xl">
                  <p className="text-sm text-gray-400">Payments Tracked</p>
                  <p className="text-4xl font-bold text-green-400">$2.4M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Gradient Divide White to Gray */}
      <div className="h-16 bg-gradient-to-b from-white to-gray-50" />

      {/* ABOUT */}
      <motion.section
        id="about"
        className="scroll-mt-32 py-28 md:py-36 px-6 md:px-8 bg-gray-50"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
            Take Control of Bankruptcy Accounts
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 text-left">
            {[
              [
                "Reduce Legal Risk",
                "Identify filings early and reduce legal exposure.",
              ],
              ["Ensure Compliance", "Automatically use correct court forms."],
              ["Protect Data", "Automatically redact sensitive information."],
              ["Improve Collections", "Track claims and payments efficiently."],
              [
                "Reporting & Analytics",
                "Generate operational and compliance reporting.",
              ],
              [
                "Court Automation",
                "Streamline workflows tied to bankruptcy filings.",
              ],
              [
                "Portfolio Visibility",
                "Monitor bankruptcy portfolios in real time.",
              ],
              [
                "Audit History Tracking",
                "Maintain detailed records and account activity logs.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="p-8 bg-white rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
              >
                <h4 className="font-semibold text-2xl mb-4">{title}</h4>

                <p className="text-gray-600 text-lg leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gradient Divider */}
      <div className="h-16 bg-gradient-to-b from-gray-50 to-white" />

      {/* TRUST */}
      <motion.section
        id="trust"
        className="scroll-mt-32 py-28 md:py-36 px-6 md:px-8 bg-white"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="h-px bg-gray-200 mb-16" />

          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
            Trusted Infrastructure & Experience
          </h3>

          <div className="mb-16">
            <img
              src="/images/vet-owned-small2.jpg"
              alt="Veteran Owned Small Business"
              className="h-28 md:h-32 object-contain mx-auto mb-4"
            />

            <p className="text-2xl text-gray-700 font-medium">
              Veteran Owned Business
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center">
            <div className="p-10 bg-white rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
              <div className="text-5xl md:text-6xl font-semibold text-blue-700 mb-4">
                40+
              </div>

              <p className="text-2xl text-gray-700">
                Years Creditor Representation
              </p>
            </div>

            <div className="p-10 bg-white rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
              <div className="text-5xl md:text-6xl font-semibold text-blue-700 mb-4">
                20+
              </div>

              <p className="text-2xl text-gray-700">
                Years Platform Development
              </p>
            </div>

            <div className="p-10 bg-white rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
              <div className="text-5xl md:text-6xl font-semibold text-amber-400 mb-4">
                AWS
              </div>

              <p className="text-2xl text-gray-700">
                Hosted on AWS Infrastructure
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gradient Divide White to Gray */}
      <div className="h-20 bg-gradient-to-b from-white to-gray-50" />
      {/* FAQ */}
      <motion.section
        id="faq"
        className="scroll-mt-32 py-28 md:py-36 px-6 md:px-8 bg-white"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
            Frequently Asked Questions
          </h3>

          <div className="space-y-8 text-left">
            {[
              [
                "What is Bankruptcy Control?",
                "A platform designed to manage bankruptcy accounts, track plans, and ensure compliance for creditors and servicers.",
              ],
              [
                "Who should use this platform?",
                "Creditors, loan servicers, attorneys, and organizations managing bankruptcy portfolios.",
              ],
              [
                "Can it integrate with existing systems?",
                "The platform is designed to operate alongside servicing systems and integrate with key data sources.",
              ],
            ].map(([question, answer]) => (
              <div
                key={question}
                className="p-8 bg-white border border-blue-200 border-l-4 border-l-blue-600 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
              >
                <h4 className="font-semibold text-2xl mb-4">{question}</h4>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Gradient Dividde White to Gray */}
      <div className="h-20 bg-gradient-to-b from-white to-gray-50" />

      {/* CONTACT */}
      {/* CONTACT */}
      <motion.section
        id="contact"
        className="scroll-mt-32 py-28 md:py-36 px-6 md:px-8 bg-gray-50"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Schedule a Demo
          </h3>

          <p className="text-xl text-gray-600 mb-14">
            See how Bankruptcy Control can streamline your bankruptcy
            operations.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6 text-left"
          >
            {submitted && (
              <p className="text-green-600 mt-4 text-center font-medium text-xl">
                Thank you! We’ll be in touch shortly.
              </p>
            )}

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-xl px-6 py-5 text-lg"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl px-6 py-5 text-lg"
              required
            />

            <input
              type="text"
              placeholder="Company"
              className="w-full border rounded-xl px-6 py-5 text-lg"
            />

            <textarea
              placeholder="Tell us about your needs..."
              className="w-full border rounded-xl px-6 py-5 text-lg"
              rows={5}
            />

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-5 rounded-xl font-semibold text-xl hover:bg-blue-800 transition"
            >
              Request Demo
            </button>
          </form>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="text-center text-base md:text-xl text-blue-900 py-8 border-t">
        © {new Date().getFullYear()} Bankruptcy & Litigation Technology, Inc.
      </footer>
    </main>
  );
}
