export default function ServicersPage() {
  return (
    // <main className="min-h-screen bg-zinc-950 text-white py-24 px-6">
    <main className="min-h-screen bg-white text-gray-900 py-24 px-6">

      <div className="max-w-[1400px] mx-auto">

        {/* HEADER */}
        <div className="mb-20">

          <h1 className="text-5xl font-bold mb-6">
            Loan Servicers
          </h1>

          <p className="text-xl text-gray-700 max-w-5xl leading-relaxed">
            Operational workflows designed to support bankruptcy servicing,
            portfolio visibility, account coordination, monitoring activity,
            and centralized operational management.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-12 shadow-2xl">

            <h2 className="text-3xl font-bold mb-8 text-blue-300">
              Bankruptcy Servicing Operations
            </h2>

            <p className="text-zinc-300 leading-relaxed mb-10 text-lg">
              Workflow systems supporting bankruptcy-related servicing
              activity, operational visibility, monitoring coordination,
              and centralized account management.
            </p>

            <div className="space-y-10">

              <div>
                <h3 className="font-semibold mb-4 text-white text-lg">
                  Operational Areas
                </h3>

                <ul className="space-y-3 text-zinc-300 leading-relaxed">
                  <li>• Bankruptcy servicing workflows</li>
                  <li>• Portfolio-level monitoring</li>
                  <li>• Payment activity visibility</li>
                  <li>• Operational coordination systems</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-white text-lg">
                  Visibility & Monitoring
                </h3>

                <ul className="space-y-3 text-zinc-300 leading-relaxed">
                  <li>• Real-time operational tracking</li>
                  <li>• Centralized portfolio visibility</li>
                  <li>• Reporting coordination workflows</li>
                  <li>• Monitoring and activity systems</li>
                </ul>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-12 shadow-2xl">

            <h2 className="text-3xl font-bold mb-8 text-blue-300">
              Operational Coordination
            </h2>

            <p className="text-zinc-300 leading-relaxed mb-10 text-lg">
              Centralized operational systems designed to improve workflow
              coordination, monitoring visibility, and servicing management
              across bankruptcy-related portfolios.
            </p>

            <div className="space-y-10">

              <div>
                <h3 className="font-semibold mb-3 text-white text-lg">
                  Workflow Areas
                </h3>

                <ul className="space-y-3 text-zinc-300 leading-relaxed">
                  <li>• Workflow coordination systems</li>
                  <li>• Account monitoring visibility</li>
                  <li>• Operational reporting workflows</li>
                  <li>• Cross-team operational support</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-white text-lg">
                  Operational Value
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  Improved operational consistency, centralized visibility,
                  and better coordination across bankruptcy servicing workflows.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}