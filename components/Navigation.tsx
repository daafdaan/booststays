'use client'

import Link from "next/link"

export function Navigation() {
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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