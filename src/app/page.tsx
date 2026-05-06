"use client"; //USE FOR NOW: Tells Next.js This file must run in the browser (client-side), not on the server.
import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="min-h-screen bg-white text-gray-900 scroll-smooth">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200 shadow-sm flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-8 py-4">
        <h1 className="text-2xl font-bold tracking-tight mb-2 md:mb-0">
          Bankruptcy Control™
        </h1>

        <div className="flex flex-wrap gap-4 md:gap-6 text-base md:text-lg font-medium items-center">
          <a href="#home" className="hover:text-blue-700 transition">
            Home
          </a>
          <a href="#why-bankruptcy-control" className="hover:text-blue-700 transition">
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
        className="scroll-mt-24 bg-blue-900 text-white py-20 md:py-28 px-4 md:px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div>
            {/* HEADLINE */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Bankruptcy Management Platform
              <br className="hidden md:block" />
              for Creditors & Servicers
            </h1>

            {/* SUBHEAD */}
            <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl">
              Track bankruptcy plans, maintain compliance, and improve recovery
              with a platform built specifically for creditors.
            </p>

            {/* SUPPORTING LINE (this is your differentiator) */}
            <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl">
              Built to operate outside your servicing system—so you stay
              compliant, even when bankruptcy plans don’t align with loan
              structures.
            </p>

            {/* CTA */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className="bg-blue-700 text-white hover:bg-blue-800"
        >
          Schedule a Demo →
        </a>

        <a
          href="#product"
          className="inline-block border border-white/30 px-6 py-3 rounded font-medium hover:bg-white/10 transition"
        >
          View Platform
        </a>
      </div> */}

            {/* TRUST SIGNAL */}
            {/* <p className="text-sm text-gray-400 mt-6">
        Trusted by creditors, servicers, and legal professionals
      </p> */}
          </div>

          {/* RIGHT SIDE (ANIMATED MOCK PREVIEW) */}
          <div className="bg-white/10 rounded-xl shadow-xl overflow-hidden min-h-[220px] md:min-h-[380px] p-4 md:p-6">
            <div className="space-y-3 font-mono text-xs sm:text-sm md:text-base">
              <p className="text-gray-300 animate-pulse">
                $ Loading bankruptcy case data...
              </p>

              <p className="text-gray-300 animate-pulse delay-150">
                $ Connecting to court systems...
              </p>

              <p className="text-green-400 animate-pulse delay-300">
                $ Sync complete ✔
              </p>

              {/* Fake dashboard cards */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-4 md:mt-6">
                <div className="bg-white/20 rounded p-3">
                  <p className="text-xs text-gray-300">Active Cases</p>
                  <p className="text-lg sm:text-xl font-bold">1,248</p>
                </div>

                <div className="bg-white/20 rounded p-3">
                  <p className="text-xs text-gray-300">Claims Filed</p>
                  <p className="text-lg sm:text-xl font-bold">3,912</p>
                </div>

                <div className="bg-white/20 rounded p-3">
                  <p className="text-xs text-gray-300">Alerts</p>
                  <p className="text-lg sm:text-xl font-bold text-yellow-400">
                    12
                  </p>
                </div>

                <div className="bg-white/20 rounded p-3">
                  <p className="text-xs text-gray-300">Recovery</p>
                  <p className="text-lg sm:text-xl font-bold text-green-400">
                    $2.4M
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY USE BANKRUPTCY CONTROL */}
      <section
        id="why-bankruptcy-control"
        className="scroll-mt-24 py-20 md:py-28 px-4 md:px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE (TEXT) */}
          <div>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Why Use Bankruptcy Control
            </h3>

            <p className="text-base md:text-lg text-gray-700 mb-6">
              Managing bankruptcy accounts within your servicing platform
              introduces risk and audit challenges. Bankruptcy plans often
              conflict with standard loan requirements, making accurate tracking
              difficult.
            </p>

            <p className="text-sm md:text-xl text-gray-600 mb-8">
              Bankruptcy Control™ is purpose-built for bankruptcy case
              management— tracking plan changes in real time and helping ensure
              compliance with accounting and reporting standards.
            </p>

            <a
              href="#contact"
              className="inline-block bg-blue-900 text-white px-5 py-2 rounded font-medium hover:bg-blue-800 transition"
            >
              Learn More →
            </a>
          </div>

          {/* RIGHT SIDE (PROCESS / FLOW PREVIEW) */}
          <div className="bg-white rounded-lg shadow-md min-h-[240px] md:min-h-[320px] p-4 md:p-6 flex items-center justify-center">
            <div className="w-full max-w-md space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs sm:text-sm font-bold">
                  1
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    Account Identified
                  </p>
                  <p className="text-sm text-gray-500">
                    Bankruptcy filing detected and linked to account
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Plan Tracking</p>
                  <p className="text-sm text-gray-500">
                    Monitor plan changes and amendments in real time
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    Compliance Maintained
                  </p>
                  <p className="text-sm text-gray-500">
                    Ensure reporting aligns with accounting standards
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                  ✔
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    Recovery Optimized
                  </p>
                  <p className="text-sm text-gray-500">
                    Improve performance with better visibility and control
                  </p>
                </div>
              </div>
            </div>

            {/* VIDEO VERSION (swap later) */}
            {/*
      <video
        src="/videos/demo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      */}
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section
        id="product"
        className="scroll-mt-24 py-20 md:py-28 px-4 md:px-6 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="h-px bg-gray-200 mb-10 md:mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
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
        className="scroll-mt-24 py-20 md:py-28 px-4 md:px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10 md:mb-12">
            Take Control of Bankruptcy Accounts
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold mb-2">Reduce Legal Risk</h4>
              <p className="text-gray-600 text-lg">
                Identify filings early and reduce legal exposure.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold mb-2">Ensure Compliance</h4>
              <p className="text-gray-600 text-lg">
                Automatically use correct court forms.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold mb-2">Protect Data</h4>
              <p className="text-gray-600 text-lg">
                Automatically redact sensitive information.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold mb-2">Improve Collections</h4>
              <p className="text-gray-600 text-lg">
                Track claims and payments efficiently.
              </p>
            </div>
            {/* NEW 4 (SECOND ROW) */}
  <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
    <h4 className="font-semibold mb-2">Lorem Ipsum</h4>
    <p className="text-gray-600 text-lg">
      Placeholder text for future feature or capability description.
    </p>
  </div>

  <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
    <h4 className="font-semibold mb-2">Dolor Sit Amet</h4>
    <p className="text-gray-600 text-lg">
      Additional functionality or system benefit can be described here.
    </p>
  </div>

  <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
    <h4 className="font-semibold mb-2">Consectetur</h4>
    <p className="text-gray-600 text-lg">
      Expand on platform capabilities or integrations in this space.
    </p>
  </div>

  <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
    <h4 className="font-semibold mb-2">Adipiscing Elit</h4>
    <p className="text-gray-600 text-lg">
      Future enhancements, reporting tools, or analytics features.
    </p>
  </div>
          </div>
        </div>
      </section>

      {/* TRUST / CREDENTIALS */}
      <section id="trust" className="scroll-mt-24 py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="h-px bg-gray-200 mb-10" />
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10 md:mb-12">
            Trusted Infrastructure & Experience
          </h3>

          {/* Veteran Owned (TOP CENTER) */}
          <div className="mb-12">
            <img
              src="/images/vet-owned-small2.jpg"
              alt="Veteran Owned Small Business"
              className="h-24 md:h-28 object-contain mx-auto mb-3"
            />
            <p className="text-xl text-gray-700 font-medium">
              Veteran Owned Business
            </p>
          </div>

          {/* 3 ITEMS BELOW */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 items-center">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-center">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-700 mb-2">
                40+
              </div>
              <p className="text-xl text-gray-700">
                Years Creditor Representation
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-center">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-700 mb-2">
                20+
              </div>
              <p className="text-xl text-gray-700">
                Years Platform Development
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-center">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight text-amber-400 mb-2">
                AWS
              </div>
              <p className="text-xl text-gray-700">
                Hosted on AWS Infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
<section
  id="faq"
  className="scroll-mt-24 py-20 md:py-28 px-4 md:px-6 bg-white"
>
  <div className="max-w-4xl mx-auto text-center">
    
    {/* TITLE */}
    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10 md:mb-12">
      Frequently Asked Questions
    </h3>

    {/* QUESTIONS */}
    <div className="space-y-6 text-left">
      
      <div className="p-6 bg-white border border-blue-200 border-l-4 border-l-blue-600 rounded-lg shadow-sm hover:shadow-md hover:border-blue-400 transition">
        <h4 className="font-semibold mb-2">
          What is Bankruptcy Control?
        </h4>
        <p className="text-gray-600">
          A platform designed to manage bankruptcy accounts, track plans, and ensure compliance for creditors and servicers.
        </p>
      </div>

      <div className="p-6 bg-white border border-blue-200 border-l-4 border-l-blue-600 rounded-lg shadow-sm hover:shadow-md hover:border-blue-400 transition">
        <h4 className="font-semibold mb-2">
          Who should use this platform?
        </h4>
        <p className="text-gray-600">
          Creditors, loan servicers, attorneys, and organizations managing bankruptcy portfolios.
        </p>
      </div>

      <div className="p-6 bg-white border border-blue-200 border-l-4 border-l-blue-600 rounded-lg shadow-sm hover:shadow-md hover:border-blue-400 transition">
        <h4 className="font-semibold mb-2">
          Why not manage bankruptcy accounts in a servicing system?
        </h4>
        <p className="text-gray-600">
          Bankruptcy plans often conflict with loan structures, making accurate tracking difficult and increasing compliance risk.
        </p>
      </div>

     <div className="p-6 bg-white border border-blue-200 border-l-4 border-l-blue-600 rounded-lg shadow-sm hover:shadow-md hover:border-blue-400 transition">
        <h4 className="font-semibold mb-2">
          Is the platform cloud-based?
        </h4>
        <p className="text-gray-600">
          Yes, Bankruptcy Control is securely hosted and accessible through modern web browsers.
        </p>
      </div>

      <div className="p-6 bg-white border border-blue-200 border-l-4 border-l-blue-600 rounded-lg shadow-sm hover:shadow-md hover:border-blue-400 transition">
        <h4 className="font-semibold mb-2">
          Can it integrate with existing systems?
        </h4>
        <p className="text-gray-600">
          The platform is designed to operate alongside servicing systems and can integrate with key data sources where needed.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* DEMO REQUEST */}
      <section
        id="contact"
        className="scroll-mt-24 py-20 md:py-28 px-4 md:px-6 bg-gray-50"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
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
            className="space-y-3 md:space-y-4 text-left"
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


// **** PRIOR CODE MIGHT REUSE LATER
// "use client";
// import { useState } from "react";

// export default function Home() {
//   // Controls success message in contact form
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <main className="min-h-screen bg-white text-gray-900 scroll-smooth">

//       {/* ================= NAVBAR ================= */}
//       <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm flex flex-wrap justify-between items-center px-4 md:px-8 py-4">
//         <h1 className="text-2xl font-bold tracking-tight mb-2 md:mb-0">
//           Bankruptcy Control™
//         </h1>

//         {/* Navigation */}
//         <div className="flex flex-wrap gap-4 md:gap-6 text-base md:text-lg font-medium items-center">
//           <a href="#home" className="hover:text-blue-700 transition">Home</a>
//           <a href="#product" className="hover:text-blue-700 transition">Product</a>
//           <a href="#about" className="hover:text-blue-700 transition">About</a>
//           <a href="#trust" className="hover:text-blue-700 transition">Trusted</a>
//           <a href="#faq" className="hover:text-blue-700 transition">FAQ</a>
//           <a href="#contact" className="hover:text-blue-700 transition">Contact</a>

//           {/* Placeholder login */}
//           <a
//             href="#"
//             onClick={(e) => {
//               e.preventDefault();
//               alert("Client login coming soon");
//             }}
//             className="text-gray-500 hover:text-gray-900 ml-4"
//           >
//             Client Login
//           </a>
//         </div>
//       </nav>

//       {/* ================= HERO ================= */}
//       <section
//         id="home"
//         className="scroll-mt-24 bg-blue-900 text-white py-16 md:py-32 px-4 md:px-6"
//       >
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//           {/* Left: Headline */}
//           <div>
//             <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
//               Bankruptcy Management Platform
//               <br className="hidden md:block" />
//               for Creditors & Servicers
//             </h1>

//             <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl">
//               Track bankruptcy plans, maintain compliance, and improve recovery with a
//               platform built specifically for creditors.
//             </p>

//             <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl">
//               Built to operate outside your servicing system—so you stay compliant,
//               even when bankruptcy plans don’t align with loan structures.
//             </p>
//           </div>

//           {/* Right: Screenshot */}
//           <div className="bg-white/10 rounded-xl shadow-xl overflow-hidden min-h-[200px] md:min-h-[360px] flex items-center justify-center">
//             <img
//               src="/images/dashboard-preview.png"
//               alt="Platform preview"
//               className="w-full h-full object-contain p-2 md:p-4"
//             />
//           </div>

//         </div>
//       </section>

//       {/* ================= WHY ================= */}
//       <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

//           {/* Text */}
//           <div>
//             <h3 className="text-3xl md:text-5xl font-bold mb-6">
//               Why Use Bankruptcy Control
//             </h3>

//             <p className="text-base md:text-lg text-gray-700 mb-6">
//               Managing bankruptcy accounts within your servicing platform introduces
//               risk and audit challenges. Bankruptcy plans often conflict with standard
//               loan requirements.
//             </p>

//             <p className="text-base md:text-lg text-gray-600 mb-8">
//               Bankruptcy Control™ tracks plan changes in real time and helps ensure
//               compliance with accounting and reporting standards.
//             </p>

//             <a
//               href="#contact"
//               className="inline-block bg-blue-900 text-white px-5 py-2 rounded font-medium hover:bg-blue-800 transition"
//             >
//               Learn More →
//             </a>
//           </div>

//           {/* Visual */}
//           <div className="bg-white rounded-lg shadow-md min-h-[240px] md:min-h-[320px] flex items-center justify-center overflow-hidden">
//             <img
//               src="/images/dashboard-preview.png"
//               alt="Demo"
//               className="w-full h-full object-contain p-2 md:p-4"
//             />
//           </div>

//         </div>
//       </section>

//       {/* ================= PRODUCT ================= */}
//       <section id="product" className="scroll-mt-24 py-16 md:py-28 px-4 md:px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="h-px bg-gray-200 mb-12" />

//           <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

//             <div>
//               <h3 className="text-3xl md:text-4xl font-semibold mb-6">
//                 A Complete Platform for Bankruptcy Case Management
//               </h3>

//               <p className="text-gray-600 mb-8">
//                 Manage accounts, track claims, and ensure compliance with a centralized system.
//               </p>

//               <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
//                 <p>✔ Automated document generation</p>
//                 <p>✔ Real-time tracking</p>
//                 <p>✔ System integrations</p>
//                 <p>✔ Workflow tools</p>
//               </div>
//             </div>

//             <div className="bg-gray-900 rounded-xl p-6 text-white">
//               <p className="text-sm text-gray-400 mb-4">Dashboard Preview</p>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-gray-800 p-4 rounded">
//                   <p className="text-xs">Active Cases</p>
//                   <p className="text-xl font-bold">1,248</p>
//                 </div>
//                 <div className="bg-gray-800 p-4 rounded">
//                   <p className="text-xs">Claims Filed</p>
//                   <p className="text-xl font-bold">3,912</p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ================= ABOUT ================= */}
//       <section id="about" className="scroll-mt-24 py-16 md:py-24 px-4 md:px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto text-center">
//           <h3 className="text-3xl md:text-4xl font-semibold mb-12">
//             Take Control of Bankruptcy Accounts
//           </h3>

//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
//             <div className="p-6 bg-white rounded shadow-sm">
//               <h4 className="font-semibold mb-2">Reduce Risk</h4>
//               <p className="text-gray-600">Identify filings early.</p>
//             </div>

//             <div className="p-6 bg-white rounded shadow-sm">
//               <h4 className="font-semibold mb-2">Ensure Compliance</h4>
//               <p className="text-gray-600">Use correct forms automatically.</p>
//             </div>

//             <div className="p-6 bg-white rounded shadow-sm">
//               <h4 className="font-semibold mb-2">Protect Data</h4>
//               <p className="text-gray-600">Redact sensitive info.</p>
//             </div>

//             <div className="p-6 bg-white rounded shadow-sm">
//               <h4 className="font-semibold mb-2">Improve Collections</h4>
//               <p className="text-gray-600">Track payments efficiently.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= TRUST ================= */}
//       <section id="trust" className="scroll-mt-24 py-16 px-6 bg-white">
//         <div className="max-w-6xl mx-auto text-center">

//           <h3 className="text-2xl md:text-3xl font-semibold mb-12">
//             Trusted Infrastructure & Experience
//           </h3>

//           {/* Veteran Owned */}
//           <div className="mb-10">
//             <img
//               src="/images/vet-owned-small2.jpg"
//               alt="Veteran Owned"
//               className="h-24 mx-auto mb-3 object-contain"
//             />
//             <p className="text-lg text-gray-700">Veteran Owned Business</p>
//           </div>

//           <div className="grid sm:grid-cols-3 gap-10">
//             <div>
//               <p className="text-3xl text-blue-700 font-bold">40+</p>
//               <p>Years Creditor Experience</p>
//             </div>
//             <div>
//               <p className="text-3xl text-blue-700 font-bold">20+</p>
//               <p>Years Platform Development</p>
//             </div>
//             <div>
//               <p className="text-3xl text-amber-400 font-bold">AWS</p>
//               <p>Secure Cloud Infrastructure</p>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* ================= FAQ ================= */}
//       <section id="faq" className="scroll-mt-24 py-16 px-4 md:px-6 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <h3 className="text-3xl font-semibold mb-10 text-center">
//             Frequently Asked Questions
//           </h3>

//           <div className="space-y-6">
//             <div>
//               <h4 className="font-semibold">What is Bankruptcy Control?</h4>
//               <p className="text-gray-600">A platform for managing bankruptcy accounts.</p>
//             </div>
//             <div>
//               <h4 className="font-semibold">Who is it for?</h4>
//               <p className="text-gray-600">Creditors, servicers, attorneys.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= CONTACT ================= */}
//       <section id="contact" className="scroll-mt-24 py-16 px-4 md:px-6 bg-gray-50">
//         <div className="max-w-3xl mx-auto text-center">
//           <h3 className="text-3xl font-semibold mb-6">Schedule a Demo</h3>

//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               setSubmitted(true);
//             }}
//             className="space-y-4 text-left"
//           >
//             {submitted && <p className="text-green-600 text-center">Thank you!</p>}

//             <input className="w-full border rounded px-4 py-3" placeholder="Name" required />
//             <input className="w-full border rounded px-4 py-3" placeholder="Email" required />

//             <button className="w-full bg-blue-900 text-white py-3 rounded">
//               Request Demo
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* ================= FOOTER ================= */}
//       <footer className="text-center text-sm text-blue-900 py-6 border-t">
//         © {new Date().getFullYear()} Bankruptcy & Litigation Technology, Inc.
//       </footer>

//     </main>
//   );
// }
