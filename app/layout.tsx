import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BoostStays',
  description: 'Boost Your Property Rankings on Booking.com & Airbnb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body className="font-satoshi" suppressHydrationWarning>{children}</body>
    </html>
  )
}