import { Link } from 'react-router-dom'

export default function CTAButton({ to = '/contatti', children = 'Richiedi informazioni', variant = 'primary', className = '' }) {
  const base = 'inline-block font-sans font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-center'
  const variants = {
    primary: 'bg-ocean text-white hover:bg-ocean-dark',
    gold: 'bg-gold text-white hover:bg-gold-dark',
    outline: 'border-2 border-ocean text-ocean hover:bg-ocean hover:text-white',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-ocean',
  }

  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
