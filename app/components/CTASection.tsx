"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function CTAAndContactSection() {
    return (
        <>
            {/* CTA Section */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-white/10 blur-3xl"
                            style={{
                                width: `${Math.random() * 400 + 200}px`,
                                height: `${Math.random() * 400 + 200}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                scale: [1, 1.2, 1],
                                x: [0, Math.random() * 50 - 25],
                                y: [0, Math.random() * 50 - 25],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                            Elevate Your Institution.
                            <br />
                            Guarantee Student Success.
                        </h2>
                        <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                            Join 1000+ institutions across Pan India partnering with Collegepedia to elevate student outcomes and
                            institutional excellence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-2xl bg-primary-foreground text-primary font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
                        >
                            Start Your Partnership
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-2xl border-2 border-primary-foreground/50 bg-white/10 backdrop-blur-xl text-primary-foreground font-bold text-lg hover:bg-white/20 transition-all"
                        >
                            Schedule Demo
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden">
                {/* Background */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
                />

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20 space-y-4"
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground">
                            Ready to Build a{" "}
                            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                                Legacy of Excellence
                            </span>
                            ?
                        </h2>
                        <p className="text-lg sm:text-xl text-foreground/60 max-w-3xl mx-auto">
                            Reach out to our partnership team today
                        </p>
                    </motion.div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                icon: Phone,
                                title: "Call Us",
                                value: "8970002004 / 8893002004",
                                href: "tel:+918970002004",
                                gradient: "from-blue-500/10 to-cyan-500/10",
                                iconGradient: "from-blue-500 to-cyan-600",
                            },
                            {
                                icon: Mail,
                                title: "Email Us",
                                value: "infocollegepedia@gmail.com",
                                href: "mailto:infocollegepedia@gmail.com",
                                gradient: "from-purple-500/10 to-pink-500/10",
                                iconGradient: "from-purple-500 to-pink-600",
                            },
                        ].map((contact, idx) => {
                            const Icon = contact.icon
                            return (
                                <motion.a
                                    key={idx}
                                    href={contact.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className={`group relative p-10 rounded-3xl bg-gradient-to-br ${contact.gradient} backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all text-center overflow-hidden`}
                                >
                                    {/* Shine effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                                        animate={{
                                            x: ["-100%", "200%"],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatDelay: 2,
                                        }}
                                    />

                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                        className={`mx-auto mb-6 w-20 h-20 rounded-3xl bg-gradient-to-br ${contact.iconGradient} flex items-center justify-center shadow-2xl`}
                                    >
                                        <Icon className="w-10 h-10 text-white" />
                                    </motion.div>

                                    {/* Content */}
                                    <p className="text-sm font-semibold text-foreground/60 mb-2">{contact.title}</p>
                                    <p className="text-xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                        {contact.value}
                                    </p>
                                </motion.a>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
