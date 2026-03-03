import { useEffect } from 'react'
import Button from './ui/Button'
import TestimonialCard from './ui/TestimonialCard'
import {
  heroMetrics,
  targetProfiles,
  methodCards,
  resultBullets,
  whyFreeText,
  whyFreeQuote,
  aboutStats,
  testimonials,
} from '../data/content'

const WEBHOOK = 'https://hook.eu1.make.com/8pvnqbua7nvts1rk1lrds3our13bjwvb'

export default function Step1Landing({ data, update, onNext }) {
  useEffect(() => {
    if (!document.querySelector('script[src*="player.vimeo.com/api"]')) {
      const s = document.createElement('script')
      s.src = 'https://player.vimeo.com/api/player.js'
      s.async = true
      document.body.appendChild(s)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!data.coach_presentiel || data.coach_presentiel !== 'oui') return
    if (!data.vu_video) return
    if (!data.prenom || !data.nom || !data.email || !data.tel) return

    fetch(WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        coach_presentiel: data.coach_presentiel,
        vu_video: data.vu_video,
        prenom: data.prenom,
        nom: data.nom,
        email: data.email,
        tel: data.tel,
        submitted_at: new Date().toISOString(),
      }),
    }).catch(() => {})

    onNext()
  }

  const inputCls =
    'w-full py-[14px] px-4 border border-border rounded text-[15px] text-text bg-card outline-none transition-all duration-300 font-sans placeholder:text-subtle focus:border-accent focus:shadow-[0_0_0_3px_rgba(150,144,94,0.15)] focus:bg-surface'

  return (
    <div className="min-h-screen bg-black text-text">
      {/* ─── 1. Topbar urgence ─── */}
      <div className="sticky top-0 z-50 bg-olive text-center py-2.5 px-4">
        <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-text font-sans">
          ⚡ Il reste <span className="text-accent-light font-bold">6 places</span> sur 6 — Candidature 100% gratuite
        </span>
      </div>

      {/* ─── 2. Header ─── */}
      <header className="flex items-center justify-between px-6 py-5 max-w-[900px] mx-auto">
        <img src="/logo-weyond.png" alt="WEYOND" className="h-8" />
        <div className="text-[10px] font-semibold tracking-[0.08em] text-muted border border-border rounded-full py-1.5 px-3.5 font-sans hidden sm:block">
          Organisme de formation certifié ✦ 2024
        </div>
      </header>

      {/* ─── 3. Hero ─── */}
      <section className="gradient-hero pt-8 pb-20 px-6 relative overflow-hidden">
        {/* Subtle glow behind hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[800px] mx-auto text-center relative">
          <div className="animate-fadeinup">
            <div className="inline-flex items-center gap-2.5 bg-accent-8 border border-accent-30 text-accent text-[11px] font-bold tracking-[0.15em] uppercase py-[7px] px-[18px] rounded-full mb-8 animate-pulsebadge font-sans">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulsedot" />
              MENTORAT 1:1 GRATUIT — 6 PLACES SEULEMENT
            </div>
          </div>

          <p className="text-[clamp(20px,3vw,28px)] text-muted tracking-[0.04em] font-sans mb-4 animate-fadeinup">
            Pour les coachs sportifs en présentiel — à domicile ou en salle
          </p>

          <h1 className="font-display text-[clamp(36px,6vw,72px)] leading-[0.93] tracking-[2px] mb-6 uppercase animate-fadeinup-d1">
            TU SAIS COACHER.<br />
            MAIS TON AGENDA<br />
            <span className="text-accent drop-shadow-[0_0_24px_rgba(150,144,94,0.3)]">EST ENCORE VIDE.</span>
          </h1>

          <div className="max-w-[700px] mx-auto mb-10 animate-fadeinup-d2">
            <div className="relative rounded-lg border border-border overflow-hidden shadow-glow" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://player.vimeo.com/video/1103193348?h=e48403fd13&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                className="absolute inset-0 w-full h-full"
                title="WEYOND Mentorat"
              />
            </div>
          </div>

          <p className="font-serif italic text-[clamp(18px,2.5vw,24px)] text-muted leading-relaxed max-w-[620px] mx-auto mb-10 animate-fadeinup-d2">
            Pendant que d'autres coachs aussi bons que toi remplissent leur planning, toi tu cherches encore. Le
            problème, c'est pas ton niveau —{' '}
            <em className="text-accent-light not-italic">c'est que personne ne t'a donné le système.</em>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[520px] mx-auto mb-10 animate-fadeinup-d3">
            {heroMetrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-[clamp(28px,4vw,36px)] font-display text-accent tracking-[1px] drop-shadow-[0_0_16px_rgba(150,144,94,0.25)] whitespace-nowrap">{m.num}</div>
                <div className="text-[11px] text-muted mt-1 font-sans">{m.label}</div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => document.getElementById('candidature')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block w-full max-w-[420px]"
          >
            <Button>→ Je candidate gratuitement</Button>
          </button>
        </div>
      </section>

      {/* ─── 4. À qui s'adresse ce mentorat ─── */}
      <section className="bg-deep py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-[clamp(26px,4vw,38px)] text-center mb-3 italic">
            Ce mentorat est fait pour toi si...
          </h2>
          <p className="text-[14px] text-muted font-sans text-center mb-10 max-w-[540px] mx-auto">
            Tu es coach sportif diplômé, tu adores ton métier — mais côté business, tu galères. Tu n'es pas seul.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {/* PT */}
            <div className="bg-card border border-border card-accent rounded-xl p-7 shadow-premium hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5">
              <h3 className="font-sans font-bold text-[16px] text-text mb-4">{targetProfiles.pt.title}</h3>
              <ul className="space-y-2.5">
                {targetProfiles.pt.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-muted font-sans leading-snug">
                    <span className="text-accent mt-0.5 shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            {/* BPT */}
            <div className="bg-card border border-border card-accent rounded-xl p-7 shadow-premium hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5">
              <h3 className="font-sans font-bold text-[16px] text-text mb-4">{targetProfiles.bpt.title}</h3>
              <ul className="space-y-2.5">
                {targetProfiles.bpt.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-muted font-sans leading-snug">
                    <span className="text-accent mt-0.5 shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Exclusion */}
          <div className="bg-surface border border-border card-olive rounded-xl p-5">
            <h4 className="font-sans font-semibold text-[13px] text-muted mb-3 uppercase tracking-[0.08em]">
              Ce n'est pas pour toi si...
            </h4>
            <ul className="space-y-2">
              {targetProfiles.exclusion.map((e, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-subtle font-sans leading-snug">
                  <span className="text-subtle mt-0.5 shrink-0">✕</span>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Separator ─── */}
      <div className="separator-gold max-w-[200px] mx-auto" />

      {/* ─── 5. Les 3 jours ─── */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-display text-[clamp(32px,5vw,56px)] text-center mb-3 uppercase tracking-[3px]">
            3 JOURS. 3 HEURES.<br />UN SYSTÈME.
          </h2>
          <p className="font-serif italic text-center text-muted text-[17px] mb-12">
            Voilà ce qu'on construit ensemble, en individuel sur Zoom.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {methodCards.map((c) => (
              <div key={c.num} className="bg-surface border border-border rounded-xl p-7 relative overflow-hidden shadow-premium hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5">
                {/* Gradient top border */}
                <div className="absolute top-0 left-0 right-0 h-[3px] gradient-accent-border" />
                <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-accent mb-2 font-sans">
                  {c.day}
                </div>
                <div className="font-display text-[48px] text-accent leading-none mb-2 drop-shadow-[0_0_12px_rgba(150,144,94,0.2)]">{c.num}</div>
                <h3 className="font-sans font-bold text-[15px] text-text mb-3 uppercase tracking-[0.05em]">
                  {c.title}
                </h3>
                <p className="text-[13px] text-muted font-sans leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent-8 border border-accent-30 rounded-xl p-7 shadow-glow">
            <h4 className="font-sans font-semibold text-[12px] text-accent mb-4 uppercase tracking-[0.1em]">
              Ce que tu repars avec :
            </h4>
            <ul className="space-y-3">
              {resultBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px] text-text font-sans leading-snug">
                  <span className="text-accent shrink-0">⚡</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── 6. Pourquoi c'est gratuit ─── */}
      <section className="bg-deep py-20 px-6">
        <div className="max-w-[620px] mx-auto text-center">
          <h2 className="font-serif text-[clamp(26px,4vw,38px)] italic mb-8">Pourquoi c'est gratuit ?</h2>

          <div className="bg-card border border-accent-20 rounded-xl p-8 shadow-premium relative mb-8">
            {/* Decorative quote */}
            <div className="font-serif text-[80px] leading-none text-accent/10 absolute top-2 left-6">&ldquo;</div>

            <div className="relative">
              {whyFreeText.map((p, i) => (
                <p key={i} className="text-[15px] text-muted font-sans leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <blockquote className="font-serif italic text-[clamp(22px,3.5vw,28px)] text-accent leading-snug">
            &ldquo;{whyFreeQuote}&rdquo;
          </blockquote>

          <div className="separator-gold max-w-[120px] mx-auto mt-10" />
        </div>
      </section>

      {/* ─── 7. Qui est WEYOND ─── */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-[clamp(26px,4vw,38px)] text-center italic mb-6">Qui est WEYOND ?</h2>
          <p className="text-[15px] text-muted font-sans leading-relaxed text-center max-w-[600px] mx-auto mb-12">
            Le partenaire carrière des coachs sportifs. Notre mission : permettre aux coachs de vivre pleinement de leur
            passion en bâtissant une clientèle motivée et fidèle, sans sacrifier leur équilibre de vie. Organisme de
            formation certifié depuis 2024.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[500px] mx-auto">
            {aboutStats.map((s, i) => (
              <div key={i} className="text-center bg-surface border border-border rounded-xl py-6 px-4 shadow-premium hover:shadow-glow transition-all duration-300">
                <div className="font-display text-[clamp(24px,3.5vw,32px)] text-accent tracking-[1px] drop-shadow-[0_0_16px_rgba(150,144,94,0.25)]">{s.num}</div>
                <div className="text-[11px] text-muted mt-1 font-sans">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Separator ─── */}
      <div className="separator-gold max-w-[200px] mx-auto" />

      {/* ─── 8. Témoignages ─── */}
      <section className="bg-deep py-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-display text-[clamp(32px,5vw,48px)] text-center mb-2 uppercase tracking-[3px]">
            ILS ONT FAIT LE MENTORAT.
          </h2>
          <p className="font-serif italic text-center text-muted text-[17px] mb-12">Voilà ce que ça a changé.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. Formulaire ─── */}
      <section id="candidature" className="bg-black py-20 px-6">
        <div className="max-w-[520px] mx-auto">
          <div className="bg-surface border border-border rounded-xl p-8 shadow-glow-lg relative overflow-hidden">
            {/* Double border effect */}
            <div className="absolute inset-0 rounded-xl border border-accent/10 pointer-events-none" />

            <h2 className="font-display text-[clamp(28px,4.5vw,44px)] text-center mb-2 uppercase tracking-[2px] relative">
              CANDIDATE MAINTENANT
            </h2>
            <p className="font-serif italic text-center text-accent text-[17px] mb-1">C'est gratuit.</p>
            <p className="text-center text-[13px] text-muted font-sans mb-8">
              6 places disponibles — candidature en 30 secondes
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 relative">
              {/* ─── Question de qualification ─── */}
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-muted mb-2.5 font-sans">
                  Es-tu coach sportif en présentiel ? *
                </label>
                <div className="flex gap-3">
                  {['oui', 'non'].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => update('coach_presentiel', val)}
                      className={`flex-1 py-[12px] px-4 rounded border text-[14px] font-semibold font-sans transition-all duration-300 cursor-pointer ${
                        data.coach_presentiel === val
                          ? 'bg-accent/15 border-accent text-accent shadow-[0_0_12px_rgba(150,144,94,0.15)]'
                          : 'bg-card border-border text-muted hover:border-accent/50'
                      }`}
                    >
                      {val === 'oui' ? 'Oui' : 'Non'}
                    </button>
                  ))}
                </div>
              </div>

              {/* ─── Question vidéo ─── */}
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-muted mb-2.5 font-sans">
                  As-tu vu la vidéo ? *
                </label>
                <div className="flex gap-3">
                  {['oui', 'non'].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => update('vu_video', val)}
                      className={`flex-1 py-[12px] px-4 rounded border text-[14px] font-semibold font-sans transition-all duration-300 cursor-pointer ${
                        data.vu_video === val
                          ? 'bg-accent/15 border-accent text-accent shadow-[0_0_12px_rgba(150,144,94,0.15)]'
                          : 'bg-card border-border text-muted hover:border-accent/50'
                      }`}
                    >
                      {val === 'oui' ? 'Oui' : 'Non'}
                    </button>
                  ))}
                </div>
              </div>

              {data.coach_presentiel === 'non' ? (
                <div className="bg-surface border border-border rounded-xl p-6 text-center">
                  <p className="text-[15px] text-muted font-sans leading-relaxed">
                    Ce mentorat est réservé aux coachs sportifs qui exercent en présentiel. Si c'est ton cas à l'avenir, reviens nous voir !
                  </p>
                </div>
              ) : (
              <>
              <div>
                <label htmlFor="prenom" className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-muted mb-1.5 font-sans">
                  Prénom *
                </label>
                <input id="prenom" type="text" required placeholder="Ton prénom" value={data.prenom} onChange={(e) => update('prenom', e.target.value)} className={inputCls} />
              </div>
              <div>
                <label htmlFor="nom" className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-muted mb-1.5 font-sans">
                  Nom *
                </label>
                <input id="nom" type="text" required placeholder="Ton nom" value={data.nom} onChange={(e) => update('nom', e.target.value)} className={inputCls} />
              </div>
              <div>
                <label htmlFor="email" className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-muted mb-1.5 font-sans">
                  Email *
                </label>
                <input id="email" type="email" required placeholder="ton@email.com" value={data.email} onChange={(e) => update('email', e.target.value)} className={inputCls} />
              </div>
              <div>
                <label htmlFor="tel" className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-muted mb-1.5 font-sans">
                  Téléphone *
                </label>
                <input id="tel" type="tel" required placeholder="06 12 34 56 78" value={data.tel} onChange={(e) => update('tel', e.target.value)} className={inputCls} />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="submit">
                  → Je candidate au mentorat gratuit
                </Button>
              </div>
              </>
              )}
            </form>

            <p className="text-[11px] text-subtle text-center mt-4 font-sans leading-relaxed">
              Aucun paiement demandé. Tu seras contacté(e) par téléphone par un membre de l'équipe WEYOND pour un
              échange de 15 min avant validation.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 10. Footer ─── */}
      <footer className="bg-black border-t border-border py-8 px-6 text-center">
        <img src="/logo-weyond.png" alt="WEYOND" className="h-5 mx-auto mb-2" />
        <p className="text-[11px] text-subtle font-sans">
          Le Partenaire Carrière des Coachs Sportifs · © 2024 WEYOND · Mentions légales
        </p>
      </footer>
    </div>
  )
}
