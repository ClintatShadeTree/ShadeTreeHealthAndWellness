import { ExternalLink, ShoppingCart } from 'lucide-react';

export default function ResourcesPage({ data }: { data?: any }) {
  const resources = data?.resources || [];
  const pageHeader = data?.pageHeaders?.resources || {
    heading: "Resources",
    subheading: "Curated tools, ministries, and books to support your journey."
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-blue-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">{pageHeader.heading}</h2>
          <p className="text-xl text-slate-300 font-serif italic max-w-2xl mx-auto">
            {pageHeader.subheading}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-slate-blue-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-blue-700/50 shadow-xl flex flex-col h-full hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-1">
              <h3 className="text-2xl font-serif text-white mb-4">{resource.title}</h3>
              <p className="text-slate-300 mb-8 flex-grow leading-relaxed">
                {resource.description}
              </p>
              <a 
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 w-full py-3 px-6 text-white rounded-lg transition-colors font-medium mt-auto ${
                  resource.action === 'PURCHASE' ? 'bg-amber-600 hover:bg-amber-700' : 'bg-earth-green hover:bg-earth-green-hover'
                }`}
              >
                {resource.action === 'PURCHASE' ? <ShoppingCart size={18} /> : <ExternalLink size={18} />}
                {resource.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
