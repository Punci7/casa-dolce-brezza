import { useState } from 'react'
import { HiLocationMarker, HiPhone, HiMail, HiClock, HiCheckCircle } from 'react-icons/hi'

// Sostituire YOUR_FORM_ID con l'ID reale ottenuto da formspree.io
const FORMSPREE_ID = 'xeennvqg'

export default function Contatti() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    relazione: '',
    messaggio: '',
    privacy: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ nome: '', cognome: '', email: '', telefono: '', relazione: '', messaggio: '', privacy: false })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm text-anthracite placeholder-gray-400 focus:outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/20 transition-colors'
  const labelClass = 'block font-sans text-sm font-medium text-anthracite mb-1.5'

  return (
    <>
      {/* HERO INTERNO */}
      <section
        className="pt-28 md:pt-36 px-4 sm:px-6"
        style={{ background: 'linear-gradient(135deg, #3A7CA5 0%, #5A9CC5 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center py-16">
          <h1 className="font-serif text-4xl sm:text-5xl text-white mb-4">Contattaci</h1>
          <p className="text-white/80 font-sans text-lg leading-relaxed">
            Siamo qui per rispondere a ogni tua domanda. Scrivici o chiamaci: un colloquio senza impegno è sempre possibile.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 px-4 sm:px-6 bg-warm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* INFO COLONNA SINISTRA */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-serif text-2xl text-anthracite mb-2">Informazioni di contatto</h2>
                <p className="text-anthracite-light font-sans text-sm leading-relaxed">
                  Il nostro ufficio è disponibile per rispondere a ogni domanda sulla struttura, sui costi e sulle disponibilità.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <HiLocationMarker className="text-ocean mt-1 shrink-0" size={20} />
                  <div>
                    <div className="font-sans font-semibold text-anthracite text-sm">Indirizzo</div>
                    <div className="text-anthracite-light text-sm">Piazza Palermo 9/5, 16129 Genova GE</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <HiPhone className="text-ocean mt-0.5 shrink-0" size={20} />
                  <div>
                    <div className="font-sans font-semibold text-anthracite text-sm">Telefono</div>
                    <a href="tel:+393278065666" className="text-anthracite-light text-sm hover:text-ocean transition-colors">+39 327 806 5666</a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <HiMail className="text-ocean mt-0.5 shrink-0" size={20} />
                  <div>
                    <div className="font-sans font-semibold text-anthracite text-sm">Email</div>
                    <a href="mailto:casadolcebrezza@gmail.com" className="text-anthracite-light text-sm hover:text-ocean transition-colors">casadolcebrezza@gmail.com</a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <HiClock className="text-ocean mt-0.5 shrink-0" size={20} />
                  <div>
                    <div className="font-sans font-semibold text-anthracite text-sm">Orario ufficio</div>
                    <div className="text-anthracite-light text-sm">Lun–Ven 9:00–17:00</div>
                    <div className="text-anthracite-light text-sm">Sabato 9:00–13:00</div>
                  </div>
                </div>
              </div>

              {/* Cosa aspettarsi */}
              <div className="bg-ocean/10 rounded-2xl p-6 border border-ocean/20">
                <h3 className="font-serif text-base text-anthracite mb-3">Cosa succede dopo?</h3>
                <ul className="space-y-2">
                  {[
                    'Ti rispondiamo entro 24 ore lavorative',
                    'Organizziamo un colloquio telefonico o in sede',
                    'Ti mandiamo la documentazione informativa',
                    'Pianifichiamo una visita guidata gratuita',
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm font-sans text-anthracite-light">
                      <HiCheckCircle className="text-ocean shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FORM COLONNA DESTRA */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <HiCheckCircle className="text-ocean mx-auto mb-4" size={56} />
                    <h3 className="font-serif text-2xl text-anthracite mb-3">Messaggio inviato!</h3>
                    <p className="text-anthracite-light font-sans leading-relaxed">
                      Grazie per averci contattato. Ti risponderemo entro 24 ore lavorative.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-ocean font-sans text-sm underline hover:text-ocean-dark"
                    >
                      Invia un altro messaggio
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-serif text-xl text-anthracite mb-6">Richiedi informazioni</h3>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Nome / Cognome */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass} htmlFor="nome">Nome *</label>
                          <input
                            id="nome" name="nome" type="text" required
                            value={formData.nome} onChange={handleChange}
                            placeholder="Mario" className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="cognome">Cognome *</label>
                          <input
                            id="cognome" name="cognome" type="text" required
                            value={formData.cognome} onChange={handleChange}
                            placeholder="Rossi" className={inputClass}
                          />
                        </div>
                      </div>

                      {/* Email / Telefono */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass} htmlFor="email">Email *</label>
                          <input
                            id="email" name="email" type="email" required
                            value={formData.email} onChange={handleChange}
                            placeholder="mario.rossi@email.it" className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="telefono">Telefono</label>
                          <input
                            id="telefono" name="telefono" type="tel"
                            value={formData.telefono} onChange={handleChange}
                            placeholder="+39 010 000 0000" className={inputClass}
                          />
                        </div>
                      </div>

                      {/* Relazione */}
                      <div>
                        <label className={labelClass} htmlFor="relazione">Sei... *</label>
                        <select
                          id="relazione" name="relazione" required
                          value={formData.relazione} onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Seleziona una voce</option>
                          <option value="figlio">Un figlio/a che cerca una struttura per un genitore</option>
                          <option value="familiare">Un familiare interessato per un congiunto</option>
                          <option value="diretto">Un anziano autosufficienti interessato in prima persona</option>
                          <option value="medico">Un medico o assistente sociale</option>
                          <option value="altro">Altro</option>
                        </select>
                      </div>

                      {/* Messaggio */}
                      <div>
                        <label className={labelClass} htmlFor="messaggio">Messaggio *</label>
                        <textarea
                          id="messaggio" name="messaggio" required rows={5}
                          value={formData.messaggio} onChange={handleChange}
                          placeholder="Descrivi la situazione e le tue domande principali. Ad esempio: disponibilità posti, tipologia di camera, costi, ecc."
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      {/* Privacy */}
                      <div className="flex gap-3 items-start">
                        <input
                          id="privacy" name="privacy" type="checkbox" required
                          checked={formData.privacy} onChange={handleChange}
                          className="mt-1 shrink-0 accent-ocean w-4 h-4"
                        />
                        <label htmlFor="privacy" className="font-sans text-xs text-anthracite-light leading-relaxed">
                          Ho letto e accetto la{' '}
                          <span className="text-ocean underline cursor-pointer">Privacy Policy</span>.
                          I dati inviati saranno utilizzati esclusivamente per rispondere alla presente richiesta di informazioni. *
                        </label>
                      </div>

                      {/* Error */}
                      {status === 'error' && (
                        <p className="text-red-500 text-sm font-sans">
                          Si è verificato un errore. Riprova o contattaci direttamente per telefono.
                        </p>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full btn-primary py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'sending' ? 'Invio in corso...' : 'Invia richiesta'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAPPA MINI */}
      <section className="h-64 sm:h-80">
        <iframe
          title="Mappa Casa Dolce Brezza"
          src="https://www.openstreetmap.org/export/embed.html?bbox=8.9050%2C44.4080%2C8.9350%2C44.4280&layer=mapnik&marker=44.4180%2C8.9200"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
