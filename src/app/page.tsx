export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 border-b shadow-sm">
        <h1 className="text-xl font-bold">Bankruptcy Control</h1>

        <div className="space-x-6 text-sm font-medium">
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-blue-900 text-white py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Bankruptcy Case Management for Creditors
            </h2>

            <p className="text-lg text-gray-200 mb-8">
              Automate compliance, track claims, and manage bankruptcy accounts
              with a platform built for creditors, servicers, and attorneys.
            </p>

            <button className="bg-white text-blue-900 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition">
              Request a Demo
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white/10 rounded-lg h-64 flex items-center justify-center">
            <span className="text-gray-300">Product Screenshot</span>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="text-left">
            <h3 className="text-3xl font-bold mb-6">
              A Complete Platform for Bankruptcy Case Management
            </h3>

            <p className="text-gray-600 mb-6">
              Bankruptcy Control provides a centralized system for managing
              bankrupt accounts, tracking claims, ensuring compliance, and
              integrating with key data sources across the bankruptcy ecosystem.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Automated document generation and compliance</li>
              <li>✔ Real-time bankruptcy data tracking</li>
              <li>✔ Integration with servicing systems and data providers</li>
              <li>✔ Reporting and workflow management tools</li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-gray-100 rounded-lg h-72 flex items-center justify-center">
            <span className="text-gray-400">Platform Screenshot</span>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Solutions</h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-white border rounded-lg shadow-sm hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3">
                Compliance Automation
              </h4>
              <p className="text-gray-600">
                Generate compliant documents and automatically redact sensitive
                data.
              </p>
            </div>

            <div className="p-8 bg-white border rounded-lg shadow-sm hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3">Case Tracking</h4>
              <p className="text-gray-600">
                Track filings, claims, and payments across the bankruptcy
                lifecycle.
              </p>
            </div>

            <div className="p-8 bg-white border rounded-lg shadow-sm hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3">Data Integration</h4>
              <p className="text-gray-600">
                Connect with servicing systems and bankruptcy data providers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        © {new Date().getFullYear()} Bankruptcy & Litigation Technology, Inc.
      </footer>
    </main>
  );
}
