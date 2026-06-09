import { motion } from "framer-motion";

import { PartyPopper } from "lucide-react";

import {
  FaInstagram,
  FaFacebookF
} from "react-icons/fa";

import Logo from "../common/Logo";
import WhatsAppButton from "../common/WhatsAppButton";

import { WHATSAPP_LINK } from "../../constants/contact";

export default function Contact() {
  return (
    <section
      id="contacto"
      data-testid="contact-section"
      className="relative bg-[#1A1A1A] text-white overflow-hidden"
    >
      <div className="absolute top-1/2 -left-32 w-[420px] h-[420px] rounded-full bg-[#FF2A5F]/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-16 w-[420px] h-[420px] rounded-full bg-[#FFB800]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 lg:py-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm tracking-[0.2em] uppercase font-bold text-[#FFB800] mb-6"
        >
          — Contacto
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] max-w-5xl"
        >
          Hagamos algo
          <br />
          <span className="font-serif-italic font-normal text-[#FF2A5F]">
            inolvidable.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 sm:mt-10 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed"
        >
          Mándanos un WhatsApp con los detalles de tu evento y te enviamos una
          propuesta personalizada. Sin compromisos, solo magia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 sm:mt-14"
        >
          <WhatsAppButton
            testId="contact-whatsapp-btn"
            large
          />
        </motion.div>

        <div className="mt-20 sm:mt-28 pt-10 border-t border-white/10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-white/40 mb-3">
              Escríbenos
            </p>

            <a
              href="mailto:hola@invitamx.com"
              data-testid="contact-email"
              className="font-display text-xl sm:text-2xl hover:text-[#FF2A5F] transition-colors"
            >
              hola@invitamx.lat
            </a>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-white/40 mb-3">
              WhatsApp
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-phone"
              className="font-display text-xl sm:text-2xl hover:text-[#FF2A5F] transition-colors"
            >
              +52 333 828 2208
            </a>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-white/40 mb-3">
              Síguenos
            </p>

            <div className="flex items-center gap-3">
              {[
                { Icon: FaInstagram, id: "ig" },
                { Icon: FaFacebookF, id: "fb" },
              ].map(({ Icon, id }) => (
                <a
                  key={id}
                  href="#"
                  data-testid={`contact-social-${id}`}
                  aria-label={id}
                  className="w-11 h-11 rounded-full border border-white/15 hover:border-[#FF2A5F] hover:bg-[#FF2A5F] flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-white/40">
          <div className="flex items-center gap-3">
            <Logo />
            <span>
              © {new Date().getFullYear()} InvitaMX. Todos los derechos reservados.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <PartyPopper className="w-4 h-4 text-[#FFB800]" />
            <span>Hecho con cariño en México</span>
          </div>
        </div>
      </div>
    </section>
  );
}