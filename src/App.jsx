import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'
import RocketScroller from './components/RocketScroller'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Background gradient glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[45rem] bg-gradient-to-tr from-blue-500/25 via-fuchsia-500/25 to-amber-400/25 blur-3xl rounded-full" />
      </div>

      {/* Global rocket animation overlay */}
      <RocketScroller />

      <Navbar />
      <Hero />
      <Services />
      <CTA />

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Blaze Digital. All rights reserved.</p>
          <div className="text-sm text-slate-400">Privacy • Terms</div>
        </div>
      </footer>
    </div>
  )
}

export default App
