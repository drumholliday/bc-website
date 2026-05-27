export default function OperationsPage() {
  return (
    // <main className="min-h-screen bg-zinc-950 text-white py-24 px-6">
    <main className="min-h-screen bg-white text-gray-900 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-16">

          <h1 className="text-5xl font-bold mb-6">
            Bankruptcy Operations
          </h1>

          <p className="text-xl text-gray-700 max-w-4xl leading-relaxed">
            Operational workflows designed to support bankruptcy
            monitoring, servicing coordination, portfolio visibility,
            compliance activity, and centralized account management.
          </p>

        </div>

        {/* OPERATIONS GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT PANEL */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10 shadow-2xl">

            <h2 className="text-3xl font-bold mb-6 text-blue-300">
              Bankruptcy Monitoring
            </h2>

            <p className="text-zinc-300 leading-relaxed mb-8">
              Systems designed to monitor bankruptcy activity,
              filings, operational updates, and portfolio-level
              account visibility across managed servicing environments.
            </p>

            <div className="space-y-6 text-zinc-300">

              <div>

                <h3 className="font-semibold mb-3 text-white">
                  Operational Areas
                </h3>

                <ul className="space-y-3 text-zinc-300 leading-relaxed">
                  <li>• Bankruptcy filing monitoring</li>
                  <li>• Plan change and amendment tracking</li>
                  <li>• Payment and account activity visibility</li>
                  <li>• Portfolio-level operational monitoring</li>
                </ul>

              </div>

              <div>

                <h3 className="font-semibold mb-3 text-white">
                  Workflow Visibility
                </h3>

                <ul className="space-y-3 text-zinc-300 leading-relaxed">
                  <li>• Real-time operational tracking</li>
                  <li>• Centralized account visibility</li>
                  <li>• Monitoring and reporting workflows</li>
                  <li>• Operational coordination systems</li>
                </ul>

              </div>

              <div>

                <h3 className="font-semibold mb-3 text-white">
                  Operational Value
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  Improved visibility into bankruptcy activity
                  and operational workflows across servicing
                  portfolios and managed account environments.
                </p>

              </div>

            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10 shadow-2xl">

            <h2 className="text-3xl font-bold mb-6 text-blue-300">
              Workflow Coordination
            </h2>

            <p className="text-zinc-300 leading-relaxed mb-8">
              Centralized workflow systems designed to support
              servicing operations, task coordination,
              compliance visibility, and operational management.
            </p>

            <div className="space-y-6 text-zinc-300">

              <div>

                <h3 className="font-semibold mb-3 text-white">
                  Workflow Areas
                </h3>

                <ul className="space-y-3 text-zinc-300 leading-relaxed">
                  <li>• Work queue coordination</li>
                  <li>• Case assignment workflows</li>
                  <li>• Bankruptcy servicing operations</li>
                  <li>• Cross-team operational visibility</li>
                </ul>

              </div>

              <div>

                <h3 className="font-semibold mb-3 text-white">
                  Operational Processes
                </h3>

                <ul className="space-y-3 text-zinc-300 leading-relaxed">
                  <li>• Workflow and task management</li>
                  <li>• Reporting and monitoring activity</li>
                  <li>• Operational tracking systems</li>
                  <li>• Portfolio coordination workflows</li>
                </ul>

              </div>

              <div>

                <h3 className="font-semibold mb-3 text-white">
                  Operational Value
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  Improved workflow consistency, centralized
                  operational visibility, and better coordination
                  across bankruptcy-related servicing activity.
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}