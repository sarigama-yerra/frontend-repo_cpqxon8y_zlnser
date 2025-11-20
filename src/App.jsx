import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Hero, WhatWeDo, Benefits, Testimonials, CTA, ServicesPage, PricesPage, AboutPage, PortfolioPage, BlogPage, ContactPage, AppointmentPage } from './components/Sections'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="min-h-[60vh]"
    >
      {children}
    </motion.div>
  )
}

function Home() {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetch(`${API_BASE}/api/testimonials`).then(r => r.json()).then(setTestimonials).catch(() => {})
  }, [])

  return (
    <div>
      <Hero />
      <WhatWeDo />
      <Benefits />
      <Testimonials items={testimonials} />
      <CTA />
    </div>
  )
}

function Blog() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`${API_BASE}/api/posts`).then(r => r.json()).then(setPosts).catch(() => {})
  }, [])
  return <BlogPage posts={posts} />
}

function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone') || undefined,
      message: form.get('message') || undefined,
      consent: !!form.get('consent'),
      source: 'website',
    }
    setStatus('Verzenden...')
    try {
      const res = await fetch(`${API_BASE}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed')
      await res.json()
      setStatus('✅ Bedankt! We nemen snel contact op.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('❌ Er ging iets mis. Probeer opnieuw.')
    }
  }

  return (
    <>
      {status && (
        <div className="bg-blue-900 text-white text-center py-2">{status}</div>
      )}
      <ContactPage onSubmit={handleSubmit} />
    </>
  )
}

function Appointment() {
  const [status, setStatus] = useState(null)
  const [busy, setBusy] = useState([])

  useEffect(() => {
    fetch(`${API_BASE}/api/appointments`).then(r => r.json()).then((list) => {
      const items = list.map(a => {
        const start = new Date(a.start)
        const end = new Date(a.end)
        return `${start.toLocaleString()} - ${end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
      })
      setBusy(items)
    }).catch(() => {})
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    // Build ISO datetimes from date + time + duration
    const date = form.get('date') // YYYY-MM-DD
    const time = form.get('time') // HH:MM
    const durationMin = parseInt(form.get('duration') || '30', 10)

    // Assume local time; convert to ISO string
    const startLocal = new Date(`${date}T${time}`)
    const endLocal = new Date(startLocal.getTime() + durationMin * 60000)

    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone') || undefined,
      start: startLocal.toISOString(),
      end: endLocal.toISOString(),
      note: form.get('note') || undefined,
      source: 'website'
    }

    setStatus('Plaatst afspraak...')
    try {
      const res = await fetch(`${API_BASE}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (res.status === 409) {
        setStatus('❌ Dit tijdslot is al bezet. Kies een andere tijd.')
        return
      }

      if (!res.ok) throw new Error('Failed')
      await res.json()
      setStatus('✅ Afspraak bevestigd! Je ontvangt een bevestiging per e-mail.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('❌ Er ging iets mis. Probeer het opnieuw.')
    }
  }

  return (
    <>
      {status && <div className="bg-blue-900 text-white text-center py-2">{status}</div>}
      <AppointmentPage onSubmit={handleSubmit} busySlots={busy} />
    </>
  )}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-blue-950 text-blue-100">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/over" element={<Page><AboutPage /></Page>} />
          <Route path="/diensten" element={<Page><ServicesPage /></Page>} />
          <Route path="/prijzen" element={<Page><PricesPage /></Page>} />
          <Route path="/portfolio" element={<Page><PortfolioPage /></Page>} />
          <Route path="/blog" element={<Page><Blog /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="/afspraak" element={<Page><Appointment /></Page>} />
        </Routes>
      </AnimatePresence>

      {/* Floating back-to-top button */}
      <BackToTop />

      <Footer />
    </div>
  )
}

function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-amber-400 text-blue-900 font-bold px-4 py-3 shadow-lg hover:bg-amber-300"
          aria-label="Terug naar boven"
        >
          ↑ Boven
        </motion.button>
      )}
    </AnimatePresence>
  )
}
