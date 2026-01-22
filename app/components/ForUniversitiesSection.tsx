"use client"

import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, TrendingUp, Briefcase, Trophy, Sparkles, Send } from "lucide-react"

export default function ForUniversitiesSection() {
    return (
        <section id="universities" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-indigo-50/20 to-purple-50/20 dark:from-slate-950 dark:via-indigo-950/10 dark:to-purple-950/10" />
            <motion.div
                animate={{
                    background: [
                        "radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)",
                        "radial-gradient(circle at 70% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)",
                        "radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)",
                    ],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
            />

            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side - Benefits */}
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
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20"
                            >
                                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                                    For Universities
                                </span>
                            </motion.div>
                            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
                                Partner with{" "}
                                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                    Collegepedia
                                </span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Transform your institution with our comprehensive partnership model. We help you attract top talent, enhance your brand, and achieve exceptional placement rates.
                            </p>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-4">
                            {[
                                {
                                    icon: GraduationCap,
                                    title: "Brand Enhancement",
                                    desc: "Elevate your institution's market presence and reputation",
                                    gradient: "from-blue-500 to-cyan-500",
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Increased Enrollment",
                                    desc: "Attract high-quality students through strategic marketing",
                                    gradient: "from-green-500 to-emerald-500",
                                },
                                {
                                    icon: Briefcase,
                                    title: "Industry Connections",
                                    desc: "Access to 1000+ hiring partners for student placements",
                                    gradient: "from-purple-500 to-pink-500",
                                },
                                {
                                    icon: Trophy,
                                    title: "95% Placement Success",
                                    desc: "Proven track record of exceptional placement rates",
                                    gradient: "from-orange-500 to-red-500",
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

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Request Partnership</h3>
                                <p className="text-slate-600 dark:text-slate-400">Fill out the form and our team will contact you within 24 hours</p>
                            </div>

                            <form className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Institution Name *</label>
                                        <input
                                            type="text"
                                            placeholder="Enter institution name"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Contact Person *</label>
                                        <input
                                            type="text"
                                            placeholder="Your full name"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            placeholder="email@institution.edu"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Institution Type</label>
                                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-slate-900 dark:text-white">
                                        <option value="">Select institution type</option>
                                        <option value="university">University</option>
                                        <option value="college">College</option>
                                        <option value="institute">Technical Institute</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Interested Services</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {["Admission Support", "Skill Development", "Placement Services", "Sports Programs"].map((service) => (
                                            <label key={service} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all cursor-pointer">
                                                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-indigo-600 focus:ring-indigo-500" />
                                                <span className="text-sm text-slate-700 dark:text-slate-300">{service}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message (Optional)</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Tell us about your institution and partnership goals..."
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                                >
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    Submit Partnership Request
                                </motion.button>
                            </form>

                            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                                    Or reach us directly at{" "}
                                    <a href="tel:+918970002004" className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent hover:underline">
                                        8970002004
                                    </a>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
