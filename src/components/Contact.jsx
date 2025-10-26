import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.25em] text-xs text-[#F1E7D3]/70">Contact</p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#F1E7D3] mt-3">Private Appointments & Enquiries</h2>
          <p className="mt-3 text-[#F1E7D3]/80 max-w-2xl mx-auto">For bespoke commissions, global showcases, or trunk shows, we welcome your message.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <form className="rounded-2xl border border-[#C7A14A]/20 bg-black/30 p-6 space-y-4">
            <div>
              <label className="block text-sm text-[#F1E7D3]/80">Name</label>
              <input type="text" className="mt-1 w-full rounded-md bg-black/40 border border-[#C7A14A]/30 px-3 py-2 text-[#F1E7D3] placeholder:text-[#F1E7D3]/40 focus:outline-none focus:border-[#C7A14A]" placeholder="Your full name" />
            </div>
            <div>
              <label className="block text-sm text-[#F1E7D3]/80">Email</label>
              <input type="email" className="mt-1 w-full rounded-md bg-black/40 border border-[#C7A14A]/30 px-3 py-2 text-[#F1E7D3] placeholder:text-[#F1E7D3]/40 focus:outline-none focus:border-[#C7A14A]" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-[#F1E7D3]/80">Subject</label>
              <input type="text" className="mt-1 w-full rounded-md bg-black/40 border border-[#C7A14A]/30 px-3 py-2 text-[#F1E7D3] placeholder:text-[#F1E7D3]/40 focus:outline-none focus:border-[#C7A14A]" placeholder="Bespoke bridal | Sherwani | Exhibition" />
            </div>
            <div>
              <label className="block text-sm text-[#F1E7D3]/80">Message</label>
              <textarea rows="5" className="mt-1 w-full rounded-md bg-black/40 border border-[#C7A14A]/30 px-3 py-2 text-[#F1E7D3] placeholder:text-[#F1E7D3]/40 focus:outline-none focus:border-[#C7A14A]" placeholder="Tell us about your vision, timeline, and preferences." />
            </div>
            <button type="button" className="inline-flex justify-center rounded-md border border-[#C7A14A]/50 bg-gradient-to-b from-[#C7A14A]/80 to-[#C7A14A] text-black font-medium px-6 py-3 hover:brightness-110 transition">Request Consultation</button>
            <p className="text-xs text-[#F1E7D3]/60">By submitting, you agree to our privacy policy. We respond within 2 business days.</p>
          </form>

          <div className="rounded-2xl border border-[#C7A14A]/20 bg-black/30 p-6">
            <h3 className="font-serif text-2xl text-[#F1E7D3]">Atelier</h3>
            <p className="mt-2 text-sm text-[#F1E7D3]/80">Madhav Fashion, Surat, Gujarat, India</p>
            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#C7A14A]/40 to-transparent" />
            <ul className="mt-4 space-y-2 text-sm text-[#F1E7D3]/80">
              <li>Email: contact@madhavfashion.in</li>
              <li>Phone: +91 98XX-XXX-XXX</li>
              <li>Instagram: @madhavfashion.official</li>
            </ul>
            <div className="mt-6 aspect-video overflow-hidden rounded-xl border border-[#C7A14A]/20">
              <img src="https://images.unsplash.com/photo-1546530967-21531b891dd4?q=80&w=1600&auto=format&fit=crop" alt="Surat cityscape" className="h-full w-full object-cover" />
            </div>
            <p className="mt-3 text-xs text-[#F1E7D3]/60">Available for global exhibitions, couture appointments, and private previews.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
