import { Compass, RefreshCw, Leaf } from 'lucide-react';

export default function Process({ data }: { data: any }) {
  const icons = [
    <Compass className="w-10 h-10 text-earth-green" />,
    <RefreshCw className="w-10 h-10 text-earth-green" />,
    <Leaf className="w-10 h-10 text-earth-green" />
  ];

  return (
    <section id="process" className="py-24 bg-slate-blue-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-earth-green uppercase mb-3">
            {data.heading}
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white">
            {data.subheading}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {data.steps.map((step: any, index: number) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-slate-blue-800 flex items-center justify-center mb-6 shadow-xl border border-slate-blue-700 transition-transform group-hover:-translate-y-2">
                {icons[index]}
              </div>
              <h4 className="text-2xl font-serif text-white mb-4">{step.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
