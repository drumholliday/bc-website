export default function SecurityPage() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* HERO */}
      <section className="relative bg-[#020817] text-white pt-32 pb-28 px-6 md:px-8 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_45%)]" />

        <div className="relative max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <p className="text-blue-300 uppercase tracking-[0.18em] text-sm font-semibold mb-6">
              Security
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-8">
              Secure Infrastructure for Operational Continuity
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-2xl mb-10">
              Infrastructure and operational systems designed to support
              centralized workflows, protected environments, monitoring
              visibility, and reliable servicing operations.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-zinc-200">
                Infrastructure Visibility
              </div>

              <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-zinc-200">
                Workflow Continuity
              </div>

              <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-zinc-200">
                Centralized Operations
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="bg-white/10 rounded-[36px] shadow-2xl overflow-hidden min-h-105 p-8 md:p-10 border border-white/10 backdrop-blur-xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-zinc-400 text-sm mb-2">
                    Infrastructure Overview
                  </p>

                  <h3 className="text-2xl font-semibold">
                    Operational Environment Status
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/20" />
              </div>

              {/* Security Panel */}
              <div className="bg-black/30 rounded-3xl border border-white/5 p-6 mb-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                    <p className="text-zinc-400 text-sm mb-2">System Status</p>

                    <p className="text-2xl font-semibold">Secure</p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                    <p className="text-zinc-400 text-sm mb-2">Workflow Sync</p>

                    <p className="text-2xl font-semibold">Active</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="text-zinc-300">Infrastructure Visibility</p>

                      <p className="text-zinc-400">94%</p>
                    </div>

                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[94%] h-full bg-blue-400/50 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="text-zinc-300">Operational Continuity</p>

                      <p className="text-zinc-400">98%</p>
                    </div>

                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[98%] h-full bg-blue-400/50 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="text-zinc-300">Monitoring Activity</p>

                      <p className="text-zinc-400">87%</p>
                    </div>

                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[87%] h-full bg-blue-400/50 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                  <p className="text-zinc-400 text-sm mb-2">Active Systems</p>

                  <p className="text-2xl font-semibold">36</p>
                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                  <p className="text-zinc-400 text-sm mb-2">Monitoring Nodes</p>

                  <p className="text-2xl font-semibold">142</p>
                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                  <p className="text-zinc-400 text-sm mb-2">Workflow Sync</p>

                  <p className="text-2xl font-semibold">99%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-28 md:py-36 px-6 md:px-8 bg-white">
        <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <p className="text-blue-700 uppercase tracking-[0.18em] text-sm font-semibold mb-6">
              Infrastructure & Continuity
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
              Built to Support Reliable Operational Workflows
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Bankruptcy Control infrastructure is designed to support
              centralized operational workflows, monitoring visibility, workflow
              continuity, and scalable servicing environments.
            </p>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-3" />

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Centralized infrastructure visibility
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-3" />

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Workflow continuity and monitoring systems
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-blue-600 mt-3" />

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Operational coordination across servicing environments
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-[36px] overflow-hidden shadow-2xl border border-gray-200 bg-gray-50 min-h-110 flex items-center justify-center p-10">
              <div className="w-full max-w-xl">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Infrastructure Activity
                      </p>

                      <h3 className="text-xl font-semibold">
                        Operational Environment
                      </h3>
                    </div>

                    <div className="w-10 h-10 rounded-2xl bg-gray-100" />
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                      <div className="flex justify-between mb-2">
                        <p className="font-medium">Workflow Coordination</p>

                        <p className="text-gray-500">Active</p>
                      </div>

                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-[78%] h-full bg-black rounded-full" />
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                      <div className="flex justify-between mb-2">
                        <p className="font-medium">Infrastructure Monitoring</p>

                        <p className="text-gray-500">Synced</p>
                      </div>

                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-[88%] h-full bg-black rounded-full" />
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                      <div className="flex justify-between mb-2">
                        <p className="font-medium">Environment Visibility</p>

                        <p className="text-gray-500">Updated</p>
                      </div>

                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-[92%] h-full bg-black rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
