"use client"

import { motion, Variants } from "framer-motion"
import { Users, BookOpen, Trophy, ArrowRight, Sparkles } from "lucide-react"

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
}

export default function ValueAndSuccessSection() {
    return (
        <>
            {/* Value Ecosystem Section */}
            <section id="solutions" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-950 dark:via-blue-950/20 dark:to-purple-950/20" />
                <motion.div
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
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
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                                Complete Solutions
                            </span>
                        </motion.div>
                        <h2 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white mb-6">
                            Our Value Ecosystem
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            The full spectrum from admission to placement success
                        </p>
                    </motion.div>

                    {/* Value Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: Users,
                                title: "Admission & Enrollment Support",
                                desc: "Expert counselling and comprehensive exam preparation attract and secure higher-calibre students, substantially improving intake quality and institutional selectivity.",
                                gradient: "from-blue-500 to-cyan-500",
                                bgGradient: "from-blue-500/5 to-cyan-500/5",
                            },
                            {
                                icon: BookOpen,
                                title: "Career & Skill Development",
                                desc: "Structured career guidance, application review, and specialised certification courses ensure students possess market-demanded skills aligned with employer expectations.",
                                gradient: "from-purple-500 to-pink-500",
                                bgGradient: "from-purple-500/5 to-pink-500/5",
                            },
                            {
                                icon: Trophy,
                                title: "Placement Assistance",
                                desc: "Dedicated placement services, campus recruitment coordination, and extensive corporate networking dramatically increase institutional placement rates.",
                                gradient: "from-orange-500 to-red-500",
                                bgGradient: "from-orange-500/5 to-red-500/5",
                            },
                        ].map((item, idx) => {
                            const Icon = item.icon
                            return (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{ y: -8 }}
                                    className="group relative"
                                >
                                    {/* Card */}
                                    <div className="relative h-full p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        </div>

                                        {/* Background Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                        {/* Content */}
                                        <div className="relative space-y-6">
                                            {/* Icon Box */}
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                                            >
                                                <Icon className="w-8 h-8 text-white" />
                                            </motion.div>

                                            {/* Text */}
                                            <div className="space-y-3">
                                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                                    {item.title}
                                                </h3>
                                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>

                                            {/* Hover Arrow */}
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                whileHover={{ opacity: 1, x: 0 }}
                                                className="flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
                                            >
                                                Learn more
                                                <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* BIMSR Success Story */}
            <section id="benefits" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-pink-50/30 to-slate-50 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-slate-950" />

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
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6"
                        >
                            <Trophy className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                Success Story
                            </span>
                        </motion.div>
                        <h2 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white mb-6">
                            Proven Success: Our Partnership Model
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            Our collaboration with BIMSR exemplifies successful implementation
                        </p>
                    </motion.div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Stats Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="space-y-8"
                        >
                            {/* Title */}
                            <div className="space-y-3">
                                <p className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                                    BIMSR Partnership Results
                                </p>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                                    Strategic Alignment & Enhanced Outcomes
                                </h3>
                            </div>

                            {/* Stats Cards */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                {[
                                    {
                                        num: "100+",
                                        label: "Students Admitted Successfully",
                                        desc: "Guided into their programs with expert support",
                                        gradient: "from-blue-500 to-cyan-500",
                                    },
                                    {
                                        num: "100%",
                                        label: "Skill Development Coverage",
                                        desc: "Comprehensive sessions for all students",
                                        gradient: "from-purple-500 to-pink-500",
                                    },
                                    {
                                        num: "100%",
                                        label: "Internship Support",
                                        desc: "Ensuring practical experience for every student",
                                        gradient: "from-orange-500 to-red-500",
                                    },
                                    {
                                        num: "1000+",
                                        label: "Hiring Partners Network",
                                        desc: "Extensive network for diverse career opportunities",
                                        gradient: "from-green-500 to-emerald-500",
                                    },
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        whileHover={{ x: 8, scale: 1.02 }}
                                        className="group relative"
                                    >
                                        <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
                                            {/* Shine Effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                            </div>

                                            {/* Icon Box */}
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className={`relative flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                                            >
                                                <span className="text-white font-black text-xl">{item.num}</span>
                                            </motion.div>

                                            {/* Text */}
                                            <div className="relative flex-1 space-y-1">
                                                <p className="font-bold text-slate-900 dark:text-white text-lg">
                                                    {item.label}
                                                </p>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Bottom Text */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="pt-6 space-y-4 p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10"
                            >
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    With an educational split of 70% academic and 30% industry-focused sessions, coupled with access to
                                    over 1000 hiring partners, graduates are equipped for successful careers.
                                </p>
                                <p className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                    Future-Ready Graduates | 95% Placement Success
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Partner Card Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-12 flex flex-col items-center justify-center shadow-2xl"
                            >
                                {/* Animated Background Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-8 left-8 w-24 h-24 border-4 border-white rounded-full"
                                    />
                                    <motion.div
                                        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        className="absolute bottom-8 right-8 w-32 h-32 border-4 border-white rounded-full"
                                    />
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-white rounded-full"
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 text-center space-y-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30"
                                    >
                                        <span className="text-white text-sm font-bold tracking-wide">NGO Partner</span>
                                    </motion.div>

                                    <motion.h3
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="text-4xl sm:text-5xl font-black text-white"
                                    >
                                        Anudip Foundation
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="text-white/90 text-xl font-medium"
                                    >
                                        Empowering Lives Through Skills
                                    </motion.p>

                                    <motion.a
                                        href="https://anudip.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-purple-600 font-bold hover:shadow-2xl transition-all duration-300"
                                    >
                                        Visit anudip.org
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.a>
                                </div>

                                {/* Floating Decorative Elements */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-8 right-8 w-16 h-16 border-2 border-white/40 rounded-2xl"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute bottom-8 left-8 w-12 h-12 border-2 border-white/40 rounded-full"
                                />
                            </motion.div>

                            {/* Glow Effect */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-8 -right-8 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
