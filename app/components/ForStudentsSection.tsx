"use client"

import { motion } from "framer-motion"
import { ArrowRight, Target, Laptop, Trophy, CreditCard, GraduationCap, Zap } from "lucide-react"

const benefits = [
    {
        icon: Target,
        title: "100% Placement Guarantee",
        desc: "We guarantee your career success with our extensive network of 1000+ hiring partners.",
        highlight: "Guaranteed",
        color: "from-green-500 to-emerald-600",
        bgGradient: "from-green-500/10 via-emerald-500/5 to-teal-500/10",
        size: "large", // Takes 2 columns
    },
    {
        icon: Laptop,
        title: "Free Laptop Kit",
        desc: "Complete technology toolkit to support your learning journey.",
        highlight: "Free",
        color: "from-blue-500 to-cyan-600",
        bgGradient: "from-blue-500/10 via-cyan-500/5 to-sky-500/10",
        size: "medium",
    },
    {
        icon: Trophy,
        title: "Sports Excellence",
        desc: "Elite sports training with AIFFF-certified coaching.",
        highlight: "Elite",
        color: "from-orange-500 to-red-600",
        bgGradient: "from-orange-500/10 via-red-500/5 to-pink-500/10",
        size: "medium",
    },
    {
        icon: CreditCard,
        title: "0% Interest EMI",
        desc: "Flexible payment options making quality education accessible.",
        highlight: "0% Interest",
        color: "from-purple-500 to-violet-600",
        bgGradient: "from-purple-500/10 via-violet-500/5 to-indigo-500/10",
        size: "medium",
    },
    {
        icon: GraduationCap,
        title: "PG 100% Funded",
        desc: "Your 1-year postgraduate course completely paid by Collegepedia.",
        highlight: "Fully Funded",
        color: "from-pink-500 to-rose-600",
        bgGradient: "from-pink-500/10 via-rose-500/5 to-red-500/10",
        size: "medium",
    },
]

export default function ForStudentsSection() {
    return (
        <section id="students" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 space-y-4"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-xl border border-primary/30 shadow-lg"
                    >
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            For Students
                        </span>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground">
                        Your Path to{" "}
                        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            Success Starts Here
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-foreground/60 max-w-3xl mx-auto">
                        Join Collegepedia and unlock exclusive benefits designed to guarantee your career success
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {benefits.map((benefit, idx) => {
                        const Icon = benefit.icon
                        const isLarge = benefit.size === "large"

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${benefit.bgGradient} backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all overflow-hidden ${isLarge ? "lg:col-span-2 lg:row-span-1" : ""
                                    }`}
                            >
                                {/* Shine effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                    animate={{
                                        x: ["-100%", "200%"],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                    }}
                                />

                                {/* Badge */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${benefit.color} text-white text-xs font-bold shadow-lg`}
                                >
                                    {benefit.highlight}
                                </motion.div>

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg shadow-primary/20`}
                                >
                                    <Icon className="w-8 h-8 text-white" />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-foreground/60 leading-relaxed">
                                    {benefit.desc}
                                </p>

                                {/* Hover Arrow */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileHover={{ opacity: 1, x: 0 }}
                                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all"
                                >
                                    <ArrowRight className="w-6 h-6 text-primary" />
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground font-bold text-lg shadow-2xl shadow-primary/30 overflow-hidden"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{
                                backgroundSize: "200% auto",
                            }}
                        />
                        <span className="relative z-10 flex items-center gap-2">
                            Enroll Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}
