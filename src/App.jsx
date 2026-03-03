import { useState } from 'react'
import Step1Landing from './components/Step1Landing'
import Step2Application from './components/Step2Application'
import Step3Confirmation from './components/Step3Confirmation'

export default function App() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    // Step 1 — Optin
    coach_presentiel: '',
    vu_video: '',
    prenom: '',
    nom: '',
    email: '',
    tel: '',
    // Step 2 — Bloc A
    statut: '',
    clients_payants: '',
    revenus: '',
    // Bloc B
    deja_essaye: [],
    blocage_principal: '',
    // Bloc C
    ca_cible: '',
    delai: '',
    pourquoi_maintenant: '',
    // Bloc D
    disponibilite_zoom: '',
    semaine_preferee: '',
  })

  const goTo = (s) => {
    setStep(s)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const update = (field, value) => {
    setFormData((prev) => {
      if (field === 'deja_essaye') {
        const arr = prev.deja_essaye
        return {
          ...prev,
          deja_essaye: arr.includes(value)
            ? arr.filter((v) => v !== value)
            : [...arr, value],
        }
      }
      return { ...prev, [field]: value }
    })
  }

  if (step === 0) return <Step1Landing data={formData} update={update} onNext={() => goTo(1)} />
  if (step === 1) return <Step2Application data={formData} update={update} onSubmit={() => goTo(2)} />
  return <Step3Confirmation />
}
