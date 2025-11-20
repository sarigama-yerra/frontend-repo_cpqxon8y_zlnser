import { Link } from 'react-router-dom'
import { CheckCircle, LineChart, Shield, Rocket, Wrench, Search } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.6),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            Websites die leads opleveren.
          </h1>
          <p className="text-blue-100 text-lg md:text-xl mb-8">
            Website Koning bouwt snelle, betaalbare en conversiegerichte sites voor lokale MKB-ondernemers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-amber-400 text-blue-900 font-bold hover:bg-amber-300 transition-colors">Plan een afspraak</a>
            <Link to="/diensten" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 font-semibold">
              Bekijk diensten
            </Link>
          </div>
          <div className="mt-6 flex gap-6 text-blue-200 text-sm">
            <div className="flex items-center gap-2"><Shield size={18}/> SSL & veilig</div>
            <div className="flex items-center gap-2"><Rocket size={18}/> Snel live</div>
            <div className="flex items-center gap-2"><LineChart size={18}/> Conversiegericht</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-blue-950/40 border border-blue-700/40 shadow-2xl">
            <div className="h-full w-full grid place-items-center text-center p-8">
              <p className="text-blue-100">Strakke designs, duidelijke CTA's en meetbare resultaten. <span className="text-amber-300">Koningswaardig</span> online.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhatWeDo() {
  const items = [
    { title: 'Webdesign & bouwen', desc: 'Van strategie tot livegang: complete websites op maat.' },
    { title: 'Onderhoud & support', desc: 'Betaalbare abonnementen zodat je site snel en veilig blijft.' },
    { title: 'Conversie & SEO', desc: 'A/B-testen, on-page SEO en optimalisaties die leads verhogen.' },
  ]
  return (
    <section className="py-16 bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6">Wat doen wij</h2>
        <p className="text-blue-200/90 mb-8 max-w-2xl">Wij vertalen jouw bedrijfsdoelen naar een website die werkt. Focus op snelheid, vindbaarheid en conversie.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-blue-800 bg-blue-900/50 p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{it.title}</h3>
              <p className="text-blue-200/80 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Benefits() {
  const benefits = [
    { title: 'Lead-genererend', desc: 'Duidelijke CTA’s, snelle laadtijden en bewezen patterns.', icon: Rocket },
    { title: 'Betaalbaar onderhoud', desc: 'Pakketten vanaf €50 p/m – wij houden alles up-to-date.', icon: Wrench },
    { title: 'Conversiegericht', desc: 'We meten, testen en verbeteren continu voor meer resultaat.', icon: LineChart },
  ]
  return (
    <section className="py-16 bg-blue-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6">Waarom Website Koning</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-blue-800 bg-blue-900/40 p-6">
              <Icon className="text-amber-300 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-blue-200/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials({ items = [] }) {
  const list = items.length ? items : [
    { author: 'Bakkerij De Graaf', role: 'Lokale bakker', quote: 'Binnen 2 weken live en direct meer aanvragen.', rating: 5 },
    { author: 'FixIt Service', role: 'Loodgieter', quote: 'Heldere prijzen en snelle service. Aanrader!', rating: 5 },
  ]
  return (
    <section className="py-16 bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Wat klanten zeggen</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {list.map((t, i) => (
            <div key={i} className="rounded-xl border border-blue-800 bg-blue-900/40 p-6">
              <p className="text-blue-100 italic mb-4">“{t.quote}”</p>
              <div className="text-sm text-blue-300 flex items-center gap-2">
                <CheckCircle className="text-amber-300" size={16} />
                <span className="font-semibold text-white">{t.author}</span>
                <span>• {t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Klaar voor meer leads?</h2>
        <p className="text-blue-100 mb-6">Plan een vrijblijvende call van 15 minuten. We denken graag mee.</p>
        <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-amber-400 text-blue-900 font-bold hover:bg-amber-300 transition-colors">Plan een afspraak</a>
      </div>
    </section>
  )
}

export function ServicesPage() {
  const services = [
    { title: 'Webdesign & bouwen', desc: 'Conversiegericht webdesign met focus op snelheid en SEO.', bullets: ['Mobiel eerst', 'Snelheidsscore 90+', 'Duidelijke CTA’s'], icon: Rocket },
    { title: 'Onderhoud / abonnement', desc: 'Updates, back-ups, monitoring en support voor vaste prijs.', bullets: ['Maandelijks rapport', 'Veiligheidsupdates', 'Content updates'], icon: Wrench },
    { title: 'Conversie-optimalisatie', desc: 'A/B-testen, heatmaps en funnel-analyses.', bullets: ['Hypothesedriven', 'Meetbaar', 'Snelle iteraties'], icon: LineChart },
    { title: 'SEO / on-page', desc: 'Technische SEO, contentstructuur en metadata.', bullets: ['Zoekwoordonderzoek', 'Structured data', 'Core Web Vitals'], icon: Search },
    { title: 'Add-ons / upsells', desc: 'Nieuwsbrief, landingspagina’s, content-updates.', bullets: ['E-mail flows', 'Campagne landings', 'Copywriting'], icon: CheckCircle },
  ]
  return (
    <div className="bg-blue-950 min-h-screen text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-6">Diensten</h1>
        <p className="text-blue-200/90 mb-10 max-w-2xl">Elke dienst is gericht op resultaat: meer aanvragen en groei. Transparant, betaalbaar en effectief.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ title, desc, bullets, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-blue-800 bg-blue-900/40 p-6">
              <Icon className="text-amber-300" />
              <h3 className="text-xl font-semibold text-white mt-2">{title}</h3>
              <p className="text-sm text-blue-200/80 mt-2">{desc}</p>
              <ul className="mt-3 space-y-1 text-sm">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2"><CheckCircle className="text-amber-300" size={16} /> {b}</li>
                ))}
              </ul>
              <a href="/contact" className="inline-block mt-4 text-amber-300 hover:text-amber-200 font-semibold">Plan een call →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function PricesPage() {
  const packages = [
    { name: 'Basis Website', price: '€ 900', features: ['Tot 5 pagina’s', 'Responsive design', 'Basis SEO', 'Contactformulier'], popular: false },
    { name: 'Business Website', price: '€ 2.000', features: ['Tot 10 pagina’s', 'Conversiegericht', 'Blog & cases', 'SEO optimalisatie'], popular: true },
    { name: 'Premium / Groei', price: '€ 2.800+', features: ['Custom modules', 'A/B-testen', 'Content begeleiding', 'Performance audit'], popular: false },
  ]

  const subs = [
    { name: 'Basis onderhoud', price: '€ 50 / maand', features: ['Beveiligingsupdates', 'Back-ups', 'Kleine fixes'] },
    { name: 'Standaard', price: '€ 100 / maand', features: ['Alles in Basis', 'Content-updates', 'Maandelijks rapport'] },
    { name: 'Premium retainer', price: '€ 150 / maand', features: ['Prioriteit support', 'A/B-testen', 'SEO-advies'] },
  ]

  return (
    <div className="bg-blue-950 min-h-screen text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-6">Prijzen & pakketten</h1>
        <p className="text-blue-200/90 mb-10 max-w-3xl">Investeren in een website is investeren in leadgeneratie. Kies een pakket dat past bij je groeifase. Abonnementen houden je site veilig en snel.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className={`rounded-xl border ${p.popular ? 'border-amber-400' : 'border-blue-800'} bg-blue-900/40 p-6 relative`}>
              {p.popular && <span className="absolute -top-3 right-4 bg-amber-400 text-blue-900 text-xs font-black px-2 py-1 rounded">Populair</span>}
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <div className="text-3xl font-black text-amber-300 mt-2">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map(f => <li key={f} className="flex items-center gap-2"><CheckCircle className="text-amber-300" size={16} /> {f}</li>)}
              </ul>
              <a href="/contact" className="inline-block mt-5 w-full text-center bg-amber-400 text-blue-900 font-bold py-2 rounded hover:bg-amber-300">Start nu</a>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Abonnementen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {subs.map((s) => (
            <div key={s.name} className="rounded-xl border border-blue-800 bg-blue-900/40 p-6">
              <h3 className="text-lg font-semibold text-white">{s.name}</h3>
              <div className="text-xl font-bold text-amber-300 mt-1">{s.price}</div>
              <ul className="mt-3 space-y-1 text-sm">
                {s.features.map(f => <li key={f} className="flex items-center gap-2"><CheckCircle className="text-amber-300" size={16} /> {f}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-blue-800 bg-blue-900/40 p-6">
          <h3 className="text-xl font-semibold text-white mb-2">Waarom deze prijzen?</h3>
          <p className="text-blue-200/80 text-sm">We leveren een compleet pakket: strategie, design, bouw en conversie-optimalisatie. Doel: meer aanvragen. Je investeert in een online kanaal dat rendeert.</p>
        </div>
      </div>
    </div>
  )
}

export function AboutPage() {
  return (
    <div className="bg-blue-950 min-h-screen text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-6">Over Website Koning</h1>
        <p className="text-blue-200/90 mb-6 max-w-3xl">Onze missie: lokale ondernemers online laten groeien met conversiegerichte websites. Snel live, transparante prijzen en blijvende optimalisatie.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-blue-800 bg-blue-900/40 p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Missie & visie</h3>
            <p className="text-sm text-blue-200/80">Wij geloven in simpele, effectieve websites die doen wat ze moeten: leads genereren. We werken pragmatisch en datagedreven.</p>
          </div>
          <div className="rounded-xl border border-blue-800 bg-blue-900/40 p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Team</h3>
            <p className="text-sm text-blue-200/80">Klein, wendbaar team (2 personen) met ervaring in design, development en marketing. Direct contact en snelle iteraties.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PortfolioPage() {
  const cases = [
    { title: 'Lokale Bakker', result: '30% meer bestellingen', duration: '2 weken', approach: 'SEO + conversie' },
    { title: 'Installatiebedrijf', result: '2x meer aanvragen', duration: '3 weken', approach: 'Landingspagina’s + A/B' },
  ]
  return (
    <div className="bg-blue-950 min-h-screen text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-6">Portfolio / Cases</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="rounded-xl border border-blue-800 bg-blue-900/40 p-6">
              <h3 className="text-xl font-semibold text-white">{c.title}</h3>
              <p className="text-sm text-blue-200/80">Resultaat: {c.result}</p>
              <p className="text-sm text-blue-200/80">Doorlooptijd: {c.duration}</p>
              <p className="text-sm text-blue-200/80">Aanpak: {c.approach}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function BlogPage({ posts = [] }) {
  return (
    <div className="bg-blue-950 min-h-screen text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-6">Onze inzichten</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div key={p.id} className="rounded-xl border border-blue-800 bg-blue-900/40 p-6">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-blue-200/80 mt-2">{p.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ContactPage({ onSubmit }) {
  return (
    <div className="bg-blue-950 min-h-screen text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-6">Contact</h1>
        <p className="text-blue-200/90 mb-6 max-w-2xl">Plan een call van 15 minuten of laat je gegevens achter. We reageren meestal binnen 24 uur.</p>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
          <input name="name" placeholder="Naam" className="px-4 py-3 rounded border border-blue-800 bg-blue-900/40 text-white placeholder-blue-300" required />
          <input type="email" name="email" placeholder="E-mail" className="px-4 py-3 rounded border border-blue-800 bg-blue-900/40 text-white placeholder-blue-300" required />
          <input name="phone" placeholder="Telefoon" className="px-4 py-3 rounded border border-blue-800 bg-blue-900/40 text-white placeholder-blue-300" />
          <textarea name="message" placeholder="Bericht" rows="5" className="md:col-span-2 px-4 py-3 rounded border border-blue-800 bg-blue-900/40 text-white placeholder-blue-300" />
          <label className="flex items-center gap-2 text-sm text-blue-200 md:col-span-2">
            <input type="checkbox" name="consent" defaultChecked className="accent-amber-400" /> Ik geef toestemming om benaderd te worden.
          </label>
          <button className="md:col-span-2 bg-amber-400 text-blue-900 font-bold py-3 rounded hover:bg-amber-300">Versturen</button>
        </form>
      </div>
    </div>
  )
}
