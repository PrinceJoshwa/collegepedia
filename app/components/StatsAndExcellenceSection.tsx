"use client"

import { motion } from "framer-motion"
import { Users, Award, Briefcase, TrendingUp, Target, Sparkles } from "lucide-react"

const stats = [
    {
        icon: Users,
        label: "1000+",
        desc: "Students Admitted",
        gradient: "from-blue-500/10 to-cyan-500/10",
        iconGradient: "from-blue-500 to-cyan-600",
    },
    {
        icon: Award,
        label: "100%",
        desc: "Skill Development",
        gradient: "from-purple-500/10 to-violet-500/10",
        iconGradient: "from-purple-500 to-violet-600",
    },
    {
        icon: Briefcase,
        label: "1500+",
        desc: "Hiring Partners",
        gradient: "from-orange-500/10 to-amber-500/10",
        iconGradient: "from-orange-500 to-amber-600",
    },
    {
        icon: TrendingUp,
        label: "95%",
        desc: "Placement Success",
        gradient: "from-green-500/10 to-emerald-500/10",
        iconGradient: "from-green-500 to-emerald-600",
    },
]

const excellence = [
    {
        icon: Target,
        stat: "98%",
        title: "Graduate Employment",
        desc: "Our comprehensive placement support ensures nearly all graduates secure employment.",
        gradient: "from-green-500/10 to-emerald-500/10",
        iconGradient: "from-green-500 to-emerald-600",
    },
    {
        icon: Award,
        stat: "20+",
        title: "Industry Certifications",
        desc: "Gain competitive edge with specialized certifications co-developed with industry leaders.",
        gradient: "from-blue-500/10 to-indigo-500/10",
        iconGradient: "from-blue-500 to-indigo-600",
    },
    {
        icon: Sparkles,
        stat: "500+",
        title: "Global Alumni Network",
        desc: "Connect with professionals worldwide, fostering global career opportunities.",
        gradient: "from-orange-500/10 to-pink-500/10",
        iconGradient: "from-orange-500 to-pink-600",
    },
]

export default function StatsAndExcellenceSection() {
    return (
        <>
            {/* Stats Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, idx) => {
                            const Icon = stat.icon
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className={`group relative p-8 rounded-3xl bg-gradient-to-br ${stat.gradient} backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all overflow-hidden`}
                                >
                                    {/* Glow effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                                    />

                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                        className={`mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.iconGradient} flex items-center justify-center shadow-lg`}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </motion.div>

                                    {/* Number */}
                                    <motion.div
                                        className="text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {stat.label}
                                    </motion.div>

                                    {/* Description */}
                                    <div className="text-sm font-semibold text-foreground/60 group-hover:text-foreground transition-colors">
                                        {stat.desc}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Global Excellence Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
                {/* Background */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
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
                            Where Academic Excellence Meets{" "}
                            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                                Industry Skills
                            </span>
                        </h2>
                        <p className="text-lg sm:text-xl text-foreground/60 max-w-3xl mx-auto">
                            Blending academic excellence with industry-relevant skills for real-world success
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {excellence.map((item, idx) => {
                            const Icon = item.icon
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className={`group relative p-10 rounded-3xl bg-gradient-to-br ${item.gradient} backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all text-center overflow-hidden`}
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
                                        className={`mx-auto mb-6 w-20 h-20 rounded-3xl bg-gradient-to-br ${item.iconGradient} flex items-center justify-center shadow-2xl`}
                                    >
                                        <Icon className="w-10 h-10 text-white" />
                                    </motion.div>

                                    {/* Stat */}
                                    <motion.div
                                        className="text-6xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {item.stat}
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-black text-foreground mb-4">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-foreground/60 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
