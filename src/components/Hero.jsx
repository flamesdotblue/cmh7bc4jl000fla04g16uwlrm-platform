import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1610041321327-26f64cd76eaa?q=80&w=1920&auto=format&fit=crop', // embroidery close-up
  'https://images.unsplash.com/photo-1611765083444-0a1f4b97f36b?q=80&w=1920&auto=format&fit=crop', // regal portrait lighting
  'https://images.unsplash.com/photo-1581783898377-1c85f1f5bfbf?q=80&w=1920&auto=format&fit=crop', // textile detail
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    if (soundOn) {
      audioRef.current.volume = 0.25;
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [soundOn]);

  return (
    <section className="relative h-[100dvh] overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${i === current ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(10%) contrast(105%) brightness(85%)' }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/60" />
        <div className="absolute inset-0" style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 40 Q20 30 40 40 T80 40 V80 H0 Z\' fill=\'%230B0B0B\' fill-opacity=\'0.25\'/%3E%3C/svg%3E")',
          backgroundSize: '80px 80px',
          opacity: 0.2,
          mixBlendMode: 'overlay',
        }} />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-5xl">
          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-[#F1E7D3]/80 mb-6">Madhav Fashion</p>
          <h1 className="font-serif text-3xl md:text-6xl lg:text-7xl leading-tight text-[#F1E7D3]">
            Crafted for the Modern Maharaja & the Timeless Queen
          </h1>
          <p className="mt-6 text-sm md:text-base text-[#F1E7D3]/80 max-w-2xl mx-auto">
            A couture house from Surat blending royal Indian heritage with contemporary design. Hand embroidery, archival textiles, and a devotion to timeless beauty.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#collections" className="group inline-flex items-center gap-2 rounded-full border border-[#C7A14A]/40 bg-black/40 px-6 py-3 text-sm md:text-base text-[#F1E7D3] transition-colors hover:border-[#C7A14A]">
              Explore Collections
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5 text-[#C7A14A]" />
            </a>
            <button
              onClick={() => setSoundOn((s) => !s)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm transition-colors ${soundOn ? 'border-emerald-600/60 bg-emerald-600/10 text-emerald-300' : 'border-[#C7A14A]/40 bg-black/40 text-[#F1E7D3]/90 hover:border-[#C7A14A]'}`}
              aria-label="Toggle ambient sound"
            >
              {soundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />} Ambient
            </button>
            <audio
              ref={audioRef}
              src="https://cdn.pixabay.com/download/audio/2022/02/23/audio_7b67cbaafd.mp3?filename=ambient-piano-112191.mp3"
              loop
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#C7A14A] animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
