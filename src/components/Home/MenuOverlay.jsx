import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import Logo from "../common/Logo";
import { ArrowUpRight, X } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import PrimaryWhatsAppButton from "../common/WhatsAppButton";

import { NAV_LINKS } from "../../constants/navigation";

export default function MenuOverlay({ open, onClose }){
    return(
        <AnimatePresence>
            {open && (
            <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 overlay-menu"
                data-testid="menu-overlay"
            >
                <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-[#1A1A1A] text-white"
                >
                {/* decorative dot */}
                <div className="absolute top-1/2 -right-32 w-[420px] h-[420px] rounded-full bg-[#FF2A5F] blur-3xl opacity-30 pointer-events-none" />
                <div className="absolute -bottom-32 -left-16 w-[320px] h-[320px] rounded-full bg-[#FFB800] blur-3xl opacity-20 pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
                    <Logo />
                    <button
                    type="button"
                    onClick={onClose}
                    data-testid="close-menu-btn"
                    aria-label="Cerrar menú"
                    className="inline-flex items-center gap-2.5 rounded-full bg-white/10 hover:bg-[#FF2A5F] text-white px-4 sm:px-5 py-2.5 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                    >
                    <span className="hidden sm:inline text-sm tracking-[0.2em] uppercase font-bold">Cerrar</span>
                    <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-10 sm:pt-20 pb-16 grid lg:grid-cols-[1.3fr,1fr] gap-12 lg:gap-20">
                    <nav className="flex flex-col gap-2 sm:gap-3">
                    {NAV_LINKS.map((link, idx) => (
                        <motion.a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={onClose}
                        data-testid={`menu-link-${link.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.08, duration: 0.5 }}
                        className="group flex items-baseline gap-4 sm:gap-6 py-3 sm:py-4 border-b border-white/10 hover:border-[#FF2A5F] transition-colors"
                        >
                        <span className="font-body text-xs sm:text-sm text-white/40 tabular-nums">
                            0{idx + 1}
                        </span>
                        <span className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-tighter group-hover:text-[#FF2A5F] transition-colors">
                            {link.label}
                        </span>
                        <ArrowUpRight className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all w-8 h-8 sm:w-10 sm:h-10 text-[#FF2A5F] ml-auto" />
                        </motion.a>
                    ))}
                    </nav>

                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col justify-between gap-8"
                    >
                    <div className="space-y-4">
                        <p className="text-xs tracking-[0.2em] uppercase font-bold text-white/50">
                        ¿Listo para empezar?
                        </p>
                        <p className="font-serif-italic text-2xl sm:text-3xl leading-tight text-white/90">
                        Cuéntanos sobre tu evento y diseñamos la invitación perfecta para ti.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <PrimaryWhatsAppButton testId="menu-whatsapp-btn" />
                        <div className="flex items-center gap-3 mt-2">
                        {[
                            { Icon: FaInstagram, id: "ig" },
                            { Icon: FaFacebookF, id: "fb" },
                            { Icon: FaTiktok, id: "tt" },
                        ].map(({ Icon, id }) => (
                            <a
                            key={id}
                            href="#"
                            data-testid={`menu-social-${id}`}
                            className="w-11 h-11 rounded-full border border-white/15 hover:border-[#FF2A5F] hover:bg-[#FF2A5F] flex items-center justify-center transition-colors"
                            aria-label={id}
                            >
                            <Icon className="w-4 h-4" />
                            </a>
                        ))}
                        </div>
                    </div>
                    </motion.div>
                </div>
                </motion.div>
            </motion.div>
            )}
        </AnimatePresence>
    );
}

