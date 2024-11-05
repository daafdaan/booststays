'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitEmail(email: string) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not defined in environment variables')
    return { success: false }
  }

  try {
    await resend.emails.send({
      from: 'BoostStays <onboarding@resend.dev>',
      to: 'david.notte@gmail.com',
      subject: 'New BoostStays Lead',
      text: `New lead from: ${email}`,
      replyTo: email,
    })
    
    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false }
  }
}