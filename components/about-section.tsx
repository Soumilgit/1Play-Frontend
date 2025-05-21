"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Users, Lightbulb, Cpu, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gradient-to-b dark:bg-slate-900 text-black dark:text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl text-red-600 md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-slate-200 to-cyan-500"
          >
            About 1Play Global
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
            Empowering the creator economy with self-controlled content ownership and monetization through our Ai first, low cost, no-code technology platform in minutes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              title: "Our Story",
              description: "Founded with a vision to revolutionize media technology",
              icon: <Lightbulb className="h-10 w-10 text-purple-400" />,
            },
            {
              title: "Mission & Vision",
              description: "Empowering creators with cutting-edge technology",
              icon: <Cpu className="h-10 w-10 text-cyan-400" />,
            },
            {
              title: "Leadership Team",
              description: "Industry experts with decades of combined experience",
              icon: <Users className="h-10 w-10 text-purple-400" />,
            },
            {
              title: "Technology Philosophy",
              description: "Innovation-driven approach to solving complex challenges",
              icon: <Lightbulb className="h-10 w-10 text-cyan-400" />,
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <Card className="h-full bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4">{item.icon}</div>
                  <CardTitle className="text-xl text-black dark:text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-500 dark:text-slate-400">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-20" />
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-slate-800">
  <Image
    src="./imk.png"
    alt="1Play Global Team"
    fill
    className="object-cover object-center"
    sizes="(max-width: 868px) 120vw, 60vw"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
    <div>
      <h3 className="text-xl font-bold mb-2 text-white">Our Global Team</h3>
      <p className="text-sm text-white/90">
        Passionate professionals dedicated to innovation
      </p>
    </div>
  </div>
</div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Technology Philosophy</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              At 1Play Global, we believe that technology should empower creativity, not constrain it. Our solutions are
              designed with the creator in mind, providing powerful tools that are intuitive and accessible.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              1 Play Global's vision is to solve the problem of content control and data ownership for grassroot talents across music and arts, sports, divinity and culture. The growing requirement to digitally engage with one's audiences has led to an overdependence on 3rd party platforms such as YouTube, Meta, Spotify, etc. These platforms take control of the content, do not share data with the creators and monetize without reference or transparency. This also leads to millions of content creators not getting rewarded fairly. Our core tech stack called PlayMersiv is a platform that instantly generates no code, low cost, white labelled, video first apps with data ownership and monetization control for all content creators. Our vision in 2025 extends to a self-serve, Ai agent platform iteration to build global scale for all content owners irrespective of their size.
            </p>
            <Link href="/about-us">
              <Button className="text-black bg-gradient-to-r from-red-500 via-slate-300 to-cyan-300 hover:from-red-400 hover:to-cyan-300">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}