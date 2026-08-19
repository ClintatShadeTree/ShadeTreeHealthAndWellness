import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

let hasPlayedHeroAnimation = false;

export default function Hero({ data }: { data?: any }) {
  // Custom easing curves for premium, handcrafted feel
  const easeOutQuart = [0.25, 1, 0.5, 1] as const;
  const easeInOutSine = [0.445, 0.05, 0.55, 0.95] as const;

  const [isFirstLoad, setIsFirstLoad] = useState(!hasPlayedHeroAnimation);

  useEffect(() => {
    if (!hasPlayedHeroAnimation) {
      hasPlayedHeroAnimation = true;
    }
  }, []);

  const heroData = data?.hero || {
    title: "Shade Tree",
    subtitle: "Health & Wellness"
  };

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#070b0e]">
      
      {/* Background Atmosphere - Represents dawn/growth light */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-t from-earth-green/15 via-slate-blue-900/30 to-transparent"
        initial={{ opacity: isFirstLoad ? 0 : 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: isFirstLoad ? 4 : 0, delay: isFirstLoad ? 1 : 0, ease: easeInOutSine }}
      />

      {/* Subtle radial glow from the soil/bottom */}
      <motion.div 
        className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-earth-green/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"
        initial={{ opacity: isFirstLoad ? 0 : 1, scale: isFirstLoad ? 0.8 : 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: isFirstLoad ? 4 : 0, delay: isFirstLoad ? 0.5 : 0, ease: easeInOutSine }}
      />
      
      {/* Content Canvas */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        
        {/* The Tree Growth Sequence */}
        <motion.div
          initial={isFirstLoad ? { clipPath: 'inset(100% 0 0 0)', y: 40, scale: 0.95, opacity: 0 } : { clipPath: 'inset(0% 0 0 0)', y: 0, scale: 1, opacity: 1 }}
          animate={{ clipPath: 'inset(0% 0 0 0)', y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: isFirstLoad ? 3.5 : 0, delay: isFirstLoad ? 0.8 : 0, ease: easeOutQuart }}
          className="mb-10 relative"
        >
          <img
            src="/uploads/MainLogo.png"
            alt="Shade Tree Logo"
            className="w-[36rem] max-w-[90vw] md:w-[48rem] h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Typography Reveal */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={isFirstLoad ? { opacity: 0, y: 15, filter: 'blur(12px)' } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: isFirstLoad ? 3 : 0, delay: isFirstLoad ? 3.2 : 0, ease: easeOutQuart }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif text-white tracking-widest font-light leading-tight drop-shadow-md">
            {heroData.title}
            <span className="block text-xl md:text-3xl tracking-[0.25em] text-earth-green/90 mt-5 font-sans uppercase">
              {heroData.subtitle}
            </span>
          </h1>
        </motion.div>

      </div>
    </section>
  );
}
