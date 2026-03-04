"use client";

import { motion } from "framer-motion";
import { Truck, Tags, Smile, Map } from "lucide-react";

export default function WhyUs() {
    const features = [
        {
            title: "Fresh Daily Stock",
            desc: "Produce and goods restocked every morning for maximum freshness.",
            icon: <Truck className="w-8 h-8 text-[var(--color-primary)]" />
        },
        {
            title: "Affordable Prices",
            desc: "Competitive pricing to bring you the best value for your family budget.",
            icon: <Tags className="w-8 h-8 text-[var(--color-secondary)]" />
        },
        {
            title: "Friendly Local Service",
            desc: "Warm Sri Lankan hospitality from staff who know the community.",
            icon: <Smile className="w-8 h-8 text-[#E65100]" />
        },
        {
            title: "Convenient Location",
            desc: "Easy to access right in Manana, Kalawana with ample parking space.",
            icon: <Map className="w-8 h-8 text-[var(--color-accent)]" />
        }
    ];

    return (
        <section className="py-24 bg-white border-y border-gray-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-secondary)]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-gray-900 mb-4">
                        Why Choose <span className="text-[var(--color-primary)]">Us?</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        We don't just sell groceries; we serve the Kalawana community with care, consistency, and a smile.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-green-100 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feat.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
