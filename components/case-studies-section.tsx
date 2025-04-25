"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CaseStudiesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const caseStudies = [
    {
      title: "Global Streaming Platform Overhaul",
      client: "StreamFlex Media",
      description:
        "Redesigned the entire backend infrastructure for a major streaming service, resulting in 40% faster load times and 25% reduction in buffering.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Streaming", "Infrastructure", "Performance"],
      link: "/case-studies/streamflex-media",
    },
    {
      title: "AI Content Recommendation Engine",
      client: "FilmVerse Studios",
      description:
        "Implemented a machine learning algorithm that increased viewer engagement by 35% and subscription retention by 18%.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["AI", "Machine Learning", "Content Discovery"],
      link: "/case-studies/filmverse-studios",
    },
    {
      title: "Live Sports Broadcasting Solution",
      client: "Global Sports Network",
      description:
        "Developed a real-time graphics and replay system for major sporting events, reducing production costs by 30%.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Live Production", "Sports", "Broadcasting"],
      link: "/case-studies/global-sports",
    },
  ]

  const testimonials = [
    {
      quote:
        "1Play Global transformed our production workflow. Their solutions are intuitive, powerful, and backed by exceptional support.",
      author: "Sarah Johnson",
      position: "CTO, StreamFlex Media",
      rating: 5,
    },
    {
      quote:
        "The AI recommendation engine has been a game-changer for our platform. User engagement metrics have skyrocketed since implementation.",
      author: "Michael Chen",
      position: "Head of Technology, FilmVerse Studios",
      rating: 5,
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

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-900 text-black dark:text-slate-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-cyan-400"
          >
            Case Studies
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"
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
                      <Badge className="bg-purple-500 hover:bg-purple-600">{study.client}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
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
                    <Button variant="ghost" className="group-hover:text-purple-600 dark:group-hover:text-purple-400 p-0">
                      Read case study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl font-bold mb-8 text-center text-black dark:text-slate-300"
          >
            Client Testimonials
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.author} variants={itemVariants}>
                <Card className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 dark:text-slate-300 italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-black dark:text-white">{testimonial.author}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.position}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="text-center">
          <Link href="/case-studies">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
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
