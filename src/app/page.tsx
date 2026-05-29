"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900 scroll-smooth">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm px-6 md:px-10 py-5">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Image
            src="/images/bc-logo-white.png"
            alt="Bankruptcy Control"
            width={420}
            height={120}
            priority
            className="h-20 md:h-24 w-auto object-contain"
          />

          {/* DESKTOP NAV */}
          <div className="hidden xl:flex gap-6 md:gap-8 text-lg md:text-xl font-medium items-center">
            <a
              href="#home"
              className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              Home
            </a>

            <a
              href="#product"
              className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              Product
            </a>

            <a
              href="#platform"
              className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition"
            >
              Platform
            </a>

            <a
              href="#industries"
              className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition"
            >
              Industries
            </a>

            <a
              href="#about"
              className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              About
            </a>

            <a
              href="#trust"
              className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              Trusted
            </a>

            <a
              href="#faq"
              className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              FAQ
            </a>

            <a
              href="#contact"
              className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              Contact
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Client login coming soon");
              }}
              className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded ml-2 transition"
            >
              Login
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            aria-label="Open navigation menu"
            className="xl:hidden text-4xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden flex flex-col gap-5 text-xl font-medium mt-8 pb-6"
          >
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition"
            >
              Home
            </a>

            <a
              href="#product"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition"
            >
              Product
            </a>

            <a
              href="#platform"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition"
            >
              Platform
            </a>

            <a
              href="#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition"
            >
              Industries
            </a>

            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition"
            >
              About
            </a>

            <a
              href="#trust"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition"
            >
              Trusted
            </a>

            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition"
            >
              FAQ
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition"
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
              className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition"
            >
              Login
            </a>
          </motion.div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="scroll-mt-32 bg-blue-900 text-white py-20 md:py-36 px-6 md:px-8"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8">
              Bankruptcy Management Platform
              <br className="hidden md:block" />
              for Creditors & Servicers
            </h1>

            {/* <p className="text-2xl md:text-4xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Bankruptcy monitoring tells you something happened. Bankruptcy Control helps you teams 
              manage what happens next.  
            </p> */}

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Track bankruptcy plans, maintain compliance, and improve recovery
              with a platform built specifically for creditors.
            </p>

            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              Built to operate outside your servicing system—so you stay
              compliant, even when bankruptcy plans don’t align with loan
              structures.
            </p>

            {/* <a
              href="#contact"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded font-semibold text-lg hover:bg-gray-100 transition"
            >
              Schedule a Demo →
            </a> */}
          </div>

          {/* RIGHT */}
          <div className="bg-white/10 rounded-2xl shadow-2xl overflow-hidden min-h-105 p-8 md:p-10">
            <div className="space-y-4 font-mono text-sm md:text-lg">
              <p className="text-gray-100 animate-pulse">
                $ Loading bankruptcy case data...
              </p>

              <p className="text-gray-100 animate-pulse delay-150">
                $ Connecting to court systems...
              </p>

              <p className="text-green-400 animate-pulse delay-300">
                $ Sync complete ✔
              </p>

              <div className="grid grid-cols-2 gap-5 mt-8">
                <div className="bg-white/20 rounded-xl p-5 md:p-8">
                  <p className="text-sm text-gray-100">Active Cases</p>
                  <p className="text-3xl font-bold">1,248</p>
                </div>

                <div className="bg-white/20 rounded-xl p-5 md:p-8">
                  <p className="text-sm text-gray-100">Claims Filed</p>
                  <p className="text-3xl font-bold">3,912</p>
                </div>

                <div className="bg-white/20 rounded-xl p-5 md:p-8">
                  <p className="text-sm text-gray-100">Alerts</p>
                  <p className="text-3xl font-bold text-yellow-400">12</p>
                </div>

                <div className="bg-white/20 rounded-xl p-5 md:p-8">
                  <p className="text-sm text-gray-100">Recovery</p>
                  <p className="text-3xl font-bold text-green-300">$2.4M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divide Blue to Gray */}
      {/* <div className="h-24 bg-gradient-to-b from-blue-900 to-gray-50" /> */}

      {/* PRODUCT */}
      <motion.section
        id="product"
        className="scroll-mt-32 py-28 md:py-40 px-6 md:px-8 bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-24">
            <p className="text-blue-700 font-semibold tracking-[0.18em] uppercase mb-5">
              Product Features
            </p>

            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-950 mb-8 leading-tight">
              Built for Operational Control
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Centralized tools that provide visibility, coordination, and
              control across bankruptcy and servicing operations.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CARD 1 */}
            <a
              href="/document-generation"
              className="group relative overflow-hidden rounded-[36px] bg-linear-to-br from-[#02102A] via-[#031B4E] to-[#010817] min-h-115 p-10 md:p-12 shadow-[0_30px_80px_rgba(2,6,23,0.20)] hover:shadow-[0_40px_100px_rgba(2,6,23,0.32)] hover:-translate-y-3 hover:scale-[1.015] transition-all duration-700"
            >
              {/* BACKGROUND EFFECT */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.25),transparent_45%)]" />

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                {/* TOP */}
                <div className="flex items-start justify-between gap-10">
                  {/* LEFT TEXT */}
                  <div className="max-w-md">
                    <p className="text-blue-300 uppercase tracking-[0.18em] text-sm font-medium mb-6">
                      Workflow Automation
                    </p>

                    <h3 className="text-4xl font-semibold text-white leading-tight mb-6">
                      Automated Document Generation
                    </h3>

                    <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed max-w-md mx-auto">
                      Generate operational bankruptcy-related documents,
                      workflow notices, and reporting materials through
                      centralized workflow systems.
                    </p>
                  </div>

                  {/* RIGHT GRID */}
                  <div className="grid grid-cols-2 gap-4 shrink-0">
                    <div className="w-28 h-28 rounded-[28px] border border-blue-400/40 bg-blue-500/20 shadow-[0_0_40px_rgba(96,165,250,0.55)] backdrop-blur-xl flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11 text-blue-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.7}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6M7 4h7l5 5v11a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1z"
                        />
                      </svg>
                    </div>

                    <div className="w-28 h-28 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl" />

                    <div className="w-28 h-28 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl" />

                    <div className="w-28 h-28 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl" />
                  </div>
                </div>

                {/* BOTTOM */}
                <div className="flex items-center justify-between pt-14">
                  <span className="text-blue-300 text-xl font-medium">
                    Learn More
                  </span>

                  <span className="text-blue-300 text-3xl transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </a>

            {/* CARD 2 */}
            <a
              href="/bankruptcy-tracking"
              className="group relative overflow-hidden rounded-[36px] bg-linear-to-br from-[#02102A] via-[#031B4E] to-[#010817] min-h-115 p-10 md:p-12 shadow-[0_30px_80px_rgba(2,6,23,0.20)] hover:shadow-[0_40px_100px_rgba(2,6,23,0.32)] hover:-translate-y-3 hover:scale-[1.015]transition-all duration-700"
            >
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.25),transparent_45%)]" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-start justify-between gap-10">
                  <div className="max-w-md">
                    <p className="text-blue-300 uppercase tracking-[0.18em] text-sm font-medium mb-6">
                      Monitoring Systems
                    </p>

                    <h3 className="text-4xl font-semibold text-white leading-tight mb-6">
                      Real-Time Bankruptcy Tracking
                    </h3>

                    <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed max-w-md mx-auto">
                      Monitor bankruptcy activity, operational changes,
                      servicing workflows, and account visibility through
                      centralized monitoring systems.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 shrink-0">
                    <div className="w-28 h-28 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl" />

                    <div className="w-28 h-28 rounded-[28px] border border-blue-400/40 bg-blue-500/20 shadow-[0_0_40px_rgba(96,165,250,0.55)] backdrop-blur-xl flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11 text-blue-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.7}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 17v-2m3 2V7m3 10v-4m3 6H3"
                        />
                      </svg>
                    </div>

                    <div className="w-28 h-28 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl" />

                    <div className="w-28 h-28 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl" />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-14">
                  <span className="text-blue-300 text-xl font-medium">
                    Learn More
                  </span>

                  <span className="text-blue-300 text-3xl transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </a>

            {/* CARD 3 */}
            <a
              href="/integrations"
              className="group relative overflow-hidden rounded-[36px] bg-linear-to-br from-[#02102A] via-[#031B4E] to-[#010817] min-h-115 p-10 md:p-12 shadow-[0_30px_80px_rgba(2,6,23,0.20)] hover:shadow-[0_40px_100px_rgba(2,6,23,0.32)] hover:-translate-y-3 hover:scale-[1.015] transition-all duration-700"
            >
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_45%)]" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-start justify-between gap-10">
                  <div className="max-w-md">
                    <p className="text-blue-300 uppercase tracking-[0.18em] text-sm font-medium mb-6">
                      Platform Connectivity
                    </p>

                    <h3 className="text-4xl font-semibold text-white leading-tight mb-6">
                      System Integrations
                    </h3>

                    <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed max-w-md mx-auto">
                      Connect operational workflows, monitoring systems,
                      servicing platforms, and centralized reporting through
                      integrated platform architecture.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 shrink-0">
                    <div className="w-28 h-28 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl" />

                    <div className="w-28 h-28 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl" />

                    <div className="w-28 h-28 rounded-[28px] border border-blue-400/40 bg-blue-500/20 shadow-[0_0_40px_rgba(96,165,250,0.55)] backdrop-blur-xl flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11 text-blue-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.7}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.828 10.172a4 4 0 010 5.656l-1.414 1.414a4 4 0 01-5.656-5.656l1.414-1.414m3.536-3.536a4 4 0 015.656 5.656l-1.414 1.414"
                        />
                      </svg>
                    </div>

                    <div className="w-28 h-28 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl" />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-14">
                  <span className="text-blue-300 text-xl font-medium">
                    Learn More
                  </span>

                  <span className="text-blue-300 text-3xl transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </a>

            {/* CARD 4 */}
            <a
              href="/workflow-management"
              className="group relative overflow-hidden rounded-[36px] bg-linear-to-br from-[#02102A] via-[#031B4E] to-[#010817] min-h-115 p-10 md:p-12 shadow-[0_30px_80px_rgba(2,6,23,0.20)] hover:shadow-[0_40px_100px_rgba(2,6,23,0.32)] hover:-translate-y-3 hover:scale-[1.015] transition-all duration-700"
            >
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.25),transparent_45%)]" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-start justify-between gap-10">
                  <div className="max-w-md">
                    <p className="text-blue-300 uppercase tracking-[0.18em] text-sm font-medium mb-6">
                      Operational Coordination
                    </p>

                    <h3 className="text-4xl font-semibold text-white leading-tight mb-6">
                      Workflow Management
                    </h3>

                    <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed max-w-md mx-auto">
                      Coordinate operational tasks, monitoring activity,
                      reporting workflows, and centralized servicing operations
                      across account portfolios.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 shrink-0">
                    <div className="w-28 h-28 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl" />

                    <div className="w-28 h-28 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl" />

                    <div className="w-28 h-28 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl" />

                    <div className="w-28 h-28 rounded-[28px] border border-blue-400/40 bg-blue-500/20 shadow-[0_0_40px_rgba(96,165,250,0.55)] backdrop-blur-xl flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11 text-blue-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.7}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 7h6v6H3V7zm12 0h6v6h-6V7zM3 17h6v4H3v-4zm12 0h6v4h-6v-4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-14">
                  <span className="text-blue-300 text-xl font-medium">
                    Learn More
                  </span>

                  <span className="text-blue-300 text-3xl transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Gradient Divide White to Gray */}
      <div className="h-16 bg-linear-to-b from-white to-gray-50" />

      {/* PLATFORM */}
      <motion.section
        id="platform"
        className="scroll-mt-32 py-32 md:py-44 px-6 md:px-8 bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-[1500px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
            {/* LEFT SIDE */}
            <div>
              <p className="text-blue-700 font-semibold tracking-[0.18em] uppercase mb-6">
                Our Platform
              </p>

              <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-950 leading-tight mb-8">
                A Unified Platform for Operational Excellence
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Bankruptcy Control is built on a secure, scalable operational
                architecture designed to connect workflows, monitoring systems,
                reporting, and servicing operations.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* OPERATIONS */}
              <a
                href="/operations"
                className="group relative overflow-hidden rounded-[34px] bg-gradient-to-br from-[#02102A] via-[#031B4E] to-[#010817] min-h-[420px] p-10 shadow-[0_30px_80px_rgba(2,6,23,0.18)] hover:shadow-[0_40px_100px_rgba(2,6,23,0.30)] hover:-translate-y-3 hover:scale-[1.015] transition-all duration-700"
              >
                {/* Ambient */}
                <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.20),transparent_60%)]" />

               

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center h-full text-center">
                  <p className="text-blue-300 uppercase tracking-[0.18em] text-sm font-medium mb-6">
                    Operations
                  </p>

                  <h3 className="text-4xl font-semibold text-white leading-tight mb-6 min-h-[120px] flex items-center justify-center">
                    Centralized Operations
                  </h3>

                  <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed max-w-md mx-auto min-h-[260px] flex items-center">
                    Unified bankruptcy workflows, account visibility, monitoring
                    systems, and servicing coordination within a centralized
                    operational environment.
                  </p>

                  <div className="flex items-center justify-center gap-3 pt-12">
                    <span className="text-blue-300 text-xl font-medium">
                      Learn More
                    </span>

                    <span className="text-blue-300 text-3xl transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </a>

              {/* CAPABILITIES */}
              <a
                href="/capabilities"
                className="group relative overflow-hidden rounded-[34px] bg-gradient-to-br from-[#02102A] via-[#031B4E] to-[#010817] min-h-[420px] p-10 shadow-[0_30px_80px_rgba(2,6,23,0.18)] hover:shadow-[0_40px_100px_rgba(2,6,23,0.30)] hover:-translate-y-3 hover:scale-[1.015] transition-all duration-700"
              >
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.20),transparent_50%)]" />


                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center h-full text-center">
                  <p className="text-blue-300 uppercase tracking-[0.18em] text-sm font-medium mb-6">
                    Capabilities
                  </p>

                  <h3 className="text-4xl font-semibold text-white leading-tight mb-6 min-h-[120px] flex items-center justify-center">
                    Powerful Capabilities
                  </h3>

                 <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed max-w-md mx-auto min-h-[260px] flex items-center">
                    Monitoring, analytics, workflow visibility, reporting
                    systems, and centralized operational intelligence across
                    servicing environments.
                  </p>

                  <div className="flex items-center justify-center gap-3 pt-12">
                    <span className="text-blue-300 text-xl font-medium">
                      Learn More
                    </span>

                    <span className="text-blue-300 text-3xl transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </a>

              {/* SECURITY */}
              <a
                href="/security"
                className="group relative overflow-hidden rounded-[34px] bg-gradient-to-br from-[#02102A] via-[#031B4E] to-[#010817] min-h-[400px] p-10 flex flex-col justify-between shadow-[0_30px_80px_rgba(2,6,23,0.18)] hover:shadow-[0_40px_100px_rgba(2,6,23,0.30)] hover:-translate-y-3 hover:scale-[1.015] transition-all duration-700"
              >
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_55%)]" />


                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center h-full text-center">
                  <p className="text-blue-300 uppercase tracking-[0.18em] text-sm font-medium mb-6">
                    Security
                  </p>

                 <h3 className="text-4xl font-semibold text-white leading-tight mb-6 min-h-[120px] flex items-center justify-center">
                    Enterprise Security
                  </h3>

                 <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed max-w-md mx-auto min-h-[260px] flex items-center">
                    Infrastructure designed to support secure operational
                    workflows, protected environments, compliance visibility,
                    and centralized systems.
                  </p>

                  <div className="flex items-center justify-center gap-3 pt-12">
                    <span className="text-blue-300 text-xl font-medium">
                      Learn More
                    </span>

                    <span className="text-blue-300 text-3xl transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gradient Divide White to Gray */}
      {/* <div className="h-16 bg-linear-to-b from-white to-gray-50" /> */}

      {/* INDUSTRIES */}
      <motion.section
        id="industries"
        className="scroll-mt-32 py-32 md:py-44 px-6 md:px-8 bg-gray-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-[1500px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
            {/* LEFT */}
            <div>
              <p className="text-blue-700 font-semibold tracking-[0.18em] uppercase mb-6">
                Industries We Serve
              </p>

              <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-950 leading-tight mb-8">
                Built for the Industries We Power
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Bankruptcy Control supports organizations requiring centralized
                operational visibility, workflow coordination, monitoring
                systems, and servicing infrastructure.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {[
                  {
                    title: "Financial Institutions",
                    subtitle: "Banks & Creditors",
                    href: "/creditors",
                  },
                  {
                    title: "Loan Servicing",
                    subtitle: "Servicing Operations",
                    href: "/servicers",
                  },
                  {
                    title: "Legal Operations",
                    subtitle: "Counsel & Trustees",
                    href: "/counsel",
                  },
                  {
                    title: "Recovery Operations",
                    subtitle: "Collections & Resolution",
                    href: "/collections",
                  },
                ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group relative overflow-hidden rounded-[34px] bg-gradient-to-br from-[#02102A] via-[#031B4E] to-[#010817] min-h-[420px] p-8 flex flex-col justify-between shadow-[0_30px_80px_rgba(2,6,23,0.18)] hover:shadow-[0_40px_100px_rgba(2,6,23,0.30)] hover:-translate-y-3 hover:scale-[1.015] transition-all duration-700"
                >
                  <div className="absolute inset-0 opacity-30 group-hover:brightness-110 transition duration-700 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_45%)]" />

                  {/* Placeholder Visual */}
                  {/* <div className="relative z-10 h-44 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl" /> */}

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-center h-full text-center">
                    <p className="text-blue-300 uppercase tracking-[0.18em] text-sm font-medium mb-5">
                      {item.title}
                    </p>

                    <h3 className="text-3xl font-semibold text-white leading-tight mb-6">
                      {item.subtitle}
                    </h3>

                    <p className="text-zinc-300 text-xl leading-relaxed max-w-sm mx-auto">
                      Operational visibility, workflow coordination, monitoring
                      systems, and centralized servicing infrastructure for
                      enterprise organizations.
                    </p>

                   <div className="flex items-center justify-center gap-3 pt-10">
                      <span className="text-blue-300 text-lg font-medium">
                        Learn More
                      </span>

                      <span className="text-blue-300 text-2xl transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gradient Divider */}
      <div className="h-16 bg-linear-to-b from-gray-50 to-white" />

      {/* TRUST */}
      <motion.section
        id="trust"
        className="scroll-mt-32 py-20 md:py-36 px-6 md:px-8 bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="h-px bg-gray-200 mb-10 md:mb-16" />

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-10 md:mb-16">
            Trusted Infrastructure & Experience
          </h2>

          <div className="mb-10 md:mb-16">
            <Image
              src="/images/vet-owned-small2.jpg"
              alt="Veteran Owned Small Business"
              width={220}
              height={140}
              className="h-28 md:h-32 w-auto object-contain mx-auto mb-4"
            />

            <p className="text-2xl text-gray-700 font-medium">
              Veteran Owned Business
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 items-center">
            <div className="p-6 md:p-10 bg-white rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="text-5xl md:text-6xl font-semibold text-blue-700 mb-4">
                40+
              </div>

              <p className="text-2xl text-gray-700">
                Years Creditor Representation
              </p>
            </div>

            <div className="p-6 md:p-10 bg-white rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="text-5xl md:text-6xl font-semibold text-blue-700 mb-4">
                20+
              </div>

              <p className="text-2xl text-gray-700">
                Years Platform Development
              </p>
            </div>

            <div className="p-6 md:p-10 bg-white rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-2xl transition duration-300">
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
      <div className="h-20 bg-linear-to-b from-white to-gray-50" />
      {/* FAQ */}
      <motion.section
        id="faq"
        className="scroll-mt-32 py-20 md:py-36 px-6 md:px-8 bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-10 md:mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 md:space-y-8 text-left">
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
                className="p-6 md:p-8 bg-white border border-blue-200 border-l-4 border-l-blue-600 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-2xl transition duration-300"
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
      <div className="h-20 bg-linear-to-b from-white to-gray-50" />

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="scroll-mt-32 py-20 md:py-36 px-6 md:px-8 bg-blue-900 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Schedule a Demo
            </h2>

            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Learn how Bankruptcy Control helps creditors and servicing
              organizations improve operational visibility, strengthen
              compliance workflows, and manage bankruptcy accounts more
              efficiently.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-6"
            >
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-6 py-4 text-center font-medium">
                  Thank you! We’ll be in touch shortly.
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Smith"
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    className="w-full border border-gray-300 text-gray-900 placeholder:text-gray-400 rounded-xl px-5 py-4 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Company
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  className="w-full border border-gray-300 text-gray-900 placeholder:text-gray-400 rounded-xl px-5 py-4 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tell Us About Your Needs
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Briefly describe your organization, current workflow, or what you're looking to improve..."
                  className="w-full border border-gray-300 text-gray-900 placeholder:text-gray-400 rounded-xl px-5 py-4 text-base md:text-lg min-h-45 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                  rows={6}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 md:py-5 rounded-xl font-semibold text-lg md:text-xl hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                Request Demo
              </button>

              <p className="text-lg text-gray-500 text-center leading-relaxed">
                By submitting this form, you agree to be contacted regarding
                Bankruptcy Control products and services.
              </p>
            </form>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-blue-100 text-center text-base md:text-lg py-8 border-t border-blue-800">
        © {new Date().getFullYear()} Bankruptcy & Litigation Technology, Inc.
      </footer>
    </main>
  );
}
