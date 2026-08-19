import Services from '../components/Services';

export default function ServicesPage({ data }: { data: any }) {
  const pageHeader = data?.pageHeaders?.services || {
    heading: "Book a Consultation",
    subheading: "Ready to take the next step? Fill out the form below and we will get back to you shortly."
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-blue-900">
      <Services data={data.services} />
      
      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-slate-blue-800">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">{pageHeader.heading}</h2>
            <p className="text-lg text-slate-300">{pageHeader.subheading}</p>
          </div>
          
          <form name="contact" method="POST" data-netlify="true" action="/services?success=true" className="space-y-6">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                <input type="text" name="firstName" id="firstName" className="w-full bg-slate-blue-900 border border-slate-blue-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-earth-green" placeholder="Jane" required />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                <input type="text" name="lastName" id="lastName" className="w-full bg-slate-blue-900 border border-slate-blue-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-earth-green" placeholder="Doe" required />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <input type="email" name="email" id="email" className="w-full bg-slate-blue-900 border border-slate-blue-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-earth-green" placeholder="jane@example.com" required />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea name="message" id="message" rows={5} className="w-full bg-slate-blue-900 border border-slate-blue-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-earth-green" placeholder="How can we help you?" required></textarea>
            </div>
            
            <button type="submit" className="w-full py-4 bg-earth-green hover:bg-earth-green-hover text-white rounded-lg transition-colors text-lg font-medium shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
