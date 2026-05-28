import CTAButton from '../components/CTAButton'
import { HiLocationMarker, HiTruck, HiStar } from 'react-icons/hi'

const advantages = [
  { icon: '🏥', title: 'Servizi sanitari vicini', desc: 'L\'Ospedale Galliera e numerose farmacie sono raggiungibili a pochi minuti a piedi o in autobus.' },
  { icon: '🛒', title: 'Commercio e mercati', desc: 'Supermercati, negozi di prossimità e il Mercato Orientale a breve distanza per acquisti quotidiani autonomi.' },
  { icon: '🌳', title: 'Spazi verdi', desc: 'I Giardini Baltimora e altri parchi cittadini nelle immediate vicinanze per passeggiare e stare all\'aria aperta.' },
  { icon: '🚌', title: 'Trasporti pubblici', desc: 'Numerose linee AMT bus e la metropolitana di Genova facilmente accessibili da Piazza Palermo.' },
  { icon: '⛪', title: 'Vita culturale', desc: 'Teatri, musei, la Lanterna e il porto storico di Genova — la città è a portata di mano.' },
  { icon: '🍕', title: 'Ristorazione locale', desc: 'Bar, pasticcerie e ristoranti tipici genovesi nel quartiere per piacevoli uscite con i familiari.' },
]

const howToArrive = [
  {
    icon: '🚗',
    title: 'In auto',
    desc: 'Dall\'autostrada A7/A10 uscita Genova Centro. Seguire le indicazioni per il centro città. Parcheggio disponibile in Piazza Palermo e nelle vie limitrofe.',
  },
  {
    icon: '🚂',
    title: 'In treno',
    desc: 'Dalla Stazione Principe o Brignole, prendere l\'autobus AMT linea 17 o 18 direzione Piazza Palermo (circa 10 minuti).',
  },
  {
    icon: '🚌',
    title: 'In autobus',
    desc: 'Linee AMT 17, 18, 37 con fermata direttamente in Piazza Palermo. Consultare il sito AMT Genova per orari aggiornati.',
  },
  {
    icon: '✈️',
    title: 'In aereo',
    desc: 'Dall\'Aeroporto Cristoforo Colombo di Genova, prendere il Volabus fino alla Stazione Brignole, poi autobus per Piazza Palermo (30-40 min totali).',
  },
]

export default function Location() {
  return (
    <>
      {/* HERO INTERNO */}
      <section
        className="pt-28 md:pt-36 px-4 sm:px-6"
        style={{ background: 'linear-gradient(135deg, #3A7CA5 0%, #5A9CC5 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center py-16">
          <h1 className="font-serif text-4xl sm:text-5xl text-white mb-4">Dove Siamo</h1>
          <p className="text-white/80 font-sans text-lg leading-relaxed">
            Nel cuore di Genova, a Piazza Palermo — una posizione privilegiata che unisce tranquillità residenziale e vivacità cittadina.
          </p>
        </div>
      </section>

      {/* INDIRIZZO + MAPPA */}
      <section className="py-20 px-4 sm:px-6 bg-warm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Info indirizzo */}
            <div>
              <span className="text-gold font-sans text-sm font-semibold uppercase tracking-wider">La nostra sede</span>
              <h2 className="section-title mt-2 mb-6">Piazza Palermo 9/5, Genova</h2>

              <div className="space-y-4 font-sans text-anthracite-light leading-relaxed mb-8">
                <p>
                  Casa Dolce Brezza si trova in Piazza Palermo, una delle piazze più vivaci e ben collegate del capoluogo ligure.
                  La posizione centrale garantisce ai nostri ospiti e alle loro famiglie la massima accessibilità.
                </p>
                <p>
                  Il quartiere è tranquillo ma mai isolato: negozi, servizi, verde pubblico e trasporti sono a pochi passi,
                  favorendo l'autonomia quotidiana degli ospiti.
                </p>
              </div>

              <div className="card space-y-3">
                <div className="flex items-center gap-3">
                  <HiLocationMarker className="text-ocean shrink-0" size={20} />
                  <div>
                    <div className="font-sans font-semibold text-anthracite">Indirizzo</div>
                    <div className="text-anthracite-light text-sm">Piazza Palermo 9/5, 16129 Genova GE</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-ocean shrink-0 text-lg">📞</span>
                  <div>
                    <div className="font-sans font-semibold text-anthracite">Telefono</div>
                    <a href="tel:+393278065666" className="text-anthracite-light text-sm hover:text-ocean transition-colors">+39 327 806 5666</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-ocean shrink-0 text-lg">✉️</span>
                  <div>
                    <div className="font-sans font-semibold text-anthracite">Email</div>
                    <a href="mailto:casadolcebrezza@gmail.com" className="text-anthracite-light text-sm hover:text-ocean transition-colors">casadolcebrezza@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-ocean shrink-0 text-lg">🕘</span>
                  <div>
                    <div className="font-sans font-semibold text-anthracite">Orario ufficio</div>
                    <div className="text-anthracite-light text-sm">Lun–Ven 9:00–17:00 | Sab 9:00–13:00</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <CTAButton variant="primary" className="text-sm">
                  Richiedi una visita
                </CTAButton>
              </div>
            </div>

            {/* Mappa embedded OpenStreetMap */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 h-80 lg:h-[450px]">
              <iframe
                title="Posizione Casa Dolce Brezza"
                width="100%"
                height="400"
                src="https://www.openstreetmap.org/export/embed.html?bbox=8.9484%2C44.3953%2C8.9584%2C44.4053&layer=mapnik&marker=44.4003032%2C8.9534731"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* VANTAGGI POSIZIONE */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-sans text-sm font-semibold uppercase tracking-wider">Perché questa posizione</span>
            <h2 className="section-title mt-2">Una posizione privilegiata</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Essere nel cuore di Genova non è un dettaglio: è parte integrante della qualità della vita che offriamo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map(({ icon, title, desc }) => (
              <div key={title} className="card flex gap-4">
                <div className="text-3xl shrink-0">{icon}</div>
                <div>
                  <h3 className="font-serif text-base text-anthracite mb-1">{title}</h3>
                  <p className="text-anthracite-light text-sm font-sans leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COME ARRIVARE */}
      <section className="py-20 px-4 sm:px-6 bg-warm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-sans text-sm font-semibold uppercase tracking-wider">Accessibilità</span>
            <h2 className="section-title mt-2">Come raggiungerci</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {howToArrive.map(({ icon, title, desc }) => (
              <div key={title} className="card flex gap-4 items-start">
                <div className="text-3xl shrink-0">{icon}</div>
                <div>
                  <h3 className="font-serif text-lg text-anthracite mb-2">{title}</h3>
                  <p className="text-anthracite-light text-sm font-sans leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4 sm:px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #3A7CA5 0%, #1F5F85 100%)' }}
      >
        <h2 className="font-serif text-3xl text-white mb-4">Vieni a trovarci</h2>
        <p className="text-white/80 font-sans mb-8 max-w-xl mx-auto">
          Organizziamo visite guidate su appuntamento, dal lunedì al sabato mattina. Contattaci per fissare il tuo orario preferito.
        </p>
        <CTAButton variant="gold" className="text-base py-4 px-10">
          Prenota una visita
        </CTAButton>
      </section>
    </>
  )
}
