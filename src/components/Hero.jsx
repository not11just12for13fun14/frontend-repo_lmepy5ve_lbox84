import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] pt-28 flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/60 to-slate-950/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 xl:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs text-slate-100 mb-5">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            AI-ready growth studio
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Digital marketing that actually grows your brand
          </h1>
          <p className="mt-5 text-lg text-slate-200/90 max-w-xl">
            We blend performance marketing, content engines, and stunning creative to drive measurable revenue across every channel.
          </p>
          <div className="mt-7 flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-xl bg-white text-slate-900 text-sm font-semibold px-5 py-3 shadow-sm hover:shadow-md">
              Get a free growth plan
            </a>
            <a href="#services" className="inline-flex items-center rounded-xl bg-white/10 text-white text-sm font-semibold px-5 py-3 border border-white/15 hover:bg-white/15">
              Explore services
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-slate-300/80 text-sm">
            <div>
              <div className="text-white font-semibold text-xl">120M+</div>
              <div className="">Audience reached</div>
            </div>
            <div>
              <div className="text-white font-semibold text-xl">3.2x</div>
              <div className="">Avg. ROAS</div>
            </div>
            <div>
              <div className="text-white font-semibold text-xl">250+</div>
              <div className="">Campaigns launched</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 xl:col-span-6 hidden lg:block" aria-hidden>
          <div className="aspect-[4/3] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl" />
        </div>
      </div>
    </section>
  )
}
