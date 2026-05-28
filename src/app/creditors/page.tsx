import Link from "next/link";

export default function CreditorsPage() {
  return (
    <main className="bg-[#f5f5f4] text-gray-950 overflow-hidden">
      {/* NAVBAR */}
      <header className="relative z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-4">
            <img
              src="/images/logo/bc-logo-white.png"
              alt="Bankruptcy Control"
              className="h-10 w-auto"
            />

            <span className="text-white font-semibold tracking-wide text-lg">
              Bankruptcy Control
            </span>
          </Link>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-10 text-[15px] text-zinc-300">
            <Link href="/#product" className="hover:text-white transition">
              Product
            </Link>

            <Link href="/#platform" className="hover:text-white transition">
              Platform
            </Link>

            <Link href="/#industries" className="hover:text-white transition">
              Industries
            </Link>

            <Link href="/#about" className="hover:text-white transition">
              About
            </Link>

            <Link href="/#contact" className="hover:text-white transition">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-2xl text-sm font-medium transition"
          >
            Contact Us →
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050816] border-b border-white/5 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_40%)] opacity-80" />

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 pt-10 pb-24">
          {/* BREADCRUMBS */}
          <div className="mb-16 flex items-center gap-4 text-base md:text-lg text-zinc-400">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>

            <span>/</span>

            <Link href="/#industries" className="hover:text-white transition">
              Industries
            </Link>

            <span>/</span>

            <span className="text-white font-medium">
              Financial Institutions
            </span>
          </div>

          {/* HERO GRID */}
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-center">
            {/* LEFT */}
            <div>
              <p className="text-blue-300 uppercase tracking-[0.18em] text-sm font-medium mb-8">
                Financial Institutions
              </p>

              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-10">
                Operational Control for Financial Institutions
              </h1>

              <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-2xl mb-12">
                Bankruptcy Control provides financial institutions with the
                visibility, coordination, and operational infrastructure needed
                to manage bankruptcy-related workflows with confidence.
              </p>

              <Link
                href="/#contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl text-lg font-medium transition"
              >
                Contact Us →
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[36px] bg-blue-500/10 blur-3xl" />

              <img
                src="/images/bc-image-workers.png"
                alt="Financial Operations Team"
                className="rounded-[36px] shadow-2xl object-cover w-full h-[620px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY CHALLENGES */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[0.8fr_1fr] gap-20 items-center">
            {/* IMAGE */}
            <div>
              <img
                src="images/bc-complex-workflows.png"
                alt="Complex Bankruptcy Workflow Operations"
                className="rounded-[36px] shadow-2xl object-cover w-full h-[620px]"
              />
            </div>
            

            {/* CONTENT */}
            <div>
              <p className="text-blue-700 uppercase tracking-[0.18em] text-sm font-medium mb-6">
                Industry Challenges
              </p>

              <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-10">
                Complex Workflows. High Stakes.
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-14 max-w-2xl">
                Bankruptcy operations are highly regulated, operationally
                complex, and dependent on accurate coordination across systems,
                teams, servicing activity, and compliance workflows.
              </p>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Fragmented Visibility
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    Disconnected systems and siloed operational workflows reduce
                    visibility into account activity and servicing operations.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Compliance Pressure
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    Regulatory oversight requires accurate reporting,
                    documentation, audit visibility, and operational
                    consistency.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Operational Risk
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    Delays, communication gaps, and manual processes create risk
                    across bankruptcy-related workflows.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Resource Constraints
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    Teams require centralized operational systems capable of
                    scaling across portfolios and servicing environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW BC HELPS */}
      <section className="relative overflow-hidden py-28 md:py-36 bg-[#050816] text-white">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_55%)]" />

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-5xl mx-auto mb-20">
            <p className="text-blue-300 uppercase tracking-[0.18em] text-sm font-medium mb-6">
              How Bankruptcy Control Helps
            </p>

            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              One Platform. Total Operational Control.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                title: "Centralized Visibility",
                text: "Gain real-time visibility into bankruptcy account activity, operational workflows, and servicing performance.",
              },
              {
                title: "Workflow Coordination",
                text: "Coordinate operational tasks, deadlines, communication, and servicing activity through centralized workflows.",
              },
              {
                title: "Compliance Assurance",
                text: "Support regulatory workflows with operational oversight, audit visibility, and reporting consistency.",
              },
              {
                title: "Operational Intelligence",
                text: "Improve operational awareness through centralized monitoring systems and workflow analytics.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[34px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              >
                <h3 className="text-2xl font-semibold mb-6">{item.title}</h3>

                <p className="text-zinc-300 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-20 items-center">
            {/* LEFT */}
            <div>
              <p className="text-blue-700 uppercase tracking-[0.18em] text-sm font-medium mb-6">
                Built for Your Workflow
              </p>

              <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-10">
                Smarter Operations. Stronger Results.
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-14 max-w-2xl">
                From initial notification to operational resolution, Bankruptcy
                Control helps teams coordinate workflows, monitor activity, and
                improve servicing visibility.
              </p>

              <div className="grid md:grid-cols-2 gap-10">
                {[
                  "Notification",
                  "Case Management",
                  "Monitoring",
                  "Resolution",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[28px] border border-gray-200 bg-gray-50 p-8"
                  >
                    <h3 className="text-2xl font-semibold mb-4">{item}</h3>

                    <p className="text-gray-600 leading-relaxed text-lg">
                      Operational workflows supporting coordinated servicing,
                      monitoring, reporting, and account activity management.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img
                src="/images/bc-dashboard-enterprise.png"
                alt="Bankruptcy Control Dashboard"
                className="relative rounded-[36px] object-cover w-full h-[620px] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#050816] text-white py-20 border-t border-white/5">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_50%)]" />

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl px-10 md:px-16 py-14 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Take Control of Bankruptcy Operations
              </h2>

              <p className="text-zinc-300 text-xl leading-relaxed max-w-3xl">
                Improve operational visibility, reduce risk, and strengthen
                coordination across bankruptcy-related workflows.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl text-lg font-medium transition whitespace-nowrap"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
