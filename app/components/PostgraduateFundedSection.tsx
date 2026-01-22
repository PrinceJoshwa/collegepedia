"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Rocket, Target, CheckCircle2 } from "lucide-react"

export default function PostgraduateFundedSection() {
    return (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-blue-50/30 to-slate-50 dark:from-purple-950/20 dark:via-blue-950/10 dark:to-slate-950" />
            <motion.div
                animate={{
                    background: [
                        "radial-gradient(circle at 30% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 30% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-6"
                    >
                        <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                            Postgraduate Fully Funded
                        </span>
                    </motion.div>
                    <h2 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white mb-6">
                        100% Paid by collegepedia
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Your 1-year postgraduate course is completely funded by collegepedia, providing exceptional value and advanced specialization at no additional cost. This unique benefit sets you apart in the job market with both undergraduate and postgraduate credentials.
                    </p>
                </motion.div>

                {/* Journey Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {[
                        {
                            icon: GraduationCap,
                            title: "Bachelor's",
                            desc: "3 years of intensive undergraduate study",
                            gradient: "from-blue-500 to-cyan-500",
                            step: "1"
                        },
                        {
                            icon: Award,
                            title: "Professional Certification",
                            desc: "Industry-recognized credentials",
                            gradient: "from-purple-500 to-pink-500",
                            step: "2"
                        },
                        {
                            icon: GraduationCap,
                            title: "Free PG Year",
                            desc: "1 year fully funded postgraduate program",
                            gradient: "from-orange-500 to-red-500",
                            step: "3"
                        },
                        {
                            icon: Rocket,
                            title: "Launch Student a Career",
                            desc: "100% placement guarantee",
                            gradient: "from-green-500 to-emerald-500",
                            step: "4"
                        },
                    ].map((item, idx) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.7 }}
                                whileHover={{ y: -8 }}
                                className="group relative"
                            >
                                <div className="relative h-full p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 flex items-center justify-center shadow-lg">
                                        <span className="text-xl font-black text-white dark:text-slate-900">{item.step}</span>
                                    </div>

                                    {/* Icon Box */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg mb-6`}
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Connector Line */}
                                {idx < 3 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-700" />
                                )}
                            </motion.div>
                        )
                    })}
                </div>

                {/* Key Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-purple-500/20">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 text-center">
                            What This Means For You
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Complete your bachelor's degree with professional certification",
                                "Get a fully-funded 1-year postgraduate program",
                                "Graduate with both UG and PG credentials",
                                "100% placement guarantee upon completion",
                                "No additional cost for the PG year",
                                "Competitive advantage in the job market",
                            ].map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        {benefit}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
