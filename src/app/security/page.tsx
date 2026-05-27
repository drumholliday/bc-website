export default function SecurityPage() {
  return (
    <main className="bg-[#f5f5f4] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050816] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_45%)] opacity-70" />

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 pt-10 pb-20">
          {/* Breadcrumbs */}
          <div className="mb-16 flex items-center gap-4 text-base md:text-lg text-zinc-400">
            <a href="/" className="hover:text-white transition">
              Home
            </a>

            <span>/</span>

            <a href="/#platform" className="hover:text-white transition">
              Platform
            </a>

            <span>/</span>

            <span className="text-white font-medium">Security</span>
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
            {/* LEFT */}
            <div>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] mb-8 max-w-3xl">
                Enterprise Security.
                <br />
                Built Into Everything We Do.
              </h1>

              <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-2xl mb-10">
                Bankruptcy Control is built on a security-first architecture to
                protect your data, ensure compliance, and support your
                operational resilience.
              </p>

              <a
                href="/#contact"
                className="inline-flex items-center bg-white text-black px-7 py-4 rounded-2xl text-lg font-medium hover:bg-zinc-200 transition"
              >
                Contact Us →
              </a>
            </div>

            {/* RIGHT */}
            <div className="rounded-[34px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <img
                src="/images/platform/security-lock.jpg"
                alt="Security"
                className="w-full h-[620px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY GRID */}
      <section className="bg-[#0A0E1A] border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-20">
          <p className="text-yellow-400 uppercase tracking-[0.16em] text-sm font-medium mb-10">
            Security at Every Layer
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Data Protection",
                text: "Encryption in transit and at rest with industry-leading security standards.",
              },
              {
                title: "Access Control",
                text: "Granular role-based access ensures the right people have the right access.",
              },
              {
                title: "Compliance",
                text: "Designed to meet regulatory requirements including SOC 2, GDPR, and more.",
              },
              {
                title: "Infrastructure",
                text: "Secure, redundant infrastructure with continuous monitoring and threat detection.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:-translate-y-2 hover:bg-white/[0.07] transition-all duration-700"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 mb-8" />

                <h3 className="text-2xl font-semibold mb-5">{item.title}</h3>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED */}
      <section className="bg-[#f5f5f4] text-black">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
            <div>
              <p className="text-yellow-700 uppercase tracking-[0.16em] text-sm font-medium mb-6">
                Trusted. Compliant. Reliable.
              </p>

              <h2 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
                Security You Can Depend On.
              </h2>

              <p className="text-xl text-zinc-600 leading-relaxed mb-10">
                We maintain the highest standards of security and compliance so
                you can operate with confidence.
              </p>

              <div className="space-y-4 text-lg text-zinc-700">
                <div>✓ SOC 2 Type II Certified</div>
                <div>✓ Regular Penetration Testing</div>
                <div>✓ 24/7 Security Monitoring</div>
                <div>✓ Disaster Recovery & Backups</div>
              </div>
            </div>

            <div className="rounded-[34px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.20)]">
              <img
                src="/images/platform/security-office.jpg"
                alt="Security Office"
                className="w-full h-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
