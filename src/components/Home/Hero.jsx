import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";

import WhatsAppButton from "../common/WhatsAppButton";

export default function Hero() {
  return (
    <section
      id="inicio"
      data-testid="hero-section"
      className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden"
    >
      {/* decorative blobs */}
      <div className="absolute top-32 -left-20 w-72 h-72 rounded-full bg-[#FF2A5F]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-[#FFB800]/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-4 py-2 mb-6 sm:mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF2A5F] animate-pulse" />
            <span className="text-xs sm:text-sm font-medium tracking-wide">
              Invitaciones digitales hechas en México
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] tracking-tighter leading-[0.95]"
          >
            Invitaciones
            <br />
            <span className="font-serif-italic font-normal text-[#FF2A5F]">
              que deslumbran
            </span>
            <br />
            en un solo clic.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-[#4A4A4A]"
          >
            Diseñamos invitaciones web modernas, elegantes y divertidas para
            bodas, XV años, bautizos y todo evento que merezca celebrarse en
            grande.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
          >
            <WhatsAppButton
              testId="hero-whatsapp-btn"
              large
            />

            <a
              href="#galeria"
              data-testid="hero-gallery-link"
              className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase font-bold text-[#1A1A1A] hover:text-[#FF2A5F] transition-colors"
            >
              Ver galería
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 sm:mt-16 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { value: "+500", label: "Invitaciones" },
              { value: "100%", label: "Personalizadas" },
              { value: "24h", label: "Entrega" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl sm:text-4xl text-[#1A1A1A]">
                  {s.value}
                </div>
                <div className="text-xs tracking-[0.15em] uppercase font-bold text-[#4A4A4A] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#FF2A5F]/10 rotate-[2deg]">
            <img
              src="https://images.unsplash.com/photo-1629120881990-0c5b979884bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwd2VkZGluZyUyMGludml0YXRpb24lMjBvbiUyMHNtYXJ0cGhvbmV8ZW58MHx8fHwxNzgwODU1MjgxfDA&ixlib=rb-4.1.0&q=85"
              alt="Invitación digital en celular"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -bottom-6 -left-6 sm:-left-10 bg-white rounded-2xl border border-black/5 p-4 sm:p-5 shadow-xl max-w-[220px] rotate-[-4deg]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFB800]/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#FF2A5F]" />
              </div>

              <div>
                <div className="font-display text-base">Save the date</div>
                <div className="text-xs text-[#4A4A4A]">
                  ¡Listo en horas!
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="hidden sm:block absolute -top-6 -right-6 bg-[#1A1A1A] text-white rounded-2xl p-4 shadow-xl rotate-[6deg]"
          >
            <div className="text-xs tracking-[0.2em] uppercase font-bold text-white/60">
              RSVP
            </div>
            <div className="font-serif-italic text-xl mt-1">
              Confirmado ✓
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}