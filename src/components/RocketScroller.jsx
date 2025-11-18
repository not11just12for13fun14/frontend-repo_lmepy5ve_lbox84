import { motion, useScroll, useTransform } from 'framer-motion'

function RocketSVG({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="rocketBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <linearGradient id="flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F43F5E" />
        </linearGradient>
      </defs>
      {/* Body */}
      <path d="M100 20c30 20 44 64 28 100l-56 0c-16-36-2-80 28-100Z" fill="url(#rocketBody)"/>
      {/* Window */}
      <circle cx="98" cy="70" r="14" fill="#0EA5E9" stroke="#E2E8F0" strokeWidth="6"/>
      {/* Fins */}
      <path d="M72 110c-18 4-34 22-36 40 20-12 38-10 48-6l-12-34Z" fill="#22D3EE"/>
      <path d="M126 110c18 4 34 22 36 40-20-12-38-10-48-6l12-34Z" fill="#22D3EE"/>
      {/* Exhaust nozzle */}
      <rect x="88" y="116" width="24" height="22" rx="4" fill="#0F172A" />
      {/* Flame */}
      <path d="M100 138c-10 10-14 24 0 44 14-20 10-34 0-44Z" fill="url(#flame)" opacity="0.9"/>
    </svg>
  )
}

export default function RocketScroller() {
  const { scrollYProgress } = useScroll()

  // Path across the viewport as you scroll
  const x = useTransform(scrollYProgress, [0, 1], ['-10vw', '110vw'])
  const y = useTransform(scrollYProgress, [0, 1], ['60vh', '-20vh'])
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 12])
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.05])
  const flameOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.8])

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      {/* subtle starfield */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage:
          'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.35) 0, rgba(255,255,255,0.35) 50%, transparent 51%),' +
          'radial-gradient(1px 1px at 80% 70%, rgba(255,255,255,0.25) 0, rgba(255,255,255,0.25) 50%, transparent 51%),' +
          'radial-gradient(1px 1px at 60% 20%, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 50%, transparent 51%),' +
          'radial-gradient(1px 1px at 35% 80%, rgba(255,255,255,0.3) 0, rgba(255,255,255,0.3) 50%, transparent 51%)'
      }} />

      {/* trail */}
      <motion.div style={{ x, y, rotate, scale }}
        className="absolute will-change-transform">
        <div className="absolute -left-32 -right-6 top-10 h-8 bg-gradient-to-r from-pink-500/0 via-pink-500/25 to-transparent blur-2xl" />
        <div className="absolute -left-20 -right-4 top-10 h-6 bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-400/25 to-transparent blur-xl" />
        {/* Rocket */}
        <div className="relative">
          <RocketSVG className="h-20 w-20 drop-shadow-[0_8px_24px_rgba(99,102,241,0.55)]" />
          <motion.div style={{ opacity: flameOpacity }}
            className="absolute left-1/2 -translate-x-1/2 top-[54px] h-10 w-10 rounded-full bg-rose-400/40 blur-xl"/>
        </div>
      </motion.div>
    </div>
  )
}
