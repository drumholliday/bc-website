export default function OperationsPage() {
  return (
    <main className="bg-[#f5f5f4] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050816] border-b border-white/5">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_40%)] opacity-70" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

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

            <span className="text-white font-medium">Operations</span>
          </div>
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 items-center">
            {/* LEFT */}
            <div>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] mb-8 max-w-3xl">
                Operational Infrastructure That Drives Performance
              </h1>

              <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-2xl mb-10">
                Bankruptcy Control centralizes operations, coordinates
                workflows, and delivers the visibility needed to manage
                high-volume servicing environments.
              </p>

              <a
                href="/#contact"
                className="inline-flex items-center bg-white text-black px-7 py-4 rounded-2xl text-lg font-medium hover:bg-zinc-200 transition"
              >
                Contact Us →
              </a>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute -bottom-12 -left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative bg-[#0B1020] rounded-[34px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)] overflow-hidden">
                {/* Browser Top */}
                <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-black/30">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                {/* Dashboard */}
                <div className="p-8 md:p-10">
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-2xl p-5 text-black">
                      <p className="text-sm text-zinc-500 mb-2">
                        Active Workflows
                      </p>

                      <p className="text-3xl font-semibold">28,540</p>
                    </div>

                    <div className="bg-white rounded-2xl p-5 text-black">
                      <p className="text-sm text-zinc-500 mb-2">Accounts</p>

                      <p className="text-3xl font-semibold">4,812</p>
                    </div>

                    <div className="bg-white rounded-2xl p-5 text-black">
                      <p className="text-sm text-zinc-500 mb-2">Alerts</p>

                      <p className="text-3xl font-semibold">1,203</p>
                    </div>

                    <div className="bg-white rounded-2xl p-5 text-black">
                      <p className="text-sm text-zinc-500 mb-2">SLA Met</p>

                      <p className="text-3xl font-semibold">96.3%</p>
                    </div>
                  </div>

                  {/* Fake Graph */}
                  <div className="bg-white rounded-[28px] p-8">
                    <div className="flex items-end gap-5 h-64">
                      <div className="w-full rounded-t-3xl bg-zinc-200 h-[35%]" />
                      <div className="w-full rounded-t-3xl bg-zinc-300 h-[50%]" />
                      <div className="w-full rounded-t-3xl bg-blue-500 h-[82%]" />
                      <div className="w-full rounded-t-3xl bg-zinc-300 h-[58%]" />
                      <div className="w-full rounded-t-3xl bg-zinc-400 h-[70%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[#0A0E1A] border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-20">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
            {/* LEFT */}
            <div>
              <p className="text-yellow-400 uppercase tracking-[0.16em] text-sm font-medium mb-6">
                Overview
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
                Centralized operations.
                <br />
                Unified visibility.
              </h2>

              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8">
                Our platform unifies people, processes, and operational systems
                across servicing functions. From intake to resolution, every
                action is tracked, monitored, and optimized in real time.
              </p>

              <div className="space-y-4 text-zinc-300 text-lg">
                <div>✓ Centralized operational workflows</div>
                <div>✓ Real-time monitoring systems</div>
                <div>✓ Scalable servicing coordination</div>
                <div>✓ Portfolio-level visibility</div>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <div className="rounded-[34px] overflow-hidden border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                  alt="Operations"
                  className="w-full h-[520px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-[#050816] border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-20">
          <p className="text-yellow-400 uppercase tracking-[0.16em] text-sm font-medium mb-10">
            Core Operational Capabilities
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Workflow Coordination",
                text: "Automate and manage end-to-end operational workflows across departments and external parties.",
              },
              {
                title: "Real-Time Monitoring",
                text: "Monitor queues, tasks, and performance with real-time dashboards and alerts.",
              },
              {
                title: "Operational Visibility",
                text: "Gain a complete view across portfolios, accounts, and servicing activities.",
              },
              {
                title: "Performance Management",
                text: "Measure productivity, identify bottlenecks, and drive continuous improvement.",
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

      {/* BUILT FOR COMPLEXITY */}
      <section className="bg-[#f5f5f4] text-black">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
            {/* LEFT */}
            <div>
              <p className="text-yellow-700 uppercase tracking-[0.16em] text-sm font-medium mb-6">
                Built for Complexity
              </p>

              <h2 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
                Designed for Scale.
              </h2>

              <p className="text-xl text-zinc-600 leading-relaxed mb-10">
                Bankruptcy Control gives operations teams the tools to manage
                complexity, reduce risk, and deliver consistent outcomes at
                enterprise scale.
              </p>

              <div className="space-y-4 text-lg text-zinc-700">
                <div>✓ Scalable infrastructure</div>
                <div>✓ High-volume performance</div>
                <div>✓ Configurable to your processes</div>
                <div>✓ Reliable, secure, and always on</div>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <div className="rounded-[34px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.20)]">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
                  alt="Operations Team"
                  className="w-full h-[520px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050816]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-14">
          <div className="bg-white/5 border border-white/10 rounded-[34px] px-8 md:px-12 py-10 flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-3xl bg-white/10 border border-white/10" />

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                  Transform the way you manage operations.
                </h3>

                <p className="text-zinc-400 text-lg">
                  See how Bankruptcy Control can streamline your servicing
                  operations.
                </p>
              </div>
            </div>

            <a
              href="/#contact"
              className="inline-flex items-center bg-white text-black px-7 py-4 rounded-2xl text-lg font-medium hover:bg-zinc-200 transition"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
