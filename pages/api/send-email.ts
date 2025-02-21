import { NextApiRequest, NextApiResponse } from 'next'
import { ContactsApi } from '@getbrevo/brevo'

const BREVO_API_KEY = process.env.BREVO_KEY as string

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body

  try {
    const brevoClient = new ContactsApi(BREVO_API_KEY)
    
    await brevoClient.createContact({
      email,
      listIds: [2],
      attributes: {
        FIRSTNAME: 'Lead',
        LASTNAME: 'Portfolio'
      }
    })

    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Erreur Brevo :', error)
    res.status(500).json({ error: 'Échec de l\'envoi' })
  }
}