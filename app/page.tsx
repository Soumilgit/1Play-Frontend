"use client"

import type React from "react"

import { useRef } from "react"

import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SolutionsSection from "@/components/solutions-section"
import IndustriesSection from "@/components/industries-section"
import CaseStudiesSection from "@/components/case-studies-section"
import MediaHubSection from "@/components/media-hub-section"
import ContactSection from "@/components/contact-section"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  /*const heroRef = useRef<HTMLDivElement>(null)*/
  const aboutRef = useRef<HTMLDivElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)
  const industriesRef = useRef<HTMLDivElement>(null)
  const caseStudiesRef = useRef<HTMLDivElement>(null)
  const mediaHubRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      <ParticleBackground />

      {/* Hero Section */}
      {/*<div ref={heroRef} id="hero">
      <HeroSection />
      </div>*/}
      <HeroSection />
      {/* About Section */}
      <div ref={aboutRef} id="about">
        <AboutSection />
      </div>

      {/* Solutions Section */}
      <div ref={solutionsRef} id="solutions">
        <SolutionsSection />
      </div>

      {/* Industries Section */}
      <div ref={industriesRef} id="industries">
        <IndustriesSection />
      </div>

      {/* Case Studies Section */}
      <div ref={caseStudiesRef} id="case-studies">
        <CaseStudiesSection />
      </div>

      {/* Media Hub Section */}
      <div ref={mediaHubRef} id="media-hub">
        <MediaHubSection />
      </div>

      {/* Contact Section */}
      <div ref={contactRef} id="contact">
        <ContactSection />
      </div>
    </div>
  )
}
