export default function CreditorsPage() {
  return (
    // <main className="min-h-screen bg-zinc-950 text-white py-24 px-6">
    <main className="min-h-screen bg-white text-gray-900 py-24 px-6">
        

      <div className="max-w-[1400px] mx-auto">

        <div className="mb-20">

          <h1 className="text-5xl font-bold mb-6">
            Creditors
          </h1>

          <p className="text-xl text-gray-700 max-w-5xl leading-relaxed">
            Operational workflows supporting bankruptcy account visibility,
            claims coordination, monitoring systems, compliance activity,
            and centralized operational oversight.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-12 shadow-2xl">

            <h2 className="text-3xl font-bold mb-8 text-blue-300">
              Claims & Visibility
            </h2>

            <p className="text-zinc-300 leading-relaxed mb-10 text-lg">
              Systems supporting operational visibility into bankruptcy-related
              account activity, claims coordination, and portfolio monitoring.
            </p>

            <div className="space-y-10">

              <div>
                <h3 className="font-semibold mb-3 text-white text-lg">
                  Operational Areas
                </h3>

                <ul className="space-y-3 text-zinc-300 leading-relaxed">
                  <li>• Claims visibility workflows</li>
                  <li>• Bankruptcy activity monitoring</li>
                  <li>• Portfolio-level reporting</li>
                  <li>• Account oversight systems</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-white text-lg">
                  Monitoring Systems
                </h3>

                <ul className="space-y-3 text-zinc-300 leading-relaxed">
                  <li>• Operational monitoring visibility</li>
                  <li>• Centralized workflow coordination</li>
                  <li>• Reporting activity systems</li>
                  <li>• Operational analytics workflows</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-12 shadow-2xl">

            <h2 className="text-3xl font-bold mb-8 text-blue-300">
              Operational Oversight
            </h2>

            <p className="text-zinc-300 leading-relaxed mb-10 text-lg">
              Workflow systems supporting bankruptcy-related operational
              coordination, monitoring activity, and centralized account visibility.
            </p>

            <div className="space-y-10">

              <div>
                <h3 className="font-semibold mb-3 text-white text-lg">
                  Workflow Areas
                </h3>

                <ul className="space-y-3 text-zinc-300 leading-relaxed">
                  <li>• Operational workflow coordination</li>
                  <li>• Monitoring and reporting systems</li>
                  <li>• Portfolio activity visibility</li>
                  <li>• Bankruptcy operations support</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-white text-lg">
                  Operational Value
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  Improved operational visibility, centralized coordination,
                  and better insight into bankruptcy-related activity.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}