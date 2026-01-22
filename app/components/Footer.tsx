"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Mail, ArrowUp } from "lucide-react"
import { useState } from "react"

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5 border-t border-border/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                                <span className="text-primary-foreground font-black text-xl">C</span>
                            </div>
                            <div>
                                <span className="font-black text-xl text-foreground block">Collegepedia</span>
                                <span className="text-xs text-foreground/50">Education Excellence</span>
                            </div>
                        </div>
                        <p className="text-sm text-foreground/60 leading-relaxed">
                            Transforming education through strategic partnerships and comprehensive student development across Pan India.
                        </p>
                    </motion.div>

                    {/* Solutions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="font-black text-foreground mb-6">Solutions</h4>
                        <ul className="space-y-3">
                            {["Admission Support", "Skill Development", "Placement Services", "Sports Programs"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-sm text-foreground/60 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="font-black text-foreground mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {["Students", "Universities", "Programs", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-sm text-foreground/60 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h4 className="font-black text-foreground mb-6">Contact</h4>
                        <div className="space-y-4">
                            <a
                                href="tel:+918970002004"
                                className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold">8970002004</p>
                                    <p className="text-xs text-foreground/40">8893002004</p>
                                </div>
                            </a>
                            <a
                                href="mailto:infocollegepedia@gmail.com"
                                className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <p className="font-semibold">infocollegepedia@gmail.com</p>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4"
                >
                    <p className="text-sm text-foreground/50">
                        &copy; 2025 Collegepedia. All rights reserved. Operating Pan India.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll to Top */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center shadow-2xl shadow-primary/30 z-40"
            >
                <ArrowUp className="w-6 h-6" />
            </motion.button>
        </footer>
    )
}
