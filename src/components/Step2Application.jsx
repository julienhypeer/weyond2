import { useMemo, useState } from 'react'
import Button from './ui/Button'
import RadioGroup from './ui/RadioGroup'
import CheckboxGroup from './ui/CheckboxGroup'
import FormField from './ui/FormField'
import { formOptions } from '../data/content'

const WEBHOOK = 'https://hook.eu1.make.com/3anb1c10z6ee5otifdy9oiiri5j7u6uh'

const REQUIRED = [
  'statut',
  'clients_payants',
  'revenus',
  'blocage_principal',
  'ca_cible',
  'delai',
]

function StepDot({ done, active, label }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold font-sans transition-all duration-300 ${
          done
            ? 'bg-accent text-black shadow-[0_0_12px_rgba(150,144,94,0.3)]'
            : active
              ? 'border-2 border-accent text-accent shadow-[0_0_12px_rgba(150,144,94,0.15)]'
              : 'border border-border text-subtle'
        }`}
      >
        {done ? '✓' : label[0]}
      </div>
      <span className={`text-[9px] hidden sm:block font-sans ${active ? 'text-accent font-semibold' : 'text-subtle'}`}>{label}</span>
    </div>
  )
}

export default function Step2Application({ data, update, onSubmit }) {
  const [submitting, setSubmitting] = useState(false)
  const [emailError, setEmailError] = useState('')

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
    if (!data.confirm_email) {
      setEmailError('Merci de confirmer ton email.')
      return
    }
    if (data.confirm_email !== data.email) {
      setEmailError('Les emails ne correspondent pas.')
      return
    }
    setEmailError('')
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
    'w-full py-[13px] px-4 border border-border rounded text-[15px] text-text bg-card outline-none transition-all duration-300 font-sans placeholder:text-subtle focus:border-accent focus:shadow-[0_0_0_3px_rgba(150,144,94,0.15)] focus:bg-surface resize-y min-h-[100px]'
  const inputCls =
    'w-full py-[14px] px-4 border border-border rounded text-[15px] text-text bg-card outline-none transition-all duration-300 font-sans placeholder:text-subtle focus:border-accent focus:shadow-[0_0_0_3px_rgba(150,144,94,0.15)] focus:bg-surface'

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
        <div className="flex items-center justify-between mb-6">
          <img src="/logo-weyond.png" alt="WEYOND" className="h-7" />
        </div>

        <div className="flex items-center gap-2 mb-2">
          <StepDot done label="Coordonnées" />
          <div className="flex-1 h-[2px] bg-accent rounded-full" />
          <StepDot active label="Candidature" />
          <div className="flex-1 h-[2px] bg-border rounded-full" />
          <StepDot label="Confirmation" />
        </div>

        <div className="w-full h-[3px] bg-surface rounded-full overflow-hidden mt-4">
          <div className="h-full bg-accent transition-all duration-500 rounded-full shadow-[0_0_8px_rgba(150,144,94,0.4)]" style={{ width: `${progress}%` }} />
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

          <div className="flex items-center justify-center gap-6 sm:gap-8 mb-8">
            {[
              { icon: '📋', label: 'Candidature' },
              { icon: '📞', label: 'Appel' },
              { icon: '🎯', label: 'Mentorat' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-6 sm:gap-8">
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

      {/* ─── Formulaire ─── */}
      <section className="bg-black py-14 px-6">
        <div className="max-w-[700px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-[clamp(28px,4.5vw,44px)] uppercase tracking-[2px] mb-2">
              TON DOSSIER DE CANDIDATURE
            </h2>
            <p className="text-[14px] text-muted font-sans max-w-[520px] mx-auto">
              On lit chaque candidature. C'est ce qui nous permet de sélectionner les coachs qu'on peut vraiment aider —
              et d'arriver au premier jour préparés pour toi.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ─── Confirm email ─── */}
            <div className="bg-surface border border-border card-accent rounded-xl p-7 shadow-premium">
              <FormField label="Confirme ton email" required>
                <input
                  type="email"
                  value={data.confirm_email}
                  onChange={(e) => { update('confirm_email', e.target.value); setEmailError('') }}
                  placeholder={data.email || 'ton@email.com'}
                  className={`${inputCls} ${emailError ? 'border-red-500 focus:border-red-500' : ''}`}
                />
                {emailError && <p className="text-red-400 text-[12px] mt-1 font-sans">{emailError}</p>}
              </FormField>
            </div>

            {/* ─── Bloc A ─── */}
            <div className="bg-surface border border-border card-accent rounded-xl p-7 shadow-premium">
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent mb-2 font-sans">
                A — Situation actuelle
              </div>
              <div className="separator-gold mb-5" />
              <h3 className="font-serif italic text-[20px] text-text mb-6">Où tu en es aujourd'hui</h3>

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
            <div className="bg-surface border border-border card-accent rounded-xl p-7 shadow-premium">
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent mb-2 font-sans">
                B — Tes blocages
              </div>
              <div className="separator-gold mb-5" />
              <h3 className="font-serif italic text-[20px] text-text mb-6">Ce que tu as déjà essayé</h3>

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
            <div className="bg-surface border border-border card-accent rounded-xl p-7 shadow-premium">
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent mb-2 font-sans">
                C — Tes objectifs
              </div>
              <div className="separator-gold mb-5" />
              <h3 className="font-serif italic text-[20px] text-text mb-6">Où tu veux aller</h3>

              <FormField label="Chiffre d'affaires cible" required>
                <RadioGroup name="ca_cible" options={formOptions.ca_cible} value={data.ca_cible} onChange={(v) => update('ca_cible', v)} columns={3} />
              </FormField>

              <FormField label="Délai souhaité" required>
                <RadioGroup name="delai" options={formOptions.delai} value={data.delai} onChange={(v) => update('delai', v)} columns={3} />
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {[
              { icon: '🔒', text: 'Candidature 100% gratuite — aucune CB demandée' },
              { icon: '📞', text: "Tu seras appelé(e) sous 48h par un expert (pas un commercial)" },
              { icon: '✋', text: "On dit non si on pense pas pouvoir t'aider vraiment" },
            ].map((r, i) => (
              <div key={i} className="bg-deep border border-border rounded-lg p-4 text-center shadow-premium">
                <div className="text-[24px] mb-2">{r.icon}</div>
                <p className="text-[12px] text-muted font-sans leading-snug">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-black border-t border-border py-8 px-6 text-center">
        <img src="/logo-weyond.png" alt="WEYOND" className="h-5 mx-auto mb-2" />
        <p className="text-[11px] text-subtle font-sans">
          Le Partenaire Carrière des Coachs Sportifs · © 2024 WEYOND · Mentions légales
        </p>
      </footer>
    </div>
  )
}
