import React from 'react';

const womens = [
  {
    title: 'Noor — Champagne Tulle Gown',
    img: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=1600&auto=format&fit=crop',
    desc: 'Hand-embroidered resham florals with crystal dew on tulle.',
  },
  {
    title: 'Sarika — Emerald Lehenga',
    img: 'https://images.unsplash.com/photo-1577183072270-9d1a763b4f3e?q=80&w=1600&auto=format&fit=crop',
    desc: 'Antique zardozi borders and mukaish-sparkled panels.',
  },
  {
    title: 'Afsana — Brocade Sari',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    desc: 'Heritage brocade with hand-finished pallu fringing.',
  },
];

const mens = [
  {
    title: 'Arjun — Ivory Sherwani',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    desc: 'Aari work with tonal resham and mother-of-pearl buttons.',
  },
  {
    title: 'Maharaja — Onyx Achkan',
    img: 'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1600&auto=format&fit=crop',
    desc: 'Gold thread jaal with emerald highlights and hand-bound collar.',
  },
  {
    title: 'Vir — Silk Bandhgala',
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop',
    desc: 'Matte silk with subtle zari top-stitch and antique studs.',
  },
];

export default function CollectionsGallery() {
  return (
    <section id="collections" className="relative py-24">
      <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: 'linear-gradient(120deg, rgba(199,161,74,0.08), transparent 40%, rgba(5,109,78,0.08))' }} />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.25em] text-xs text-[#F1E7D3]/70">Collections</p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#F1E7D3] mt-3">Women’s Couture</h2>
          <p className="mt-3 text-[#F1E7D3]/80 max-w-2xl mx-auto">Curated silhouettes that embrace celestial lightness and ceremonial grandeur.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {womens.map((item, i) => (
            <article key={i} className="group overflow-hidden rounded-2xl border border-[#C7A14A]/20 bg-black/20">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg text-[#F1E7D3]">{item.title}</h3>
                <p className="mt-1 text-sm text-[#F1E7D3]/75">{item.desc}</p>
                <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#C7A14A]/40 to-transparent" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-[#F1E7D3]">Men’s Royal Wear</h2>
          <p className="mt-3 text-[#F1E7D3]/80 max-w-2xl mx-auto">Sherwanis and bandhgalas sculpted for stately occasions and modern legacies.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mens.map((item, i) => (
            <article key={i} className="group overflow-hidden rounded-2xl border border-[#C7A14A]/20 bg-black/20">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg text-[#F1E7D3]">{item.title}</h3>
                <p className="mt-1 text-sm text-[#F1E7D3]/75">{item.desc}</p>
                <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#C7A14A]/40 to-transparent" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-6">
            <p className="uppercase tracking-[0.25em] text-xs text-[#F1E7D3]/70">Gallery</p>
            <h3 className="font-serif text-2xl md:text-4xl text-[#F1E7D3]">Editorial Portraits</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1570215717412-4e6e4bd4e9f3?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1548883354-2dd37f40fb44?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1542089363-5cf7c2c6bd94?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1605697427935-3b5e4b8d8f7e?q=80&w=1600&auto=format&fit=crop',
            ].map((src, i) => (
              <figure key={i} className="group relative overflow-hidden rounded-xl border border-[#C7A14A]/20">
                <img src={src} alt="Couture editorial" className="h-64 md:h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
                <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
