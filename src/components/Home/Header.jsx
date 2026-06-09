import { Menu } from "lucide-react";

export default function Header({ onOpen }){
    const Logo = () => (
        <div className="flex items-center gap-2" data-testid="brand-logo">
            <div className="relative">
            <div className="w-9 h-9 rounded-2xl bg-[#FF2A5F] flex items-center justify-center rotate-[-8deg]">
                <span className="font-display text-white text-lg leading-none">i</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FFB800]" />
            </div>
            <span className="font-display text-xl tracking-tight">
            invita<span className="text-[#FF2A5F]">mx</span>
            </span>
        </div>
    );
    return(
        <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/70 border-b border-black/5">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
                <a href="#inicio" data-testid="header-logo-link" className="focus:outline-none">
                    <Logo />
                </a>
                <button
                    type="button"
                    onClick={onOpen}
                    data-testid="open-menu-btn"
                    aria-label="Abrir menú"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[#1A1A1A] text-white px-4 sm:px-5 py-2.5 hover:bg-[#FF2A5F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF2A5F] focus:ring-offset-2"
                >
                    <span className="hidden sm:inline text-sm tracking-[0.2em] uppercase font-bold">Menú</span>
                    <Menu className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
}
