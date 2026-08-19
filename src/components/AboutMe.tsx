export default function AboutMe({ data }: { data: any }) {
  return (
    <section id="about" className="py-24 bg-slate-blue-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 flex justify-center">
            {/* Styled container for the lower resolution image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-slate-blue-700 rounded-full transform -translate-x-4 translate-y-4 opacity-50 blur-lg"></div>
              <div className="absolute inset-0 bg-earth-green rounded-full transform translate-x-2 -translate-y-2 opacity-50 blur-lg"></div>
              <img 
                src={data.image} 
                alt={data.name} 
                className="relative z-10 rounded-full shadow-2xl object-cover w-full h-full border-4 border-slate-blue-900"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl md:text-5xl font-serif text-white mb-4">
              {data.heading}
            </h3>
            <p className="text-xl text-slate-300 font-serif italic mb-8 border-l-4 border-earth-green pl-4">
              {data.subtitle}
            </p>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              {data.paragraphs.map((para: string, index: number) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
