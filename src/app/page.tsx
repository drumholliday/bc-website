export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5 border-b shadow-sm">
        <h1 className="text-2xl font-bold">Bankruptcy Control</h1>

        <div className="space-x-6 text-lg font-medium flex items-center">
          <a href="#home" className="hover:text-blue-700 transition">
            Home
          </a>
          <a href="#product" className="hover:text-blue-700 transition">
            Product
          </a>
          <a href="#about" className="hover:text-blue-700 transition">
            About
          </a>
          <a href="#contact" className="hover:text-blue-700 transition">
            Contact
          </a>

          {/* Client Login */}
          <a
            href="https://your-aws-app-url.com"
            className="text-gray-500 hover:text-gray-900 ml-4"
          >
            Client Login
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="bg-blue-900 text-white py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Bankruptcy Case Management for Creditors
            </h2>

            <p className="text-xl text-gray-200 mb-8">
              Automate compliance, track claims, and manage bankruptcy accounts
              with a platform built for creditors, servicers, and attorneys.
            </p>

            <button className="bg-white text-blue-900 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition">
              Request a Demo
            </button>
          </div>

          <div className="bg-white/10 rounded-lg h-72 flex items-center justify-center text-lg">
            Platform Preview
          </div>
        </div>
      </section>

      {/* TRUST / CREDENTIALS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl text-blue-900 mb-8">
            Trusted Infrastructure & Experience
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {/* AWS Hosting */}
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">AWS</div>
              <p className="text-sm text-amber-700 mt-2">
                Hosted on AWS Infrastructure
              </p>
            </div>

            {/* Experience */}
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">20+</div>
              <p className="text-sm text-amber-700 mt-2">
                Years Creditor Representation
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">20+</div>
              <p className="text-sm text-amber-700 mt-2">
                Years Platform Development
              </p>
            </div>
            {/* Veteran Owned */}
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700">✔</div>
              <p className="text-sm text-amber-700 mt-2">
                Veteran Owned Business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section id="product" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">
              A Complete Platform for Bankruptcy Case Management
            </h3>

            <p className="text-gray-600 mb-6">
              Bankruptcy Control provides a centralized system for managing
              bankrupt accounts, tracking claims, ensuring compliance, and
              integrating with key data sources.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Automated document generation</li>
              <li>✔ Real-time bankruptcy tracking</li>
              <li>✔ System integrations</li>
              <li>✔ Workflow management tools</li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded-lg h-72 flex items-center justify-center">
            Platform Screenshot
          </div>
        </div>
      </section>

      {/* ABOUT (TAKE CONTROL) */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">
            Take Control of Bankruptcy Accounts
          </h3>

          <div className="grid md:grid-cols-4 gap-8 text-left">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Reduce Legal Risk</h4>
              <p className="text-gray-600 text-lg">
                Identify filings early and reduce legal exposure.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Ensure Compliance</h4>
              <p className="text-gray-600 text-lg">
                Automatically use correct court forms.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Protect Data</h4>
              <p className="text-gray-600 text-lg">
                Automatically redact sensitive information.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Improve Collections</h4>
              <p className="text-gray-600 text-lg">
                Track claims and payments efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">What is Bankruptcy Control?</h4>
              <p className="text-gray-600 text-sm">
                A platform for managing bankruptcy accounts and compliance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Who is it for?</h4>
              <p className="text-gray-600 text-sm">
                Creditors, servicers, attorneys, and debt buyers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Is it cloud-based?</h4>
              <p className="text-gray-600 text-sm">
                Yes, accessible via modern web browsers.
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
