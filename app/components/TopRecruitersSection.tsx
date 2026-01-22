"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Building2, Sparkles } from "lucide-react"

const companies = [
    { src: "/TCS.png", alt: "TCS" },
    { src: "/infosys.png", alt: "Infosys" },
    { src: "/Accenture.png", alt: "Accenture" },
    { src: "/Capgemini.webp", alt: "Capgemini" },
    { src: "/CTS.png", alt: "Cognizant" },
    { src: "/HCLTECH.png", alt: "HCL Tech" },
    { src: "/Tech Mahindra Logo_3.webp", alt: "Tech Mahindra" },
    { src: "/EY.png", alt: "EY" },
    { src: "/deleitepng.png", alt: "Deloitte" },
]

export default function TopRecruitersSection() {
    return (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-accent/5 overflow-hidden">
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
                className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 space-y-4"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-xl border border-primary/30 shadow-lg"
                    >
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Our Partners
                        </span>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground">
                        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            Top Recruiters
                        </span>{" "}
                        Trust Us
                    </h2>
                    <p className="text-lg sm:text-xl text-foreground/60 max-w-3xl mx-auto">
                        Leading companies that partner with Collegepedia for their talent acquisition
                    </p>
                </motion.div>

                {/* Marquee Container */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                    {/* Scrolling Container */}
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-8 items-center py-4"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                x: {
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: "linear",
                                },
                            }}
                        >
                            {/* First set */}
                            {companies.map((company, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{
                                        scale: 1.1,
                                        y: -5,
                                    }}
                                    className="flex-shrink-0 w-40 h-24 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-2xl border border-border/50 hover:border-primary/50 flex items-center justify-center p-6 transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Image
                                        src={company.src}
                                        alt={company.alt}
                                        width={120}
                                        height={60}
                                        className="object-contain max-h-14 w-auto grayscale hover:grayscale-0 transition-all"
                                    />
                                </motion.div>
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {companies.map((company, idx) => (
                                <motion.div
                                    key={`dup-${idx}`}
                                    whileHover={{
                                        scale: 1.1,
                                        y: -5,
                                    }}
                                    className="flex-shrink-0 w-40 h-24 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-2xl border border-border/50 hover:border-primary/50 flex items-center justify-center p-6 transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Image
                                        src={company.src}
                                        alt={company.alt}
                                        width={120}
                                        height={60}
                                        className="object-contain max-h-14 w-auto grayscale hover:grayscale-0 transition-all"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-foreground/50 flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        And{" "}
                        <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            1000+ more
                        </span>{" "}
                        hiring partners across India
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
