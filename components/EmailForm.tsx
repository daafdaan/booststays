'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export function EmailForm() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted with email:", email)
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 h-12 px-4 bg-white/95 border-0 focus:ring-2 focus:ring-blue-600 text-base"
      />
      <Button 
        type="submit"
        className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white"
      >
        Get Started
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </form>
  )
} 