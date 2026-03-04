"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export default function StickyCallButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div
            className={`md:hidden fixed bottom-6 left-0 right-0 px-4 z-40 transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
                }`}
        >
            <a
                href="tel:0452255521"
                className="flex items-center justify-center gap-2 w-full bg-[var(--color-primary)] text-white py-4 rounded-xl font-bold text-lg shadow-xl border-2 border-white/20"
            >
                <Phone className="w-6 h-6 animate-pulse" />
                Call Now
            </a>
        </div>
    );
}
