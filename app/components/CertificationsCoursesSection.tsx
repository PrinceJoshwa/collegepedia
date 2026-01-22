"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BookOpen, Trophy, ArrowRight, Clock, Calendar, Sparkles, Award } from "lucide-react"

export default function CertificationsCoursesSection() {
    return (
        <section id="certifications" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-blue-50/20 dark:from-slate-950 dark:via-emerald-950/10 dark:to-blue-950/10" />
            <motion.div
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)",
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
                            Industry Recognized
                        </span>
                    </motion.div>
                    <h2 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white mb-6">
                        Certifications & Courses
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Boost your career with industry-recognized certifications and courses from top providers
                    </p>
                </motion.div>

                {/* Courses Section */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-12"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center shadow-lg">
                            <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white">Courses</h3>
                    </motion.div>

                    {/* Featured Courses */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                id: 1,
                                title: "DSA for Product-Based Companies",
                                provider: "ExcelR & EDL",
                                image: "/course1.jpeg",
                                duration: "30 Hours",
                                days: "Mon-Fri (15 days)",
                                startDate: "21st July 2025",
                                highlights: ["Interview Prep", "Top Tech Companies", "Hands-on Practice"],
                                description: "Master Data Structures & Algorithms to crack top tech interviews!",
                                gradient: "from-blue-500 to-purple-500",
                                registerUrl: "https://www.excelr.com/excelr-free-courses-registration-form",
                                category: "Development"
                            },
                            {
                                id: 2,
                                title: "DevOps Decode: Hands-on Fundamentals",
                                provider: "ExcelR & EDL",
                                image: "/course2.jpeg",
                                duration: "30 Hours",
                                days: "Mon-Fri (15 days)",
                                startDate: "18th June 2025",
                                highlights: ["CI/CD Pipelines", "Automation Tools", "Cloud Deployment"],
                                description: "Gain practical insights into DevOps tools, CI/CD, automation & more!",
                                gradient: "from-orange-500 to-red-500",
                                registerUrl: "https://www.excelr.com/excelr-free-courses-registration-form",
                                category: "DevOps"
                            },
                            {
                                id: 3,
                                title: "Mastering Applied Machine Learning",
                                provider: "ExcelR & BIMSR",
                                image: "/course3.jpeg",
                                duration: "30 Hours",
                                days: "15 Days",
                                startDate: "7th Jan 2025",
                                highlights: ["Interview Cracking", "Real Projects", "ML Algorithms"],
                                description: "Your key to cracking interviews! Master Applied Machine Learning.",
                                gradient: "from-green-500 to-emerald-500",
                                registerUrl: "https://www.excelr.com/excelr-free-courses-registration-form",
                                category: "AI/ML"
                            }
                        ].map((course, idx) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.7 }}
                                whileHover={{ y: -8 }}
                                className="group relative"
                            >
                                <div className="relative h-full rounded-3xl overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500">
                                    {/* Course Image */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={course.image}
                                            alt={course.title}
                                            fill
                                            className="object-fill group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-medium">
                                            {course.category}
                                        </div>
                                    </div>

                                    {/* Course Content */}
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <p className="text-xs font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">
                                                {course.provider}
                                            </p>
                                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                                                {course.title}
                                            </h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                                                {course.description}
                                            </p>
                                        </div>

                                        {/* Course Details */}
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                                                <Clock className="w-4 h-4" />
                                                {course.duration} | {course.days}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                                                <Calendar className="w-4 h-4" />
                                                Starts: {course.startDate}
                                            </div>
                                        </div>

                                        {/* Highlights */}
                                        <div className="flex flex-wrap gap-2">
                                            {course.highlights.map((highlight) => (
                                                <span key={highlight} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Register Button */}
                                        <motion.a
                                            href={course.registerUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`block w-full py-3 rounded-xl bg-gradient-to-r ${course.gradient} text-white text-sm font-bold text-center shadow-md hover:shadow-lg transition-all group/btn`}
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                Register Now
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </span>
                                        </motion.a>

                                        <div className="flex items-center justify-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                                            <Award className="w-3 h-3" />
                                            Certificate Included
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* More Courses Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">More Courses Available:</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                            {[
                                "/course4.jpeg",
                                "/course5.jpeg",
                                "/course6.jpeg",
                                "/course8.jpeg",
                                "/course9.jpeg",
                                "/course10.jpeg",
                                "/course11.jpeg",
                                "/course12.jpeg",
                            ].map((src, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    whileHover={{ y: -5 }}
                                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all cursor-pointer shadow-md hover:shadow-xl"
                                >
                                    <Image
                                        src={src}
                                        alt={`Course ${idx + 4}`}
                                        fill
                                        className="object-fill group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                                        <span className="text-white text-xs font-semibold">View Details</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Certifications Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-12"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                            <Trophy className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white">Our Certifications</h3>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
                        {[
                            { src: "/certificate1.jpeg", alt: "Certificate 1" },
                            { src: "/certificate2.jpeg", alt: "Certificate 2" },
                            { src: "/certificate3.jpeg", alt: "Certificate 3" },
                            { src: "/certificate4.png", alt: "Certificate 4" },
                            { src: "/certificate5.png", alt: "Certificate 5" },
                        ].map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={cert.src}
                                        alt={cert.alt}
                                        fill
                                        className="object-fill group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                                        <span className="text-white text-xs font-semibold">View Certificate</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    {/* <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-3 group"
                    >
                        Explore All Programs
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button> */}
                </motion.div>
            </div>
        </section>
    )
}
