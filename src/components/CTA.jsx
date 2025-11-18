export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-blue-600/20 via-fuchsia-600/20 to-amber-500/20 p-1">
          <div className="rounded-[calc(1.5rem-4px)] bg-slate-900/60 backdrop-blur-xl p-10">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Ready to grow?</h3>
              <p className="mt-2 text-slate-300/90">Tell us about your goals. We’ll send a custom growth plan with channels, projections, and budgets.</p>
            </div>

            <form className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input className="col-span-1 sm:col-span-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-white/30" placeholder="Your name" />
              <input className="col-span-1 sm:col-span-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-white/30" placeholder="Work email" />
              <button type="button" className="col-span-1 rounded-xl bg-white text-slate-900 text-sm font-semibold px-5 py-3 shadow-sm hover:shadow-md">Get my plan</button>
            </form>
            <p className="mt-3 text-xs text-slate-400">We’ll get back within 24 hours. No spam. No obligations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
