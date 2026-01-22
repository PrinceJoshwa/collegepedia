"use client"

import { motion } from "framer-motion"
import { Calendar, Trophy, Megaphone, Users, Building2, Sparkles } from "lucide-react"

export default function CollegeReputationSection() {
    return (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-amber-50/20 to-orange-50/20 dark:from-slate-950 dark:via-amber-950/10 dark:to-orange-950/10" />
            <motion.div
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 50%, rgba(249, 115, 22, 0.08) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 50%)",
                    ],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
            />

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <span className="text-sm font-semibold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                            Brand Building
                        </span>
                    </motion.div>
                    <h2 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white mb-6">
                        Building College Reputation & Brand Reach
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Comprehensive marketing and outreach services to establish your institution's credibility and attract top talent
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Calendar,
                            title: "Co-Branded Events & Fairs",
                            desc: "Organizing educational fairs and events with college branding",
                            gradient: "from-blue-500 to-cyan-500",
                            bgGradient: "from-blue-500/5 to-cyan-500/5",
                        },
                        {
                            icon: Trophy,
                            title: "Sports Events & Regional Promotion",
                            desc: "Organizing sports events to promote partnered college brands region-wise",
                            gradient: "from-orange-500 to-red-500",
                            bgGradient: "from-orange-500/5 to-red-500/5",
                        },
                        {
                            icon: Megaphone,
                            title: "Dedicated Marketing Team",
                            desc: "Specialized team for promotional activities",
                            gradient: "from-purple-500 to-pink-500",
                            bgGradient: "from-purple-500/5 to-pink-500/5",
                        },
                        {
                            icon: Users,
                            title: "In-House Counselling Team",
                            desc: "Dedicated admission support team",
                            gradient: "from-green-500 to-emerald-500",
                            bgGradient: "from-green-500/5 to-emerald-500/5",
                        },
                        {
                            icon: Building2,
                            title: "Educational Institute Partnerships",
                            desc: "Partnered institutes for certification courses",
                            gradient: "from-indigo-500 to-blue-500",
                            bgGradient: "from-indigo-500/5 to-blue-500/5",
                        },
                    ].map((service, idx) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.7 }}
                                whileHover={{ y: -8 }}
                                className="group relative"
                            >
                                <div className={`relative h-full p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </div>

                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    {/* Content */}
                                    <div className="relative space-y-5">
                                        {/* Icon Box */}
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </motion.div>

                                        {/* Text */}
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                                {service.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-xl border border-amber-500/20">
                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                            <span className="font-black text-2xl bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                                Comprehensive Support
                            </span>
                            <br />
                            for building your institution's brand and attracting quality students
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
