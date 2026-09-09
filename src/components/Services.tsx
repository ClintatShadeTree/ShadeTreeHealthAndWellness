import { Check, ShieldCheck } from 'lucide-react';

export default function Services({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="services" className="py-24 bg-slate-blue-900 border-t border-slate-blue-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            {data.heading}
          </h2>
          <p className="text-xl text-earth-green mb-6 font-medium">
            {data.subtitle}
          </p>
          {data.description && (
            <div className="text-base text-slate-300 leading-relaxed whitespace-pre-wrap">
              {data.description}
            </div>
          )}
        </div>

        {data.whoWeServe && data.whoWeServe.length > 0 && (
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
        )}

        {/* Memberships Section */}
        {data.memberships && data.memberships.length > 0 && (
          <div className="mb-24">
            <h3 className="text-center text-sm font-semibold tracking-widest text-earth-green uppercase mb-12">
              Memberships
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {data.memberships.map((membership: any, index: number) => (
                <div key={index} className="bg-slate-blue-800 rounded-2xl p-8 border border-slate-blue-700 shadow-xl flex flex-col h-full">
                  <div className="mb-6">
                    <h4 className="text-2xl font-serif text-white mb-2">{membership.title}</h4>
                    <div className="text-earth-green font-semibold text-xl mb-4">{membership.price}</div>
                    <p className="text-slate-300 text-sm font-medium italic mb-4">{membership.subtitle}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{membership.description}</p>
                  </div>
                  
                  <div className="border-t border-slate-blue-700 pt-6 mb-8 flex-grow">
                    <ul className="space-y-4">
                      {membership.features.map((feature: string, fIndex: number) => {
                        const [boldPart, ...rest] = feature.split(':');
                        return (
                          <li key={fIndex} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-earth-green shrink-0 mt-0.5" />
                            <span className="text-slate-300 text-sm leading-relaxed">
                              {rest.length > 0 ? (
                                <>
                                  <span className="font-semibold text-white">{boldPart}:</span>
                                  {rest.join(':')}
                                </>
                              ) : (
                                feature
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {membership.perfectFor && (
                    <div className="mt-auto bg-slate-blue-900/50 p-4 rounded-xl border border-slate-blue-700/50">
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">Perfect For:</p>
                      <p className="text-sm text-slate-300 italic">{membership.perfectFor}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Packages Section */}
        {data.packages && data.packages.length > 0 && (
          <div>
            <h3 className="text-center text-sm font-semibold tracking-widest text-earth-green uppercase mb-12">
              Coaching Packages
            </h3>
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
          </div>
        )}
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block px-10 py-4 bg-earth-green hover:bg-earth-green-hover text-white rounded-xl transition-colors font-medium shadow-lg">
            Inquire About Coaching
          </a>
        </div>
      </div>
    </section>
  );
}
