"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_supermarket_1772621399968.png"
                    alt="Gamini Super City Supermarket in Kalawana"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Dark overlay with premium gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start w-full mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    {/* Trust Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
                        <div className="flex gap-1 text-[var(--color-secondary)]">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <span className="text-white text-sm font-medium">4.5 Rating (42 Reviews)</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-sans text-white leading-tight mb-4">
                        Your Trusted <span className="text-[var(--color-primary)] bg-white px-2 mt-2 inline-block rounded-md">Supermarket</span><br /> in Kalawana
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
                        Fresh Groceries. Daily Essentials. Unmatched Value.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <a
                            href="tel:0452255521"
                            className="group flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#145c38] transition-all shadow-xl hover:-translate-y-1"
                        >
                            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            Call Now
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1"
                        >
                            <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                            Get Directions
                        </a>
                    </div>

                    {/* Trust Indicators Footer */}
                    <div className="flex flex-wrap gap-6 text-sm md:text-base text-gray-300">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                            Trusted by Local Families
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)]"></div>
                            Open Daily from 7:30 AM
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#1E7F4F]"></div>
                            Serving Kalawana Community
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
