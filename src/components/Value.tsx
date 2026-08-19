import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Value({ data }: { data: any }) {
  return (
    <section id="value" className="py-24 bg-slate-blue-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
              {data.heading}
            </h2>
            <p className="text-xl text-slate-300 font-serif italic mb-10">
              {data.subtitle}
            </p>
            <ul className="space-y-6 mb-12">
              {data.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-earth-green shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-lg leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
            <Link to="/testimonials" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-blue-700 hover:bg-slate-blue-600 text-white rounded-full transition-colors text-lg font-medium shadow-lg">
              Read Client Testimonials
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-slate-blue-900 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img 
              src={data.image || "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"} 
              alt="Coaching session or nature path" 
              className="relative z-10 rounded-2xl shadow-2xl object-cover w-full h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
