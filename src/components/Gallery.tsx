"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
    const images = [
        { src: "/images/store_interior_1772621525158.png", alt: "Store Interior Aisle", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-2" },
        { src: "/images/fresh_produce_1772621413658.png", alt: "Fresh Vegetables", colSpan: "col-span-1", rowSpan: "row-span-1" },
        { src: "/images/hero_supermarket_1772621399968.png", alt: "Store View", colSpan: "col-span-1", rowSpan: "row-span-1" },
        { src: "/images/dairy_beverages_1772621559797.png", alt: "Dairy and Beverages Section", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1" },
    ];

    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-gray-900 mb-4">
                        Take a Look <span className="text-[var(--color-primary)]">Inside</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        A premium shopping experience right here in Kalawana. From fresh produce to daily essentials, everything is neatly organized for your convenience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-2xl overflow-hidden group ${img.colSpan} ${img.rowSpan} bg-gray-100`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 text-white font-medium">
                                {img.alt}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
