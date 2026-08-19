import { Check, ShieldCheck } from 'lucide-react';

export default function Services({ data }: { data: any }) {
  return (
    <section id="services" className="py-24 bg-slate-blue-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            {data.heading}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-center text-sm font-semibold tracking-widest text-earth-green uppercase mb-8">
            Who We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {data.whoWeServe.map((group: string, index: number) => (
              <div key={index} className="flex items-center gap-2 bg-slate-blue-800 border border-slate-blue-700 px-5 py-3 rounded-full shadow-md">
                <ShieldCheck className="w-5 h-5 text-earth-green" />
                <span className="text-slate-200 text-sm font-medium">{group}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.packages.map((pkg: any, index: number) => (
            <div key={index} className="bg-slate-blue-800 rounded-2xl p-8 border border-slate-blue-700 shadow-xl flex flex-col h-full">
              <h3 className="text-2xl font-serif text-white mb-8 pb-4 border-b border-slate-blue-700">
                {pkg.title}
              </h3>
              <ul className="space-y-5 mb-10 flex-grow">
                {pkg.features.map((feature: string, fIndex: number) => (
                  <li key={fIndex} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-earth-green shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-block px-10 py-4 bg-earth-green hover:bg-earth-green-hover text-white rounded-xl transition-colors font-medium shadow-lg">
            Inquire About Coaching
          </a>
        </div>
      </div>
    </section>
  );
}
