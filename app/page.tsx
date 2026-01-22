"use client"

import { useEffect, useState } from "react"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ForStudentsSection from "./components/ForStudentsSection"
import StatsAndExcellenceSection from "./components/StatsAndExcellenceSection"
import TopRecruitersSection from "./components/TopRecruitersSection"
import ValueAndSuccessSection from "./components/ValueAndSuccessSection"
import PartnershipBenefitsSection from "./components/PartnershipBenefitsSection"
import ProgramsSection from "./components/ProgramsSection"
import PostgraduateFundedSection from "./components/PostgraduateFundedSection"
import CertificationsCoursesSection from "./components/CertificationsCoursesSection"
import SportsExcellenceSection from "./components/SportsExcellenceSection"
import CollegeReputationSection from "./components/CollegeReputationSection"
import ForUniversitiesSection from "./components/ForUniversitiesSection"
import CTAAndContactSection from "./components/CTASection"
import Footer from "./components/Footer"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header scrolled={scrolled} />
      <HeroSection />
      <ForStudentsSection />
      {/* <StatsAndExcellenceSection /> */}
      <TopRecruitersSection />
      <ValueAndSuccessSection />
      <PartnershipBenefitsSection />
      <ProgramsSection />
      <PostgraduateFundedSection />
      <CertificationsCoursesSection />
      <SportsExcellenceSection />
      <CollegeReputationSection />
      <ForUniversitiesSection />
      <CTAAndContactSection />
      <Footer />
    </div>
  )
}