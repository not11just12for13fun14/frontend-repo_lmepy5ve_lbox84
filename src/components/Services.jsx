import { Megaphone, BarChart3, Camera, Globe2, Wand2 } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Paid Media',
    desc: 'Full-funnel campaigns across Meta, Google, TikTok, and YouTube with rigorous testing and creative iteration.'
  },
  {
    icon: BarChart3,
    title: 'SEO & Content',
    desc: 'Authority-building content engines, technical SEO, and keyword strategies that compound organic traffic.'
  },
  {
    icon: Camera,
    title: 'Creative Studio',
    desc: 'UGC-style ads, motion graphics, and thumb-stopping branded visuals tailored for each platform.'
  },
  {
    icon: Globe2,
    title: 'CRO & Web',
    desc: 'High-converting landing pages, A/B testing, and on-site optimization to turn traffic into customers.'
  },
  {
    icon: Wand2,
    title: 'AI Automation',
    desc: 'Campaign automation, reporting pipelines, and AI assistants that streamline your marketing ops.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">What we do</h2>
          <p className="mt-3 text-slate-300/90">End-to-end growth support across paid, organic, and creative — built for speed and measurable impact.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-slate-300/90 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
