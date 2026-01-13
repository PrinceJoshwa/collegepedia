// // "use client"

// // import { useEffect, useState } from "react"
// // import Link from "next/link"
// // import Image from "next/image"
// // import { Users, BookOpen, Trophy, Phone, Mail, ArrowRight } from "lucide-react"

// // export default function Home() {
// //   const [scrolled, setScrolled] = useState(false)

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 50)
// //     }
// //     window.addEventListener("scroll", handleScroll)
// //     return () => window.removeEventListener("scroll", handleScroll)
// //   }, [])

// //   return (
// //     <div className="min-h-screen bg-background">
// //       {/* Navigation */}
// //       <nav
// //         className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur border-b border-border shadow-sm" : "bg-transparent"}`}
// //       >
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
// //           <div className="flex items-center gap-2">
// //             <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
// //               <span className="text-primary-foreground font-bold text-sm">C</span>
// //             </div>
// //             <span className="font-bold text-lg text-foreground">Collegepedia</span>
// //           </div>
// //           <div className="hidden md:flex items-center gap-8">
// //             <Link href="#solutions" className="text-sm text-foreground/70 hover:text-foreground transition">
// //               Solutions
// //             </Link>
// //             <Link href="#benefits" className="text-sm text-foreground/70 hover:text-foreground transition">
// //               Benefits
// //             </Link>
// //             <Link href="#programs" className="text-sm text-foreground/70 hover:text-foreground transition">
// //               Programs
// //             </Link>
// //             <Link href="#contact" className="text-sm text-foreground/70 hover:text-foreground transition">
// //               Contact
// //             </Link>
// //           </div>
// //           <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition">
// //             Contact Us
// //           </button>
// //         </div>
// //       </nav>

// //       {/* Hero Section */}
// //       <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="animate-fade-in-up">
// //             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-secondary/50 mb-6">
// //               <div className="w-2 h-2 rounded-full bg-primary"></div>
// //               <span className="text-sm font-medium text-primary">Trusted by 1000+ Students</span>
// //             </div>
// //             <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
// //               Transform Your Institution's Future
// //             </h1>
// //             <p className="text-xl text-foreground/70 mb-8 max-w-2xl leading-relaxed">
// //               Partner with Collegepedia to elevate your institution's standing, attract top talent, and guarantee
// //               student success through our comprehensive education ecosystem.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4">
// //               <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition flex items-center justify-center gap-2">
// //                 Start Partnership <ArrowRight className="w-4 h-4" />
// //               </button>
// //               <button className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition">
// //                 Learn More
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Stats Section */}
// //       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
// //             {[
// //               { label: "100+", desc: "Students Admitted" },
// //               { label: "100%", desc: "Skill Development" },
// //               { label: "1000+", desc: "Hiring Partners" },
// //               { label: "95%", desc: "Placement Success" },
// //             ].map((stat, idx) => (
// //               <div
// //                 key={idx}
// //                 className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition animate-scale-in"
// //                 style={{ animationDelay: `${idx * 100}ms` }}
// //               >
// //                 <div className="text-3xl font-bold text-primary mb-2">{stat.label}</div>
// //                 <div className="text-sm text-foreground/60">{stat.desc}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Value Ecosystem Section */}
// //       <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-primary/5">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-bold text-foreground mb-4">Our Value Ecosystem</h2>
// //             <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
// //               The full spectrum from admission to placement success
// //             </p>
// //           </div>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 icon: Users,
// //                 title: "Admission & Enrollment",
// //                 desc: "Expert counselling and comprehensive exam preparation to attract and secure higher-calibre students.",
// //               },
// //               {
// //                 icon: BookOpen,
// //                 title: "Career & Skill Development",
// //                 desc: "Structured career guidance and specialized certification courses ensuring market-demanded skills.",
// //               },
// //               {
// //                 icon: Trophy,
// //                 title: "Placement Assistance",
// //                 desc: "Dedicated placement services and extensive corporate networking for guaranteed placement success.",
// //               },
// //             ].map((item, idx) => {
// //               const Icon = item.icon
// //               return (
// //                 <div
// //                   key={idx}
// //                   className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
// //                 >
// //                   <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
// //                     <Icon className="w-6 h-6 text-primary" />
// //                   </div>
// //                   <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
// //                   <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
// //                 </div>
// //               )
// //             })}
// //           </div>
// //         </div>
// //       </section>

// //       {/* BIMSR Success Story */}
// //       <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <h2 className="text-4xl font-bold text-foreground mb-6">Proven Success</h2>
// //               <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
// //                 Our collaboration with BIMSR exemplifies successful partnership implementation, achieving significant
// //                 milestones and fostering future-ready graduates.
// //               </p>
// //               <div className="space-y-4">
// //                 {[
// //                   { num: "100%", label: "Skill Development Coverage" },
// //                   { num: "100%", label: "Internship Support Rate" },
// //                   { num: "1500+", label: "Active Hiring Partners" },
// //                 ].map((item, idx) => (
// //                   <div key={idx} className="flex items-start gap-4">
// //                     <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
// //                       <span className="text-primary font-bold">{item.num}</span>
// //                     </div>
// //                     <div>
// //                       <p className="text-foreground font-medium">{item.label}</p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             <div className="relative">
// //               <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
// //                 <Image
// //                   src="/education-partnership-success-campus.jpg"
// //                   alt="BIMSR Partnership Success"
// //                   width={600}
// //                   height={400}
// //                   className="object-cover w-full h-full"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Programs Section */}
// //       <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-background">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-bold text-foreground mb-4">Future-Ready Programs</h2>
// //             <p className="text-lg text-foreground/60">3+1 integrated programs with professional certifications</p>
// //           </div>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {[
// //               {
// //                 name: "Digital Marketing",
// //                 tag: "Most In-Demand",
// //                 salary: "₹4-8L",
// //                 icon: "📱",
// //               },
// //               {
// //                 name: "Data Analysis",
// //                 tag: "High Growth",
// //                 salary: "₹5-10L",
// //                 icon: "📊",
// //               },
// //               {
// //                 name: "Full Stack Development",
// //                 tag: "Tech Leader",
// //                 salary: "₹6-12L",
// //                 icon: "💻",
// //               },
// //               {
// //                 name: "ACCA Level 3",
// //                 tag: "International",
// //                 salary: "₹8-15L",
// //                 icon: "🏆",
// //               },
// //             ].map((prog, idx) => (
// //               <div
// //                 key={idx}
// //                 className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer"
// //               >
// //                 <div className="text-4xl mb-4">{prog.icon}</div>
// //                 <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
// //                   {prog.tag}
// //                 </div>
// //                 <h3 className="text-xl font-bold text-foreground mb-3">{prog.name}</h3>
// //                 <p className="text-2xl font-bold text-primary">{prog.salary}</p>
// //                 <p className="text-sm text-foreground/60 mt-2">Starting Package</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Benefits Section */}
// //       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
// //         <div className="max-w-6xl mx-auto">
// //           <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Exclusive Student Benefits</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {[
// //               { title: "Free Laptop Kit", desc: "Complete technology toolkit" },
// //               { title: "0% Interest EMI", desc: "Flexible payment options" },
// //               { title: "PG 100% Funded", desc: "Fully covered postgraduate year" },
// //               { title: "Sports Sponsorship", desc: "Professional training & kits" },
// //             ].map((benefit, idx) => (
// //               <div
// //                 key={idx}
// //                 className="p-8 rounded-xl bg-gradient-to-br from-secondary/30 to-primary/10 border border-primary/20 hover:border-primary/50 transition"
// //               >
// //                 <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
// //                 <p className="text-sm text-foreground/60">{benefit.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section
// //         id="contact"
// //         className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
// //       >
// //         <div className="max-w-6xl mx-auto text-center">
// //           <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Institution?</h2>
// //           <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
// //             Join 1000+ institutions partnering with Collegepedia to elevate student outcomes and institutional
// //             excellence.
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
// //             <button className="px-8 py-3 rounded-full bg-primary-foreground text-primary font-medium hover:opacity-90 transition">
// //               Start Your Partnership
// //             </button>
// //             <button className="px-8 py-3 rounded-full border-2 border-primary-foreground text-primary-foreground font-medium hover:bg-primary-foreground/10 transition">
// //               Schedule Demo
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
// //             <div>
// //               <div className="flex items-center gap-2 mb-4">
// //                 <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
// //                   <span className="text-primary-foreground font-bold text-sm">C</span>
// //                 </div>
// //                 <span className="font-bold text-foreground">Collegepedia</span>
// //               </div>
// //               <p className="text-sm text-foreground/60">Transforming education through strategic partnerships</p>
// //             </div>
// //             <div>
// //               <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
// //               <ul className="space-y-2 text-sm text-foreground/60">
// //                 <li>
// //                   <Link href="#" className="hover:text-foreground transition">
// //                     About Us
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link href="#" className="hover:text-foreground transition">
// //                     Programs
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link href="#" className="hover:text-foreground transition">
// //                     Success Stories
// //                   </Link>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h4 className="font-bold text-foreground mb-4">Contact</h4>
// //               <div className="space-y-2 text-sm">
// //                 <div className="flex items-center gap-2 text-foreground/60">
// //                   <Phone className="w-4 h-4" />
// //                   <a href="tel:+918970002004">8970002004</a>
// //                 </div>
// //                 <div className="flex items-center gap-2 text-foreground/60">
// //                   <Mail className="w-4 h-4" />
// //                   <a href="mailto:infocollegepedia@gmail.com">infocollegepedia@gmail.com</a>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
// //             <p>&copy; 2025 Collegepedia. All rights reserved. Operating Pan India.</p>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   )
// // }


// "use client"

// import { useEffect, useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { motion, AnimatePresence } from "framer-motion"
// import { Users, BookOpen, Trophy, Phone, Mail, ArrowRight, Menu, X } from "lucide-react"

// export default function Home() {
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   const scaleVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   const slideInVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   const slideInRightVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   return (
//     <div className="min-h-screen bg-background overflow-hidden">
//       {/* Navigation */}
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//           scrolled ? "bg-background/95 backdrop-blur border-b border-border shadow-lg" : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="flex items-center gap-2"
//           >
//             <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
//               <span className="text-primary-foreground font-bold text-lg">C</span>
//             </div>
//             <span className="font-bold text-lg text-foreground">Collegepedia</span>
//           </motion.div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8">
//             {["Solutions", "Benefits", "Programs", "Contact"].map((item, idx) => (
//               <motion.div
//                 key={item}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 + idx * 0.1 }}
//               >
//                 <Link
//                   href={`#${item.toLowerCase()}`}
//                   className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-300"
//                 >
//                   {item}
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           <motion.button
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold hover:shadow-lg transition-shadow"
//           >
//             Contact Us
//           </motion.button>

//           {/* Mobile Menu Toggle */}
//           <motion.button
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden text-foreground"
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden bg-background border-b border-border"
//             >
//               <div className="px-4 py-4 space-y-3">
//                 {["Solutions", "Benefits", "Programs", "Contact"].map((item) => (
//                   <Link
//                     key={item}
//                     href={`#${item.toLowerCase()}`}
//                     className="block text-sm font-medium text-foreground/70 hover:text-foreground"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {item}
//                   </Link>
//                 ))}
//                 <button className="w-full px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold">
//                   Contact Us
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-primary/5 to-background">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/40 border border-secondary/60 mb-6 backdrop-blur-sm"
//             >
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//                 className="w-2 h-2 rounded-full bg-primary"
//               />
//               <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 Trusted by 1000+ Students
//               </span>
//             </motion.div>

//             <motion.h1
//               variants={itemVariants}
//               initial="hidden"
//               animate="visible"
//               className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight text-balance"
//             >
//               Transform Your{" "}
//               <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
//                 Institution's Future
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={itemVariants}
//               initial="hidden"
//               animate="visible"
//               className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed"
//             >
//               Partner with Collegepedia to elevate your institution's standing, attract top talent, and guarantee
//               student success through our comprehensive education ecosystem. We forge strategic partnerships that
//               enhance brand, refine admissions, and integrate cutting-edge skills directly into your curriculum.
//             </motion.p>

//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex flex-col sm:flex-row gap-4 justify-center"
//             >
//               <motion.button
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
//               >
//                 Start Partnership
//                 <ArrowRight className="w-5 h-5" />
//               </motion.button>

//               <motion.button
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-colors"
//               >
//                 Learn More
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//           >
//             {[
//               { label: "100+", desc: "Students Admitted" },
//               { label: "100%", desc: "Skill Development" },
//               { label: "1000+", desc: "Hiring Partners" },
//               { label: "95%", desc: "Placement Success Rate" },
//             ].map((stat, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={scaleVariants}
//                 whileHover={{
//                   y: -10,
//                   boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
//                 }}
//                 className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all cursor-pointer group"
//               >
//                 <motion.div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
//                   {stat.label}
//                 </motion.div>
//                 <div className="text-sm sm:text-base text-foreground/60 font-semibold group-hover:text-foreground transition-colors">
//                   {stat.desc}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Value Ecosystem Section */}
//       <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Our Value Ecosystem</h2>
//             <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
//               The full spectrum from admission to placement success
//             </p>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           >
//             {[
//               {
//                 icon: Users,
//                 title: "Admission & Enrollment Support",
//                 desc: "Expert counselling and comprehensive exam preparation attract and secure higher-calibre students, substantially improving intake quality and institutional selectivity.",
//                 color: "from-blue-500 to-blue-600",
//               },
//               {
//                 icon: BookOpen,
//                 title: "Career & Skill Development",
//                 desc: "Structured career guidance, application review, and specialised certification courses ensure students possess market-demanded skills aligned with employer expectations.",
//                 color: "from-purple-500 to-purple-600",
//               },
//               {
//                 icon: Trophy,
//                 title: "Placement Assistance",
//                 desc: "Dedicated placement services, campus recruitment coordination, and extensive corporate networking dramatically increase institutional placement rates.",
//                 color: "from-pink-500 to-pink-600",
//               },
//             ].map((item, idx) => {
//               const Icon = item.icon
//               return (
//                 <motion.div
//                   key={idx}
//                   variants={slideInVariants}
//                   whileHover={{
//                     y: -15,
//                     boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
//                   }}
//                   className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}
//                   >
//                     <Icon className="w-8 h-8 text-white" />
//                   </motion.div>
//                   <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
//                   <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
//                 </motion.div>
//               )
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* Partnership Benefits Section */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Why Partner with Collegepedia?</h2>
//             <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
//               Comprehensive support for institutional growth and student success
//             </p>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
//           >
//             {[
//               {
//                 icon: "🎓",
//                 title: "Brand Enhancement",
//                 desc: "Elevate your institution's standing in the educational landscape through strategic marketing and positioning.",
//               },
//               {
//                 icon: "📈",
//                 title: "Attract Top Talent",
//                 desc: "Refine your approach to attract and secure the highest-calibre students with proven admission strategies.",
//               },
//               {
//                 icon: "💼",
//                 title: "Industry-Ready Skills",
//                 desc: "Integrate cutting-edge skills directly into curriculum, matching industry expectations for better employment outcomes.",
//               },
//               {
//                 icon: "🌟",
//                 title: "Placement Success",
//                 desc: "Significantly improve graduate placement rates with our extensive network of 1000+ hiring partners.",
//               },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={scaleVariants}
//                 whileHover={{ scale: 1.05 }}
//                 className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 hover:border-primary/50 transition-all"
//               >
//                 <div className="text-4xl mb-4">{item.icon}</div>
//                 <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
//                 <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* BIMSR Success Story */}
//       <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
//               Proven Success: Our Partnership Model
//             </h2>
//             <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
//               Our collaboration with BIMSR exemplifies successful implementation
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={slideInVariants}
//             >
//               <motion.div variants={containerVariants} className="space-y-6">
//                 <motion.div variants={itemVariants} className="space-y-2">
//                   <p className="text-sm font-bold text-primary uppercase tracking-wider">BIMSR Partnership Results</p>
//                   <h3 className="text-2xl font-bold text-foreground">Strategic Alignment & Enhanced Outcomes</h3>
//                 </motion.div>

//                 {[
//                   {
//                     num: "100+",
//                     label: "Students Admitted Successfully",
//                     desc: "Guided into their programs with expert support",
//                   },
//                   {
//                     num: "100%",
//                     label: "Skill Development Coverage",
//                     desc: "Comprehensive sessions for all students",
//                   },
//                   {
//                     num: "100%",
//                     label: "Internship Support",
//                     desc: "Ensuring practical experience for every student",
//                   },
//                   {
//                     num: "1000+",
//                     label: "Hiring Partners Network",
//                     desc: "Extensive network for diverse career opportunities",
//                   },
//                 ].map((item, idx) => (
//                   <motion.div
//                     key={idx}
//                     variants={itemVariants}
//                     whileHover={{ x: 10 }}
//                     className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all"
//                   >
//                     <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
//                       <span className="text-primary-foreground font-bold text-lg">{item.num}</span>
//                     </div>
//                     <div>
//                       <p className="font-bold text-foreground">{item.label}</p>
//                       <p className="text-sm text-foreground/60">{item.desc}</p>
//                     </div>
//                   </motion.div>
//                 ))}

//                 <motion.div variants={itemVariants} className="pt-4 space-y-3">
//                   <p className="text-foreground/70 leading-relaxed">
//                     With an educational split of 70% academic and 30% industry-focused sessions, coupled with access to
//                     over 1000 hiring partners, graduates are equipped for successful careers.
//                   </p>
//                   <p className="text-sm font-semibold text-primary">Future-Ready Graduates | 95% Placement Success</p>
//                 </motion.div>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={slideInRightVariants}
//               className="relative"
//             >
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-primary/30"
//               >
//                 <Image
//                   src="/education-partnership-success-campus.jpg"
//                   alt="BIMSR Partnership Success"
//                   width={600}
//                   height={400}
//                   className="object-cover w-full h-full"
//                 />
//               </motion.div>
//               <motion.div
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
//                 className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Programs Section */}
//       <section id="programs" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Future-Ready Programs</h2>
//             <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
//               3+1 integrated programs combining bachelor's degrees with professional certifications
//             </p>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//           >
//             {[
//               {
//                 name: "Digital Marketing",
//                 tag: "Most In-Demand",
//                 salary: "₹4-8L",
//                 icon: "📱",
//                 skills: ["SEO", "Social Media", "Content Marketing", "Analytics"],
//               },
//               {
//                 name: "Data Analysis",
//                 tag: "High Growth",
//                 salary: "₹5-10L",
//                 icon: "📊",
//                 skills: ["Statistical Analysis", "Programming", "Data Visualization", "BI"],
//               },
//               {
//                 name: "Full Stack Development",
//                 tag: "Tech Leader",
//                 salary: "₹6-12L",
//                 icon: "💻",
//                 skills: ["Frontend", "Backend", "Database", "Deployment"],
//               },
//               {
//                 name: "ACCA Level 3",
//                 tag: "International",
//                 salary: "₹8-15L",
//                 icon: "🏆",
//                 skills: ["Accounting", "Financial Mgmt", "Auditing", "International"],
//               },
//             ].map((prog, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={scaleVariants}
//                 whileHover={{
//                   y: -15,
//                   boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
//                 }}
//                 className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group cursor-pointer"
//               >
//                 <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{prog.icon}</div>
//                 <motion.div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-xs font-bold mb-3 border border-primary/30">
//                   {prog.tag}
//                 </motion.div>
//                 <h3 className="text-xl font-bold text-foreground mb-4">{prog.name}</h3>
//                 <div className="mb-4 pb-4 border-b border-border">
//                   <p className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                     {prog.salary}
//                   </p>
//                   <p className="text-xs text-foreground/60 mt-1">Starting Package</p>
//                 </div>
//                 <div className="space-y-2">
//                   {prog.skills.map((skill) => (
//                     <div key={skill} className="text-xs text-foreground/60 flex items-center gap-2">
//                       <span className="w-1.5 h-1.5 rounded-full bg-primary" />
//                       {skill}
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Exclusive Benefits Section */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Exclusive Student Benefits</h2>
//             <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
//               Comprehensive support for holistic development and career success
//             </p>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//           >
//             {[
//               {
//                 title: "Free Laptop Kit",
//                 desc: "Complete technology toolkit for modern learning and development",
//                 icon: "💻",
//               },
//               {
//                 title: "0% Interest EMI",
//                 desc: "Flexible payment options making quality education accessible",
//                 icon: "💰",
//               },
//               {
//                 title: "PG 100% Funded",
//                 desc: "Your 1-year postgraduate course completely paid by Collegepedia",
//                 icon: "🎓",
//               },
//               {
//                 title: "Sports Sponsorship",
//                 desc: "Free kit and training from AIFFF coaches with championship opportunities",
//                 icon: "⚽",
//               },
//             ].map((benefit, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={scaleVariants}
//                 whileHover={{ y: -10 }}
//                 className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 hover:border-primary/60 transition-all group"
//               >
//                 <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
//                 <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
//                 <p className="text-sm text-foreground/60 leading-relaxed">{benefit.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Global Excellence Section */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
//               Where Academic Excellence Meets Industry Skills
//             </h2>
//             <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
//               Blending academic excellence with industry-relevant skills for real-world success
//             </p>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           >
//             {[
//               {
//                 stat: "98%",
//                 title: "Graduate Employment",
//                 desc: "Our comprehensive placement support ensures nearly all graduates secure employment.",
//               },
//               {
//                 stat: "20+",
//                 title: "Industry Certifications",
//                 desc: "Gain competitive edge with specialized certifications co-developed with industry leaders.",
//               },
//               {
//                 stat: "500+",
//                 title: "Global Alumni Network",
//                 desc: "Connect with professionals worldwide, fostering global career opportunities.",
//               },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={scaleVariants}
//                 whileHover={{ scale: 1.05 }}
//                 className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center"
//               >
//                 <motion.div className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
//                   {item.stat}
//                 </motion.div>
//                 <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
//                 <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Sports Excellence Program */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/10 to-primary/10">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={slideInVariants}
//             >
//               <motion.div variants={containerVariants} className="space-y-6">
//                 <motion.div variants={itemVariants} className="space-y-2">
//                   <p className="text-sm font-bold text-primary uppercase tracking-wider">Sports Excellence</p>
//                   <h3 className="text-4xl sm:text-5xl font-black text-foreground">Football Excellence Program</h3>
//                 </motion.div>

//                 <motion.p variants={itemVariants} className="text-lg text-foreground/70 leading-relaxed">
//                   Seamlessly integrate rigorous academics with elite professional sports training. Experience
//                   world-class coaching, championship sponsorship, and cutting-edge facilities, all designed to develop
//                   your mind and athletic prowess.
//                 </motion.p>

//                 {[
//                   {
//                     icon: "🏅",
//                     title: "Expert Coaching",
//                     desc: "AIFFF-certified coaches dedicated to your development",
//                   },
//                   {
//                     icon: "🏆",
//                     title: "Championship Access",
//                     desc: "Exclusive sponsorship opportunities for major tournaments",
//                   },
//                   {
//                     icon: "🏟️",
//                     title: "Professional Facilities",
//                     desc: "Train in state-of-the-art, professional-grade facilities",
//                   },
//                   { icon: "⚽", title: "Complimentary Kit", desc: "Full sports kit to support your training" },
//                 ].map((item, idx) => (
//                   <motion.div key={idx} variants={itemVariants} className="flex items-start gap-4">
//                     <span className="text-3xl">{item.icon}</span>
//                     <div>
//                       <p className="font-bold text-foreground">{item.title}</p>
//                       <p className="text-sm text-foreground/60">{item.desc}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={slideInRightVariants}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-primary/30"
//               >
//                 <Image
//                   src="/football-training-academy-students.jpg"
//                   alt="Sports Excellence Program"
//                   width={500}
//                   height={500}
//                   className="object-cover w-full h-full"
//                 />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* College Partnership Benefits */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
//               Complete College Partnership Benefits
//             </h2>
//             <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
//               Strategic partnership designed to empower colleges with comprehensive support for success
//             </p>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8"
//           >
//             {[
//               {
//                 title: "Brand Building & Market Entry",
//                 desc: "Helping new colleges establish credibility and recognition in the market. We craft compelling narratives and execute targeted campaigns to attract top talent and enhance your institutional reputation from day one.",
//                 icon: "🎯",
//               },
//               {
//                 title: "Full Student Lifecycle Support",
//                 desc: "Comprehensive guidance and assistance, from admission through to successful career placement. Our integrated approach ensures students are supported at every stage, fostering engagement and maximizing outcomes.",
//                 icon: "🔄",
//               },
//               {
//                 title: "Co-Branded Events & Fairs",
//                 desc: "Organizing educational fairs and events with college branding to increase visibility and attract quality student enrollment.",
//                 icon: "🎪",
//               },
//               {
//                 title: "Sports Events & Regional Promotion",
//                 desc: "Organizing sports events to promote partnered college brands region-wise, building community engagement and institutional prestige.",
//                 icon: "🏅",
//               },
//               {
//                 title: "Dedicated Support Teams",
//                 desc: "Specialized teams for promotional activities and in-house counselling team for dedicated admission support and student guidance.",
//                 icon: "👥",
//               },
//               {
//                 title: "Educational Institute Partnerships",
//                 desc: "Access to partnered institutes for certification courses, expanding your program offerings and student competencies.",
//                 icon: "📚",
//               },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={scaleVariants}
//                 whileHover={{ y: -10 }}
//                 className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
//               >
//                 <div className="text-4xl mb-4">{item.icon}</div>
//                 <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
//                 <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
//               Elevate Your Institution. Guarantee Student Success.
//             </h2>
//             <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
//               Join 1000+ institutions across Pan India partnering with Collegepedia to elevate student outcomes and
//               institutional excellence. From admission to placement, we provide the end-to-end ecosystem for
//               comprehensive student development.
//             </p>

//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
//             >
//               <motion.button
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 rounded-full bg-primary-foreground text-primary font-bold hover:shadow-xl transition-shadow"
//               >
//                 Start Your Partnership
//               </motion.button>
//               <motion.button
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 rounded-full border-2 border-primary-foreground text-primary-foreground font-bold hover:bg-primary-foreground/10 transition-colors"
//               >
//                 Schedule Demo
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
//               Ready to Build a Legacy of Excellence?
//             </h2>
//             <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Reach out to our partnership team today</p>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
//           >
//             <motion.a
//               variants={scaleVariants}
//               whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
//               href="tel:+918970002004"
//               className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center flex flex-col items-center gap-4"
//             >
//               <Phone className="w-8 h-8 text-primary" />
//               <div>
//                 <p className="font-bold text-foreground">Call Us</p>
//                 <p className="text-lg font-bold text-primary">8970002004</p>
//               </div>
//             </motion.a>

//             <motion.a
//               variants={scaleVariants}
//               whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
//               href="mailto:infocollegepedia@gmail.com"
//               className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center flex flex-col items-center gap-4"
//             >
//               <Mail className="w-8 h-8 text-primary" />
//               <div>
//                 <p className="font-bold text-foreground">Email Us</p>
//                 <p className="text-lg font-bold text-primary">infocollegepedia@gmail.com</p>
//               </div>
//             </motion.a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-primary/10 to-background border-t border-border">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
//           >
//             <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} viewport={{ once: true }}>
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
//                   <span className="text-primary-foreground font-bold">C</span>
//                 </div>
//                 <span className="font-bold text-lg text-foreground">Collegepedia</span>
//               </div>
//               <p className="text-sm text-foreground/60 leading-relaxed">
//                 Transforming education through strategic partnerships and comprehensive student development across Pan
//                 India.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ y: 20 }}
//               whileInView={{ y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//             >
//               <h4 className="font-bold text-foreground mb-4">Solutions</h4>
//               <ul className="space-y-2 text-sm text-foreground/60">
//                 {["Admission Support", "Skill Development", "Placement Services", "Sports Programs"].map((item) => (
//                   <li key={item}>
//                     <Link href="#" className="hover:text-foreground transition">
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             <motion.div
//               initial={{ y: 20 }}
//               whileInView={{ y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//             >
//               <h4 className="font-bold text-foreground mb-4">Contact</h4>
//               <div className="space-y-3 text-sm text-foreground/60">
//                 <div className="flex items-start gap-2">
//                   <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <a href="tel:+918970002004" className="hover:text-foreground transition">
//                       8970002004
//                     </a>
//                     <p className="text-xs mt-1">
//                       <a href="tel:+918893002004" className="hover:text-foreground transition">
//                         8893002004
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                   <a href="mailto:infocollegepedia@gmail.com" className="hover:text-foreground transition">
//                     infocollegepedia@gmail.com
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="border-t border-border pt-8 text-center text-sm text-foreground/60"
//           >
//             <p>&copy; 2025 Collegepedia. All rights reserved. Operating Pan India.</p>
//           </motion.div>
//         </div>
//       </footer>
//     </div>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Users, BookOpen, Trophy, Phone, Mail, ArrowRight, Menu, X } from "lucide-react"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const scaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const slideInVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const slideInRightVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur border-b border-border shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-lg text-foreground">Collegepedia</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Students", "Universities", "Solutions", "Programs", "Contact"].map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold hover:shadow-lg transition-shadow"
          >
            Contact Us
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-border"
            >
              <div className="px-4 py-4 space-y-3">
                {["Students", "Universities", "Solutions", "Programs", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-sm font-medium text-foreground/70 hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <button className="w-full px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/40 border border-secondary/60 mb-6 backdrop-blur-sm"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-2 h-2 rounded-full bg-primary"
              />
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Trusted by 1000+ Students
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight text-balance"
            >
              Transform Your{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Institution's Future
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Partner with Collegepedia to elevate your institution's standing, attract top talent, and guarantee
              student success through our comprehensive education ecosystem. We forge strategic partnerships that
              enhance brand, refine admissions, and integrate cutting-edge skills directly into your curriculum.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
              >
                Start Partnership
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* For Students Section */}
      <section id="students" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 via-primary/5 to-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-6"
            >
              <span className="text-sm font-bold text-primary">For Students</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
              Your Path to{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Success Starts Here
              </span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Join Collegepedia and unlock exclusive benefits designed to guarantee your career success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "🎯",
                title: "100% Placement Guarantee",
                desc: "We guarantee your career success with our extensive network of 1000+ hiring partners. Your dream job is our commitment.",
                highlight: "Guaranteed",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: "💻",
                title: "Free Laptop Kit",
                desc: "Get a complete technology toolkit including a laptop to support your learning journey. Everything you need to succeed, on us.",
                highlight: "Free",
                color: "from-blue-500 to-cyan-600",
              },
              {
                icon: "⚽",
                title: "Sports Excellence",
                desc: "Combine academics with elite sports training. Get AIFFF-certified coaching, championship sponsorship, and professional facilities.",
                highlight: "Elite Training",
                color: "from-orange-500 to-red-600",
              },
              {
                icon: "💰",
                title: "0% Interest EMI",
                desc: "Flexible payment options making quality education accessible. Pay at your own pace without any financial burden.",
                highlight: "0% Interest",
                color: "from-purple-500 to-violet-600",
              },
              {
                icon: "🎓",
                title: "PG 100% Funded",
                desc: "Your 1-year postgraduate course completely paid by Collegepedia. Advance your career without worrying about fees.",
                highlight: "Fully Funded",
                color: "from-pink-500 to-rose-600",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleVariants}
                whileHover={{
                  y: -15,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                }}
                className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group overflow-hidden"
              >
                <motion.div
                  className={`absolute top-0 right-0 px-4 py-1 rounded-bl-xl bg-gradient-to-r ${item.color} text-white text-xs font-bold`}
                >
                  {item.highlight}
                </motion.div>
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold hover:shadow-xl transition-shadow inline-flex items-center gap-2"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { label: "100+", desc: "Students Admitted" },
              { label: "100%", desc: "Skill Development" },
              { label: "1000+", desc: "Hiring Partners" },
              { label: "95%", desc: "Placement Success Rate" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={scaleVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all cursor-pointer group"
              >
                <motion.div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                  {stat.label}
                </motion.div>
                <div className="text-sm sm:text-base text-foreground/60 font-semibold group-hover:text-foreground transition-colors">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Top Recruiters Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">Our Top Recruiters</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Leading companies that trust Collegepedia for their talent acquisition
            </p>
          </motion.div>

          {/* Marquee Container */}
          <div className="relative px-4">
            {/* Scrolling Container */}
            <div className="flex overflow-hidden rounded-xl">
              <motion.div
                className="flex gap-12 items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* First set of logos */}
                {[
                  { src: "/TCS.png", alt: "TCS" },
                  { src: "/infosys.png", alt: "Infosys" },
                  { src: "/Accenture.png", alt: "Accenture" },
                  { src: "/Capgemini.webp", alt: "Capgemini" },
                  { src: "/CTS.png", alt: "Cognizant" },
                  { src: "/HCLTECH.png", alt: "HCL Tech" },
                  { src: "/Tech Mahindra Logo_3.webp", alt: "Tech Mahindra" },
                  { src: "/EY.png", alt: "EY" },
                  { src: "/deleitepng.png", alt: "Deloitte" },
                ].map((company, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-32 h-20 bg-card rounded-xl border border-border flex items-center justify-center p-4 hover:border-primary/50 transition-all"
                  >
                    <Image
                      src={company.src}
                      alt={company.alt}
                      width={100}
                      height={60}
                      className="object-contain max-h-12 w-auto grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[
                  { src: "/TCS.png", alt: "TCS" },
                  { src: "/infosys.png", alt: "Infosys" },
                  { src: "/Accenture.png", alt: "Accenture" },
                  { src: "/Capgemini.webp", alt: "Capgemini" },
                  { src: "/CTS.png", alt: "Cognizant" },
                  { src: "/HCLTECH.png", alt: "HCL Tech" },
                  { src: "/Tech Mahindra Logo_3.webp", alt: "Tech Mahindra" },
                  { src: "/EY.png", alt: "EY" },
                  { src: "/deleitepng.png", alt: "Deloitte" },
                ].map((company, idx) => (
                  <div
                    key={`dup-${idx}`}
                    className="flex-shrink-0 w-32 h-20 bg-card rounded-xl border border-border flex items-center justify-center p-4 hover:border-primary/50 transition-all"
                  >
                    <Image
                      src={company.src}
                      alt={company.alt}
                      width={100}
                      height={60}
                      className="object-contain max-h-12 w-auto grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-sm text-foreground/50 mt-8"
          >
            And 1000+ more hiring partners across India
          </motion.p>
        </div>
      </section>

      {/* Value Ecosystem Section */}
      <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Our Value Ecosystem</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              The full spectrum from admission to placement success
            </p>
          </motion.div>

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
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: BookOpen,
                title: "Career & Skill Development",
                desc: "Structured career guidance, application review, and specialised certification courses ensure students possess market-demanded skills aligned with employer expectations.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Trophy,
                title: "Placement Assistance",
                desc: "Dedicated placement services, campus recruitment coordination, and extensive corporate networking dramatically increase institutional placement rates.",
                color: "from-pink-500 to-pink-600",
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  variants={slideInVariants}
                  whileHover={{
                    y: -15,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                  }}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Why Partner with Collegepedia?</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Comprehensive support for institutional growth and student success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {[
              {
                icon: "🎓",
                title: "Brand Enhancement",
                desc: "Elevate your institution's standing in the educational landscape through strategic marketing and positioning.",
              },
              {
                icon: "📈",
                title: "Attract Top Talent",
                desc: "Refine your approach to attract and secure the highest-calibre students with proven admission strategies.",
              },
              {
                icon: "💼",
                title: "Industry-Ready Skills",
                desc: "Integrate cutting-edge skills directly into curriculum, matching industry expectations for better employment outcomes.",
              },
              {
                icon: "🌟",
                title: "Placement Success",
                desc: "Significantly improve graduate placement rates with our extensive network of 1000+ hiring partners.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleVariants}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 hover:border-primary/50 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BIMSR Success Story */}
      <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
              Proven Success: Our Partnership Model
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Our collaboration with BIMSR exemplifies successful implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInVariants}
            >
              <motion.div variants={containerVariants} className="space-y-6">
                <motion.div variants={itemVariants} className="space-y-2">
                  <p className="text-sm font-bold text-primary uppercase tracking-wider">BIMSR Partnership Results</p>
                  <h3 className="text-2xl font-bold text-foreground">Strategic Alignment & Enhanced Outcomes</h3>
                </motion.div>

                {[
                  {
                    num: "100+",
                    label: "Students Admitted Successfully",
                    desc: "Guided into their programs with expert support",
                  },
                  {
                    num: "100%",
                    label: "Skill Development Coverage",
                    desc: "Comprehensive sessions for all students",
                  },
                  {
                    num: "100%",
                    label: "Internship Support",
                    desc: "Ensuring practical experience for every student",
                  },
                  {
                    num: "1000+",
                    label: "Hiring Partners Network",
                    desc: "Extensive network for diverse career opportunities",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">{item.num}</span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{item.label}</p>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}

                <motion.div variants={itemVariants} className="pt-4 space-y-3">
                  <p className="text-foreground/70 leading-relaxed">
                    With an educational split of 70% academic and 30% industry-focused sessions, coupled with access to
                    over 1000 hiring partners, graduates are equipped for successful careers.
                  </p>
                  <p className="text-sm font-semibold text-primary">Future-Ready Graduates | 95% Placement Success</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRightVariants}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-accent to-primary border-2 border-primary/30 p-8 flex flex-col items-center justify-center relative"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-20 h-20 border-4 border-white rounded-full" />
                  <div className="absolute bottom-4 right-4 w-32 h-32 border-4 border-white rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-white rounded-full" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                  >
                    <span className="text-white text-sm font-bold">NGO Partner</span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl font-black text-white"
                  >
                    Anudip Foundation
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-white/80 text-lg"
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
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-primary font-bold text-sm hover:shadow-lg transition-shadow"
                  >
                    anudip.org
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-6 right-6 w-12 h-12 border-2 border-white/30 rounded-lg"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-6 left-6 w-8 h-8 border-2 border-white/30 rounded-full"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Future-Ready Programs</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              3+1 integrated programs combining bachelor's degrees with professional certifications
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                name: "Digital Marketing",
                tag: "Most In-Demand",
                salary: "₹4-8L",
                icon: "📱",
                skills: ["SEO", "Social Media", "Content Marketing", "Analytics"],
              },
              {
                name: "Data Analysis",
                tag: "High Growth",
                salary: "₹5-10L",
                icon: "📊",
                skills: ["Statistical Analysis", "Programming", "Data Visualization", "BI"],
              },
              {
                name: "Full Stack Development",
                tag: "Tech Leader",
                salary: "₹6-12L",
                icon: "💻",
                skills: ["Frontend", "Backend", "Database", "Deployment"],
              },
              {
                name: "ACCA Level 3",
                tag: "International",
                salary: "₹8-15L",
                icon: "🏆",
                skills: ["Accounting", "Financial Mgmt", "Auditing", "International"],
              },
            ].map((prog, idx) => (
              <motion.div
                key={idx}
                variants={scaleVariants}
                whileHover={{
                  y: -15,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{prog.icon}</div>
                <motion.div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-xs font-bold mb-3 border border-primary/30">
                  {prog.tag}
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-4">{prog.name}</h3>
                <div className="mb-4 pb-4 border-b border-border">
                  <p className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {prog.salary}
                  </p>
                  <p className="text-xs text-foreground/60 mt-1">Starting Package</p>
                </div>
                <div className="space-y-2">
                  {prog.skills.map((skill) => (
                    <div key={skill} className="text-xs text-foreground/60 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications & Courses Section */}
      <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-6"
            >
              <span className="text-sm font-bold text-primary">Industry Recognized</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Certifications & Courses</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Boost your career with industry-recognized certifications and free courses from top providers
            </p>
          </motion.div>

          {/* Courses Section */}
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
            >
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                <BookOpen className="w-5 h-5" />
              </span>
              Free Courses
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* Featured Courses with Full Details */}
              {[
                {
                  id: 1,
                  title: "DSA for Product-Based Companies",
                  provider: "ExcelR & EDL",
                  image: "/course1.jpeg",
                  duration: "30 Hours",
                  schedule: "7:00 PM - 9:00 PM",
                  days: "Mon-Fri (15 days)",
                  startDate: "21st July 2025",
                  mode: "Live Online",
                  price: "FREE",
                  certificate: true,
                  highlights: ["Interview Prep", "Top Tech Companies", "Hands-on Practice", "DSA Mastery"],
                  description: "Master Data Structures & Algorithms to crack top tech interviews!",
                  color: "from-blue-600 to-purple-600",
                  registerUrl: "https://www.excelr.com/excelr-free-courses-registration-form",
                  category: "Development"
                },
                {
                  id: 2,
                  title: "DevOps Decode: Hands-on Fundamentals",
                  provider: "ExcelR & EDL",
                  image: "/course2.jpeg",
                  duration: "30 Hours",
                  schedule: "7:00 PM - 9:00 PM",
                  days: "Mon-Fri (15 days)",
                  startDate: "18th June 2025",
                  mode: "Live Online",
                  price: "FREE",
                  certificate: true,
                  highlights: ["CI/CD Pipelines", "Automation Tools", "Cloud Deployment", "Docker & Kubernetes"],
                  description: "Gain practical insights into DevOps tools, CI/CD, automation & more!",
                  color: "from-orange-500 to-red-500",
                  registerUrl: "https://www.excelr.com/excelr-free-courses-registration-form",
                  category: "DevOps"
                },
                {
                  id: 3,
                  title: "Mastering Applied Machine Learning",
                  provider: "ExcelR & BIMSR",
                  image: "/course3.jpeg",
                  duration: "30 Hours",
                  schedule: "7:00 PM - 9:00 PM",
                  days: "15 Days",
                  startDate: "7th Jan 2025",
                  mode: "Live Online",
                  price: "FREE",
                  certificate: true,
                  highlights: ["Interview Cracking", "Real Projects", "ML Algorithms", "Python & Scikit-learn"],
                  description: "Your key to cracking interviews! Master Applied Machine Learning.",
                  color: "from-green-500 to-teal-500",
                  registerUrl: "https://www.excelr.com/excelr-free-courses-registration-form",
                  category: "AI/ML"
                }
              ].map((course) => (
                <motion.div
                  key={course.id}
                  variants={scaleVariants}
                  whileHover={{ y: -10 }}
                  className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all"
                >
                  {/* Course Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r ${course.color} text-white text-xs font-bold`}>
                      {course.price}
                    </div>
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 text-white text-xs font-medium">
                      {course.category}
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <p className="text-xs text-primary font-semibold mb-2">{course.provider}</p>
                    <h4 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{course.title}</h4>
                    <p className="text-sm text-foreground/60 mb-4 line-clamp-2">{course.description}</p>

                    {/* Course Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-xs text-foreground/70">
                        <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </span>
                        {course.duration} | {course.days}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-foreground/70">
                        <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </span>
                        Starts: {course.startDate}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-foreground/70">
                        <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </span>
                        {course.mode} | {course.schedule}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.highlights.slice(0, 3).map((highlight) => (
                        <span key={highlight} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
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
                      className={`w-full py-3 rounded-xl bg-gradient-to-r ${course.color} text-white text-sm font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow`}
                    >
                      Register Now
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>

                    {course.certificate && (
                      <p className="text-xs text-center text-foreground/50 mt-2">Certificate Included</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* More Courses - Image Only Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <p className="text-sm text-foreground/60 mb-4 font-medium">More Courses Available:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
                    whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all cursor-pointer group"
                  >
                    <Image
                      src={src}
                      alt={`Course ${idx + 4}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                      <span className="text-white text-xs font-medium">View Details</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certifications Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
            >
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white">
                <Trophy className="w-5 h-5" />
              </span>
              Our Certifications
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {[
                { src: "/certificate1.jpeg", alt: "Certificate 1" },
                { src: "/certificate2.jpeg", alt: "Certificate 2" },
                { src: "/certificate3.jpeg", alt: "Certificate 3" },
                { src: "/certificate4.png", alt: "Certificate 4" },
                { src: "/certificate5.png", alt: "Certificate 5" },
              ].map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                      <span className="text-white text-xs font-medium">View Certificate</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold hover:shadow-xl transition-shadow inline-flex items-center gap-2"
            >
              Explore All Programs
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Exclusive Benefits Section */}
      {/* <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Exclusive Student Benefits</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Comprehensive support for holistic development and career success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Free Laptop Kit",
                desc: "Complete technology toolkit for modern learning and development",
                icon: "💻",
              },
              {
                title: "0% Interest EMI",
                desc: "Flexible payment options making quality education accessible",
                icon: "💰",
              },
              {
                title: "PG 100% Funded",
                desc: "Your 1-year postgraduate course completely paid by Collegepedia",
                icon: "🎓",
              },
              {
                title: "Sports Sponsorship",
                desc: "Free kit and training from AIFFF coaches with championship opportunities",
                icon: "⚽",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={scaleVariants}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 hover:border-primary/60 transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Global Excellence Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
              Where Academic Excellence Meets Industry Skills
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Blending academic excellence with industry-relevant skills for real-world success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                stat: "98%",
                title: "Graduate Employment",
                desc: "Our comprehensive placement support ensures nearly all graduates secure employment.",
              },
              {
                stat: "20+",
                title: "Industry Certifications",
                desc: "Gain competitive edge with specialized certifications co-developed with industry leaders.",
              },
              {
                stat: "500+",
                title: "Global Alumni Network",
                desc: "Connect with professionals worldwide, fostering global career opportunities.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleVariants}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center"
              >
                <motion.div className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                  {item.stat}
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sports Excellence Program */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInVariants}
            >
              <motion.div variants={containerVariants} className="space-y-6">
                <motion.div variants={itemVariants} className="space-y-2">
                  <p className="text-sm font-bold text-primary uppercase tracking-wider">Sports Excellence</p>
                  <h3 className="text-4xl sm:text-5xl font-black text-foreground">Football Excellence Program</h3>
                </motion.div>

                <motion.p variants={itemVariants} className="text-lg text-foreground/70 leading-relaxed">
                  Seamlessly integrate rigorous academics with elite professional sports training. Experience
                  world-class coaching, championship sponsorship, and cutting-edge facilities, all designed to develop
                  your mind and athletic prowess.
                </motion.p>

                {[
                  {
                    icon: "🏅",
                    title: "Expert Coaching",
                    desc: "AIFFF-certified coaches dedicated to your development",
                  },
                  {
                    icon: "🏆",
                    title: "Championship Access",
                    desc: "Exclusive sponsorship opportunities for major tournaments",
                  },
                  {
                    icon: "🏟️",
                    title: "Professional Facilities",
                    desc: "Train in state-of-the-art, professional-grade facilities",
                  },
                  { icon: "⚽", title: "Complimentary Kit", desc: "Full sports kit to support your training" },
                ].map((item, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex items-start gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <p className="font-bold text-foreground">{item.title}</p>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRightVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-primary/30"
              >
                <Image
                  src="/football.webp"
                  alt="Sports Excellence Program"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* College Partnership Benefits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
              Complete College Partnership Benefits
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Strategic partnership designed to empower colleges with comprehensive support for success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Brand Building & Market Entry",
                desc: "Helping new colleges establish credibility and recognition in the market. We craft compelling narratives and execute targeted campaigns to attract top talent and enhance your institutional reputation from day one.",
                icon: "🎯",
              },
              {
                title: "Full Student Lifecycle Support",
                desc: "Comprehensive guidance and assistance, from admission through to successful career placement. Our integrated approach ensures students are supported at every stage, fostering engagement and maximizing outcomes.",
                icon: "🔄",
              },
              {
                title: "Co-Branded Events & Fairs",
                desc: "Organizing educational fairs and events with college branding to increase visibility and attract quality student enrollment.",
                icon: "🎪",
              },
              {
                title: "Sports Events & Regional Promotion",
                desc: "Organizing sports events to promote partnered college brands region-wise, building community engagement and institutional prestige.",
                icon: "🏅",
              },
              {
                title: "Dedicated Support Teams",
                desc: "Specialized teams for promotional activities and in-house counselling team for dedicated admission support and student guidance.",
                icon: "👥",
              },
              {
                title: "Educational Institute Partnerships",
                desc: "Access to partnered institutes for certification courses, expanding your program offerings and student competencies.",
                icon: "📚",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleVariants}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* For Universities Section */}
      <section id="universities" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Benefits */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInVariants}
            >
              <motion.div variants={containerVariants} className="space-y-6">
                <motion.div variants={itemVariants} className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40"
                  >
                    <span className="text-sm font-bold text-accent">For Universities</span>
                  </motion.div>
                  <h2 className="text-4xl sm:text-5xl font-black text-foreground">
                    Partner with{" "}
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      Collegepedia
                    </span>
                  </h2>
                  <p className="text-lg text-foreground/60 leading-relaxed">
                    Transform your institution with our comprehensive partnership model. We help you attract top talent, enhance your brand, and achieve exceptional placement rates.
                  </p>
                </motion.div>

                <motion.div variants={containerVariants} className="space-y-4 pt-4">
                  {[
                    {
                      icon: "🎓",
                      title: "Brand Enhancement",
                      desc: "Elevate your institution's market presence and reputation",
                    },
                    {
                      icon: "📈",
                      title: "Increased Enrollment",
                      desc: "Attract high-quality students through strategic marketing",
                    },
                    {
                      icon: "💼",
                      title: "Industry Connections",
                      desc: "Access to 1000+ hiring partners for student placements",
                    },
                    {
                      icon: "🏆",
                      title: "95% Placement Success",
                      desc: "Proven track record of exceptional placement rates",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all"
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <p className="font-bold text-foreground">{item.title}</p>
                        <p className="text-sm text-foreground/60">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRightVariants}
            >
              <motion.div
                whileHover={{ boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">Request Partnership</h3>
                <p className="text-foreground/60 mb-6">Fill out the form and our team will contact you within 24 hours</p>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Institution Name *</label>
                      <input
                        type="text"
                        placeholder="Enter institution name"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-foreground/40"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Contact Person *</label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-foreground/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <input
                        type="email"
                        placeholder="email@institution.edu"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-foreground/40"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-foreground/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Institution Type</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground">
                      <option value="">Select institution type</option>
                      <option value="university">University</option>
                      <option value="college">College</option>
                      <option value="institute">Technical Institute</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Interested Services</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Admission Support", "Skill Development", "Placement Services", "Sports Programs"].map((service) => (
                        <label key={service} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-all cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                          <span className="text-sm text-foreground">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your institution and partnership goals..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-foreground/40 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                  >
                    Submit Partnership Request
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-foreground/60 text-center">
                    Or reach us directly at{" "}
                    <a href="tel:+918970002004" className="text-primary font-medium hover:underline">
                      8970002004
                    </a>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
              Elevate Your Institution. Guarantee Student Success.
            </h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join 1000+ institutions across Pan India partnering with Collegepedia to elevate student outcomes and
              institutional excellence. From admission to placement, we provide the end-to-end ecosystem for
              comprehensive student development.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-primary-foreground text-primary font-bold hover:shadow-xl transition-shadow"
              >
                Start Your Partnership
              </motion.button>
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-primary-foreground text-primary-foreground font-bold hover:bg-primary-foreground/10 transition-colors"
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
              Ready to Build a Legacy of Excellence?
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Reach out to our partnership team today</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          >
            <motion.a
              variants={scaleVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              href="tel:+918970002004"
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center flex flex-col items-center gap-4"
            >
              <Phone className="w-8 h-8 text-primary" />
              <div>
                <p className="font-bold text-foreground">Call Us</p>
                <p className="text-lg font-bold text-primary">8970002004</p>
              </div>
            </motion.a>

            <motion.a
              variants={scaleVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              href="mailto:infocollegepedia@gmail.com"
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center flex flex-col items-center gap-4"
            >
              <Mail className="w-8 h-8 text-primary" />
              <div>
                <p className="font-bold text-foreground">Email Us</p>
                <p className="text-lg font-bold text-primary">infocollegepedia@gmail.com</p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-primary/10 to-background border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          >
            <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">C</span>
                </div>
                <span className="font-bold text-lg text-foreground">Collegepedia</span>
              </div>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Transforming education through strategic partnerships and comprehensive student development across Pan
                India.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold text-foreground mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                {["Admission Support", "Skill Development", "Placement Services", "Sports Programs"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-foreground transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold text-foreground mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-foreground/60">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="tel:+918970002004" className="hover:text-foreground transition">
                      8970002004
                    </a>
                    <p className="text-xs mt-1">
                      <a href="tel:+918893002004" className="hover:text-foreground transition">
                        8893002004
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <a href="mailto:infocollegepedia@gmail.com" className="hover:text-foreground transition">
                    infocollegepedia@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-border pt-8 text-center text-sm text-foreground/60"
          >
            <p>&copy; 2025 Collegepedia. All rights reserved. Operating Pan India.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}