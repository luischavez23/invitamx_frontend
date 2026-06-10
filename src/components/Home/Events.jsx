import { EVENTS } from "../../constants/events";

import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_LINK } from "../../constants/contact";


export default function Events(){
    

    return (
        <section
            id="eventos"
            data-testid="events-section"
            className="py-20 sm:py-28 lg:py-32 bg-[#FDFBF7]"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-16 items-end">
                <div>
                <p className="text-xs sm:text-sm tracking-[0.2em] uppercase font-bold text-[#FF2A5F] mb-4">
                    — Tipos de eventos
                </p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[1] text-[#1A1A1A]">
                    Para cada
                    <br />
                    <span className="font-serif-italic font-normal">momento único</span>
                </h2>
                </div>
                <p className="text-base sm:text-lg leading-relaxed text-[#4A4A4A] max-w-md md:justify-self-end">
                Diseñamos experiencias digitales para cualquier celebración. Tú nos cuentas el evento, nosotros lo convertimos en algo memorable.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[260px] gap-4 sm:gap-5">
                {EVENTS.map((event, idx) => {
                const Icon = event.icon;
                return (
                    <a
                    key={event.id}
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`event-card-${event.id}`}
                    className={`group relative overflow-hidden rounded-3xl border border-black/5 ${event.span}`}
                    >
                    <img
                        src={event.image}
                        alt={event.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-between text-white">
                        <div className="flex items-start justify-between">
                        <div
                            className="w-11 h-11 rounded-2xl flex items-center justify-center backdrop-blur-md bg-white/15 border border-white/20"
                        >
                            <Icon className="w-5 h-5" />
                        </div>
                        <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </div>
                        <div>
                        <div className="font-serif-italic text-sm sm:text-base text-white/80 mb-1">
                            {event.subtitle}
                        </div>
                        <div className="font-display text-3xl sm:text-4xl tracking-tighter leading-none">
                            {event.title}
                        </div>
                        </div>
                    </div>
                    </a>
                );
                })}
            </div>
            </div>
        </section>
    );
}
