import React from 'react';
import Hero from './components/Hero';
import AboutCraftsmanship from './components/AboutCraftsmanship';
import CollectionsGallery from './components/CollectionsGallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F1E7D3] antialiased selection:bg-emerald-600/30 selection:text-[#F1E7D3]">
      <div className="fixed inset-0 -z-10 opacity-[0.07] pointer-events-none" style={{
        backgroundImage:
          'radial-gradient(circle at 20% 20%, #C7A14A 2px, transparent 2px), radial-gradient(circle at 80% 40%, #056D4E 2px, transparent 2px), radial-gradient(circle at 40% 80%, #C7A14A 1.5px, transparent 1.5px)',
        backgroundSize: '180px 180px, 220px 220px, 260px 260px',
      }} />

      <Hero />
      <AboutCraftsmanship />
      <CollectionsGallery />
      <Contact />

      <footer className="border-t border-[#C7A14A]/20 py-10 text-center text-sm text-[#F1E7D3]/70">
        <p>© {new Date().getFullYear()} Madhav Fashion — Surat, Gujarat, India. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
