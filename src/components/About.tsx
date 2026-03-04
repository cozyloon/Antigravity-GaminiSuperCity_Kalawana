"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Leaf, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function About() {
    const highlights = [
        { text: "Fresh vegetables & fruits daily", icon: <Leaf className="w-5 h-5 text-[var(--color-primary)]" /> },
        { text: "Wide range of household essentials", icon: <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" /> },
        { text: "Competitive pricing & great value", icon: <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" /> },
        { text: "Friendly & reliable service", icon: <Heart className="w-5 h-5 text-[var(--color-accent)]" /> },
        { text: "Convenient location in Manana, Kalawana", icon: <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" /> },
    ];

    return (
        <section id="about" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-sans text-gray-900 mb-6">
                            Serving Kalawana with <span className="text-[var(--color-primary)]">Quality & Care</span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Gamini Super City is your neighborhood supermarket providing fresh produce, groceries, household essentials, and daily necessities. Conveniently located in Manana, Kalawana, we are proud to serve our community with affordable prices and reliable service.
                        </p>

                        <div className="space-y-4 mb-8">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <span className="text-gray-700 font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#contact" className="inline-flex items-center gap-2 font-bold text-[var(--color-primary)] hover:text-[#145c38] group transition-colors">
                            Visit us today
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/images/store_interior_1772621525158.png"
                            alt="Gamini Super City Interior"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay Gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>

                        {/* Floating Info card */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-white shrink-0">
                                    <span className="font-bold text-xl">10+</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Years of Service</h4>
                                    <p className="text-sm text-gray-500">Trusted by thousands of families in the Kalawana region.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
