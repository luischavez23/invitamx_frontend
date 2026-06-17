import { useMemo } from "react";

export default function Cargando() {
  const particles = useMemo(
    () =>
      [...Array(25)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${3 + Math.random() * 4}s`,
      })),
    []
  );

  return (
    <section className="fixed inset-0 z-50 bg-[#0d0d0d] flex items-center justify-center overflow-hidden">
      
      {/* Glow dorado */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_60%)]" />

      {/* Partículas */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute w-1 h-1 bg-gold rounded-full particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative text-center px-6">

        <h2 className="text-sm md:text-lg uppercase tracking-[0.5em] text-gold mb-6 animate-fadeIn">
          Unimos nuestras vidas
        </h2>

        <h1 className="text-5xl md:text-8xl italic text-gold mb-10 animate-fadeInSlow drop-shadow-[0_0_20px_rgba(212,175,55,0.25)]">
          Guadalupe
          <span className="block md:inline md:mx-4">&</span>
          Eduardo
        </h1>

        {/* Anillos entrelazados */}
        <div className="flex justify-center mb-10">
          <div className="relative w-28 h-16">
            <div className="absolute left-2 top-2 w-12 h-12 border-2 border-gold rounded-full animate-ring" />

            <div
              className="absolute right-2 top-2 w-12 h-12 border-2 border-gold rounded-full animate-ring"
              style={{ animationDelay: "1.2s" }}
            />
          </div>
        </div>

        <p className="text-gold uppercase tracking-[0.3em] text-sm md:text-base">
          Cargando nuestra historia
          <span className="loading-dots"></span>
        </p>

      </div>
    </section>
  );
}