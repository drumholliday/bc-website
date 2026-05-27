export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="py-28 px-6 border-b border-gray-200">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="text-blue-700 font-semibold tracking-wide uppercase mb-4">
              Product Feature
            </p>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
              System Integrations
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Integrated workflow systems designed to support
              operational coordination, monitoring connectivity,
              reporting visibility, and centralized platform operations.
            </p>

            <div className="flex flex-wrap gap-4">

              <div className="bg-blue-50 text-blue-900 px-5 py-3 rounded-full text-sm font-medium">
                Platform Connectivity
              </div>

              <div className="bg-blue-50 text-blue-900 px-5 py-3 rounded-full text-sm font-medium">
                Workflow Systems
              </div>

              <div className="bg-blue-50 text-blue-900 px-5 py-3 rounded-full text-sm font-medium">
                Reporting Visibility
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-zinc-900">

            <div className="aspect-video bg-linear-to-br from-zinc-900 via-blue-950 to-zinc-800 flex items-center justify-center">

              <div className="text-center px-8">

                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">▶</span>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  Integration Workflow Demo
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  Future systems integration demonstration
                  and operational connectivity walkthrough.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="mb-14">

            <h2 className="text-4xl font-bold mb-6">
              Overview
            </h2>

            <p className="text-xl text-gray-700 max-w-4xl leading-relaxed">
              Integration systems designed to support operational
              coordination, centralized workflow visibility,
              monitoring activity, and platform connectivity.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8">
              <h3 className="text-2xl font-semibold mb-5 text-blue-900">
                Workflow Connectivity
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Integrated operational workflows supporting
                centralized coordination and monitoring visibility.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8">
              <h3 className="text-2xl font-semibold mb-5 text-blue-900">
                Platform Coordination
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Workflow systems designed to improve
                operational coordination and reporting activity.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8">
              <h3 className="text-2xl font-semibold mb-5 text-blue-900">
                Monitoring Systems
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Centralized monitoring visibility supporting
                operational workflows and platform activity.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}