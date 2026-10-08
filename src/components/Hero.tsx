import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

let hasPlayedHeroAnimation = false;

export default function Hero({ data }: { data?: any }) {
  const shouldReduceMotion = useReducedMotion();
  const [isFirstLoad] = useState(!hasPlayedHeroAnimation);

  useEffect(() => {
    if (!hasPlayedHeroAnimation) {
      hasPlayedHeroAnimation = true;
    }
  }, []);

  const heroData = data?.hero || {
    title: "Shade Tree",
    subtitle: "Health & Wellness"
  };

  // Luxury, high-end editorial curve: crisp launch with an ultra-smooth decelerating settle
  const luxuryEase = [0.16, 1, 0.3, 1] as const;

  const isAnimated = isFirstLoad && !shouldReduceMotion;

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#070b0e] select-none">
      
      {/* Ambient Depth & Subtle Dawn Atmosphere */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#070b0e] via-slate-blue-900/25 to-[#070b0e] pointer-events-none"
        initial={{ opacity: isAnimated ? 0 : 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Radiant tree halo - soft, organic emerald bloom centered behind the emblem */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] max-w-[85vw] h-[34rem] rounded-full bg-gradient-radial from-earth-green/20 via-earth-green/5 to-transparent blur-3xl pointer-events-none"
        initial={{ opacity: isAnimated ? 0 : 1, scale: isAnimated ? 0.88 : 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.1, ease: luxuryEase }}
      />

      {/* Content Canvas */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 py-20 text-center">
        
        {/* Emblem Entrance: Silky, hardware-accelerated glide and scale */}
        <motion.div
          initial={{
            opacity: isAnimated ? 0 : 1,
            y: isAnimated ? 24 : 0,
            scale: isAnimated ? 0.96 : 1,
          }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: isAnimated ? 0.95 : 0,
            ease: luxuryEase,
          }}
          className="mb-8 relative flex items-center justify-center"
        >
          <img
            src="/uploads/MainLogo.png"
            alt="Shade Tree Health & Wellness"
            className="w-[28rem] max-w-[85vw] md:w-[38rem] lg:w-[44rem] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        {/* Brand Headline & Subtitle */}
        <div className="flex flex-col items-center">
          {/* Main Title: Poised, crisp serif */}
          <motion.h1
            initial={{
              opacity: isAnimated ? 0 : 1,
              y: isAnimated ? 16 : 0,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: isAnimated ? 0.85 : 0,
              delay: isAnimated ? 0.16 : 0,
              ease: luxuryEase,
            }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif text-white tracking-[0.06em] font-light leading-tight drop-shadow-md"
          >
            {heroData.title}
          </motion.h1>

          {/* Elegant grounding accent line */}
          <motion.div
            initial={{
              scaleX: isAnimated ? 0 : 1,
              opacity: isAnimated ? 0 : 1,
            }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: isAnimated ? 0.75 : 0,
              delay: isAnimated ? 0.3 : 0,
              ease: luxuryEase,
            }}
            className="w-24 md:w-36 h-[1.5px] bg-gradient-to-r from-transparent via-earth-green/70 to-transparent my-4"
          />

          {/* Subtitle: Refined uppercase tracking */}
          <motion.p
            initial={{
              opacity: isAnimated ? 0 : 1,
              y: isAnimated ? 12 : 0,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: isAnimated ? 0.8 : 0,
              delay: isAnimated ? 0.38 : 0,
              ease: luxuryEase,
            }}
            className="text-base sm:text-lg md:text-2xl tracking-[0.28em] text-earth-green/90 font-sans uppercase font-medium"
          >
            {heroData.subtitle}
          </motion.p>
        </div>

      </div>

      {/* Gentle scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{
          delay: isAnimated ? 0.8 : 0.2,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400/80 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-sans text-slate-400/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-earth-green/70" />
        </motion.div>
      </motion.div>

    </section>
  );
}
