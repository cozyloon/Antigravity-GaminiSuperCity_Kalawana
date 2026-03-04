"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Categories", href: "#categories" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-md py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="#home" className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-[var(--color-primary)] font-sans">
                            Gamini <span className="text-[var(--color-secondary)]">Super City</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:0452255521"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-primary)] text-white font-medium hover:bg-[#145c38] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <Phone className="w-4 h-4" />
                            0452 255 521
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-[var(--color-primary)] focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:bg-green-50 hover:text-[var(--color-primary)]"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:0452255521"
                            className="mt-4 flex justify-center items-center gap-2 px-5 py-3 w-full rounded-xl bg-[var(--color-primary)] text-white font-medium shadow-md"
                        >
                            <Phone className="w-5 h-5" />
                            Call 0452 255 521
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
