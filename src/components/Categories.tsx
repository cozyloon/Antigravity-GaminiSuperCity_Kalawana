"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Apple, ShoppingBag, Coffee, Milk, Sparkles, HeartPulse } from "lucide-react";

export default function Categories() {
    const categories = [
        {
            id: "produce",
            title: "Fresh Fruits & Veg",
            desc: "Farm-fresh daily stock",
            icon: <Apple className="w-8 h-8 text-[var(--color-primary)] mb-4" />,
            image: "/images/fresh_produce_1772621413658.png",
            offer: true
        },
        {
            id: "grocery",
            title: "Grocery & Dry Goods",
            desc: "Pantry essentials & spices",
            icon: <ShoppingBag className="w-8 h-8 text-[#E65100] mb-4" />,
            image: null,
            offer: false
        },
        {
            id: "beverages",
            title: "Beverages",
            desc: "Juices, teas & cool drinks",
            icon: <Coffee className="w-8 h-8 text-[#795548] mb-4" />,
            image: null,
            offer: false
        },
        {
            id: "dairy",
            title: "Dairy Products",
            desc: "Milk, cheese, butter & yogurt",
            icon: <Milk className="w-8 h-8 text-[#1976D2] mb-4" />,
            image: "/images/dairy_beverages_1772621559797.png",
            offer: true
        },
        {
            id: "household",
            title: "Household Items",
            desc: "Cleaning & home essentials",
            icon: <Sparkles className="w-8 h-8 text-[#00ACC1] mb-4" />,
            image: null,
            offer: false
        },
        {
            id: "personal",
            title: "Personal Care",
            desc: "Hygiene & beauty products",
            icon: <HeartPulse className="w-8 h-8 text-[#E91E63] mb-4" />,
            image: null,
            offer: false
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="categories" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-gray-900 mb-4">
                        Everything You Need, <span className="text-[var(--color-primary)]">Under One Roof</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Browse our wide selection of high-quality products sourced both locally and internationally to serve your family's daily needs.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {categories.map((cat) => (
                        <motion.div
                            key={cat.id}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-gray-100"
                        >
                            {/* Optional Offer Badge */}
                            {cat.offer && (
                                <div className="absolute top-4 right-4 z-10 bg-[var(--color-accent)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    Weekly Offers
                                </div>
                            )}

                            {/* Card Image Area */}
                            <div className="h-48 relative bg-gray-100 overflow-hidden">
                                {cat.image ? (
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-gray-100 flex items-center justify-center">
                                        <span className="text-gray-300 font-sans text-xl font-bold opacity-30">
                                            Gamini Super City
                                        </span>
                                    </div>
                                )}
                                {/* Overlay gradient */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 relative bg-white">
                                <div className="absolute -top-10 left-6 bg-white p-3 rounded-xl shadow-lg border border-gray-50">
                                    {cat.icon}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-4 group-hover:text-[var(--color-primary)] transition-colors">
                                    {cat.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{cat.desc}</p>

                                <a href="#contact" className="inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:text-[#145c38]">
                                    Check Availability &rarr;
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
