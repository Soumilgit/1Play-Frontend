"use client"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IndustriesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const industries = [
    {
      title: "Broadcast & OTT",
      image: "/bro.png?height=400&width=600",
      description: "Solutions for traditional and digital broadcasting",
      link: "/industries/broadcast-ott",
    },
    {
      title: "Film & Entertainment",
      image: "/film.png?height=400&width=600",
      description: "Tools for filmmakers and content creators",
      link: "/industries/film-entertainment",
    },
    {
      title: "Advertising & Agencies",
      image: "/adv.png?height=400&width=600",
      description: "Creative solutions for marketing professionals",
      link: "/industries/advertising-agencies",
    },
    {
      title: "Education & eLearning",
      image: "/moe.png?height=400&width=600",
      description: "Engaging content delivery for educational institutions",
      link: "/industries/education-elearning",
    },
    {
      title: "Sports & Live Events",
      image: "./hcli.png?height=400&width=600",
      description: "Real-time production for sporting events",
      link: "/industries/sports-events",
    },
    {
      title: "Devotion & Spirituality",
      image: "./ayodhya.png?height=600&width=600",
      description: "Solutions for religious and spiritual content",
      link: "/industries/devotion-spirituality",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      ref={ref}
      className="py-20 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-red-600"
            
          >
            Industries We Serve
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
            className="text-lg text-slate-600 max-w-3xl mx-auto dark:text-slate-100"
          >
            Tailored solutions for diverse media and entertainment sectors.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div key={industry.title} variants={itemVariants}>
              <Link href={industry.link} className="block group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    width={600}
                    height={400}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 z-20">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors dark:text-white">
                        {industry.title}
                      </h3>
                      <p className="text-sm text-slate-300 dark:text-slate-200">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/industries">
            <Button
              size="lg"
              className="text-black bg-gradient-to-r from-red-500 via-slate-300 to-cyan-300 hover:from-red-400 hover:to-cyan-300"
            >
              Explore All Industries
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
