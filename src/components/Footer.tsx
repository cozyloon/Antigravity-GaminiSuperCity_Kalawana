import Link from "next/link";
import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200">
            {/* Footer CTA Strip */}
            <div className="bg-[var(--color-primary)] py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
                    <h3 className="text-2xl font-bold text-white font-sans">
                        Need fresh groceries today?
                    </h3>
                    <a
                        href="tel:0452255521"
                        className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-primary)] px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto text-lg"
                    >
                        <Phone className="w-5 h-5" />
                        Call Now
                    </a>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* About */}
                    <div className="space-y-4">
                        <span className="text-2xl font-bold text-white font-sans block mb-6">
                            Gamini <span className="text-[var(--color-secondary)]">Super City</span>
                        </span>
                        <p className="text-gray-400 leading-relaxed">
                            Your neighborhood supermarket providing fresh produce, groceries, and daily necessities with warm Sri Lankan hospitality.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white font-sans mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {["Home", "About", "Categories", "Gallery", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="text-lg font-bold text-white font-sans mb-6">Opening Hours</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium text-white">Monday - Sunday</p>
                                    <p>7:30 AM – 9:00 PM</p>
                                </div>
                            </li>
                            <li className="p-3 bg-gray-800 rounded-lg border border-gray-700 mt-4">
                                <p className="text-sm">
                                    <span className="text-[var(--color-primary)] font-semibold">Open Daily</span> — We are open every day to serve the Kalawana community.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-lg font-bold text-white font-sans mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                                <p>No.34 Manana,<br />Kalawana 70450,<br />Sri Lanka</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                                <a href="tel:0452255521" className="hover:text-white transition-colors">
                                    0452 255 521
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Gamini Super City | All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
