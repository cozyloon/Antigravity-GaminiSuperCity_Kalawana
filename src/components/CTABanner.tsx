"use client";

import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function CTABanner() {
    return (
        <section className="py-20 relative overflow-hidden bg-[var(--color-primary)]">
            {/* Background Graphic Elements */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-secondary)]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 mix-blend-overlay"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-md mb-8 shadow-xl border border-white/30">
                        <ShoppingCart className="w-10 h-10 text-white" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6">
                        Everything for Your Daily Journey
                    </h2>

                    <p className="text-xl text-green-50 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Stop by Gamini Super City today. We are fully stocked with fresh produce, groceries, and household essentials.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="tel:0452255521"
                            className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:bg-gray-50 hover:-translate-y-1 transition-all w-full sm:w-auto"
                        >
                            Call Us For Details
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center justify-center bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all w-full sm:w-auto"
                        >
                            Visit the Store
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
