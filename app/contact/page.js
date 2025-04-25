'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('loading')

    const serviceID = process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID
    const templateID = process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID
    const userID = process.env.NEXT_PUBLIC_REACT_APP_USER_ID

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }

    try {
      const response = await emailjs.send(serviceID, templateID, templateParams, userID)
      console.log('Réponse EmailJS:', response)
      setFormStatus('success')
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error)
      setFormStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12">
      <motion.div
        className="text-3xl font-bold text-white mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Contactez-moi</h2>
        <p className="text-lg text-gray-300">Je serai ravi de répondre à vos questions !</p>
      </motion.div>

      <motion.form
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-left text-gray-300">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none"
            placeholder="Votre nom"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-left text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none"
            placeholder="Votre email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-left text-gray-300">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none"
            rows="4"
            placeholder="Votre message"
            required
          />
        </div>

        <div className="mb-4">
          <motion.button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={formStatus === 'loading'}
          >
            {formStatus === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
          </motion.button>
        </div>

        {formStatus === 'success' && (
          <div className="text-green-500 mt-4">Merci ! Votre message a été envoyé avec succès.</div>
        )}

        {formStatus === 'error' && (
          <div className="text-red-500 mt-4">Oups ! Il y a eu un problème avec l'envoi de votre message. Veuillez réessayer.</div>
        )}
      </motion.form>
    </section>
  )
}
