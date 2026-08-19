import { Link } from 'react-router-dom';

export default function Footer({ data }: { data?: any }) {
  const currentYear = new Date().getFullYear();
  const footerData = data?.footer || {
    description: "Rebuilding lives from the inside out through functional medicine, holistic coaching, and faith-based principles.",
    email: "Clint@ShadeTreeHealthAndWellness.com",
    phone: "(479)-225-3552",
    location: "Tontitown, Arkansas"
  };

  return (
    <footer className="bg-slate-blue-900 border-t border-slate-blue-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 text-white mb-6 group">
              <span className="font-serif font-semibold text-lg tracking-wide group-hover:text-earth-green transition-colors">Shade Tree Health & Wellness</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-8">
              {footerData.description}
            </p>
            <div className="flex items-center gap-4">
              <img src="/uploads/logo-ahncc.png" alt="AHNCC Board Certified" className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-earth-green transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-earth-green transition-colors">Services & Booking</Link></li>
              <li><Link to="/resources" className="hover:text-earth-green transition-colors">Resources</Link></li>
              <li><Link to="/testimonials" className="hover:text-earth-green transition-colors">Client Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href={`mailto:${footerData.email}`} className="hover:text-earth-green transition-colors">{footerData.email}</a></li>
              <li><a href={`tel:${footerData.phone.replace(/[^0-9]/g, '')}`} className="hover:text-earth-green transition-colors">{footerData.phone}</a></li>
              <li>{footerData.location}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-blue-800 flex flex-col items-center text-center gap-4 text-xs text-slate-500">
          <p>
            Site Owned By Shade Tree Health & Wellness &middot; &copy; {currentYear} &middot; | <a href="https://getbetterbasics.com" target="_blank" rel="noopener noreferrer" className="hover:text-earth-green transition-colors">betterbasics.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
