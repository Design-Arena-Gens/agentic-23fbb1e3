export default function Services() {
  const services = [
    {
      title: 'Google Ads Management',
      description: 'Capture high-intent buyers searching for exactly what you sell.',
      features: [
        'Search Campaign Optimization',
        'Shopping Ads for E-Commerce',
        'Display & Remarketing',
        'Performance Max Campaigns',
        'Conversion Tracking Setup'
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Meta (Facebook/Instagram) Ads',
      description: 'Stop the scroll and generate leads on autopilot.',
      features: [
        'Lead Generation Campaigns',
        'E-Commerce Sales Funnels',
        'Retargeting Strategies',
        'Creative Testing & Optimization',
        'Audience Segmentation'
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Conversion Web Design',
      description: 'Turn traffic into paying customers with SEO-friendly, fast-loading landing pages.',
      features: [
        'High-Converting Landing Pages',
        'Mobile-First Responsive Design',
        'A/B Testing & CRO',
        'Speed Optimization',
        'SEO Foundation'
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-primary to-accent'
    }
  ]

  return (
    <section className="py-24 bg-dark-light relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient">Growth Levers</span> That Actually Work
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three core services engineered to maximize your return on ad spend
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="bg-dark border-2 border-gray-800 group-hover:border-primary rounded-2xl p-8 h-full transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 blur-xl -z-10`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
