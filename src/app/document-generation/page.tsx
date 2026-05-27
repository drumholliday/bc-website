export default function DocumentGenerationPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="py-28 px-6 border-b border-gray-200">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-blue-700 font-semibold tracking-wide uppercase mb-4">
              Product Feature
            </p>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Automated Document Generation
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Centralized workflow systems designed to support
              bankruptcy-related document generation, operational
              reporting, monitoring workflows, and servicing coordination.
            </p>

            <div className="flex flex-wrap gap-4">

              <div className="bg-blue-50 text-blue-900 px-5 py-3 rounded-full text-sm font-medium">
                Bankruptcy Workflows
              </div>

              <div className="bg-blue-50 text-blue-900 px-5 py-3 rounded-full text-sm font-medium">
                Reporting Systems
              </div>

              <div className="bg-blue-50 text-blue-900 px-5 py-3 rounded-full text-sm font-medium">
                Operational Visibility
              </div>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">

            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-zinc-900">

              {/* PLACEHOLDER VIDEO AREA */}
              <div className="aspect-video bg-linear-to-br from-zinc-900 via-blue-950 to-zinc-800 flex items-center justify-center">

                <div className="text-center px-8">

                  <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-3xl">▶</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Product Demonstration
                  </h3>

                  <p className="text-zinc-300 leading-relaxed">
                    Future workflow demo video or operational product
                    walkthrough placeholder.
                  </p>

                </div>

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
              Automated document workflows designed to improve
              operational consistency, workflow coordination,
              reporting visibility, and centralized servicing processes
              across bankruptcy-related operational environments.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8">

              <h3 className="text-2xl font-semibold mb-5 text-blue-900">
                Operational Documents
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Workflow systems supporting operational document
                creation, monitoring workflows, reporting activity,
                and centralized coordination processes.
              </p>

            </div>

            <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8">

              <h3 className="text-2xl font-semibold mb-5 text-blue-900">
                Reporting Visibility
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Centralized reporting workflows designed to improve
                operational visibility, monitoring coordination,
                and account-related workflow management.
              </p>

            </div>

            <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8">

              <h3 className="text-2xl font-semibold mb-5 text-blue-900">
                Workflow Coordination
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Operational systems supporting centralized workflow
                coordination, servicing communication,
                and monitoring-related processes.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-200">

        <div className="max-w-7xl mx-auto">

          <div className="mb-14">

            <h2 className="text-4xl font-bold mb-6">
              Workflow Example
            </h2>

            <p className="text-xl text-gray-700 max-w-4xl leading-relaxed">
              Example operational workflow illustrating how automated
              document-related activity may move through centralized
              monitoring and servicing systems.
            </p>

          </div>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              "Account Activity Identified",
              "Operational Data Reviewed",
              "Document Generated",
              "Workflow Coordination",
              "Reporting & Tracking",
            ].map((step, index) => (
              <div
                key={step}
                className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm text-center"
              >

                <div className="w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>

                <p className="text-gray-800 font-medium leading-relaxed">
                  {step}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="mb-14">

            <h2 className="text-4xl font-bold mb-6">
              Screenshots & Demonstrations
            </h2>

            <p className="text-xl text-gray-700 max-w-4xl leading-relaxed">
              Placeholder product visuals, workflow screenshots,
              dashboard previews, and future operational demonstrations.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* SCREENSHOT */}
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white">

              <div className="aspect-video bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center">

                <div className="text-center px-8">

                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Screenshot Placeholder
                  </h3>

                  <p className="text-gray-600">
                    Future dashboard screenshot or workflow UI preview.
                  </p>

                </div>

              </div>

            </div>

            {/* VIDEO */}
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-zinc-900">

              <div className="aspect-video bg-linear-to-br from-zinc-900 via-blue-950 to-zinc-800 flex items-center justify-center">

                <div className="text-center px-8">

                  <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-3xl">▶</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Demo Video Placeholder
                  </h3>

                  <p className="text-zinc-300">
                    Future operational walkthrough or feature demonstration.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* REPORTING & INTEGRATIONS */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-200">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* INTEGRATIONS */}
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-10">

            <h2 className="text-3xl font-bold mb-8">
              Integrations
            </h2>

            <ul className="space-y-5 text-gray-700 leading-relaxed text-lg">

              <li>• Servicing platform integrations</li>

              <li>• Operational workflow systems</li>

              <li>• Monitoring and reporting connectivity</li>

              <li>• Centralized operational coordination</li>

              <li>• Workflow visibility systems</li>

            </ul>

          </div>

          {/* REPORTING */}
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-10">

            <h2 className="text-3xl font-bold mb-8">
              Reporting & Visibility
            </h2>

            <ul className="space-y-5 text-gray-700 leading-relaxed text-lg">

              <li>• Operational reporting workflows</li>

              <li>• Monitoring visibility systems</li>

              <li>• Centralized workflow coordination</li>

              <li>• Activity tracking and reporting</li>

              <li>• Portfolio-level operational visibility</li>

            </ul>

          </div>

        </div>
      </section>

    </main>
  );
}