"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Trophy, Award, Building2, Shirt, Sparkles } from "lucide-react"

export default function SportsExcellenceSection() {
    return (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-orange-50/20 to-red-50/20 dark:from-slate-950 dark:via-orange-950/10 dark:to-red-950/10" />
            <motion.div
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.08) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 50%, rgba(239, 68, 68, 0.08) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.08) 0%, transparent 50%)",
                    ],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
            />

            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        {/* Header */}
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20"
                            >
                                <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                                <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                                    Sports Excellence
                                </span>
                            </motion.div>
                            <h3 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
                                Football Excellence Program
                            </h3>
                        </div>

                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            Seamlessly integrate rigorous academics with elite professional sports training. Experience
                            world-class coaching, championship sponsorship, and cutting-edge facilities, all designed to develop
                            your mind and athletic prowess.
                        </p>

                        {/* Benefits */}
                        <div className="space-y-4">
                            {[
                                {
                                    icon: Award,
                                    title: "Expert Coaching",
                                    desc: "AIFFF-certified coaches dedicated to your development",
                                    gradient: "from-blue-500 to-cyan-500",
                                },
                                {
                                    icon: Trophy,
                                    title: "Championship Access",
                                    desc: "Exclusive sponsorship opportunities for major tournaments",
                                    gradient: "from-orange-500 to-red-500",
                                },
                                {
                                    icon: Building2,
                                    title: "Professional Facilities",
                                    desc: "Train in state-of-the-art, professional-grade facilities",
                                    gradient: "from-purple-500 to-pink-500",
                                },
                                {
                                    icon: Shirt,
                                    title: "Complimentary Kit",
                                    desc: "Full sports kit to support your training",
                                    gradient: "from-green-500 to-emerald-500",
                                },
                            ].map((item, idx) => {
                                const Icon = item.icon
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                                        whileHover={{ x: 8 }}
                                        className="group relative"
                                    >
                                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
                                            {/* Icon Box */}
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md`}
                                            >
                                                <Icon className="w-6 h-6 text-white" />
                                            </motion.div>

                                            {/* Text */}
                                            <div className="flex-1">
                                                <p className="font-bold text-slate-900 dark:text-white mb-1">
                                                    {item.title}
                                                </p>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl"
                        >
                            {/* Gradient Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-1 rounded-3xl">
                                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-900">
                                    <Image
                                        src="/football.webp"
                                        alt="Sports Excellence Program"
                                        width={600}
                                        height={600}
                                        className="object-cover w-full h-full"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-2xl"
                        >
                            <div className="text-center">
                                <p className="text-3xl font-black text-white">⚽</p>
                                <p className="text-xs font-bold text-white/90 mt-1">Elite Training</p>
                            </div>
                        </motion.div>

                        {/* Glow Effect */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange-500/30 rounded-full blur-3xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
