'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark via-dark-light to-dark">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy & CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Stop Guessing. <span className="text-gradient">Start Growing.</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300">
                The Ahmedabad Digital Agency That Engineers ROI, Not Just 'Likes'.
              </h2>
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed">
                Most agencies burn your budget on vanity metrics. AdCraze uses data-driven systems to cut waste and scale your revenue. Specializing in <span className="text-primary font-semibold">Google Ads</span>, <span className="text-primary font-semibold">Meta Ads</span>, and <span className="text-primary font-semibold">High-Converting Funnels</span>.
              </p>
            </div>

            <div>
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-primary to-accent text-white font-bold text-xl px-12 py-5 rounded-lg shadow-2xl hover:scale-105 transform transition duration-300 hover:shadow-primary/50"
              >
                Get Your Free Audit
              </a>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-dark-light to-dark border border-primary/30 rounded-2xl p-8 shadow-2xl">
              {/* Dashboard UI Mockup */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-400 text-sm">Live Performance</span>
                  </div>
                  <div className="text-accent font-bold text-xl">ROAS 5.2x</div>
                </div>

                {/* Main Graph */}
                <div className="relative h-64 bg-dark rounded-lg p-4 overflow-hidden">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 grid grid-rows-5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="border-b border-gray-800"></div>
                    ))}
                  </div>

                  {/* Upward Line Graph */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#FFD700" />
                      </linearGradient>
                      <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Area under curve */}
                    <path
                      d="M 0 180 L 50 160 L 100 140 L 150 110 L 200 90 L 250 70 L 300 40 L 350 20 L 400 10 L 400 200 L 0 200 Z"
                      fill="url(#areaGradient)"
                    />

                    {/* Main line */}
                    <path
                      d="M 0 180 L 50 160 L 100 140 L 150 110 L 200 90 L 250 70 L 300 40 L 350 20 L 400 10"
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                    />
                  </svg>

                  {/* Floating Metric */}
                  <div className="absolute top-8 right-8 bg-green-500/20 border border-green-500 rounded-lg px-4 py-2 backdrop-blur-sm">
                    <div className="text-green-400 text-2xl font-bold glow">+387%</div>
                    <div className="text-green-300 text-xs">Revenue Growth</div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-dark rounded-lg p-4 border border-gray-800">
                    <div className="text-gray-400 text-xs mb-1">Conversions</div>
                    <div className="text-2xl font-bold text-accent">2,847</div>
                    <div className="text-green-400 text-xs mt-1">↑ 42%</div>
                  </div>
                  <div className="bg-dark rounded-lg p-4 border border-gray-800">
                    <div className="text-gray-400 text-xs mb-1">CTR</div>
                    <div className="text-2xl font-bold text-accent">8.3%</div>
                    <div className="text-green-400 text-xs mt-1">↑ 156%</div>
                  </div>
                  <div className="bg-dark rounded-lg p-4 border border-gray-800">
                    <div className="text-gray-400 text-xs mb-1">CPA</div>
                    <div className="text-2xl font-bold text-accent">₹340</div>
                    <div className="text-green-400 text-xs mt-1">↓ 63%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
