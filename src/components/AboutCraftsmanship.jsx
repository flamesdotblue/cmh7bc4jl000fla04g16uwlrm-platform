import React from 'react';

export default function AboutCraftsmanship() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(800px 400px at 10% 10%, rgba(199,161,74,0.08), transparent 60%), radial-gradient(800px 400px at 90% 20%, rgba(5,109,78,0.08), transparent 60%)',
      }} />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-[#F1E7D3]/70">Our Story</p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F1E7D3] mt-3">A Decade of Royal Craftsmanship</h2>
            <p className="mt-6 text-[#F1E7D3]/80 leading-relaxed">
              Born in the textile heart of Surat, Madhav Fashion is an atelier devoted to the poetry of hand embroidery. For over ten years, our artisans have woven heritage and modernity into couture that feels both intimate and majestic. Each stitch is a passage through time—echoing palatial corridors, temple bells, and moonlit sangeets.
            </p>
            <p className="mt-4 text-[#F1E7D3]/80 leading-relaxed">
              We honour brocade, zardozi, resham, mukaish, and a library of rare motifs. Our house believes in slow creation: garments finished by hand, fabrics sourced with care, and silhouettes refined to whisper luxury.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-[#C7A14A]/20">
              <img
                src="https://images.unsplash.com/photo-1605538032311-7f0d20b3985a?q=80&w=1600&auto=format&fit=crop"
                alt="Hand embroidery close-up"
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="backdrop-blur-sm bg-black/40 border border-[#C7A14A]/30 text-[#F1E7D3]/90 rounded-xl px-4 py-3">
                <p className="text-xs">Surat Atelier • Since 2013</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { title: 'Zardozi & Aari', desc: 'Metallic threads, sequins, and beads are couched by hand for imperial lustre.' },
            { title: 'Resham & Parsi Gara', desc: 'Silken embroideries narrate flora, fauna, and archival tales with meticulous finesse.' },
            { title: 'Hand Finishing', desc: 'Selvage care, hand-tacked linings, and heirloom construction for longevity.' },
          ].map((f, i) => (
            <div key={i} className="group rounded-2xl border border-[#C7A14A]/20 p-6 bg-gradient-to-b from-[#C7A14A]/5/0 to-[#C7A14A]/5 hover:bg-[#C7A14A]/5 transition-colors">
              <h3 className="font-serif text-xl text-[#F1E7D3]">{f.title}</h3>
              <p className="mt-2 text-sm text-[#F1E7D3]/80">{f.desc}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#C7A14A]/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
