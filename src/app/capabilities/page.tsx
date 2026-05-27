export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white py-24 px-6">

      <div className="max-w-[1400px] mx-auto">

        {/* HEADER */}
        <div className="mb-20">

          <h1 className="text-5xl font-bold mb-6">
            Platform Capabilities
          </h1>

          <p className="text-xl text-zinc-300 max-w-5xl leading-relaxed">
            Operational platform functionality designed to improve workflow
            visibility, compliance, reporting, integrations, and centralized
            management across bankruptcy operations.
          </p>

        </div>

        {/* CAPABILITIES GRID */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* REPORTING */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-12 shadow-2xl">

            <h2 className="text-3xl font-bold mb-8 text-blue-300">
              Reporting Systems
            </h2>

            <p className="text-zinc-300 leading-relaxed mb-10 text-lg">
              Operational reporting, compliance visibility,
              monitoring systems, and portfolio-level
              analytics workflows.
            </p>

            <div className="space-y-10 text-zinc-300">

              <div>

                <h3 className="font-semibold mb-4 text-white text-lg">
                  Core Areas
                </h3>

                <ul className="space-y-4 text-zinc-300 leading-relaxed">
                  <li>• Operational reporting and dashboards</li>
                  <li>• Compliance activity visibility</li>
                  <li>• Portfolio-level analytics</li>
                  <li>• Real-time monitoring systems</li>
                </ul>

              </div>

              <div>

                <h3 className="font-semibold mb-4 text-white text-lg">
                  Reporting Capabilities
                </h3>

                <ul className="space-y-4 text-zinc-300 leading-relaxed">
                  <li>• Operational performance metrics</li>
                  <li>• Monitoring and activity reporting</li>
                  <li>• Workflow visibility systems</li>
                  <li>• Centralized reporting coordination</li>
                </ul>

              </div>

              <div>

                <h3 className="font-semibold mb-4 text-white text-lg">
                  Operational Value
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  Improved reporting visibility, operational
                  monitoring, and centralized insight into
                  bankruptcy-related workflows and activity.
                </p>

              </div>

            </div>
          </div>

          {/* INTEGRATIONS */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-12 shadow-2xl">

            <h2 className="text-3xl font-bold mb-8 text-blue-300">
              Integrations
            </h2>

            <p className="text-zinc-300 leading-relaxed mb-10 text-lg">
              Servicing integrations, operational data workflows,
              bankruptcy monitoring systems, and centralized
              platform connectivity.
            </p>

            <div className="space-y-10 text-zinc-300">

              <div>

                <h3 className="font-semibold mb-4 text-white text-lg">
                  Integration Areas
                </h3>

                <ul className="space-y-4 text-zinc-300 leading-relaxed">
                  <li>• Servicing platform connectivity</li>
                  <li>• Bankruptcy monitoring systems</li>
                  <li>• Operational workflow integrations</li>
                  <li>• Portfolio and account synchronization</li>
                </ul>

              </div>

              <div>

                <h3 className="font-semibold mb-4 text-white text-lg">
                  Data Workflows
                </h3>

                <ul className="space-y-4 text-zinc-300 leading-relaxed">
                  <li>• Operational data coordination</li>
                  <li>• Monitoring and activity updates</li>
                  <li>• Workflow synchronization</li>
                  <li>• Centralized operational visibility</li>
                </ul>

              </div>

              <div>

                <h3 className="font-semibold mb-4 text-white text-lg">
                  Operational Value
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  Improved operational coordination,
                  centralized visibility, and streamlined
                  workflow management across connected systems.
                </p>

              </div>

            </div>
          </div>

          {/* COMPLIANCE */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-12 shadow-2xl">

            <h2 className="text-3xl font-bold mb-8 text-blue-300">
              Compliance Workflows
            </h2>

            <p className="text-zinc-300 leading-relaxed mb-10 text-lg">
              Workflow systems supporting reporting,
              operational tracking, monitoring,
              and compliance-oriented processes.
            </p>

            <div className="space-y-10 text-zinc-300">

              <div>

                <h3 className="font-semibold mb-4 text-white text-lg">
                  Workflow Areas
                </h3>

                <ul className="space-y-4 text-zinc-300 leading-relaxed">
                  <li>• Compliance tracking workflows</li>
                  <li>• Bankruptcy operational monitoring</li>
                  <li>• Reporting coordination systems</li>
                  <li>• Workflow activity visibility</li>
                </ul>

              </div>

              <div>

                <h3 className="font-semibold mb-4 text-white text-lg">
                  Operational Processes
                </h3>

                <ul className="space-y-4 text-zinc-300 leading-relaxed">
                  <li>• Workflow and task coordination</li>
                  <li>• Operational monitoring systems</li>
                  <li>• Activity tracking visibility</li>
                  <li>• Centralized operational workflows</li>
                </ul>

              </div>

              <div>

                <h3 className="font-semibold mb-4 text-white text-lg">
                  Operational Value
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  Improved workflow consistency,
                  centralized operational visibility,
                  and stronger compliance-oriented
                  operational coordination.
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}