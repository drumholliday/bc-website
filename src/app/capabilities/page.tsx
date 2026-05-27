export default function CapabilitiesPage() {
  return (
    <main className="bg-[#f5f5f4] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050816] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_40%)] opacity-70" />

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 pt-10 pb-20">
          {/* Breadcrumbs */}
          <div className="mb-16 flex items-center gap-4 text-base md:text-lg text-zinc-400">
            <a href="/" className="hover:text-white transition">
              Home
            </a>

            <span>/</span>

            <a href="/#platform" className="hover:text-white transition">
              Platform
            </a>

            <span>/</span>

            <span className="text-white font-medium">Capabilities</span>
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
            {/* LEFT */}
            <div>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] mb-8 max-w-3xl">
                Powerful Capabilities.
                <br />
                Built for Servicing Excellence.
              </h1>

              <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-2xl mb-10">
                From advanced analytics to workflow automation, Bankruptcy
                Control delivers the capabilities your team needs to operate
                smarter and faster.
              </p>

              <a
                href="/#contact"
                className="inline-flex items-center bg-white text-black px-7 py-4 rounded-2xl text-lg font-medium hover:bg-zinc-200 transition"
              >
                Contact Us →
              </a>
            </div>

            {/* RIGHT */}
            <div className="rounded-[34px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <img
                src="/images/platform/capabilities-dashboard.jpg"
                alt="Capabilities Dashboard"
                className="w-full h-[620px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITY GRID */}
      <section className="bg-[#0A0E1A] border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-20">
          <p className="text-yellow-400 uppercase tracking-[0.16em] text-sm font-medium mb-10">
            Our Core Capabilities
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Advanced Analytics",
                text: "Turn data into insights with powerful analytics and custom reporting tools.",
              },
              {
                title: "Workflow Automation",
                text: "Automate tasks and processes to increase efficiency and reduce risk.",
              },
              {
                title: "Reporting & Dashboards",
                text: "Real-time dashboards and configurable reports deliver actionable visibility.",
              },
              {
                title: "System Integration",
                text: "Seamlessly integrate with your core systems and third-party applications.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:-translate-y-2 hover:bg-white/[0.07] transition-all duration-700"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 mb-8" />

                <h3 className="text-2xl font-semibold mb-5">{item.title}</h3>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIGURE */}
      <section className="bg-[#f5f5f4] text-black">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <div className="rounded-[34px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.20)]">
              <img
                src="/images/platform/capabilities-workflow.jpg"
                alt="Workflow"
                className="w-full h-[520px] object-cover"
              />
            </div>

            <div>
              <p className="text-yellow-700 uppercase tracking-[0.16em] text-sm font-medium mb-6">
                Built to Adapt
              </p>

              <h2 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
                Configure.
                <br />
                Customize.
                <br />
                Optimize.
              </h2>

              <p className="text-xl text-zinc-600 leading-relaxed mb-10">
                Every organization operates differently. Our platform is built
                to adapt to your processes, operational requirements, and
                workflow structure.
              </p>

              <div className="space-y-4 text-lg text-zinc-700">
                <div>✓ Flexible configuration</div>
                <div>✓ Role-based access</div>
                <div>✓ Business rule engine</div>
                <div>✓ Scalable as you grow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white text-black border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-20">
          <p className="text-yellow-700 uppercase tracking-[0.16em] text-sm font-medium mb-10">
            Capabilities That Drive Results
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              ["35%", "Increase in Operational Efficiency"],
              ["50%", "Reduction in Manual Processes"],
              ["99.9%", "System Uptime Reliability"],
              ["100+", "System Integrations Supported"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="bg-[#f5f5f4] border border-gray-200 rounded-[28px] p-10"
              >
                <div className="text-5xl font-semibold mb-4">{number}</div>

                <p className="text-lg text-zinc-600 leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
