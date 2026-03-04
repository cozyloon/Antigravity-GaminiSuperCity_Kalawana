"use client";

import { motion } from "framer-motion";
import { Star, MessageSquareQuote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Saman Kumara",
            role: "Local Resident",
            content: "Best supermarket in Kalawana! Fresh vegetables and very friendly staff. They always have everything I need for the week.",
            rating: 5,
            avatar: "S"
        },
        {
            name: "Priyanka Perera",
            role: "Daily Shopper",
            content: "Prices are very affordable compared to other places. Their household section is huge and well organized. Highly recommended.",
            rating: 5,
            avatar: "P"
        },
        {
            name: "Nimal Silva",
            role: "Family Man",
            content: "Very convenient location in Manana with good parking. Gamini Super City makes grocery shopping with kids so much easier.",
            rating: 4,
            avatar: "N"
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
                <MessageSquareQuote className="w-64 h-64 text-gray-900" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 position-relative z-10">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-6">
                        <Image src="/images/google_logo.svg" alt="Google" width={20} height={20} className="w-5 h-5 opacity-0 inline-block bg-[url('https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg')] bg-cover shrink-0" />
                        <span className="font-bold text-gray-800">4.5 Rating</span>
                        <span className="text-gray-400">|</span>
                        <div className="flex gap-1 text-[var(--color-secondary)]">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-3 h-3 ${i === 4 ? "fill-current opacity-50" : "fill-current"}`} />
                            ))}
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-gray-900 mb-4">
                        Loved By The <span className="text-[var(--color-primary)]">Community</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((test, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="flex text-[var(--color-secondary)] mb-6">
                                {[...Array(test.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-700 italic mb-8 min-h-[80px] leading-relaxed">
                                "{test.content}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 bg-green-100 text-[var(--color-primary)] font-bold text-xl rounded-full flex items-center justify-center shrink-0">
                                    {test.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{test.name}</h4>
                                    <p className="text-sm text-gray-500">{test.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
