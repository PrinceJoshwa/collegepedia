// // import { Quote } from "lucide-react"

// // interface TestimonialCardProps {
// //   name: string
// //   program: string
// //   year: string
// //   quote: string
// //   imageSrc: string
// // }

// // function TestimonialCard({ name, program, year, quote, imageSrc }: TestimonialCardProps) {
// //   return (
// //     <div className="bg-blue-700 rounded-lg p-6 text-white relative overflow-hidden">
// //       <Quote className="h-8 w-8 text-blue-400/30 absolute top-4 left-4" />
// //       <div className="pt-6 mb-6">
// //         <p className="text-white/90 italic relative z-10">"{quote}"</p>
// //       </div>
// //       <div className="flex items-center gap-4">
// //         <div className="h-12 w-12 rounded-full overflow-hidden">
// //           <img src={imageSrc || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
// //         </div>
// //         <div>
// //           <h4 className="font-semibold text-white">{name}</h4>
// //           <p className="text-sm text-white/70">{program}</p>
// //           <p className="text-xs text-white/50">{year}</p>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default function Testimonials() {
// //   const testimonials = [
// //     {
// //       name: "Priya Sharma",
// //       program: "BCom + Digital Marketing + PGDM",
// //       year: "Class of 2023",
// //       quote:
// //         "The AI-powered learning approach and industry certifications at BIMSR prepared me exceptionally well for my career. I secured a position at a leading tech company with the Google and Meta certifications.",
// //       imageSrc:
// //         "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
// //     },
// //     {
// //       name: "Rahul Mehta",
// //       program: "BBA - Digital Marketing + PGDM",
// //       year: "Class of 2022",
// //       quote:
// //         "The live projects and industry connections at BIMSR were invaluable. The Business Creation Lab gave me practical insights that I apply daily in my startup venture.",
// //       imageSrc:
// //         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
// //     },
// //     {
// //       name: "Aisha Khan",
// //       program: "BCA - Data Analytics",
// //       year: "Class of 2023",
// //       quote:
// //         "The Microsoft certifications and data analytics specialization helped me develop skills that stood out. The placement assistance team helped me land my dream job in analytics.",
// //       imageSrc:
// //         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
// //     },
// //   ]

// //   return (
// //     <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
// //           <div className="space-y-2">
// //             <div className="inline-block rounded-lg bg-blue-500/20 px-3 py-1 text-sm text-white backdrop-blur-sm">
// //               Student Success Stories
// //             </div>
// //             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Students Say</h2>
// //             <p className="max-w-[900px] text-white/80 md:text-xl">
// //               Hear from our students about their experiences and success stories at BIMSR - India's first AI-powered
// //               education institute.
// //             </p>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           {testimonials.map((testimonial, index) => (
// //             <TestimonialCard key={index} {...testimonial} />
// //           ))}
// //         </div>

// //         {/* Success Journey CTA */}
// //         <div className="mt-16 text-center">
// //           <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
// //             <h3 className="text-2xl font-bold mb-4">Your Success Journey Starts Here</h3>
// //             <p className="mb-6 text-white/80">
// //               Join thousands of successful BIMSR graduates who have transformed their dreams into reality. With our
// //               comprehensive support system, from admission to placement, your journey to success is guaranteed.
// //             </p>
// //             <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
// //               Apply Now and Transform Your Future
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import { Star, Quote, ChevronLeft, ChevronRight, Play, Award, Briefcase, Users } from "lucide-react"

// interface Testimonial {
//   id: number
//   name: string
//   role: string
//   company: string
//   program: string
//   year: string
//   image: string
//   rating: number
//   testimonial: string
//   achievement: string
//   videoUrl?: string
// }

// export default function Testimonials() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0)
//   const [activeCategory, setActiveCategory] = useState("all")

//   const testimonials: Testimonial[] = [
//     {
//       id: 1,
//       name: "Priya Sharma",
//       role: "Software Engineer",
//       company: "Microsoft",
//       program: "BCA + Full Stack + PGCCA",
//       year: "2023",
//       image:
//         "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       rating: 5,
//       testimonial:
//         "BIMSR transformed my career completely. The AI-powered learning approach and industry-focused curriculum gave me the skills I needed to land my dream job at Microsoft. The faculty support and placement assistance were exceptional.",
//       achievement: "₹12L Package at Microsoft",
//       videoUrl: "#",
//     },
//     {
//       id: 2,
//       name: "Rahul Kumar",
//       role: "Data Scientist",
//       company: "Amazon",
//       program: "BCA + Data Analytics + PGCCA",
//       year: "2023",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       rating: 5,
//       testimonial:
//         "The Data Analytics program at BIMSR is world-class. Real-world projects, industry mentorship, and hands-on experience with latest tools prepared me for the competitive tech industry. Highly recommend!",
//       achievement: "₹15L Package at Amazon",
//       videoUrl: "#",
//     },
//     {
//       id: 3,
//       name: "Sneha Patel",
//       role: "Digital Marketing Manager",
//       company: "Google",
//       program: "BCA + Digital Marketing + PGCCA",
//       year: "2022",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       rating: 5,
//       testimonial:
//         "BIMSR's Digital Marketing program is incredibly comprehensive. From SEO to AI-powered marketing tools, I learned everything needed to excel in the digital world. The industry connections are invaluable.",
//       achievement: "₹10L Package at Google",
//       videoUrl: "#",
//     },
//     {
//       id: 4,
//       name: "Arjun Singh",
//       role: "Business Analyst",
//       company: "Deloitte",
//       program: "BBA + Digital Marketing + PGCBA",
//       year: "2023",
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       rating: 5,
//       testimonial:
//         "The BBA program with Digital Marketing specialization gave me a perfect blend of business acumen and digital skills. The faculty's industry experience and practical approach made all the difference.",
//       achievement: "₹8L Package at Deloitte",
//       videoUrl: "#",
//     },
//     {
//       id: 5,
//       name: "Kavya Reddy",
//       role: "Financial Analyst",
//       company: "JP Morgan",
//       program: "BCOM + ACCA + PGCFM",
//       year: "2022",
//       image:
//         "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       rating: 5,
//       testimonial:
//         "The ACCA program at BIMSR is exceptional. The combination of theoretical knowledge and practical application, along with international certification, opened doors to global opportunities.",
//       achievement: "₹11L Package at JP Morgan",
//       videoUrl: "#",
//     },
//     {
//       id: 6,
//       name: "Vikash Gupta",
//       role: "Entrepreneur",
//       company: "Own Startup",
//       program: "BCA + Full Stack + PGCCA",
//       year: "2021",
//       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       rating: 5,
//       testimonial:
//         "BIMSR's entrepreneurship support and Business Creation Lab helped me launch my own tech startup. The mentorship, funding guidance, and network access were crucial for my success.",
//       achievement: "Founded Tech Startup - ₹50L Funding",
//       videoUrl: "#",
//     },
//   ]

//   const testimonialStats = [
//     {
//       number: "98%",
//       label: "Student Satisfaction",
//       icon: <Star className="h-6 w-6" />,
//       color: "from-yellow-500 to-orange-500",
//       description: "Students rate their experience highly",
//     },
//     {
//       number: "₹8.5L",
//       label: "Average Package",
//       icon: <Award className="h-6 w-6" />,
//       color: "from-green-500 to-emerald-500",
//       description: "Average starting salary of graduates",
//     },
//     {
//       number: "500+",
//       label: "Success Stories",
//       icon: <Users className="h-6 w-6" />,
//       color: "from-blue-500 to-cyan-500",
//       description: "Alumni working in top companies",
//     },
//     {
//       number: "95%",
//       label: "Career Growth",
//       icon: <Briefcase className="h-6 w-6" />,
//       color: "from-purple-500 to-pink-500",
//       description: "Alumni report significant career advancement",
//     },
//   ]

//   const categories = [
//     { id: "all", name: "All Stories", count: testimonials.length },
//     { id: "tech", name: "Technology", count: 3 },
//     { id: "business", name: "Business", count: 2 },
//     { id: "entrepreneur", name: "Entrepreneurship", count: 1 },
//   ]

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   }

//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
//     ))
//   }

//   return (
//     <section
//       id="testimonials"
//       className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
//             <Quote className="h-5 w-5 text-blue-600" />
//             <span className="text-blue-700 font-semibold">Success Stories</span>
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Student</span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Success Stories
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Hear from our successful alumni who have transformed their careers and achieved their dreams through BIMSR's
//             innovative education programs.
//           </p>
//         </div>

//         {/* Testimonial Stats */}
//         <div className="grid md:grid-cols-4 gap-8 mb-20">
//           {testimonialStats.map((stat, index) => (
//             <div key={index} className="group">
//               <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                 <div
//                   className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                 >
//                   {stat.icon}
//                 </div>
//                 <div className="text-center">
//                   <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-gray-900 font-semibold mb-2">{stat.label}</div>
//                   <div className="text-gray-600 text-sm">{stat.description}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Featured Testimonial */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Success Story</h3>
//             <p className="text-gray-600 text-lg">Inspiring journeys of our accomplished alumni</p>
//           </div>

//           <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full -translate-y-16 translate-x-16"></div>

//             <div className="relative z-10">
//               <div className="grid lg:grid-cols-2 gap-12 items-center">
//                 {/* Testimonial Content */}
//                 <div className="space-y-6">
//                   <div className="flex items-center gap-4">
//                     <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
//                       <img
//                         src={testimonials[currentTestimonial].image || "/placeholder.svg"}
//                         alt={testimonials[currentTestimonial].name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h4 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
//                       <p className="text-blue-600 font-semibold">{testimonials[currentTestimonial].role}</p>
//                       <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].company}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-2">
//                     {renderStars(testimonials[currentTestimonial].rating)}
//                     <span className="text-gray-600 text-sm ml-2">({testimonials[currentTestimonial].rating}/5)</span>
//                   </div>

//                   <div className="relative">
//                     <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
//                     <p className="text-gray-700 text-lg leading-relaxed pl-6 italic">
//                       "{testimonials[currentTestimonial].testimonial}"
//                     </p>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
//                     <div>
//                       <span className="text-gray-500 text-sm">Program:</span>
//                       <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].program}</p>
//                     </div>
//                     <div>
//                       <span className="text-gray-500 text-sm">Graduation:</span>
//                       <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].year}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Achievement Highlight */}
//                 <div className="text-center lg:text-left">
//                   <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
//                     <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
//                     <div className="relative z-10">
//                       <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
//                         <Award className="h-8 w-8 text-white" />
//                       </div>
//                       <h5 className="text-xl font-bold mb-4">Career Achievement</h5>
//                       <p className="text-blue-100 text-lg mb-6">{testimonials[currentTestimonial].achievement}</p>
//                       {testimonials[currentTestimonial].videoUrl && (
//                         <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 inline-flex items-center gap-2">
//                           <Play className="h-5 w-5" />
//                           Watch Video
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Navigation */}
//               <div className="flex justify-center items-center gap-4 mt-8">
//                 <button
//                   onClick={prevTestimonial}
//                   className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
//                 >
//                   <ChevronLeft className="h-6 w-6 text-gray-600" />
//                 </button>

//                 <div className="flex space-x-2">
//                   {testimonials.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentTestimonial(index)}
//                       className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                         currentTestimonial === index ? "bg-blue-600 w-8" : "bg-gray-300"
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <button
//                   onClick={nextTestimonial}
//                   className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
//                 >
//                   <ChevronRight className="h-6 w-6 text-gray-600" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* All Testimonials Grid */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-gray-900 mb-4">More Success Stories</h3>
//             <p className="text-gray-600 text-lg">Discover how BIMSR has transformed careers across industries</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.slice(0, 6).map((testimonial, index) => (
//               <div key={testimonial.id} className="group">
//                 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-12 h-12 rounded-xl overflow-hidden">
//                       <img
//                         src={testimonial.image || "/placeholder.svg"}
//                         alt={testimonial.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
//                       <p className="text-blue-600 text-sm font-medium">{testimonial.role}</p>
//                       <p className="text-gray-500 text-xs">{testimonial.company}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-1 mb-4">{renderStars(testimonial.rating)}</div>

//                   <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">"{testimonial.testimonial}"</p>

//                   <div className="pt-4 border-t border-gray-100">
//                     <div className="flex justify-between items-center text-xs">
//                       <span className="text-gray-500">Program:</span>
//                       <span className="text-gray-900 font-medium">{testimonial.program.split(" + ")[0]}</span>
//                     </div>
//                     <div className="flex justify-between items-center text-xs mt-1">
//                       <span className="text-gray-500">Achievement:</span>
//                       <span className="text-green-600 font-medium">{testimonial.achievement.split(" ")[0]}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//           <div className="relative z-10 text-center">
//             <h3 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
//             <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
//               Join thousands of successful alumni who have transformed their careers through BIMSR's innovative
//               education programs. Your success story starts here.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                 Start Your Journey
//               </button>
//               <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30">
//                 Connect with Alumni
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, Play, Building, MapPin, Calendar, Award } from "lucide-react"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      program: "BCA + Full Stack Development + PGCCA",
      company: "Amazon",
      position: "Software Developer",
      package: "₹18 LPA",
      year: "2024",
      location: "Bangalore",
      image: "/images/testimonial-1.jpg",
      rating: 5,
      category: "placement",
      testimonial:
        "BIMSR transformed my career completely. The comprehensive curriculum, industry-expert faculty, and hands-on projects prepared me perfectly for the tech industry. The placement support was exceptional, and I landed my dream job at Amazon. The college's focus on practical learning and real-world applications made all the difference.",
      highlights: [
        "100% Placement Support",
        "Industry-Ready Curriculum",
        "Expert Faculty Guidance",
        "Real-World Projects",
      ],
    },
    {
      id: 2,
      name: "Rahul Kumar",
      program: "BCA + Data Analytics + PGCCA",
      company: "Microsoft",
      position: "Data Scientist",
      package: "₹15 LPA",
      year: "2024",
      location: "Hyderabad",
      image: "/images/testimonial-2.jpg",
      rating: 5,
      category: "placement",
      testimonial:
        "The data analytics program at BIMSR is world-class. Working with real datasets, learning from industry professionals, and getting hands-on experience with cutting-edge tools prepared me for my role at Microsoft. The faculty's dedication and the college's industry connections are unmatched.",
      highlights: [
        "Real Dataset Experience",
        "Industry Professional Faculty",
        "Cutting-Edge Tools",
        "Strong Industry Network",
      ],
    },
    {
      id: 3,
      name: "Sneha Reddy",
      program: "BBA + Digital Marketing + PGCBA",
      company: "Google",
      position: "Digital Marketing Manager",
      package: "₹16 LPA",
      year: "2024",
      location: "Mumbai",
      image: "/images/testimonial-3.jpg",
      rating: 5,
      category: "placement",
      testimonial:
        "BIMSR's digital marketing program is ahead of its time. The practical approach, live campaigns, and industry mentorship helped me understand the digital landscape thoroughly. Landing a job at Google was a dream come true, and BIMSR made it possible with their excellent training and placement support.",
      highlights: [
        "Live Campaign Experience",
        "Industry Mentorship",
        "Practical Approach",
        "Excellent Placement Support",
      ],
    },
    {
      id: 4,
      name: "Arjun Patel",
      program: "BCOM + ACCA + PGCFM",
      company: "Deloitte",
      position: "Financial Analyst",
      package: "₹12 LPA",
      year: "2024",
      location: "Pune",
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      category: "placement",
      testimonial:
        "The ACCA integration with BCOM gave me a competitive edge in the finance industry. The faculty's expertise in international finance standards and the comprehensive curriculum helped me secure a position at Deloitte. The college's focus on global certifications is commendable.",
      highlights: ["ACCA Integration", "International Standards", "Expert Faculty", "Global Certifications"],
    },
    {
      id: 5,
      name: "Kavya Nair",
      program: "BCA + Full Stack Development + PGCCA",
      company: "TCS",
      position: "Full Stack Developer",
      package: "₹8 LPA",
      year: "2023",
      location: "Chennai",
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      category: "academic",
      testimonial:
        "The academic environment at BIMSR is exceptional. The faculty goes beyond textbooks to ensure we understand concepts thoroughly. The project-based learning approach and regular industry interactions helped me build a strong foundation in full-stack development.",
      highlights: ["Project-Based Learning", "Concept Clarity", "Industry Interactions", "Strong Foundation"],
    },
    {
      id: 6,
      name: "Vikram Singh",
      program: "BBA + Digital Marketing + PGCBA",
      company: "Startup Founder",
      position: "CEO",
      package: "₹25 LPA",
      year: "2022",
      location: "Bangalore",
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
      category: "entrepreneurship",
      testimonial:
        "BIMSR not only taught me digital marketing but also entrepreneurship. The incubation support, mentorship programs, and networking opportunities helped me start my own digital marketing agency. Today, we serve 50+ clients and have a team of 15 professionals.",
      highlights: ["Incubation Support", "Mentorship Programs", "Networking Opportunities", "Entrepreneurship Focus"],
    },
  ]

  const categories = [
    { id: "all", name: "All Reviews", count: testimonials.length },
    { id: "placement", name: "Placements", count: testimonials.filter((t) => t.category === "placement").length },
    { id: "academic", name: "Academics", count: testimonials.filter((t) => t.category === "academic").length },
    {
      id: "entrepreneurship",
      name: "Entrepreneurship",
      count: testimonials.filter((t) => t.category === "entrepreneurship").length,
    },
  ]

  const stats = [
    { label: "Student Satisfaction", value: "98%", icon: Star },
    { label: "Average Rating", value: "4.9/5", icon: Award },
    { label: "Success Stories", value: "500+", icon: Building },
    { label: "Industry Recognition", value: "50+", icon: Quote },
  ]

  const filteredTestimonials =
    selectedCategory === "all" ? testimonials : testimonials.filter((t) => t.category === selectedCategory)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-pink-800 to-rose-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Student Success Stories
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Hear from our successful graduates who have built amazing careers with the knowledge and skills gained at
            BIMSR. Their success is our pride.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Icon className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-purple-200 text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Filter by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setCurrentTestimonial(0)
                }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-md"
                }`}
              >
                <span>{category.name}</span>
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Success Story</h2>
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            <div className="p-8">
              {filteredTestimonials.length > 0 && (
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className="relative inline-block">
                      <img
                        src={filteredTestimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={filteredTestimonials[currentTestimonial].name}
                        className="w-64 h-64 rounded-2xl object-cover mx-auto lg:mx-0 shadow-xl"
                      />
                      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                        <Play className="h-8 w-8 text-purple-600 ml-1" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {filteredTestimonials[currentTestimonial].name}
                      </h3>
                      <p className="text-xl text-purple-600 font-semibold mb-1">
                        {filteredTestimonials[currentTestimonial].position}
                      </p>
                      <p className="text-gray-600">{filteredTestimonials[currentTestimonial].program}</p>
                    </div>

                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        {filteredTestimonials[currentTestimonial].company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {filteredTestimonials[currentTestimonial].location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {filteredTestimonials[currentTestimonial].year}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {filteredTestimonials[currentTestimonial].package}
                      </div>
                      <div className="text-gray-600">Annual Package</div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < filteredTestimonials[currentTestimonial].rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-purple-200" />
                      <blockquote className="text-gray-700 italic text-lg leading-relaxed pl-6">
                        {filteredTestimonials[currentTestimonial].testimonial}
                      </blockquote>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Key Highlights:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {filteredTestimonials[currentTestimonial].highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <Award className="h-4 w-4 text-purple-500 mr-2" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 pb-6">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? "bg-purple-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">All Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-semibold">{testimonial.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonial.package}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                  <p className="text-purple-600 font-semibold mb-1">{testimonial.position}</p>
                  <p className="text-gray-600 text-sm mb-2">
                    {testimonial.company} • {testimonial.location}
                  </p>
                  <p className="text-gray-500 text-xs mb-4">{testimonial.program}</p>

                  <div className="relative mb-4">
                    <Quote className="absolute -top-1 -left-1 h-4 w-4 text-purple-200" />
                    <p className="text-gray-700 text-sm italic pl-4 line-clamp-3">{testimonial.testimonial}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500">Class of {testimonial.year}</div>
                    <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">Read More →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Video Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <div
                key={video}
                className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={`/placeholder.svg?height=200&width=350`}
                    alt={`Video Testimonial ${video}`}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                    <Play className="h-8 w-8 text-purple-600 ml-1" />
                  </button>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">2:30</div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Student Success Story #{video}</h3>
                  <p className="text-gray-600 text-sm">From classroom to career success</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-700 rounded-2xl text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates who have built amazing careers with BIMSR. Your success story could
            be next!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              Meet Our Alumni
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
