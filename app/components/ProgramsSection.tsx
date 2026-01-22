"use client"

import { motion } from "framer-motion"
import { Smartphone, BarChart3, Code2, Trophy, ArrowRight, Check } from "lucide-react"

const programs = [
    {
        name: "Digital Marketing",
        tag: "Most In-Demand",
        salary: "₹4-8L",
        icon: Smartphone,
        skills: ["SEO", "Social Media", "Content Marketing", "Analytics"],
        gradient: "from-blue-500/10 to-cyan-500/10",
        iconGradient: "from-blue-500 to-cyan-600",
        tagGradient: "from-blue-500 to-cyan-600",
    },
    {
        name: "Data Analysis",
        tag: "High Growth",
        salary: "₹5-10L",
        icon: BarChart3,
        skills: ["Statistical Analysis", "Programming", "Data Visualization", "BI"],
        gradient: "from-purple-500/10 to-violet-500/10",
        iconGradient: "from-purple-500 to-violet-600",
        tagGradient: "from-purple-500 to-violet-600",
    },
    {
        name: "Full Stack Development",
        tag: "Tech Leader",
        salary: "₹6-12L",
        icon: Code2,
        skills: ["Frontend", "Backend", "Database", "Deployment"],
        gradient: "from-green-500/10 to-emerald-500/10",
        iconGradient: "from-green-500 to-emerald-600",
        tagGradient: "from-green-500 to-emerald-600",
    },
    {
        name: "ACCA Level 3",
        tag: "International",
        salary: "₹8-15L",
        icon: Trophy,
        skills: ["Accounting", "Financial Mgmt", "Auditing", "International"],
        gradient: "from-orange-500/10 to-amber-500/10",
        iconGradient: "from-orange-500 to-amber-600",
        tagGradient: "from-orange-500 to-amber-600",
    },
]

export default function ProgramsSection() {
    return (
        <section id="programs" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-accent/5 to-background overflow-hidden">
            {/* Background */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
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
                        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            Future-Ready
                        </span>{" "}
                        Programs
                    </h2>
                    <p className="text-lg sm:text-xl text-foreground/60 max-w-3xl mx-auto">
                        3+1 integrated programs combining bachelor's degrees with professional certifications
                    </p>
                </motion.div>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((prog, idx) => {
                        const Icon = prog.icon
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${prog.gradient} backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all cursor-pointer overflow-hidden`}
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
                                    className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${prog.iconGradient} flex items-center justify-center shadow-lg`}
                                >
                                    <Icon className="w-8 h-8 text-white" />
                                </motion.div>

                                {/* Tag */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${prog.tagGradient} text-white text-xs font-bold mb-4 shadow-md`}
                                >
                                    {prog.tag}
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-xl font-black text-foreground mb-4 group-hover:text-primary transition-colors">
                                    {prog.name}
                                </h3>

                                {/* Salary */}
                                <div className="mb-6 pb-6 border-b border-border/50">
                                    <motion.p
                                        className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {prog.salary}
                                    </motion.p>
                                    <p className="text-xs text-foreground/60 mt-1 font-medium">Starting Package</p>
                                </div>

                                {/* Skills */}
                                <div className="space-y-3">
                                    {prog.skills.map((skill, skillIdx) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: skillIdx * 0.1 }}
                                            className="flex items-center gap-2 text-sm text-foreground/70"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-primary" />
                                            </div>
                                            {skill}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Hover Arrow */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileHover={{ opacity: 1, x: 0 }}
                                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all"
                                >
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                                        <ArrowRight className="w-5 h-5 text-white" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
