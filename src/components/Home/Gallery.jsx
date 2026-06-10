import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { GALLERY } from "../../constants/gallery";
import { WHATSAPP_LINK } from "../../constants/contact";
import WhatsAppButton  from "../common/WhatsAppButton"

export default function Gallery(){
    return (
        <section
            id="galeria"
            data-testid="gallery-section"
            className="py-20 sm:py-28 lg:py-32 bg-white"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-16 items-end">
                <div>
                <p className="text-xs sm:text-sm tracking-[0.2em] uppercase font-bold text-[#FF2A5F] mb-4">
                    — Galería
                </p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[1] text-[#1A1A1A]">
                    Algunas de
                    <br />
                    <span className="font-serif-italic font-normal">nuestras piezas</span>
                </h2>
                </div>
                <p className="text-base sm:text-lg leading-relaxed text-[#4A4A4A] max-w-md md:justify-self-end">
                Cada invitación es única. Estos son algunos de los diseños que hemos creado para clientes felices en todo México.
                </p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 [column-fill:_balance]">
                {GALLERY.map((g, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: (idx % 3) * 0.08 }}
                    className="mb-4 sm:mb-5 break-inside-avoid"
                    data-testid={`gallery-item-${idx}`}
                >
                    <div
                    className={`group relative ${g.h} rounded-3xl overflow-hidden border border-black/5`}
                    >
                    <img
                        src={g.src}
                        alt={g.label}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-xs tracking-[0.2em] uppercase font-bold text-white/70">
                        Proyecto
                        </div>
                        <div className="font-display text-xl">{g.label}</div>
                    </div>
                    </div>
                </motion.div>
                ))}
            </div>

            <div className="mt-12 sm:mt-16 flex justify-center">
                <WhatsAppButton
                    testId="hero-whatsapp-btn"
                    large
                />
            </div>
            </div>
        </section>
    );
}