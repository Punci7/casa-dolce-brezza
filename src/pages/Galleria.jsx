import CTAButton from '../components/CTAButton'

const placeholders = [
  { label: 'Sala comune', icon: '🛋️', aspect: 'tall' },
  { label: 'Camera ospite', icon: '🛏️', aspect: 'square' },
  { label: 'Sala da pranzo', icon: '🍽️', aspect: 'square' },
  { label: 'Attività di gruppo', icon: '🎨', aspect: 'wide' },
  { label: 'Il quartiere', icon: '🏙️', aspect: 'square' },
  { label: 'Escursione in città', icon: '🚌', aspect: 'wide' },
]

export default function Galleria() {
  return (
    <>
      {/* HERO INTERNO */}
      <section
        className="pt-28 md:pt-36 px-4 sm:px-6"
        style={{ background: 'linear-gradient(135deg, #3A7CA5 0%, #5A9CC5 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center py-16">
          <h1 className="font-serif text-4xl sm:text-5xl text-white mb-4">Galleria</h1>
          <p className="text-white/80 font-sans text-lg leading-relaxed">
            Scopri gli spazi e la vita quotidiana di Casa Dolce Brezza attraverso le nostre immagini.
          </p>
        </div>
      </section>

      {/* NOTICE */}
      <section className="py-10 px-4 sm:px-6 bg-gold/10 border-b border-gold/20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-anthracite text-sm">
            <span className="font-semibold">📸 Galleria in aggiornamento.</span>{' '}
            Le foto dei nostri spazi saranno disponibili a breve. Nel frattempo, ti invitiamo a visitarci di persona!
          </p>
        </div>
      </section>

      {/* GRIGLIA PLACEHOLDER */}
      <section className="py-20 px-4 sm:px-6 bg-warm">
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {placeholders.map(({ label, icon }, i) => (
              <div
                key={i}
                className={`break-inside-avoid rounded-2xl bg-ocean/10 border border-ocean/20 flex flex-col items-center justify-center text-center p-8 ${
                  i % 3 === 0 ? 'h-64' : i % 3 === 1 ? 'h-48' : 'h-56'
                }`}
              >
                <div className="text-5xl mb-3">{icon}</div>
                <p className="text-ocean font-serif text-base">{label}</p>
                <p className="text-anthracite-light text-xs font-sans mt-1">Foto in arrivo</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONI TEMATICHE */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">Le nostre categorie</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              La galleria sarà organizzata in sezioni tematiche per mostrare ogni aspetto della vita a Casa Dolce Brezza.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏠', title: 'Gli spazi', desc: 'Sale comuni e tutti gli ambienti interni della struttura.' },
              { icon: '🎉', title: 'Momenti di vita', desc: 'Attività, laboratori, feste e la quotidianità dei nostri ospiti.' },
              { icon: '🏙️', title: 'Il quartiere', desc: 'Piazza Palermo, i negozi, i parchi e la vita di vicinato a pochi passi da noi.' },
              { icon: '🌆', title: 'Genova', desc: 'Le escursioni in città e la bellezza del capoluogo ligure che ci ospita.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card text-center">
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="font-serif text-xl text-anthracite mb-2">{title}</h3>
                <p className="text-anthracite-light text-sm font-sans leading-relaxed">{desc}</p>
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
        <h2 className="font-serif text-3xl text-white mb-4">
          Preferisci vederla dal vivo?
        </h2>
        <p className="text-white/80 font-sans mb-8 max-w-xl mx-auto">
          Le foto non rendono giustizia all'atmosfera di Casa Dolce Brezza. Vieni a trovarci e scoprila di persona.
        </p>
        <CTAButton variant="gold" className="text-base py-4 px-10">
          Prenota una visita guidata
        </CTAButton>
      </section>
    </>
  )
}
