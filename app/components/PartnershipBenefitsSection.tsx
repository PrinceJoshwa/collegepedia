"use client"

import { motion, Variants } from "framer-motion"
import { Target, TrendingUp, Briefcase, Star, Users, BookOpen, Calendar, Trophy, Sparkles } from "lucide-react"

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
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

export default function PartnershipBenefitsSection() {
    return (
        <>
            {/* Why Partner Section */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-green-50/20 to-blue-50/20 dark:from-slate-950 dark:via-green-950/10 dark:to-blue-950/10" />
                <motion.div
                    animate={{
                        background: [
                            "radial-gradient(circle at 30% 50%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)",
                            "radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
                            "radial-gradient(circle at 30% 50%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)",
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
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                                Partnership Benefits
                            </span>
                        </motion.div>
                        <h2 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white mb-6">
                            Why Partner with Collegepedia?
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            Comprehensive support for institutional growth and student success
                        </p>
                    </motion.div>

                    {/* Benefits Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {[
                            {
                                icon: Target,
                                title: "Brand Enhancement",
                                desc: "Elevate your institution's standing in the educational landscape through strategic marketing and positioning.",
                                gradient: "from-blue-500 to-cyan-500",
                                bgGradient: "from-blue-500/5 to-cyan-500/5",
                            },
                            {
                                icon: TrendingUp,
                                title: "Attract Top Talent",
                                desc: "Refine your approach to attract and secure the highest-calibre students with proven admission strategies.",
                                gradient: "from-green-500 to-emerald-500",
                                bgGradient: "from-green-500/5 to-emerald-500/5",
                            },
                            {
                                icon: Briefcase,
                                title: "Industry-Ready Skills",
                                desc: "Integrate cutting-edge skills directly into curriculum, matching industry expectations for better employment outcomes.",
                                gradient: "from-purple-500 to-pink-500",
                                bgGradient: "from-purple-500/5 to-pink-500/5",
                            },
                            {
                                icon: Star,
                                title: "Placement Success",
                                desc: "Significantly improve graduate placement rates with our extensive network of 1000+ hiring partners.",
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
                                    <div className="relative h-full p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        </div>

                                        {/* Background Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                        {/* Content */}
                                        <div className="relative space-y-5">
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
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Complete College Partnership Benefits */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-purple-50/30 to-slate-50 dark:from-blue-950/10 dark:via-purple-950/20 dark:to-slate-950" />

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
                            <Trophy className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                                Complete Partnership
                            </span>
                        </motion.div>
                        <h2 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white mb-6">
                            Complete College Partnership Benefits
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            Strategic partnership designed to empower colleges with comprehensive support for success
                        </p>
                    </motion.div>

                    {/* Benefits Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                title: "Brand Building & Market Entry",
                                desc: "Helping new colleges establish credibility and recognition in the market. We craft compelling narratives and execute targeted campaigns to attract top talent and enhance your institutional reputation from day one.",
                                icon: Target,
                                gradient: "from-blue-500 to-cyan-500",
                                bgGradient: "from-blue-500/5 to-cyan-500/5",
                            },
                            {
                                title: "Full Student Lifecycle Support",
                                desc: "Comprehensive guidance and assistance, from admission through to successful career placement. Our integrated approach ensures students are supported at every stage, fostering engagement and maximizing outcomes.",
                                icon: Users,
                                gradient: "from-purple-500 to-pink-500",
                                bgGradient: "from-purple-500/5 to-pink-500/5",
                            },
                            {
                                title: "Co-Branded Events & Fairs",
                                desc: "Organizing educational fairs and events with college branding to increase visibility and attract quality student enrollment.",
                                icon: Calendar,
                                gradient: "from-green-500 to-emerald-500",
                                bgGradient: "from-green-500/5 to-emerald-500/5",
                            },
                            {
                                title: "Sports Events & Regional Promotion",
                                desc: "Organizing sports events to promote partnered college brands region-wise, building community engagement and institutional prestige.",
                                icon: Trophy,
                                gradient: "from-orange-500 to-red-500",
                                bgGradient: "from-orange-500/5 to-red-500/5",
                            },
                            {
                                title: "Dedicated Support Teams",
                                desc: "Specialized teams for promotional activities and in-house counselling team for dedicated admission support and student guidance.",
                                icon: Users,
                                gradient: "from-pink-500 to-rose-500",
                                bgGradient: "from-pink-500/5 to-rose-500/5",
                            },
                            {
                                title: "Educational Institute Partnerships",
                                desc: "Access to partnered institutes for certification courses, expanding your program offerings and student competencies.",
                                icon: BookOpen,
                                gradient: "from-indigo-500 to-purple-500",
                                bgGradient: "from-indigo-500/5 to-purple-500/5",
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
                                    <div className="relative h-full p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        </div>

                                        {/* Background Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                        {/* Content */}
                                        <div className="relative space-y-5">
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
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                                    {item.title}
                                                </h3>
                                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>
        </>
    )
}
