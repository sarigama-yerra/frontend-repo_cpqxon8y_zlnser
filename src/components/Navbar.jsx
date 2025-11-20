import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-blue-700' : 'text-blue-100 hover:text-white hover:bg-blue-700/60'}`}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-blue-900/70 bg-blue-900/90 border-b border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-black text-white">Website <span className="text-amber-400">Koning</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Home')}
            {navItem('/over', 'Over ons')}
            {navItem('/diensten', 'Diensten')}
            {navItem('/prijzen', 'Prijzen')}
            {navItem('/portfolio', 'Portfolio')}
            {navItem('/blog', 'Blog')}
            {navItem('/contact', 'Contact')}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="p-2 text-blue-100 hover:text-white">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-blue-800">
          <div className="px-4 py-3 flex flex-col gap-1 bg-blue-900/95">
            {navItem('/', 'Home')}
            {navItem('/over', 'Over ons')}
            {navItem('/diensten', 'Diensten')}
            {navItem('/prijzen', 'Prijzen')}
            {navItem('/portfolio', 'Portfolio')}
            {navItem('/blog', 'Blog')}
            {navItem('/contact', 'Contact')}
          </div>
        </div>
      )}
    </header>
  )
}
