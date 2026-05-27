export default function CollectionsPage() {
  return (
    // <main className="min-h-screen bg-zinc-950 text-white py-24 px-6">
    <main className="min-h-screen bg-white text-gray-900 py-24 px-6">

      <div className="max-w-[1400px] mx-auto">

        <div className="mb-20">

          <h1 className="text-5xl font-bold mb-6">
            Collection Agencies
          </h1>

          <p className="text-xl text-zinc-900 max-w-5xl leading-relaxed">
            Operational systems supporting bankruptcy-related workflows,
            monitoring visibility, compliance coordination,
            and centralized operational management.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-12 shadow-2xl">

            <h2 className="text-3xl font-bold mb-8 text-blue-300">
              Workflow Visibility
            </h2>

            <p className="text-zinc-300 leading-relaxed mb-10 text-lg">
              Systems supporting operational monitoring, bankruptcy-related
              activity visibility, and centralized workflow coordination.
            </p>

            <div className="space-y-10">

              <div>
                <h3 className="font-semibold mb-3 text-white text-lg">
                  Operational Areas
                </h3>

                <ul className="space-y-3 text-zinc-300 leading-relaxed">
                  <li>• Bankruptcy workflow monitoring</li>
                  <li>• Operational activity visibility</li>
                  <li>• Reporting coordination systems</li>
                  <li>• Account management workflows</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-white text-lg">
                  Monitoring Systems
                </h3>

                <ul className="space-y-3 text-zinc-300 leading-relaxed">
                  <li>• Centralized operational visibility</li>
                  <li>• Workflow coordination systems</li>
                  <li>• Monitoring and reporting activity</li>
                  <li>• Operational tracking visibility</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-12 shadow-2xl">

            <h2 className="text-3xl font-bold mb-8 text-blue-300">
              Operational Coordination
            </h2>

            <p className="text-zinc-300 leading-relaxed mb-10 text-lg">
              Centralized workflow systems designed to support operational
              coordination, visibility, and bankruptcy-related account activity.
            </p>

            <div className="space-y-10">

              <div>
                <h3 className="font-semibold mb-3 text-white text-lg">
                  Workflow Areas
                </h3>

                <ul className="space-y-4 text-zinc-300 leading-relaxed">
                  <li>• Operational workflow coordination</li>
                  <li>• Reporting and monitoring systems</li>
                  <li>• Bankruptcy-related activity tracking</li>
                  <li>• Centralized operational visibility</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-white text-lg">
                  Operational Value
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  Improved workflow consistency, operational coordination,
                  and centralized visibility across account portfolios.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}