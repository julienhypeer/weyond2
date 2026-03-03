import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Step1Landing from './components/Step1Landing'
import Step2Application from './components/Step2Application'
import Step3Confirmation from './components/Step3Confirmation'

export default function App() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    // Step 1 — Optin
    coach_presentiel: '',
    vu_video: '',
    prenom: '',
    nom: '',
    email: '',
    tel: '',
    // Step 2
    confirm_email: '',
    // Bloc A
    statut: '',
    clients_payants: '',
    revenus: '',
    // Bloc B
    deja_essaye: [],
    blocage_principal: '',
    // Bloc C
    ca_cible: '',
    delai: '',
  })

  const goTo = (path) => {
    navigate(path)
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

  return (
    <Routes>
      <Route path="/" element={<Step1Landing data={formData} update={update} onNext={() => goTo('/candidature')} />} />
      <Route path="/candidature" element={<Step2Application data={formData} update={update} onSubmit={() => goTo('/confirmation')} />} />
      <Route path="/confirmation" element={<Step3Confirmation />} />
    </Routes>
  )
}
