import { useEffect, useState } from "react";

export default function Cargando() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      
      {/* Partículas doradas */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="text-center px-6">

        <h2 className="text-sm md:text-lg uppercase tracking-[0.5em] text-gold mb-6 animate-fadeIn">
          Unimos nuestras vidas
        </h2>

        <h1 className="text-5xl md:text-8xl italic text-gold mb-8 animate-fadeInSlow">
          Guadalupe
          <span className="block md:inline md:mx-4">&</span>
          Eduardo
        </h1>

        {/* Anillo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-16 h-16 border-2 border-gold rounded-full animate-spin"></div>

            <div className="absolute inset-2 border border-gold/40 rounded-full"></div>
          </div>
        </div>

        <p className="text-gold tracking-[0.3em] uppercase text-sm">
          Cargando nuestra historia{dots}
        </p>

      </div>
    </section>
  );
}