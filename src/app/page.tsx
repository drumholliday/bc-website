"use client";
import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="min-h-screen bg-white text-gray-900 scroll-smooth">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm flex flex-wrap justify-between items-center px-4 md:px-8 py-4">
        <h1 className="text-2xl font-bold tracking-tight mb-2 md:mb-0">
          Bankruptcy Control
        </h1>

        <div className="flex flex-wrap gap-4 md:gap-6 text-base md:text-lg font-medium items-center">
          <a href="#home" className="hover:text-blue-700 transition">
            Home
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

          {/* Client Login */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Client login coming soon");
            }}
            className="text-gray-500 hover:text-gray-900 ml-4"
          >
            Client Login
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="scroll-mt-24 bg-blue-900 text-white py-16 md:py-28 px-4 md:px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Bankruptcy Case Management for Creditors
            </h2>

            <p className="text-base md:text-xl text-gray-200 mb-8 max-w-xl">
              Automate compliance, track claims, and manage bankruptcy accounts
              with a secure platform built for creditors, servicers, and
              attorneys.
            </p>

            <a
              href="#contact"
              className="inline-block bg-white text-blue-900 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
            >
              Schedule a Demo →
            </a>
          </div>

          <div className="bg-gray-100 rounded-lg min-h-[200px] md:min-h-[280px] p-4 shadow-inner flex items-center justify-center">
            <img
              src="/dashboard-preview.png"
              alt="Platform preview"
              className="rounded shadow-md max-h-[240px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section
        id="product"
        className="scroll-mt-24 py-16 md:py-28 px-4 md:px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-gray-200 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                A Complete Platform for Bankruptcy Case Management
              </h3>

              <p className="text-gray-600 mb-8">
                Bankruptcy Control provides a centralized system for managing
                bankrupt accounts, tracking claims, ensuring compliance, and
                integrating with key data sources.
              </p>

              {/* FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔</span>
                  <p className="font-medium">Automated document generation</p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔</span>
                  <p className="font-medium">Real-time bankruptcy tracking</p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔</span>
                  <p className="font-medium">System integrations</p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔</span>
                  <p className="font-medium">Workflow management tools</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-gray-900 rounded-xl shadow-lg p-6 text-white">
              <p className="text-sm text-gray-400 mb-4">
                Bankruptcy Control Dashboard
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded">
                  <p className="text-xs text-gray-400">Active Cases</p>
                  <p className="text-2xl font-bold">1,248</p>
                </div>

                <div className="bg-gray-800 p-4 rounded">
                  <p className="text-xs text-gray-400">Claims Filed</p>
                  <p className="text-2xl font-bold">3,912</p>
                </div>

                <div className="bg-gray-800 p-4 rounded">
                  <p className="text-xs text-gray-400">Compliance Alerts</p>
                  <p className="text-2xl font-bold text-yellow-400">12</p>
                </div>

                <div className="bg-gray-800 p-4 rounded">
                  <p className="text-xs text-gray-400">Payments Tracked</p>
                  <p className="text-2xl font-bold text-green-400">$2.4M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT (TAKE CONTROL) */}
      <section
        id="about"
        className="scroll-mt-24 py-16 md:py-24 px-4 md:px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Take Control of Bankruptcy Accounts
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Reduce Legal Risk</h4>
              <p className="text-gray-600 text-lg">
                Identify filings early and reduce legal exposure.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Ensure Compliance</h4>
              <p className="text-gray-600 text-lg">
                Automatically use correct court forms.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Protect Data</h4>
              <p className="text-gray-600 text-lg">
                Automatically redact sensitive information.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Improve Collections</h4>
              <p className="text-gray-600 text-lg">
                Track claims and payments efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / CREDENTIALS */}
      <section id="trust" className="scroll-mt-24 py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">
            Trusted Infrastructure & Experience
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {/* Veteran Owned */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700">
                ✔
              </div>
              <p className="text-xl text-gray-700 mt-2">
                Veteran Owned Business
              </p>
            </div>

            {/* Experience */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700">
                35+
              </div>
              <p className="text-xl text-gray-700 mt-2">
                Years Creditor Representation
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700">
                20+
              </div>
              <p className="text-xl text-gray-700 mt-2">
                Years Platform Development
              </p>
            </div>
            {/* AWS Hosting */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">
                AWS
              </div>
              <p className="text-xl text-gray-700 mt-2">
                Hosted on AWS Infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-24 py-16 md:py-24 px-4 md:px-6 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">What is Bankruptcy Control?</h4>
              <p className="text-gray-600 text-lg">
                A platform for managing bankruptcy accounts and compliance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Who is it for?</h4>
              <p className="text-gray-600 text-lg">
                Creditors, servicers, attorneys, and debt buyers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Is it cloud-based?</h4>
              <p className="text-gray-600 text-lg">
                Yes, accessible via modern web browsers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO REQUEST */}
      <section
        id="contact"
        className="scroll-mt-24 py-16 md:py-24 px-4 md:px-6 bg-gray-50"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Schedule a Demo
          </h3>

          <p className="text-gray-600 mb-10">
            See how Bankruptcy Control can streamline your bankruptcy
            operations.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4 text-left"
          >
            {submitted && (
              <p className="text-green-600 mt-4 text-center font-medium">
                Thank you! We’ll be in touch shortly.
              </p>
            )}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded px-4 py-3"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded px-4 py-3"
              required
            />

            <input
              type="text"
              placeholder="Company"
              className="w-full border rounded px-4 py-3"
            />

            <textarea
              placeholder="Tell us about your needs..."
              className="w-full border rounded px-4 py-3"
              rows={4}
            />

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded font-semibold hover:bg-blue-800 transition"
            >
              Request Demo
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm md:text-lg text-blue-900 py-6 border-t">
        © {new Date().getFullYear()} Bankruptcy & Litigation Technology, Inc.
      </footer>
    </main>
  );
}
