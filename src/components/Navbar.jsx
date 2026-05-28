import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  { to: '/', label: 'Home' },
  { to: '/chi-siamo', label: 'Chi Siamo' },
  { to: '/servizi', label: 'Servizi' },
  { to: '/location', label: 'Location' },
  { to: '/galleria', label: 'Galleria' },
  { to: '/contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-28 md:h-36">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/Logo_sfondo_trasparente.png"
              alt="Casa Dolce Brezza"
              className="h-24 md:h-32 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-sans text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-ocean bg-ocean/10'
                      : 'text-anthracite hover:text-ocean hover:bg-ocean/5'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contatti"
              className="ml-3 btn-primary text-sm py-2 px-5"
            >
              Richiedi informazioni
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-anthracite hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          >
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-screen border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <nav className="bg-white px-4 pb-4 pt-2 flex flex-col gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg font-sans text-base font-medium transition-colors ${
                  isActive
                    ? 'text-ocean bg-ocean/10'
                    : 'text-anthracite hover:text-ocean hover:bg-ocean/5'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contatti"
            className="mt-2 btn-primary text-center"
          >
            Richiedi informazioni
          </Link>
        </nav>
      </div>
    </header>
  )
}
