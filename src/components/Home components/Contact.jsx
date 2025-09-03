import { Mail, Phone } from 'lucide-react'
import React from 'react'

const ContactCTA = () => (
  <section className="px-4 py-16 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Let's Talk About Your Project
      </h2>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        We'd love to hear about your ideas. Fill out the form below or reach out directly.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <button className="px-8 py-4 bg-[#FF8C42] text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg flex items-center gap-2">
        <Mail/>
          Send us an email
        </button>
        <button className="px-8 py-4 bg-[#FF8C42] text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg flex items-center gap-2">
      
          <Phone/>
          Call us directly: 08765 43210
        </button>
      </div>
      
     
     
    </div>
  </section>
)

export default ContactCTA


