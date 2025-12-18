export default function Comparison() {
  const comparisons = [
    {
      feature: 'Primary Focus',
      traditional: '"Brand Awareness" & "Creatives"',
      adcraze: '"Revenue" & "Math & Data"'
    },
    {
      feature: 'Reporting',
      traditional: 'Monthly Reports (Hidden Data)',
      adcraze: 'Real-Time Transparency'
    },
    {
      feature: 'Approach',
      traditional: 'Vague Promises',
      adcraze: 'Engineered Systems'
    },
    {
      feature: 'Optimization Frequency',
      traditional: 'When They Remember',
      adcraze: 'Daily Performance Tuning'
    },
    {
      feature: 'Success Metric',
      traditional: 'Likes & Impressions',
      adcraze: 'Revenue & ROAS'
    }
  ]

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #FF8C00 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            Why <span className="text-gradient">AdCraze</span> is Different
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stop wasting money on agencies that prioritize vanity metrics over real results
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Comparison Table */}
          <div className="bg-gradient-to-br from-dark-light to-dark border-2 border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="grid grid-cols-3 bg-dark-light border-b-2 border-gray-800">
              <div className="p-6"></div>
              <div className="p-6 text-center border-x border-gray-800">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-400">Traditional Agencies</h3>
                </div>
                <p className="text-sm text-gray-500">(The Old Way)</p>
              </div>
              <div className="p-6 text-center bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold text-white">AdCraze</h3>
                </div>
                <p className="text-sm text-accent font-semibold">(The ROI Way)</p>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 ${index !== comparisons.length - 1 ? 'border-b border-gray-800' : ''}`}>
                <div className="p-6 font-semibold text-white bg-dark-light">
                  {item.feature}
                </div>
                <div className="p-6 text-gray-400 border-x border-gray-800 relative">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="line-through">{item.traditional}</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-r from-dark to-dark-light relative">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-semibold">{item.adcraze}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="inline-block bg-gradient-to-r from-primary to-accent rounded-2xl p-8">
              <p className="text-2xl font-bold text-white mb-4">
                Stop Paying for Likes. Start Paying for Revenue.
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-dark font-bold text-lg px-10 py-4 rounded-lg hover:scale-105 transform transition duration-300"
              >
                Schedule Your Free Strategy Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
