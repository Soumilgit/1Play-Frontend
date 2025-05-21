"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const partners = [
  { name: "Sport Singapore", logo: "./sport-sg.png" },
  { name: "Ministry of Education", logo: "./moe.png" },
  { name: "Ayodhya", logo: "./es.png" },
  { name: "Indian Olympic Association", logo: "./ioa.png" },
  { name: "Philippines 2019 SEA Games", logo: "./seagames.png" },
  { name: "Enterprise Singapore", logo: "./enterprise-sg.png" },
  { name: "Singapore Aquatics", logo: "./adventics.png" },
  { name: "Dulwich College International", logo: "./dulwich.png" },
  { name: "Equestrian Fed. India", logo: "./efi.png" },
  { name: "TV", logo: "./tv.png" },
  { name: "Singapore Rugby", logo: "./sgr.png" },
  { name: "HCL Squash Podium Program", logo: "./hcl.png" },
  { name: "All India Pickleball Assoc.", logo: "./asoc.png" },
  { name: "Amateur Riders Club", logo: "./zinateur.png" },
  { name: "SGAW", logo: "./sgaw.png" },
  { name: "Singapore Hockey", logo: "./sg-hockey.png" },
  { name: "Turf City FC", logo: "./tffc.png" }
]

export default function CaseStudiesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeUsers, setActiveUsers] = useState(0)
  const [views, setViews] = useState(0)
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0)

  const caseStudies = [
    {
      title: "Global Streaming Platform Overhaul",
      client: "StreamFlex Media",
      description: "Redesigned the entire backend infrastructure for a major streaming service, resulting in 40% faster load times and 25% reduction in buffering.",
      image: "/stream.png?height=400&width=600",
      tags: ["Streaming", "Infrastructure", "Performance"],
      link: "/case-studies/streamflex-media",
    },
    {
      title: "AI Content Recommendation Engine",
      client: "FilmVerse Studios",
      description: "Implemented a machine learning algorithm that increased viewer engagement by 35% and subscription retention by 18%.",
      image: "/cont.png?height=400&width=600",
      tags: ["AI", "Machine Learning", "Content Discovery"],
      link: "/case-studies/filmverse-studios",
    },
    {
      title: "Live Sports Broadcasting Solution",
      client: "Global Sports Network",
      description: "Developed a real-time graphics and replay system for major sporting events, reducing production costs by 30%.",
      image: "/hcli.png?height=400&width=600",
      tags: ["Live Production", "Sports", "Broadcasting"],
      link: "/case-studies/global-sports",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Animate numbers counting up
  useEffect(() => {
    if (isInView) {
      const activeUsersTargets = [23847, 98885, 270404]
      const viewsTargets = [168697, 1061759, 5596180]
      const duration = 1200
      const steps = 50

      activeUsersTargets.forEach((target, i) => {
        setTimeout(() => {
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              current = target
              clearInterval(timer)
            }
            setActiveUsers(Math.floor(current))
          }, duration / steps)
        }, i * duration)
      })

      viewsTargets.forEach((target, i) => {
        setTimeout(() => {
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              current = target
              clearInterval(timer)
            }
            setViews(Math.floor(current))
          }, duration / steps)
        }, i * duration)
      })
    }
  }, [isInView])

  // Auto-rotate partners
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrentPartnerIndex((prev) => (prev + 1) % partners.length)
      }, 1200) 
      return () => clearInterval(interval)
    }
  }, [isInView])

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-900 text-black dark:text-slate-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-red-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r from-red-600 via-slate-200 to-cyan-500"
          >
            Case Studies
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-red-500 to-cyan-500 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Real-world success stories showcasing our innovative solutions.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {caseStudies.map((study) => (
            <motion.div key={study.title} variants={itemVariants}>
              <Link href={study.link}>
                <Card className="h-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-md dark:hover:shadow-purple-500/5 group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-red-500 hover:bg-red-600">{study.client}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {study.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 dark:text-slate-400 mb-4">
                      {study.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs text-black dark:text-white border-black dark:border-slate-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="bg-gradient-to-r from-red-500 via-slate-300 to-cyan-300 hover:from-red-400 hover:to-cyan-300">
                      Read case study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl font-bold mb-8 text-center text-black dark:text-slate-300"
          >
            Our Impact
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800/50 p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-4 text-black dark:text-white">Active Users</h4>
              <div className="text-4xl font-bold text-red-600 dark:text-red-600 mb-2">
                {activeUsers.toLocaleString()}
              </div>
              <div className="flex justify-center gap-8 text-sm text-red-600 dark:text-red-400">
                <span>2022: 23,847</span>
                <span>2023: 98,885</span>
                <span>2024: 270,404</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800/50 p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-4 text-black dark:text-white">Views</h4>
              <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                {views.toLocaleString()}
              </div>
              <div className="flex justify-center gap-8 text-sm text-red-600 dark:text-red-400">
                <span>2022: 168,697</span>
                <span>2023: 1,061,759</span>
                <span>2024: 5,596,180</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Partners Carousel */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative overflow-hidden"
          >
            <h4 className="text-xl font-semibold mb-6 text-center text-black dark:text-white">Key Partners</h4>
            <div className="relative h-32">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ x: '100%', opacity: 0 }}
                  animate={{ 
                    x: index === currentPartnerIndex ? '0%' : index < currentPartnerIndex ? '-100%' : '100%',
                    opacity: index === currentPartnerIndex ? 1 : 0
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={160}
                      height={80}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-4 gap-2">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPartnerIndex(index)}
                  className={`w-2 h-2 rounded-full ${index === currentPartnerIndex ? 'bg-purple-600' : 'bg-slate-300'}`}
                  aria-label={`View partner ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <Link href="/case-studies">
            <Button
              size="lg"
              className="text-black bg-gradient-to-r from-red-500 via-slate-300 to-cyan-300 hover:from-red-400 hover:to-cyan-300"
            >
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}