export default function FounderNote() {
  return (
    <section className="py-24 bg-dark-light relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Side */}
            <div className="relative">
              <div className="relative z-10">
                {/* Placeholder for Founder Photo */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full bg-dark-light rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-40 h-40 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm">Founder Photo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl"></div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div>
                <div className="inline-block bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text text-sm font-bold uppercase tracking-wider mb-2">
                  From The Founder
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  A Promise, Not a Pitch
                </h2>
              </div>

              <div className="space-y-4">
                <div className="relative pl-6 border-l-4 border-primary">
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed italic">
                    "I started AdCraze because I was tired of seeing businesses lose money on vague marketing. My promise is simple: <span className="text-white font-semibold">We treat your budget like our own.</span>"
                  </p>
                </div>

                <div className="bg-dark border border-gray-800 rounded-xl p-6 space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    After watching countless businesses get burned by agencies that prioritize flashy creative over real revenue, I built AdCraze on a single principle: <span className="text-primary font-semibold">Every rupee must be accountable.</span>
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    We don't do "brand awareness" campaigns. We don't chase vanity metrics. We engineer systems that turn advertising spend into predictable, scalable revenue.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    That's the AdCraze difference. That's my personal guarantee to you.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white mb-1">Kishan Gopani</p>
                    <p className="text-primary font-semibold">Founder, AdCraze</p>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-accent mb-1">₹50Cr+</div>
                  <div className="text-sm text-gray-400">Ad Spend Managed</div>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-accent mb-1">200+</div>
                  <div className="text-sm text-gray-400">Campaigns Optimized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
