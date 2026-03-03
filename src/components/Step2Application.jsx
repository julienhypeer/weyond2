import { useMemo, useState } from 'react'
import Button from './ui/Button'
import RadioGroup from './ui/RadioGroup'
import CheckboxGroup from './ui/CheckboxGroup'
import FormField from './ui/FormField'
import { formOptions } from '../data/content'

const WEBHOOK = 'https://hook.eu1.make.com/8pvnqbua7nvts1rk1lrds3our13bjwvb'

const REQUIRED = [
  'statut',
  'clients_payants',
  'revenus',
  'blocage_principal',
  'ca_cible',
  'delai',
  'pourquoi_maintenant',
  'disponibilite_zoom',
]

function StepDot({ done, active, label }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold font-sans ${
          done
            ? 'bg-accent text-black'
            : active
              ? 'border-2 border-accent text-accent'
              : 'border border-border text-subtle'
        }`}
      >
        {done ? '✓' : label[0]}
      </div>
      <span className="text-[9px] text-subtle hidden sm:block font-sans">{label}</span>
    </div>
  )
}

export default function Step2Application({ data, update, onSubmit }) {
  const [submitting, setSubmitting] = useState(false)

  const progress = useMemo(() => {
    const filled = REQUIRED.filter((f) => data[f]).length
    return Math.round((filled / REQUIRED.length) * 100)
  }, [data])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (REQUIRED.some((f) => !data[f])) {
      alert('Merci de répondre à toutes les questions obligatoires.')
      return
    }
    setSubmitting(true)

    fetch(WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        deja_essaye: data.deja_essaye.join(', '),
        submitted_at: new Date().toISOString(),
      }),
    }).catch(() => {})

    onSubmit()
  }

  const textareaCls =
    'w-full py-[13px] px-4 border border-border rounded text-[15px] text-text bg-card outline-none transition-all duration-200 font-sans placeholder:text-subtle focus:border-accent focus:shadow-[0_0_0_3px_rgba(150,144,94,0.15)] resize-y min-h-[100px]'
  const inputCls =
    'w-full py-[14px] px-4 border border-border rounded text-[15px] text-text bg-card outline-none transition-all duration-200 font-sans placeholder:text-subtle focus:border-accent focus:shadow-[0_0_0_3px_rgba(150,144,94,0.15)]'

  return (
    <div className="min-h-screen bg-black text-text">
      {/* ─── Topbar ─── */}
      <div className="bg-olive text-center py-2.5 px-4">
        <span className="text-[12px] font-semibold tracking-[0.1em] text-text font-sans">
          ✅ Tes coordonnées ont bien été reçues — Complète ta candidature ci-dessous
        </span>
      </div>

      {/* ─── Header + stepper ─── */}
      <header className="px-6 py-5 max-w-[700px] mx-auto">
        <div className="flex items-center justify-between mb-5">
          <div className="text-[24px] font-display tracking-[4px] text-accent">WEYOND</div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <StepDot done label="Coordonnées" />
          <div className="flex-1 h-[2px] bg-accent" />
          <StepDot active label="Candidature" />
          <div className="flex-1 h-[2px] bg-border" />
          <StepDot label="Confirmation" />
        </div>

        <div className="w-full h-[3px] bg-surface rounded-full overflow-hidden mt-3">
          <div className="h-full bg-accent transition-all duration-500 rounded-full" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-[11px] text-subtle mt-1.5 font-sans">{progress}% complété</p>
      </header>

      {/* ─── Réassurance ─── */}
      <section className="bg-black px-6 pb-8">
        <div className="max-w-[700px] mx-auto text-center">
          <h1 className="font-display text-[clamp(32px,5vw,52px)] uppercase tracking-[2px] mb-3">
            TU AS FAIT LE PREMIER PAS.
            <br />
            <span className="text-accent">VOILÀ CE QUI T'ATTEND.</span>
          </h1>
          <p className="text-[15px] text-muted font-sans leading-relaxed max-w-[540px] mx-auto mb-8">
            Ce formulaire prend 5 minutes. Il nous permet de savoir si on peut vraiment t'aider — et comment. Pas de
            bonne ou mauvaise réponse. Juste de l'honnêteté.
          </p>

          <div className="flex items-center justify-center gap-4 max-[480px]:gap-2 mb-8">
            {[
              { icon: '📋', label: 'Candidature' },
              { icon: '📞', label: 'Appel' },
              { icon: '🎯', label: 'Mentorat' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4 max-[480px]:gap-2">
                {i > 0 && <div className="text-subtle text-[14px]">→</div>}
                <div className="text-center">
                  <div className="text-[24px] mb-1">{s.icon}</div>
                  <div className="text-[10px] text-muted font-sans uppercase tracking-wider">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Vidéo ─── */}
      <section className="bg-deep py-12 px-6">
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-serif text-[clamp(22px,3.5vw,30px)] text-center italic mb-2">
            Avant de remplir le formulaire — regarde ça.
          </h2>
          <p className="text-[14px] text-muted font-sans text-center mb-6">
            Cette vidéo t'explique exactement comment fonctionnent les 3 jours et ce qu'on va faire ensemble.
          </p>

          <div className="relative rounded-lg border border-border overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            <div className="absolute inset-0 bg-card flex flex-col items-center justify-center">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-3 opacity-60">
                <circle cx="32" cy="32" r="31" stroke="#96905e" strokeWidth="2" />
                <path d="M26 20L46 32L26 44V20Z" fill="#96905e" />
              </svg>
              <p className="text-[13px] text-subtle font-sans">Vidéo de présentation — bientôt disponible</p>
            </div>
          </div>

          <p className="font-serif italic text-[15px] text-muted text-center mt-5">
            Tu as regardé ? Alors tu sais pourquoi c'est différent. Maintenant, dis-nous qui tu es.
          </p>
        </div>
      </section>

      {/* ─── Formulaire ─── */}
      <section className="bg-black py-12 px-6">
        <div className="max-w-[700px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-[clamp(28px,4.5vw,44px)] uppercase tracking-[2px] mb-2">
              TON DOSSIER DE CANDIDATURE
            </h2>
            <p className="text-[14px] text-muted font-sans max-w-[520px] mx-auto">
              On lit chaque candidature. C'est ce qui nous permet de sélectionner les coachs qu'on peut vraiment aider —
              et d'arriver au premier jour préparés pour toi.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* ─── Bloc A ─── */}
            <div className="bg-surface border border-border card-accent rounded-xl p-7">
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent mb-6 font-sans">
                A — Situation actuelle
              </div>
              <h3 className="font-serif italic text-[20px] text-text mb-5">Où tu en es aujourd'hui</h3>

              <FormField label="Ton statut actuel" required>
                <RadioGroup name="statut" options={formOptions.statut} value={data.statut} onChange={(v) => update('statut', v)} columns={1} />
              </FormField>

              <FormField label="Nombre de clients payants" required>
                <RadioGroup name="clients_payants" options={formOptions.clients_payants} value={data.clients_payants} onChange={(v) => update('clients_payants', v)} />
              </FormField>

              <FormField label="Revenus mensuels issus du coaching" required>
                <RadioGroup name="revenus" options={formOptions.revenus} value={data.revenus} onChange={(v) => update('revenus', v)} />
              </FormField>
            </div>

            {/* ─── Bloc B ─── */}
            <div className="bg-surface border border-border card-accent rounded-xl p-7">
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent mb-6 font-sans">
                B — Tes blocages
              </div>
              <h3 className="font-serif italic text-[20px] text-text mb-5">Ce que tu as déjà essayé</h3>

              <FormField label="Qu'as-tu déjà tenté pour trouver des clients ?">
                <CheckboxGroup name="deja_essaye" options={formOptions.deja_essaye} values={data.deja_essaye} onChange={(v) => update('deja_essaye', v)} />
              </FormField>

              <FormField label="Ton principal blocage aujourd'hui" required>
                <textarea
                  value={data.blocage_principal}
                  onChange={(e) => update('blocage_principal', e.target.value)}
                  placeholder="Ex : Je ne sais pas comment parler de mes prix sans perdre le client..."
                  className={textareaCls}
                  rows={3}
                />
              </FormField>
            </div>

            {/* ─── Bloc C ─── */}
            <div className="bg-surface border border-border card-accent rounded-xl p-7">
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent mb-6 font-sans">
                C — Tes objectifs
              </div>
              <h3 className="font-serif italic text-[20px] text-text mb-5">Où tu veux aller</h3>

              <FormField label="Chiffre d'affaires cible" required>
                <RadioGroup name="ca_cible" options={formOptions.ca_cible} value={data.ca_cible} onChange={(v) => update('ca_cible', v)} columns={3} />
              </FormField>

              <FormField label="Délai souhaité" required>
                <RadioGroup name="delai" options={formOptions.delai} value={data.delai} onChange={(v) => update('delai', v)} columns={3} />
              </FormField>

              <FormField label="Pourquoi maintenant ?" required>
                <textarea
                  value={data.pourquoi_maintenant}
                  onChange={(e) => update('pourquoi_maintenant', e.target.value)}
                  placeholder="Qu'est-ce qui fait que tu postules aujourd'hui et pas dans 3 mois ? Sois honnête — c'est cette réponse qui nous aide à savoir si on peut vraiment t'aider."
                  className={textareaCls}
                  rows={4}
                />
              </FormField>
            </div>

            {/* ─── Bloc D ─── */}
            <div className="bg-surface border border-border card-accent rounded-xl p-7">
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent mb-6 font-sans">
                D — Tes disponibilités
              </div>
              <h3 className="font-serif italic text-[20px] text-text mb-5">Quand es-tu dispo ?</h3>

              <FormField label="Peux-tu bloquer 1h par jour pendant 3 jours consécutifs sur Zoom ?" required>
                <RadioGroup name="disponibilite_zoom" options={formOptions.disponibilite_zoom} value={data.disponibilite_zoom} onChange={(v) => update('disponibilite_zoom', v)} columns={1} />
              </FormField>

              <FormField label="Quelle semaine te conviendrait ?">
                <input
                  type="text"
                  value={data.semaine_preferee}
                  onChange={(e) => update('semaine_preferee', e.target.value)}
                  placeholder="Ex : semaine du 21 juillet, ou : flexible sur juillet"
                  className={inputCls}
                />
              </FormField>
            </div>

            {/* ─── Submit ─── */}
            <Button type="submit" variant="submit" className={submitting ? 'opacity-60 pointer-events-none' : ''}>
              {submitting ? 'Envoi en cours...' : '→ ENVOYER MA CANDIDATURE'}
            </Button>

            <p className="text-[11px] text-subtle text-center font-sans leading-relaxed">
              En cliquant, tu acceptes d'être contacté(e) par téléphone par un membre de l'équipe WEYOND pour valider ta
              candidature.
            </p>
          </form>

          {/* ─── Réassurance ─── */}
          <div className="grid grid-cols-3 max-[520px]:grid-cols-1 gap-4 mt-10">
            {[
              { icon: '🔒', text: 'Candidature 100% gratuite — aucune CB demandée' },
              { icon: '📞', text: "Tu seras appelé(e) sous 48h par un expert (pas un commercial)" },
              { icon: '✋', text: "On dit non si on pense pas pouvoir t'aider vraiment" },
            ].map((r, i) => (
              <div key={i} className="bg-deep border border-border rounded-lg p-4 text-center">
                <div className="text-[24px] mb-2">{r.icon}</div>
                <p className="text-[12px] text-muted font-sans leading-snug">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-black border-t border-border py-8 px-6 text-center">
        <div className="font-display text-[20px] tracking-[3px] text-accent mb-2">WEYOND</div>
        <p className="text-[11px] text-subtle font-sans">
          Le Partenaire Carrière des Coachs Sportifs · © 2024 WEYOND · Mentions légales
        </p>
      </footer>
    </div>
  )
}
