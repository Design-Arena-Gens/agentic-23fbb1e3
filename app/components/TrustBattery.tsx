'use client'

export default function TrustBattery() {
  const industries = [
    'Retail Excellence',
    'Real Estate Leaders',
    'Travel Innovators',
    'Healthcare Providers',
    'E-Commerce Giants',
    'B2B Services'
  ]

  return (
    <section className="py-16 bg-dark-light border-y border-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-lg mb-4">Trusted by businesses across Gujarat</p>
          <div className="inline-block bg-gradient-to-r from-primary to-accent text-dark font-bold text-4xl lg:text-5xl px-8 py-4 rounded-lg">
            Avg. Client ROI Increase: 300%+
          </div>
        </div>

        {/* Client Industries Ticker */}
        <div className="overflow-hidden relative">
          <div className="flex gap-8 animate-scroll">
            {[...industries, ...industries].map((industry, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-dark border border-gray-800 rounded-lg px-8 py-6 min-w-[280px]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xl font-semibold text-gray-300">{industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </div>
    </section>
  )
}
