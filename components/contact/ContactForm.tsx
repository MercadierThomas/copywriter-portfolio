'use client'
import { useState } from 'react'
import { TransactionalEmailsApi, SendSmtpEmail } from '@getbrevo/brevo'

export const ContactForm = () => {
  const [email, setEmail] = useState('')
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
  
      if (response.ok) alert('Demande envoyée !')
    } catch (error) {
      alert('Erreur : merci de réessayer')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        required
        placeholder="Votre meilleur email..."
        className="w-full p-3 bg-gray-800 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button 
        type="submit" 
        className="bg-email-primary text-black px-6 py-3 rounded font-bold hover:opacity-90"
      >
        Audit Gratuit 🚨
      </button>
    </form>
  )
}