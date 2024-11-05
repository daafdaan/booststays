'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { submitEmail } from "@/app/actions"
import { toast } from "sonner"

export function EmailForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const result = await submitEmail(email)
      if (result.success) {
        setStatus('success')
        setEmail('')
        toast.success("Thanks for your interest! We'll be in touch soon.")
      } else {
        throw new Error()
      }
    } catch {
      setStatus('error')
      toast.error("Something went wrong. Please try again.")
    } finally {
      setStatus('idle')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white h-12 px-4 focus:border-[#2e74ff] focus:ring-[#2e74ff] text-base rounded-lg"
      />
      <Button 
        type="submit" 
        disabled={status === 'loading'}
        className="bg-[#2e74ff] hover:bg-[#2361db] text-white px-6 h-12 rounded-lg text-base font-medium"
      >
        {status === 'loading' ? 'Sending...' : 'Get Started'}
      </Button>
    </form>
  )
} 