import React from 'react';

export default function OppoLandingPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-oppo-green">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter text-[#00AD5D]">OPPO</h1>
          <div className="space-x-8 hidden md:flex text-sm font-medium">
            <a href="#" className="hover:text-[#00AD5D] transition">Smartphones</a>
            <a href="#" className="hover:text-[#00AD5D] transition">Audio</a>
            <a href="#" className="hover:text-[#00AD5D] transition">IoT (idk man)</a>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00AD5D]/20 rounded-full blur-[120px] -z-10" />
        
        <h2 className="text-5xl md:text-8xl font-extrabold mb-4 tracking-tight">
          Cool <span className="text-[#00AD5D]">Phone</span> frfr
        </h2>
        <p className="text-gray-400 max-w-xl text-lg md:text-xl mb-8">
          Temukan Smartphone futuristic dengan desain revolusioner dan kamera tercanggih di kelasnya
        </p>
        <button className="bg-[#00AD5D] hover:bg-[#008f4d] text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
          Explore The X Series
        </button>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-white/5 hover:border-[#00AD5D]/50 transition cursor-default">
            <h3 className="text-2xl font-bold mb-2">Hasselblad Camera for Mobile</h3>
            <p className="text-gray-400">Imma be fr with u idk what that means but apparently they have it and its pretty cool</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5 text-center">
            <h3 className="text-4xl font-bold text-[#00AD5D] mb-2">80W</h3>
            <p className="text-gray-400">SUPERVOOC Flash Charge</p>
          </div>
        </div>
      </section>
    </div>
  );
}