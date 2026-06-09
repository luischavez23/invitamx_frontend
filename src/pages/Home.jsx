import { useEffect, useState } from "react";

import Header from "../components/Home/Header";
import MenuOverlay from "../components/Home/MenuOverlay";
import Hero from "../components/Home/Hero";
import Events from "../components/Home/Events";
import Gallery from "../components/Home/Gallery";
import Contact from "../components/Home/Contact";



export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
        document.body.style.overflow = "hidden";
        } else {
        document.body.style.overflow = "";
        }
        return () => {
        document.body.style.overflow = "";
        };
    }, [menuOpen]);

        return (
        <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]" data-testid="landing-root">
            <Header onOpen={() => setMenuOpen(true)} />
            <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
            <main>
                <Hero />
                <Events />
                <Gallery />
                <Contact />
            </main>
        </div>
        )
}
