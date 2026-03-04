"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-gray-900 mb-4">
                        Get In <span className="text-[var(--color-primary)]">Touch</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Have a question about product availability? Want to check our daily stock? Call us or visit the store.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">

                    {/* Left Column - Contact Info */}
                    <div className="bg-[var(--color-primary)] text-white p-10 md:p-12 relative overflow-hidden">
                        {/* Background design */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <h3 className="text-2xl font-bold font-sans mb-8 relative z-10">Store Information</h3>

                        <div className="space-y-8 relative z-10">

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Our Location</h4>
                                    <p className="text-green-50 leading-relaxed">
                                        No.34 Manana,<br />
                                        Kalawana 70450,<br />
                                        Sri Lanka
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Call Us</h4>
                                    <a href="tel:0452255521" className="text-green-50 hover:text-white transition-colors text-xl font-medium block">
                                        0452 255 521
                                    </a>
                                    <p className="text-sm text-green-100 mt-1">Call Us for Product Availability</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Opening Hours</h4>
                                    <p className="text-green-50 leading-relaxed">
                                        Monday - Sunday<br />
                                        7:30 AM – 9:00 PM
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column - Map and Form Area */}
                    <div className="p-10 md:p-12 flex flex-col justify-between">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold font-sans text-gray-900 mb-2">How to reach us</h3>
                            <p className="text-gray-600">We are located in the heart of Kalawana. Use the map below to get directions.</p>
                        </div>

                        {/* Google Map Embed */}
                        <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden mb-8 shadow-inner">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7174627252277!2d80.4046922!3d6.417382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e76a6d6d45eb%3A0x6b4ebec6c8d23467!2sKalawana%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1709560000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <a
                            href="https://maps.google.com/?q=Gamini+Super+City+Kalawana"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 rounded-xl font-bold text-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors text-center shadow-lg"
                        >
                            Open in Google Maps
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
