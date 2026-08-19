import { useState } from 'react';
import { Quote, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TestimonialCard = ({ testimonial, isFeatured, onClick }: { testimonial: any, isFeatured?: boolean, onClick: () => void }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-slate-blue-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-blue-700/50 shadow-xl relative flex flex-col hover:shadow-2xl hover:border-earth-green/40 transition-all duration-300 cursor-pointer ${isFeatured ? 'col-span-1 md:col-span-2 lg:col-span-3 border-earth-green/30 lg:p-12' : ''}`}
    >
      <Quote className={`w-10 h-10 text-earth-green absolute ${isFeatured ? 'top-10 right-10 opacity-40 scale-150' : 'top-6 right-6 opacity-30'}`} />
      
      <div className="relative h-40 overflow-hidden mb-6">
        <p className={`text-slate-200 italic leading-relaxed relative z-10 pr-6 ${isFeatured ? 'text-lg md:text-2xl' : 'text-sm md:text-base'}`}>
          "{testimonial.quote}"
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-blue-800 to-transparent z-20 pointer-events-none" />
      </div>
      
      <div className="text-earth-green text-sm font-medium mb-6 flex items-center hover:text-white transition-colors">
        Read Full Testimonial &rarr;
      </div>
      
      <div className={`text-earth-green font-semibold border-t border-slate-blue-700/50 pt-4 mt-auto ${isFeatured ? 'text-lg' : ''}`}>
        — {testimonial.author}
      </div>
    </div>
  );
};

export default function TestimonialsPage({ data }: { data: any }) {
  const [selectedTestimonial, setSelectedTestimonial] = useState<any | null>(null);
  
  const pageHeader = data?.pageHeaders?.testimonials || {
    heading: "Testimonials",
    subheading: "Hear from those who have journeyed with us."
  };
  const featuredTestimonial = data.value.testimonials[0];
  const otherTestimonials = data.value.testimonials.slice(1);

  return (
    <div className="pt-24 min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={data.value.image} 
          alt="Road background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-blue-900/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-blue-900/95 via-slate-blue-900/80 to-slate-blue-900/95"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">{pageHeader.heading}</h2>
          <p className="text-xl text-slate-300 font-serif italic max-w-2xl mx-auto">{pageHeader.subheading}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {featuredTestimonial && (
             <TestimonialCard 
                testimonial={featuredTestimonial} 
                isFeatured={true} 
                onClick={() => setSelectedTestimonial(featuredTestimonial)} 
             />
          )}
          {otherTestimonials.map((testimonial: any, index: number) => (
            <TestimonialCard 
               key={index} 
               testimonial={testimonial} 
               onClick={() => setSelectedTestimonial(testimonial)} 
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#070b0e]/90 backdrop-blur-sm"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div 
              initial={{ y: 20, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.95 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className="bg-slate-blue-800 border border-slate-blue-700/50 p-8 md:p-12 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>
              
              <Quote className="w-16 h-16 text-earth-green/20 mb-6" />
              
              <p className="text-slate-100 text-lg md:text-2xl font-serif italic leading-relaxed whitespace-pre-wrap mb-10">
                "{selectedTestimonial.quote}"
              </p>
              
              <div className="text-earth-green text-lg font-semibold border-t border-slate-blue-700/50 pt-6">
                — {selectedTestimonial.author}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
