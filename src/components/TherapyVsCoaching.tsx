export default function TherapyVsCoaching({ data }: { data: any }) {
  return (
    <section id="approach" className="py-24 bg-slate-blue-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            {data.heading}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* CSS Venn Diagram / Comparison */}
        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mt-12">
          
          {/* Circle 1: Therapy */}
          <div className="w-full md:w-80 md:h-80 rounded-2xl md:rounded-full border border-slate-blue-700 bg-slate-blue-800/80 p-8 flex flex-col items-center justify-center text-center z-10 relative md:-mr-16 shadow-xl backdrop-blur-sm transition-transform hover:z-30">
            <h3 className="font-serif text-2xl text-slate-200 mb-6">{data.therapy.title}</h3>
            <ul className="space-y-3 text-slate-400">
              {data.therapy.points.map((point: string, i: number) => (
                <li key={i} className="text-sm font-medium">{point}</li>
              ))}
            </ul>
          </div>

          {/* Overlap area (Desktop only visual representation) */}
          <div className="hidden md:flex w-56 h-80 flex-col items-center justify-center z-20 text-center px-6 border-y border-slate-blue-700/50 bg-gradient-to-b from-slate-blue-800/20 to-slate-blue-800/20 backdrop-blur-md shadow-2xl rounded-[100%]">
             <ul className="space-y-4 text-earth-green font-medium">
               {data.overlap.map((point: string, i: number) => (
                  <li key={i} className="text-sm">{point}</li>
               ))}
             </ul>
          </div>

          {/* Mobile Overlap Fallback */}
          <div className="md:hidden w-full bg-slate-blue-800/50 rounded-2xl p-6 border border-slate-blue-700 text-center">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">Shared Focus</h4>
            <ul className="space-y-2 text-earth-green font-medium flex flex-wrap justify-center gap-4">
               {data.overlap.map((point: string, i: number) => (
                  <li key={i} className="text-sm">{point}</li>
               ))}
             </ul>
          </div>

          {/* Circle 2: Coaching */}
          <div className="w-full md:w-80 md:h-80 rounded-2xl md:rounded-full border-2 border-earth-green/50 bg-earth-green/5 p-8 flex flex-col items-center justify-center text-center z-10 relative md:-ml-16 shadow-xl backdrop-blur-sm transition-transform hover:z-30">
            <h3 className="font-serif text-2xl text-earth-green mb-6">{data.coaching.title}</h3>
            <ul className="space-y-3 text-slate-300">
              {data.coaching.points.map((point: string, i: number) => (
                <li key={i} className="text-sm font-medium">{point}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
