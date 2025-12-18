import Hero from './components/Hero'
import TrustBattery from './components/TrustBattery'
import SystemBreakdown from './components/SystemBreakdown'
import Services from './components/Services'
import Comparison from './components/Comparison'
import FounderNote from './components/FounderNote'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBattery />
      <SystemBreakdown />
      <Services />
      <Comparison />
      <FounderNote />
      <Footer />
    </main>
  )
}
