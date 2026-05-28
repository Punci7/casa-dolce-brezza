import { Link } from 'react-router-dom'
import { HiShieldCheck, HiHeart, HiSun } from 'react-icons/hi'
import CTAButton from '../components/CTAButton'

const strengths = [
  {
    icon: <HiShieldCheck size={32} />,
    title: 'Sicurezza e tranquillità',
    desc: 'Personale qualificato presente ogni giorno, assistenza programmata e ambienti progettati per la massima sicurezza. I tuoi cari sono in buone mani.',
  },
  {
    icon: <HiHeart size={32} />,
    title: 'Calore umano autentico',
    desc: 'Non siamo una struttura anonima: siamo una comunità. Ogni ospite è conosciuto per nome, ascoltato e valorizzato nella propria storia.',
  },
  {
    icon: <HiSun size={32} />,
    title: 'Vita attiva e sociale',
    desc: 'Attività culturali, uscite in città, laboratori e momenti di condivisione per mantenere mente e corpo in forma, ogni giorno.',
  },
]

const servicesPreview = [
  {
    title: 'Alloggio confortevole',
    desc: 'Camere singole e doppie arredate con cura, spazi comuni luminosi e accoglienti.',
    icon: '🏠',
  },
  {
    title: 'Assistenza personalizzata',
    desc: 'Supporto nella vita quotidiana calibrato sulle esigenze individuali di ogni ospite.',
    icon: '🤝',
  },
  {
    title: 'Ristorazione di qualità',
    desc: 'Tre pasti al giorno preparati con ingredienti freschi, menu mediterraneo e diete su misura.',
    icon: '🍽️',
  },
  {
    title: 'Attività ed escursioni',
    desc: 'Programma settimanale di attività interne ed esterne per vivere pienamente Genova.',
    icon: '🎭',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          background: 'linear-gradient(135deg, #1F5F85 0%, #3A7CA5 50%, #5A9CC5 100%)',
        }}
      >
        {/* Decorative overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5F5F0' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
          <div className="inline-block bg-gold/20 text-gold-light border border-gold/30 rounded-full px-4 py-1.5 text-sm font-sans font-medium mb-2">
            Comunità Alloggio per Anziani · Piazza Palermo 9/5, 16129 Genova
          </div>

          <img
            src="/Logo_bianco.png"
            alt="Casa Dolce Brezza"
            className="h-[28rem] md:h-[38rem] w-auto mx-auto mb-2"
          />

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            La prima comunità alloggio per anziani nel cuore di Genova
          </h1>

          <p className="font-sans italic text-xl md:text-2xl text-gold mt-4 mb-6">
            La casa che merita chi ami.
          </p>

          <p className="text-white/85 text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto mb-10">
            Casa Dolce Brezza è una comunità alloggio per anziani autosufficienti nel cuore di Genova.
            Un luogo sicuro, caldo e stimolante dove ogni giorno conta davvero.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="gold" className="text-base py-4 px-10">
              Richiedi informazioni
            </CTAButton>
            <CTAButton to="/chi-siamo" variant="outline-white" className="text-base py-4 px-10">
              Scopri chi siamo
            </CTAButton>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 max-w-xs mx-auto">
            {[
              { num: '100%', label: 'autosufficienti' },
              { num: '❤️', label: 'cura quotidiana' },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="font-serif text-2xl sm:text-3xl text-gold font-bold">{num}</div>
                <div className="text-white/70 text-xs sm:text-sm font-sans mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C360,0 1080,60 1440,20 L1440,80 Z" fill="#F5F5F0" />
          </svg>
        </div>
      </section>

      {/* 3 PUNTI DI FORZA */}
      <section className="py-20 px-4 sm:px-6 bg-warm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">Perché scegliere Casa Dolce Brezza</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Sappiamo quanto sia difficile scegliere la struttura giusta per un genitore.
              Ecco cosa ci distingue davvero.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map(({ icon, title, desc }) => (
              <div key={title} className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-ocean/10 text-ocean mb-5">
                  {icon}
                </div>
                <h3 className="font-serif text-xl text-anthracite mb-3">{title}</h3>
                <p className="text-anthracite-light font-sans text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANTEPRIMA SERVIZI */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">I nostri servizi</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Un'offerta completa pensata per garantire benessere, autonomia e serenità ogni giorno.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesPreview.map(({ title, desc, icon }) => (
              <div
                key={title}
                className="rounded-2xl p-6 border border-ocean/20 hover:border-ocean/40 hover:bg-ocean/5 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-serif text-lg text-anthracite mb-2">{title}</h3>
                <p className="text-anthracite-light text-sm font-sans leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <CTAButton to="/servizi" variant="outline" className="text-sm">
              Tutti i servizi
            </CTAButton>
          </div>
        </div>
      </section>

      {/* TESTIMONIANZA / CITAZIONE */}
      <section
        className="py-20 px-4 sm:px-6"
        style={{ background: 'linear-gradient(135deg, #3A7CA5 0%, #1F5F85 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-gold text-5xl font-serif mb-6">"</div>
          <blockquote className="font-serif text-xl sm:text-2xl text-white leading-relaxed italic mb-8">
            Mia madre vive qui da due anni. Non l'ho mai vista così serena e attiva.
            Casa Dolce Brezza è diventata davvero la sua casa.
          </blockquote>
          <cite className="text-white/70 font-sans text-sm not-italic">
            — Marco T., figlio di una nostra ospite
          </cite>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-20 px-4 sm:px-6 bg-warm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-4">
            Pronti a fare il primo passo?
          </h2>
          <p className="section-subtitle max-w-xl mx-auto mb-10">
            Contattaci oggi per una visita senza impegno o per ricevere la nostra documentazione informativa.
            Siamo qui per rispondere a ogni tua domanda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="primary" className="text-base py-4 px-10">
              Richiedi informazioni
            </CTAButton>
            <CTAButton to="/location" variant="outline" className="text-base py-4 px-10">
              Come raggiungerci
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
