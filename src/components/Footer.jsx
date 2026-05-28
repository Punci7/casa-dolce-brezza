import { Link } from 'react-router-dom'
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/chi-siamo', label: 'Chi Siamo' },
  { to: '/servizi', label: 'Servizi' },
  { to: '/location', label: 'Location' },
  { to: '/galleria', label: 'Galleria' },
  { to: '/contatti', label: 'Contatti' },
]

export default function Footer() {
  return (
    <footer className="bg-anthracite text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/Logo_sfondo_trasparente.png"
                alt="Casa Dolce Brezza"
                className="h-32 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              Una comunità calda e accogliente per anziani autosufficienti, nel cuore di Genova.
              Qualità della vita, sicurezza e serenità ogni giorno.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg text-gold mb-4">Pagine</h3>
            <ul className="space-y-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-white text-sm font-sans transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-serif text-lg text-gold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm font-sans">
                <HiLocationMarker className="text-gold mt-0.5 shrink-0" size={18} />
                <span>Piazza Palermo 9/5, 16129 Genova GE</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm font-sans">
                <HiPhone className="text-gold shrink-0" size={18} />
                <a href="tel:+393278065666" className="hover:text-white transition-colors">
                  +39 327 806 5666
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm font-sans">
                <HiMail className="text-gold shrink-0" size={18} />
                <a href="mailto:casadolcebrezza@gmail.com" className="hover:text-white transition-colors">
                  casadolcebrezza@gmail.com
                </a>
              </li>
            </ul>

            <Link
              to="/contatti"
              className="mt-6 inline-block btn-gold text-sm py-2 px-6"
            >
              Richiedi informazioni
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs font-sans">
            &copy; {new Date().getFullYear()} Casa Dolce Brezza. Tutti i diritti riservati.
          </p>
          <p className="text-gray-600 text-xs font-sans">
            Comunità Alloggio per Anziani Autosufficienti · Genova
          </p>
        </div>
      </div>
    </footer>
  )
}
