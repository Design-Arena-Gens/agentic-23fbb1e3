import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AdCraze - Stop Guessing. Start Growing.',
  description: 'The Ahmedabad Digital Agency That Engineers ROI, Not Just Likes. Google Ads, Meta Ads, and High-Converting Funnels.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
