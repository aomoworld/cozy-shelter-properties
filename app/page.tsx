import Image from "next/image";
import LeadForm from "./components/LeadForm";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
<div className="flex items-center h-14 sm:h-16 md:h-18">
  <Image
    src="/brand/logo.png"
    alt="Cozy Shelter Properties"
    width={640}
    height={200}
    className="h-full w-auto object-contain"
    priority
  />
</div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
            <a href="#services" className="hover:text-zinc-900">What we do</a>
            <a href="#projects" className="hover:text-zinc-900">Projects</a>
            <a href="#how" className="hover:text-zinc-900">Process</a>
            <a href="#form" className="hover:text-zinc-900">Contact</a>
            <a href="#faq" className="hover:text-zinc-900">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#projects"
              className="hidden sm:inline-flex rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              View projects
            </a>
            <a
              href="#form"
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Work with us
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div
          className="h-[460px] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2400&q=60')",
          }}
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0">
          <div className="mx-auto max-w-6xl px-6 h-full flex items-center">
            <div className="w-full max-w-3xl">
              <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15">
                Local real estate investment + renovations
              </p>

              <h1 className="mt-4 text-white text-4xl md:text-5xl font-bold leading-tight">
                We buy, renovate, and reimagine homes — then sell or hold as rentals.
              </h1>

              <p className="mt-4 text-white/90 text-lg">
                From fixer-uppers to finished homes. We also operate long-term and short-term rentals across the region.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#projects"
                  className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
                >
                  View our work
                </a>
                <a
                  href="#form"
                  className="rounded-md bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-500"
                >
                  Sell a property / Partner with us
                </a>
              </div>

              <p className="mt-4 text-xs text-white/70">
                Have a deal, a property to sell, or want to learn about our rentals? Reach out — we respond fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content wrapper */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        {/* Services */}
        <div id="services" className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">What we do</h2>
            <p className="mt-2 text-zinc-600">
              We’re a small, focused team building value through renovations and rentals.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            { title: "Acquire", body: "We buy properties as-is and evaluate opportunities quickly." },
            { title: "Renovate", body: "Thoughtful remodels with durable finishes and clean design." },
            { title: "Resell", body: "Turn-key homes listed for sale when the project calls for it." },
            { title: "Rentals", body: "Long-term and short-term rentals as part of our hold strategy." },
          ].map((c) => (
            <div key={c.title} className="rounded-xl bg-white p-6 shadow-sm border border-zinc-200">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div id="projects" className="mt-14">
          <h2 className="text-2xl font-semibold">Recent projects</h2>
          <p className="mt-2 text-zinc-600">A snapshot of the type of work we do.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Full interior refresh",
                desc: "Kitchen • Paint • Flooring • Lighting",
                img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=60",
              },
              {
                title: "Value-add renovation",
                desc: "Cosmetics + systems as needed",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=60",
              },
              {
                title: "Rental-ready upgrade",
                desc: "Durable finishes • Easy maintenance",
                img: "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=60",
              },
            ].map((p) => (
              <div key={p.title} className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${p.img}')` }} />
                <div className="p-5">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div id="how" className="mt-14">
          <h2 className="text-2xl font-semibold">Our process</h2>
          <p className="mt-2 text-zinc-600">Not complicated — just disciplined execution.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "Source & evaluate", body: "We analyze the property, scope, and the best exit: resale or rental." },
              { title: "Renovate with a plan", body: "We focus on the improvements that create the most value and durability." },
              { title: "Exit or operate", body: "Sell the finished home or hold it as a long-term / short-term rental." },
            ].map((c) => (
              <div key={c.title} className="rounded-xl bg-white p-6 shadow-sm border border-zinc-200">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact / Lead form */}
        <div className="mt-14 rounded-2xl bg-white border border-zinc-200 shadow-sm">
          <LeadForm />
        </div>

        {/* FAQ */}
        <div id="faq" className="mt-14">
          <h2 className="text-2xl font-semibold">FAQs</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              { q: "Do you only buy homes for cash?", a: "We buy properties in different ways depending on the situation. Reach out and we’ll talk through options." },
              { q: "What kinds of projects do you take on?", a: "Primarily value-add renovations: cosmetics, kitchens/baths, and needed systems work." },
              { q: "Do you have rentals available?", a: "We’re building our rental portfolio. Contact us and we’ll share what’s available or coming soon." },
              { q: "Where do you operate?", a: "Update this line with your primary market/region." },
            ].map((f) => (
              <div key={f.q} className="rounded-xl bg-white p-6 shadow-sm border border-zinc-200">
                <p className="font-medium">{f.q}</p>
                <p className="mt-2 text-sm text-zinc-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-500">
          © {new Date().getFullYear()} Cozy Shelter Properties. All rights reserved.
        </div>
      </footer>

      {/* Scroll-to-top button */}
      <ScrollToTop />
    </main>
  );
}
