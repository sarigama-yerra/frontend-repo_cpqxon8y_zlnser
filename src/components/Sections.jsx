import { Link } from 'react-router-dom'
import { CheckCircle, LineChart, Shield, Rocket, Wrench, Search, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      {/* Animated glow blobs */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-black leading-tight mb-4">
            Websites die leads opleveren.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-blue-100 text-lg md:text-xl mb-8">
            Website Koning bouwt snelle, betaalbare en conversiegerichte sites voor lokale MKB-ondernemers.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
            <Link to="/afspraak" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-amber-400 text-blue-900 font-bold hover:bg-amber-300 transition-colors">
              Plan een afspraak
            </Link>
            <Link to="/diensten" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 font-semibold">
              Bekijk diensten
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6 flex gap-6 text-blue-200 text-sm">
            <div className="flex items-center gap-2"><Shield size={18}/> SSL & veilig</div>
            <div className="flex items-center gap-2"><Rocket size={18}/> Snel live</div>
            <div className="flex items-center gap-2"><LineChart size={18}/> Conversiegericht</div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <motion.div
            className="aspect-[4/3] rounded-xl bg-blue-950/40 border border-blue-700/40 shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            <div className="h-full w-full grid place-items-center text-center p-8">
              <p className="text-blue-100">Strakke designs, duidelijke CTA's en meetbare resultaten. <span className="text-amber-300">Koningswaardig</span> online.</p>
            </div>
          </motion.div>

          {/* Shiny sweep effect */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </motion.div>
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
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <motion.div key={it.title} variants={fadeUp} whileHover={{ y: -4, scale: 1.01 }} className="rounded-xl border border-blue-800/70 bg-blue-900/50 p-6 transition-transform">
              <h3 className="text-xl font-semibold text-white mb-2">{it.title}</h3>
              <p className="text-blue-200/80 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </motion.div>
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
            <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileHover={{ y: -6 }} className="rounded-xl border border-blue-800 bg-blue-900/40 p-6">
              <Icon className="text-amber-300 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-blue-200/80 text-sm">{desc}</p>
            </motion.div>
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
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
          {list.map((t, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.01 }} className="rounded-xl border border-blue-800 bg-blue-900/40 p-6">
              <p className="text-blue-100 italic mb-4">“{t.quote}”</p>
              <div className="text-sm text-blue-300 flex items-center gap-2">
                <CheckCircle className="text-amber-300" size={16} />
                <span className="font-semibold text-white">{t.author}</span>
                <span>• {t.role}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-white/10 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-bold mb-4">Klaar voor meer leads?</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="text-blue-100 mb-6">Plan een vrijblijvende call van 30 minuten. We denken graag mee.</motion.p>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Link to="/afspraak" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-amber-400 text-blue-900 font-bold hover:bg-amber-300 transition-colors">
            <Calendar className="mr-2" size={18} /> Plan een afspraak
          </Link>
        </motion.div>
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
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -6 }} className="rounded-xl border border-blue-800 bg-blue-900/40 p-6">
              <Icon className="text-amber-300" />
              <h3 className="text-xl font-semibold text-white mt-2">{title}</h3>
              <p className="text-sm text-blue-200/80 mt-2">{desc}</p>
              <ul className="mt-3 space-y-1 text-sm">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2"><CheckCircle className="text-amber-300" size={16} /> {b}</li>
                ))}
              </ul>
              <Link to="/afspraak" className="inline-block mt-4 text-amber-300 hover:text-amber-200 font-semibold">Plan een call →</Link>
            </motion.div>
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
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`rounded-xl border ${p.popular ? 'border-amber-400' : 'border-blue-800'} bg-blue-900/40 p-6 relative`}>
              {p.popular && <span className="absolute -top-3 right-4 bg-amber-400 text-blue-900 text-xs font-black px-2 py-1 rounded">Populair</span>}
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <div className="text-3xl font-black text-amber-300 mt-2">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map(f => <li key={f} className="flex items-center gap-2"><CheckCircle className="text-amber-300" size={16} /> {f}</li>)}
              </ul>
              <Link to="/afspraak" className="inline-block mt-5 w-full text-center bg-amber-400 text-blue-900 font-bold py-2 rounded hover:bg-amber-300">Start nu</Link>
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Abonnementen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {subs.map((s) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-blue-800 bg-blue-900/40 p-6">
              <h3 className="text-lg font-semibold text-white">{s.name}</h3>
              <div className="text-xl font-bold text-amber-300 mt-1">{s.price}</div>
              <ul className="mt-3 space-y-1 text-sm">
                {s.features.map(f => <li key={f} className="flex items-center gap-2"><CheckCircle className="text-amber-300" size={16} /> {f}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 rounded-xl border border-blue-800 bg-blue-900/40 p-6">
          <h3 className="text-xl font-semibold text-white mb-2">Waarom deze prijzen?</h3>
          <p className="text-blue-200/80 text-sm">We leveren een compleet pakket: strategie, design, bouw en conversie-optimalisatie. Doel: meer aanvragen. Je investeert in een online kanaal dat rendeert.</p>
        </motion.div>
      </div>
    </div>
  )
}

export function AboutPage() {
  return (
    <div className="bg-blue-950 min-h-screen text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-white mb-6">Over Website Koning</motion.h1>
        <p className="text-blue-200/90 mb-6 max-w-3xl">Onze missie: lokale ondernemers online laten groeien met conversiegerichte websites. Snel live, transparante prijzen en blijvende optimalisatie.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-blue-800 bg-blue-900/40 p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Missie & visie</h3>
            <p className="text-sm text-blue-200/80">Wij geloven in simpele, effectieve websites die doen wat ze moeten: leads genereren. We werken pragmatisch en datagedreven.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-blue-800 bg-blue-900/40 p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Team</h3>
            <p className="text-sm text-blue-200/80">Klein, wendbaar team (2 personen) met ervaring in design, development en marketing. Direct contact en snelle iteraties.</p>
          </motion.div>
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
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-blue-800 bg-blue-900/40 p-6">
              <h3 className="text-xl font-semibold text-white">{c.title}</h3>
              <p className="text-sm text-blue-200/80">Resultaat: {c.result}</p>
              <p className="text-sm text-blue-200/80">Doorlooptijd: {c.duration}</p>
              <p className="text-sm text-blue-200/80">Aanpak: {c.approach}</p>
            </motion.div>
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
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-blue-800 bg-blue-900/40 p-6">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-blue-200/80 mt-2">{p.excerpt}</p>
            </motion.div>
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
          <motion.input whileFocus={{ scale: 1.01 }} name="name" placeholder="Naam" className="px-4 py-3 rounded border border-blue-800 bg-blue-900/40 text-white placeholder-blue-300" required />
          <motion.input whileFocus={{ scale: 1.01 }} type="email" name="email" placeholder="E-mail" className="px-4 py-3 rounded border border-blue-800 bg-blue-900/40 text-white placeholder-blue-300" required />
          <motion.input whileFocus={{ scale: 1.01 }} name="phone" placeholder="Telefoon" className="px-4 py-3 rounded border border-blue-800 bg-blue-900/40 text-white placeholder-blue-300" />
          <motion.textarea whileFocus={{ scale: 1.01 }} name="message" placeholder="Bericht" rows="5" className="md:col-span-2 px-4 py-3 rounded border border-blue-800 bg-blue-900/40 text-white placeholder-blue-300" />
          <label className="flex items-center gap-2 text-sm text-blue-200 md:col-span-2">
            <input type="checkbox" name="consent" defaultChecked className="accent-amber-400" /> Ik geef toestemming om benaderd te worden.
          </label>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="md:col-span-2 bg-amber-400 text-blue-900 font-bold py-3 rounded hover:bg-amber-300">Versturen</motion.button>
        </form>
      </div>
    </div>
  )
}

export function AppointmentPage({ onSubmit, busySlots = [] }) {
  return (
    <div className="bg-blue-950 min-h-screen text-blue-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-2">Plan een afspraak</h1>
        <p className="text-blue-200/90 mb-4">Beschikbaar: maandag t/m vrijdag, 10:00–17:00. Afspraken duren 30 minuten met 15 minuten buffer. Maximaal 2 gelijktijdige afspraken.</p>
        <p className="text-blue-300 text-sm mb-8">Tip: kies een starttijd op het halve uur (bijv. 10:00, 10:30, 11:00).</p>

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5">
          <div className="grid md:grid-cols-2 gap-5">
            <motion.input whileFocus={{ scale: 1.01 }} name="name" placeholder="Naam" className="px-4 py-3 rounded border border-blue-800 bg-blue-900/40 text-white placeholder-blue-300" required />
            <motion.input whileFocus={{ scale: 1.01 }} type="email" name="email" placeholder="E-mail" className="px-4 py-3 rounded border border-blue-800 bg-blue-900/40 text-white placeholder-blue-300" required />
          </div>
          <motion.input whileFocus={{ scale: 1.01 }} name="phone" placeholder="Telefoon (verplicht)" className="px-4 py-3 rounded border border-blue-800 bg-blue-900/40 text-white placeholder-blue-300" required />

          <div className="grid md:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm text-blue-300 mb-1">Datum</label>
              <motion.input whileFocus={{ scale: 1.01 }} type="date" name="date" className="w-full px-4 py-3 rounded border border-blue-800 bg-blue-900/40 text-white" required />
            </div>
            <div>
              <label className="block text-sm text-blue-300 mb-1">Starttijd</label>
              <motion.input whileFocus={{ scale: 1.01 }} type="time" name="time" min="10:00" max="17:00" step="1800" className="w-full px-4 py-3 rounded border border-blue-800 bg-blue-900/40 text-white" required />
            </div>
            <div>
              <label className="block text-sm text-blue-300 mb-1">Duur</label>
              <select name="duration" defaultValue="30" className="w-full px-4 py-3 rounded border border-blue-800 bg-blue-900/40 text-white" disabled>
                <option value="30">30 min</option>
              </select>
            </div>
          </div>

          <motion.textarea whileFocus={{ scale: 1.01 }} name="note" placeholder="Notities (optioneel)" rows="4" className="px-4 py-3 rounded border border-blue-800 bg-blue-900/40 text-white placeholder-blue-300" />

          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-amber-400 text-blue-900 font-bold py-3 rounded hover:bg-amber-300 flex items-center justify-center gap-2">
            <Calendar size={18} /> Bevestig afspraak
          </motion.button>

          {busySlots.length > 0 && (
            <div className="text-sm text-blue-300">
              <p className="font-semibold text-white mb-2">Niet-beschikbare tijden:</p>
              <ul className="list-disc ml-5 space-y-1">
                {busySlots.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
