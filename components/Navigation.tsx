'use client'

import { useEffect, useState } from "react"
import Link from "next/link"

export function Navigation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) {
    // Return a static version that matches server render
    return (
      <nav className="flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">Features</Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">Testimonials</Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">Pricing</Link>
      </nav>
    )
  }

  return (
    <nav className="flex gap-4 sm:gap-6">
      <Link 
        className="text-sm font-medium hover:underline underline-offset-4" 
        href="#features" 
        onClick={scrollToSection('features')}
      >
        Features
      </Link>
      <Link 
        className="text-sm font-medium hover:underline underline-offset-4" 
        href="#testimonials" 
        onClick={scrollToSection('testimonials')}
      >
        Testimonials
      </Link>
      <Link 
        className="text-sm font-medium hover:underline underline-offset-4" 
        href="#pricing" 
        onClick={scrollToSection('pricing')}
      >
        Pricing
      </Link>
    </nav>
  )
} 