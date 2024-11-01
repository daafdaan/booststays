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
        className="max-w-lg flex-1"
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" className="bg-blue-800 hover:bg-blue-900 text-white">
        Get Started
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
} 