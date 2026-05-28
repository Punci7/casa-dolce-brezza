import CTAButton from '../components/CTAButton'

const services = [
  {
    id: 'alloggio',
    icon: '🏠',
    title: 'Alloggio',
    color: 'ocean',
    items: [
      { label: 'Camere singole e doppie', desc: 'Confortevoli e arredate con cura, con bagno privato, TV e Wi-Fi inclusi.' },
      { label: 'Spazi comuni luminosi', desc: 'Saloni, sala attività e spazi condivisi a disposizione di tutti gli ospiti.' },
      { label: 'Pulizie quotidiane', desc: 'Igiene e ordine garantiti ogni giorno da personale dedicato.' },
      { label: 'Arredi personalizzabili', desc: 'Gli ospiti possono portare oggetti personali per sentirsi davvero a casa.' },
    ],
  },
  {
    id: 'assistenza',
    icon: '🤝',
    title: 'Assistenza',
    color: 'gold',
    items: [
      { label: 'Personale qualificato H12', desc: 'OSS e infermieri presenti ogni giorno per supporto e sorveglianza.' },
      { label: 'Piano assistenziale individuale', desc: 'Ogni ospite ha un piano personalizzato definito insieme alla famiglia.' },
      { label: 'Supporto ADL', desc: 'Aiuto nelle attività della vita quotidiana (igiene, mobilità, vestirsi) quando necessario.' },
      { label: 'Coordinamento sanitario', desc: 'Raccordo con medici di base, specialisti e farmacia di fiducia.' },
    ],
  },
  {
    id: 'attivita',
    icon: '🎭',
    title: 'Attività',
    color: 'ocean',
    items: [
      { label: 'Programma settimanale', desc: 'Calendario ricco di laboratori creativi, cineforum, giochi, musica e tanto altro.' },
      { label: 'Escursioni in città', desc: 'Uscite organizzate per musei, mercati, passeggiate sul porto e eventi culturali.' },
      { label: 'Ginnastica dolce', desc: 'Sessioni giornaliere di movimento adattato per mantenere forma fisica e flessibilità.' },
      { label: 'Attività cognitive', desc: 'Stimolazione mentale con cruciverba, lettura ad alta voce, giochi di memoria e discussioni.' },
    ],
  },
  {
    id: 'ristorazione',
    icon: '🍽️',
    title: 'Ristorazione',
    color: 'gold',
    items: [
      { label: 'Tre pasti al giorno', desc: 'Colazione, pranzo e cena preparati ogni giorno con ingredienti freschi e locali.' },
      { label: 'Menu mediterraneo', desc: 'Cucina genovese di tradizione, leggera e bilanciata, con variazioni stagionali.' },
      { label: 'Diete personalizzate', desc: 'Menu adattati a intolleranze, patologie e preferenze di ogni ospite.' },
      { label: 'Merenda e spuntini', desc: 'Frutta, tisane e piccoli snack disponibili durante la giornata.' },
    ],
  },
  {
    id: 'lavanderia',
    icon: '👕',
    title: 'Lavanderia',
    color: 'ocean',
    items: [
      { label: 'Servizio incluso', desc: 'Lavaggio, asciugatura e stiratura degli indumenti personali compreso nel canone.' },
      { label: 'Cambio biancheria', desc: 'Lenzuola, asciugamani e biancheria da letto cambiati regolarmente.' },
      { label: 'Etichettatura capi', desc: 'Gestione accurata del vestiario con identificazione personalizzata.' },
    ],
  },
]

export default function Servizi() {
  return (
    <>
      {/* HERO INTERNO */}
      <section
        className="pt-28 md:pt-36 px-4 sm:px-6"
        style={{ background: 'linear-gradient(135deg, #3A7CA5 0%, #5A9CC5 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center py-16">
          <h1 className="font-serif text-4xl sm:text-5xl text-white mb-4">I Nostri Servizi</h1>
          <p className="text-white/80 font-sans text-lg leading-relaxed">
            Un'offerta completa e flessibile, pensata per garantire benessere, autonomia e serenità in ogni momento della giornata.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-4 sm:px-6 bg-warm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Tutto incluso, nessuna sorpresa</h2>
          <p className="section-subtitle">
            Il canone mensile di Casa Dolce Brezza comprende alloggio, pasti, assistenza, attività e lavanderia.
            Nessun costo nascosto, massima trasparenza con le famiglie.
          </p>
        </div>
      </section>

      {/* SERVIZI DETTAGLIO */}
      <div className="bg-warm">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 px-4 sm:px-6 ${index % 2 === 1 ? 'bg-white' : 'bg-warm'}`}
          >
            <div className="max-w-6xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <h2 className="font-serif text-3xl text-anthracite">{service.title}</h2>
                  </div>
                  <ul className="space-y-4 mt-6">
                    {service.items.map(({ label, desc }) => (
                      <li key={label} className="flex gap-3">
                        <span className="text-ocean mt-1 shrink-0">✓</span>
                        <div>
                          <span className="font-sans font-semibold text-anthracite">{label}:</span>{' '}
                          <span className="font-sans text-anthracite-light">{desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl bg-ocean/10 border border-ocean/20 flex items-center justify-center h-56 lg:h-72 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-center">
                    <div className="text-7xl mb-3">{service.icon}</div>
                    <p className="text-ocean font-serif text-lg">{service.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section
        className="py-16 px-4 sm:px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #3A7CA5 0%, #1F5F85 100%)' }}
      >
        <h2 className="font-serif text-3xl text-white mb-4">
          Vuoi saperne di più sui costi?
        </h2>
        <p className="text-white/80 font-sans mb-8 max-w-xl mx-auto">
          Contattaci per ricevere il nostro prospetto informativo dettagliato e per fissare un appuntamento di conoscenza senza alcun impegno.
        </p>
        <CTAButton variant="gold" className="text-base py-4 px-10">
          Richiedi informazioni e preventivo
        </CTAButton>
      </section>
    </>
  )
}
