// "use client"

// import { motion } from "framer-motion"
// import { ArrowRight, Sparkles, TrendingUp, Users, Award, Briefcase, CheckCircle2, Star } from "lucide-react"

// export default function HeroSection() {
//     return (
//         <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/20">
//             {/* Enhanced Animated Background */}
//             <div className="absolute inset-0 overflow-hidden">
//                 {/* Gradient Mesh */}
//                 <motion.div
//                     animate={{
//                         backgroundPosition: ["0% 0%", "100% 100%"],
//                     }}
//                     transition={{
//                         duration: 20,
//                         repeat: Infinity,
//                         repeatType: "reverse",
//                         ease: "linear",
//                     }}
//                     className="absolute inset-0 opacity-40"
//                     style={{
//                         backgroundImage: `
//                             radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
//                             radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.4) 0%, transparent 50%),
//                             radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)
//                         `,
//                         backgroundSize: "200% 200%",
//                     }}
//                 />

//                 {/* Floating Orbs - More Dynamic */}
//                 {[...Array(6)].map((_, i) => (
//                     <motion.div
//                         key={i}
//                         className="absolute rounded-full blur-3xl"
//                         style={{
//                             width: `${Math.random() * 400 + 250}px`,
//                             height: `${Math.random() * 400 + 250}px`,
//                             left: `${Math.random() * 100}%`,
//                             top: `${Math.random() * 100}%`,
//                             background: `radial-gradient(circle, ${i % 3 === 0
//                                 ? "rgba(59, 130, 246, 0.3)"
//                                 : i % 3 === 1
//                                     ? "rgba(147, 51, 234, 0.3)"
//                                     : "rgba(236, 72, 153, 0.3)"
//                                 } 0%, transparent 70%)`,
//                         }}
//                         animate={{
//                             x: [0, Math.random() * 100 - 50, 0],
//                             y: [0, Math.random() * 100 - 50, 0],
//                             scale: [1, 1.3, 1],
//                             opacity: [0.3, 0.6, 0.3],
//                         }}
//                         transition={{
//                             duration: Math.random() * 15 + 15,
//                             repeat: Infinity,
//                             ease: "easeInOut",
//                         }}
//                     />
//                 ))}

//                 {/* Grid Pattern Overlay */}
//                 <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
//             </div>

//             <div className="max-w-7xl mx-auto relative z-10 py-20">
//                 <div className="text-center space-y-10">
//                     {/* Enhanced Badge */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="flex justify-center"
//                     >
//                         <motion.div
//                             whileHover={{ scale: 1.05 }}
//                             className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-blue-500/30 shadow-lg shadow-blue-500/20"
//                         >
//                             <motion.div
//                                 animate={{
//                                     rotate: [0, 360],
//                                     scale: [1, 1.2, 1],
//                                 }}
//                                 transition={{
//                                     duration: 3,
//                                     repeat: Infinity,
//                                     ease: "linear",
//                                 }}
//                             >
//                                 <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//                             </motion.div>
//                             <span className="text-sm font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
//                                 Trusted by 1000+ Students & Institutions
//                             </span>
//                             <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
//                         </motion.div>
//                     </motion.div>

//                     {/* Enhanced Main Heading */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         className="space-y-6"
//                     >
//                         <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
//                             <motion.span
//                                 className="block text-foreground mb-2"
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: 0.3 }}
//                             >
//                                 Transform Your
//                             </motion.span>
//                             <motion.span
//                                 className="block relative"
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: 0.4 }}
//                             >
//                                 <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
//                                     Future Today
//                                 </span>
//                                 {/* Animated Underline */}
//                                 <motion.div
//                                     initial={{ scaleX: 0 }}
//                                     animate={{ scaleX: 1 }}
//                                     transition={{ duration: 0.8, delay: 0.8 }}
//                                     className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-2 w-64 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-sm"
//                                 />
//                             </motion.span>
//                         </h1>
//                     </motion.div>

//                     {/* Enhanced Subtitle with Highlights */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.5 }}
//                         className="max-w-4xl mx-auto"
//                     >
//                         <p className="text-lg sm:text-xl lg:text-2xl text-foreground/70 leading-relaxed mb-6">
//                             Join 1000+ students who chose excellence. Get industry-ready skills, guaranteed placement, and a fully-funded postgraduate year - all at zero additional cost.
//                         </p>

//                         {/* Quick Benefits Pills */}
//                         <div className="flex flex-wrap justify-center gap-3">
//                             {[
//                                 { icon: CheckCircle2, text: "100% Placement", color: "from-green-500 to-emerald-500" },
//                                 { icon: CheckCircle2, text: "Free PG Year", color: "from-blue-500 to-cyan-500" },
//                                 { icon: CheckCircle2, text: "Industry Certifications", color: "from-purple-500 to-pink-500" },
//                             ].map((item, idx) => {
//                                 const Icon = item.icon
//                                 return (
//                                     <motion.div
//                                         key={idx}
//                                         initial={{ opacity: 0, scale: 0.8 }}
//                                         animate={{ opacity: 1, scale: 1 }}
//                                         transition={{ delay: 0.6 + idx * 0.1 }}
//                                         className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-semibold shadow-lg`}
//                                     >
//                                         <Icon className="w-4 h-4" />
//                                         {item.text}
//                                     </motion.div>
//                                 )
//                             })}
//                         </div>
//                     </motion.div>
//                     {/* Enhanced Stats Cards */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 40 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.9 }}
//                         className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-20 max-w-6xl mx-auto"
//                     >
//                         {[
//                             {
//                                 icon: Users,
//                                 value: "1000+",
//                                 label: "Students Placed",
//                                 gradient: "from-blue-500/10 to-cyan-500/10",
//                                 iconGradient: "from-blue-500 to-cyan-600",
//                                 borderGradient: "from-blue-500/50 to-cyan-500/50",
//                             },
//                             {
//                                 icon: Award,
//                                 value: "100%",
//                                 label: "Placement Rate",
//                                 gradient: "from-purple-500/10 to-pink-500/10",
//                                 iconGradient: "from-purple-500 to-pink-600",
//                                 borderGradient: "from-purple-500/50 to-pink-500/50",
//                             },
//                             {
//                                 icon: Briefcase,
//                                 value: "1500+",
//                                 label: "Hiring Partners",
//                                 gradient: "from-orange-500/10 to-red-500/10",
//                                 iconGradient: "from-orange-500 to-red-600",
//                                 borderGradient: "from-orange-500/50 to-red-500/50",
//                             },
//                             {
//                                 icon: TrendingUp,
//                                 value: "95%",
//                                 label: "Success Rate",
//                                 gradient: "from-green-500/10 to-emerald-500/10",
//                                 iconGradient: "from-green-500 to-emerald-600",
//                                 borderGradient: "from-green-500/50 to-emerald-500/50",
//                             },
//                         ].map((stat, idx) => {
//                             const Icon = stat.icon
//                             return (
//                                 <motion.div
//                                     key={idx}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: 1 + idx * 0.1 }}
//                                     whileHover={{ y: -12, scale: 1.05 }}
//                                     className="group relative"
//                                 >
//                                     <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${stat.gradient} backdrop-blur-xl border-2 border-transparent hover:border-opacity-100 transition-all cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl`}
//                                         style={{
//                                             borderImage: `linear-gradient(135deg, ${stat.borderGradient}) 1`,
//                                         }}
//                                     >
//                                         {/* Enhanced Shine effect */}
//                                         <motion.div
//                                             className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
//                                             animate={{
//                                                 x: ["-100%", "200%"],
//                                             }}
//                                             transition={{
//                                                 duration: 1.5,
//                                                 repeat: Infinity,
//                                                 repeatDelay: 3,
//                                             }}
//                                         />

//                                         {/* Icon with glow */}
//                                         <motion.div
//                                             whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
//                                             transition={{ duration: 0.5 }}
//                                             className="relative mb-4 mx-auto"
//                                         >
//                                             <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.iconGradient} flex items-center justify-center shadow-xl`}>
//                                                 <Icon className="w-8 h-8 text-white" />
//                                             </div>
//                                             {/* Icon glow */}
//                                             <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.iconGradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
//                                         </motion.div>

//                                         {/* Value with counter animation */}
//                                         <motion.p
//                                             className="text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
//                                             whileHover={{ scale: 1.1 }}
//                                         >
//                                             {stat.value}
//                                         </motion.p>

//                                         {/* Label */}
//                                         <p className="text-sm text-foreground/60 font-semibold">{stat.label}</p>
//                                     </div>
//                                 </motion.div>
//                             )
//                         })}
//                     </motion.div>

//                     {/* Enhanced CTA Buttons */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.7 }}
//                         className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
//                     >
//                         <motion.button
//                             whileHover={{ scale: 1.05, y: -3 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground font-bold shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-3 overflow-hidden"
//                         >
//                             {/* Animated shine effect */}
//                             <motion.div
//                                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
//                                 animate={{
//                                     x: ["-200%", "200%"],
//                                 }}
//                                 transition={{
//                                     duration: 2,
//                                     repeat: Infinity,
//                                     repeatDelay: 1,
//                                 }}
//                             />
//                             <span className="relative z-10 text-lg">Start Your Journey</span>
//                             <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform" />
//                         </motion.button>

//                         <motion.button
//                             whileHover={{ scale: 1.05, y: -3 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="px-10 py-5 rounded-full border-2 border-border bg-background/50 backdrop-blur-xl text-foreground font-bold hover:border-primary/50 transition-all shadow-lg text-lg"
//                         >
//                             Explore Programs
//                         </motion.button>
//                     </motion.div>

                    
                    

//                     {/* Enhanced Scroll Indicator */}
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 1.4 }}
//                         className="pt-16"
//                     >
//                         <motion.div
//                             animate={{
//                                 y: [0, 12, 0],
//                             }}
//                             transition={{
//                                 duration: 2,
//                                 repeat: Infinity,
//                                 ease: "easeInOut",
//                             }}
//                             className="inline-flex flex-col items-center gap-3 text-foreground/40"
//                         >
//                             <span className="text-xs font-semibold tracking-wider uppercase">Scroll to explore</span>
//                             <div className="w-7 h-12 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
//                                 <motion.div
//                                     animate={{
//                                         y: [0, 16, 0],
//                                     }}
//                                     transition={{
//                                         duration: 2,
//                                         repeat: Infinity,
//                                         ease: "easeInOut",
//                                     }}
//                                     className="w-2 h-2 rounded-full bg-foreground/40"
//                                 />
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     )
// }

"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, TrendingUp, Users, Award, Briefcase, CheckCircle2, Star } from "lucide-react"

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/20">
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Mesh */}
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                    }}
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                            radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.4) 0%, transparent 50%),
                            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)
                        `,
                        backgroundSize: "200% 200%",
                    }}
                />

                {/* Floating Orbs - More Dynamic */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full blur-3xl"
                        style={{
                            width: `${Math.random() * 400 + 250}px`,
                            height: `${Math.random() * 400 + 250}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: `radial-gradient(circle, ${i % 3 === 0
                                ? "rgba(59, 130, 246, 0.3)"
                                : i % 3 === 1
                                    ? "rgba(147, 51, 234, 0.3)"
                                    : "rgba(236, 72, 153, 0.3)"
                                } 0%, transparent 70%)`,
                        }}
                        animate={{
                            x: [0, Math.random() * 100 - 50, 0],
                            y: [0, Math.random() * 100 - 50, 0],
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: Math.random() * 15 + 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
            </div>

            {/* Added pt-32 to push content down below fixed header */}
            <div className="max-w-7xl mx-auto relative z-10 pt-32 pb-12">
                {/* Reduced space-y-10 to space-y-8 for tighter layout */}
                <div className="text-center space-y-8">
                    {/* Enhanced Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-blue-500/30 shadow-lg shadow-blue-500/20"
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </motion.div>
                            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                Trusted by 1000+ Students & Institutions
                            </span>
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        </motion.div>
                    </motion.div>

                    {/* Enhanced Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
                            <motion.span
                                className="block text-foreground mb-1"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                Transform Your
                            </motion.span>
                            <motion.span
                                className="block relative inline-block"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                                    Future Today
                                </span>
                                {/* Animated Underline */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2 w-full max-w-[95%] bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-sm opacity-80"
                                />
                            </motion.span>
                        </h1>
                    </motion.div>

                    {/* Enhanced Subtitle with Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <p className="text-lg sm:text-xl lg:text-2xl text-foreground/70 leading-relaxed mb-6 max-w-3xl mx-auto">
                            Join 1000+ students who chose excellence. Get industry-ready skills, guaranteed placement, and a fully-funded postgraduate year.
                        </p>

                        {/* Quick Benefits Pills */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                { icon: CheckCircle2, text: "100% Placement", color: "from-green-500 to-emerald-500" },
                                { icon: CheckCircle2, text: "Free PG Year", color: "from-blue-500 to-cyan-500" },
                                { icon: CheckCircle2, text: "Industry Certifications", color: "from-purple-500 to-pink-500" },
                            ].map((item, idx) => {
                                const Icon = item.icon
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6 + idx * 0.1 }}
                                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-semibold shadow-lg`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {item.text}
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Enhanced Stats Cards - Reduced pt-20 to pt-10 to fix spacing */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 max-w-6xl mx-auto"
                    >
                        {[
                            {
                                icon: Users,
                                value: "1000+",
                                label: "Students Placed",
                                gradient: "from-blue-500/10 to-cyan-500/10",
                                iconGradient: "from-blue-500 to-cyan-600",
                                borderGradient: "from-blue-500/50 to-cyan-500/50",
                            },
                            {
                                icon: Award,
                                value: "100%",
                                label: "Placement Rate",
                                gradient: "from-purple-500/10 to-pink-500/10",
                                iconGradient: "from-purple-500 to-pink-600",
                                borderGradient: "from-purple-500/50 to-pink-500/50",
                            },
                            {
                                icon: Briefcase,
                                value: "1500+",
                                label: "Hiring Partners",
                                gradient: "from-orange-500/10 to-red-500/10",
                                iconGradient: "from-orange-500 to-red-600",
                                borderGradient: "from-orange-500/50 to-red-500/50",
                            },
                            {
                                icon: TrendingUp,
                                value: "95%",
                                label: "Success Rate",
                                gradient: "from-green-500/10 to-emerald-500/10",
                                iconGradient: "from-green-500 to-emerald-600",
                                borderGradient: "from-green-500/50 to-emerald-500/50",
                            },
                        ].map((stat, idx) => {
                            const Icon = stat.icon
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1 + idx * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="group relative"
                                >
                                    <div className={`relative p-6 rounded-3xl bg-gradient-to-br ${stat.gradient} backdrop-blur-xl border-2 border-transparent hover:border-opacity-100 transition-all cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl`}
                                        style={{
                                            borderImage: `linear-gradient(135deg, ${stat.borderGradient}) 1`,
                                        }}
                                    >
                                        {/* Enhanced Shine effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                                            animate={{
                                                x: ["-100%", "200%"],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                repeatDelay: 3,
                                            }}
                                        />

                                        {/* Icon with glow */}
                                        <motion.div
                                            whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
                                            transition={{ duration: 0.5 }}
                                            className="relative mb-3 mx-auto"
                                        >
                                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.iconGradient} flex items-center justify-center shadow-xl`}>
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>
                                            {/* Icon glow */}
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.iconGradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                                        </motion.div>

                                        {/* Value with counter animation */}
                                        <motion.p
                                            className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {stat.value}
                                        </motion.p>

                                        {/* Label */}
                                        <p className="text-sm text-foreground/60 font-semibold">{stat.label}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    {/* Enhanced CTA Buttons - Spacing fixed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground font-bold shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-3 overflow-hidden"
                        >
                            {/* Animated shine effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{
                                    x: ["-200%", "200%"],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                }}
                            />
                            <span className="relative z-10 text-lg">Start Your Journey</span>
                            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 rounded-full border-2 border-border bg-background/50 backdrop-blur-xl text-foreground font-bold hover:border-primary/50 transition-all shadow-lg text-lg"
                        >
                            Explore Programs
                        </motion.button>
                    </motion.div>

                    {/* Enhanced Scroll Indicator - Reduced spacing pt-16 to pt-8 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="pt-8"
                    >
                        <motion.div
                            animate={{
                                y: [0, 12, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="inline-flex flex-col items-center gap-3 text-foreground/40"
                        >
                            <span className="text-xs font-semibold tracking-wider uppercase">Scroll to explore</span>
                            <div className="w-7 h-12 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
                                <motion.div
                                    animate={{
                                        y: [0, 16, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="w-2 h-2 rounded-full bg-foreground/40"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}