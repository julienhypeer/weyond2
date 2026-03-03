import { useState } from 'react'
import { confirmationSteps, prepActions } from '../data/content'

export default function Step3Confirmation() {
  const [copied, setCopied] = useState(false)

  const shareText = encodeURIComponent(
    "Hey ! J'ai découvert un mentorat business gratuit de 3 jours pour les coachs sportifs. C'est en individuel, sur Zoom, et c'est limité à 6 places. Jette un œil : " +
      window.location.origin
  )

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.origin).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="min-h-screen bg-black text-text">
      {/* ─── 1. Hero confirmation ─── */}
      <section className="pt-16 pb-8 px-6 text-center">
        <div className="font-display text-[24px] tracking-[4px] text-accent mb-10">WEYOND</div>

        <svg width="84" height="84" viewBox="0 0 84 84" className="mx-auto mb-8">
          <circle
            cx="42"
            cy="42"
            r="40"
            fill="none"
            stroke="#96905e"
            strokeWidth="2"
            strokeDasharray="283"
            strokeDashoffset="283"
            style={{ animation: 'drawCircle 1s ease forwards' }}
          />
          <path
            d="M26 42 L38 54 L58 32"
            fill="none"
            stroke="#96905e"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="80"
            strokeDashoffset="80"
            style={{ animation: 'drawCheck 0.4s ease 0.8s forwards' }}
          />
        </svg>

        <h1 className="font-display text-[clamp(40px,7vw,72px)] leading-[0.95] uppercase tracking-[2px] mb-3">
          TA CANDIDATURE
          <br />
          EST ENVOYÉE.
        </h1>
        <p className="font-serif italic text-[clamp(22px,3vw,30px)] text-accent mb-4">Bien joué.</p>
        <p className="text-[15px] text-muted font-sans max-w-[500px] mx-auto leading-relaxed">
          C'est le genre de décision que la plupart des coachs remettent à demain. Toi, tu l'as fait. La suite
          appartient à notre équipe.
        </p>
      </section>

      {/* ─── 2. Prochaines étapes ─── */}
      <section className="bg-deep py-14 px-6">
        <div className="max-w-[580px] mx-auto">
          <h2 className="font-display text-[clamp(28px,4.5vw,44px)] text-center uppercase tracking-[2px] mb-10">
            VOICI CE QUI SE PASSE MAINTENANT
          </h2>

          <div className="relative">
            <div className="absolute left-[17px] top-5 bottom-5 w-[2px] bg-border" />

            {confirmationSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-5 mb-8 last:mb-0">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-[18px] shrink-0 z-10 ${
                    i === 1 ? 'bg-olive' : 'bg-accent'
                  }`}
                >
                  {step.icon}
                </div>
                <div
                  className={`bg-card border border-border rounded-xl p-5 flex-1 ${
                    i === 1 ? 'card-olive' : 'card-accent'
                  }`}
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-subtle mb-1.5 font-sans">
                    {step.timing}
                  </div>
                  <h4 className="font-sans font-bold text-[15px] text-text mb-2">{step.title}</h4>
                  <p className="text-[13px] text-muted font-sans leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. En attendant ─── */}
      <section className="bg-black py-14 px-6">
        <div className="max-w-[580px] mx-auto">
          <h2 className="font-serif italic text-[clamp(24px,3.5vw,32px)] text-center mb-8">
            En attendant, prépare-toi.
          </h2>

          <div className="space-y-4">
            {prepActions.map((bullet, i) => (
              <div key={i} className="bg-surface border border-border card-accent rounded-xl p-5">
                <p className="text-[14px] text-muted font-sans leading-snug flex items-start gap-2.5">
                  <span className="text-accent shrink-0 mt-0.5">✦</span>
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Citation ─── */}
      <section className="bg-deep py-16 px-6">
        <div className="max-w-[560px] mx-auto text-center">
          <div className="font-serif text-[100px] leading-none text-olive opacity-30 mb-[-30px]">&ldquo;</div>

          <blockquote className="font-serif italic text-[clamp(18px,2.5vw,24px)] text-text leading-relaxed mb-6">
            700 coachs avant toi ont pris cette décision. Certains avaient peur, certains doutaient. Aujourd'hui, ils
            vivent du coaching. La seule différence entre eux et toi ? Ils ont dit oui quand l'occasion s'est présentée.
          </blockquote>

          <p className="text-[12px] text-muted font-sans tracking-[0.1em] uppercase">— L'équipe WEYOND</p>
        </div>
      </section>

      {/* ─── 5. Partage ─── */}
      <section className="bg-black py-14 px-6">
        <div className="max-w-[480px] mx-auto text-center">
          <h2 className="font-serif text-[clamp(22px,3vw,28px)] italic mb-3">Tu connais un coach qui galère ?</h2>
          <p className="text-[14px] text-muted font-sans mb-8 leading-relaxed">
            Si tu as un ami coach sportif dans la même situation, partage-lui cette page. On a 6 places. Autant que ça
            aille à des gens qui méritent de réussir.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/?text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-black font-bold py-3 px-6 rounded text-[14px] font-sans hover:-translate-y-0.5 transition-transform"
            >
              Partager sur WhatsApp
            </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 bg-surface border border-border text-accent font-semibold py-3 px-6 rounded text-[14px] font-sans hover:border-accent transition-colors cursor-pointer"
            >
              {copied ? '✓ Lien copié !' : 'Copier le lien'}
            </button>
          </div>
        </div>
      </section>

      {/* ─── 6. Footer ─── */}
      <footer className="bg-black border-t border-border py-8 px-6 text-center">
        <div className="font-display text-[20px] tracking-[3px] text-accent mb-2">WEYOND</div>
        <p className="text-[12px] text-muted font-sans mb-1">Le Partenaire Carrière des Coachs Sportifs</p>
        <p className="text-[11px] text-subtle font-sans">
          © 2024 WEYOND · Organisme de formation certifié · Mentions légales
        </p>
      </footer>
    </div>
  )
}
