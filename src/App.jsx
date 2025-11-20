import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Hero, WhatWeDo, Benefits, Testimonials, CTA, ServicesPage, PricesPage, AboutPage, PortfolioPage, BlogPage, ContactPage } from './components/Sections'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

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
      const data = await res.json()
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

export default function App() {
  return (
    <div className="min-h-screen bg-blue-950 text-blue-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/over" element={<AboutPage />} />
        <Route path="/diensten" element={<ServicesPage />} />
        <Route path="/prijzen" element={<PricesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}
