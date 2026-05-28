import CTAButton from '../components/CTAButton'

const team = [
  {
    name: 'Dott.ssa Elena Rossi',
    role: 'Direttrice e Fondatrice',
    bio: 'Elena ha fondato Casa Dolce Brezza con la visione di creare una vera comunità, non solo una struttura, mettendo al centro la persona e la qualità della vita.',
    initials: 'ER',
  },
  {
    name: 'Marco Ferretti',
    role: 'Responsabile Assistenza',
    bio: 'Operatore socio-sanitario specializzato in geriatria, coordina un team di professionisti dedicati al benessere quotidiano degli ospiti.',
    initials: 'MF',
  },
  {
    name: 'Lucia Bianchi',
    role: 'Coordinatrice Attività',
    bio: 'Animatrice con formazione in psicologia dell\'invecchiamento, progetta ogni settimana un programma ricco di stimoli culturali e sociali.',
    initials: 'LB',
  },
  {
    name: 'Chef Antonio Marini',
    role: 'Responsabile Ristorazione',
    bio: 'Cuoco genovese di tradizione, propone ogni giorno una cucina mediterranea genuina, con materie prime locali e menu personalizzati.',
    initials: 'AM',
  },
]

const spaces = [
  { icon: '🎨', title: 'Sala attività', desc: 'Ampio spazio polifunzionale per laboratori creativi, proiezioni, giochi e incontri di gruppo.' },
  { icon: '🍽️', title: 'Sala da pranzo', desc: 'Ambiente luminoso e accogliente dove i pasti diventano un momento di convivialità.' },
  { icon: '🏙️', title: 'Il quartiere', desc: 'Situati in Piazza Palermo, i nostri ospiti hanno a pochi passi negozi, parchi, farmacie e trasporti pubblici per vivere Genova ogni giorno.' },
]

export default function ChiSiamo() {
  return (
    <>
      {/* HERO INTERNO */}
      <section
        className="pt-28 md:pt-36 px-4 sm:px-6"
        style={{ background: 'linear-gradient(135deg, #3A7CA5 0%, #5A9CC5 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center py-16">
          <h1 className="font-serif text-4xl sm:text-5xl text-white mb-4">Chi Siamo</h1>
          <p className="text-white/80 font-sans text-lg leading-relaxed">
            Una storia nata dalla passione per le persone e dal desiderio di ridefinire cosa significa "invecchiare bene".
          </p>
        </div>
      </section>

      {/* STORIA */}
      <section className="py-20 px-4 sm:px-6 bg-warm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-gold font-sans text-sm font-semibold uppercase tracking-wider">La nostra storia</span>
              <h2 className="section-title mt-2 mb-6">
                Nati dall'amore per Genova e per le sue persone
              </h2>
              <div className="space-y-4 font-sans text-anthracite-light leading-relaxed">
                <p>
                  Casa Dolce Brezza nasce da un'idea semplice ma profonda: creare il luogo in cui
                  vorremmo vivere noi stessi, o in cui vorremmo vedere i nostri genitori. Non una struttura
                  fredda e anonima, ma una comunità vera, calda, dove ogni persona porta con sé una storia
                  preziosa da condividere.
                </p>
                <p>
                  Situata in Piazza Palermo 9/5, nel cuore di Genova, la nostra casa è immersa in un quartiere
                  vivo e accessibile. Farmacie, mercati, parchi e trasporti pubblici sono a pochi passi:
                  l'autonomia dei nostri ospiti è una priorità assoluta.
                </p>
                <p>
                  Negli anni abbiamo accolto centinaia di ospiti, costruito relazioni durature con le loro
                  famiglie e affinato il nostro approccio: rispettare la persona, stimolare le capacità,
                  preservare la dignità.
                </p>
              </div>
            </div>
            {/* Visual placeholder */}
            <div className="rounded-2xl overflow-hidden bg-ocean/10 flex items-center justify-center h-72 lg:h-96 border border-ocean/20">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🏡</div>
                <p className="text-ocean font-serif text-xl">Casa Dolce Brezza</p>
                <p className="text-anthracite-light font-sans text-sm mt-2">Piazza Palermo 9/5, Genova</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-sans text-sm font-semibold uppercase tracking-wider">La nostra filosofia</span>
            <h2 className="section-title mt-2">I valori che ci guidano ogni giorno</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌱', title: 'Autonomia', desc: 'Sosteniamo le capacità di ciascuno, favorendo indipendenza e autostima.' },
              { icon: '🤝', title: 'Rispetto', desc: 'Ogni ospite è accolto con la sua storia, i suoi ritmi e le sue preferenze.' },
              { icon: '💬', title: 'Ascolto', desc: 'Famiglie e ospiti sono sempre informati, coinvolti, ascoltati.' },
              { icon: '✨', title: 'Qualità', desc: 'Standard elevati in ogni dettaglio: dalla cura personale alla ristorazione.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-2xl border border-gold/20 hover:border-gold/40 hover:bg-gold/5 transition-all">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-serif text-lg text-anthracite mb-2">{title}</h3>
                <p className="text-anthracite-light text-sm font-sans leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLI SPAZI */}
      <section className="py-20 px-4 sm:px-6 bg-warm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-sans text-sm font-semibold uppercase tracking-wider">La struttura</span>
            <h2 className="section-title mt-2">Gli spazi di Casa Dolce Brezza</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Ogni ambiente è progettato per coniugare sicurezza, comfort e bellezza.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {spaces.map(({ icon, title, desc }) => (
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

      {/* IL TEAM */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold font-sans text-sm font-semibold uppercase tracking-wider">Le persone</span>
            <h2 className="section-title mt-2">Il nostro team</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Professionisti qualificati e appassionati, uniti da un obiettivo comune: il benessere dei nostri ospiti.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, bio, initials }) => (
              <div key={name} className="card text-center">
                <div className="w-16 h-16 rounded-full bg-ocean flex items-center justify-center text-white font-serif text-xl mx-auto mb-4">
                  {initials}
                </div>
                <h3 className="font-serif text-lg text-anthracite mb-0.5">{name}</h3>
                <p className="text-gold text-xs font-sans font-semibold uppercase tracking-wider mb-3">{role}</p>
                <p className="text-anthracite-light text-sm font-sans leading-relaxed">{bio}</p>
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
        <h2 className="font-serif text-3xl text-white mb-4">Vuoi venirci a trovare?</h2>
        <p className="text-white/80 font-sans mb-8 max-w-xl mx-auto">
          Organizziamo visite guidate su appuntamento. Vieni a conoscere la struttura, il team e l'atmosfera di Casa Dolce Brezza di persona.
        </p>
        <CTAButton variant="gold" className="text-base py-4 px-10">
          Prenota una visita
        </CTAButton>
      </section>
    </>
  )
}
