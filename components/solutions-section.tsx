"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Tv, Film, Database, Code, Layers, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SolutionsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const solutions = [
    {
      title: "PlayMersiv AI",
      description: "AI-powered no-code SaaS for rapid OTT app creation, content monetisation, and marketing—empowering creators and organisations in LMICs with digital ownership, CSR programs, and new revenue through data-as-currency. D2C.",
      icon: <Film className="h-10 w-10 text-red-400" />,
      badge: "Popular",
      link: "",
    },
    {
      title: "Playmersiv",
      description: " Managed PaaS for enterprise clients such as the Singapore Ministry of Education (Sports), Ayodhya Development Authority (Divinity), Dulwich College (Grassroots sports, music, theatre and arts), Japan Tourism Board (MICE Tourism). B2BC.",
      icon: <Tv className="h-10 w-10 text-cyan-400" />,
      badge: "",
      link: "",
    },
    {
      title: "Podium",
      description: "White label web 3.0 blockchain wallet to monetize content engagement. B2B.",
      icon: <Layers className="h-10 w-10 text-red-400" />,
      badge: "",
      link: "/solutions/content-management",
    },
    {
      title: "OddsOn",
      description: "White label sports fantasy engagement. B2B.",
      icon: <Database className="h-10 w-10 text-red-400" />,
      badge: "New",
      link: "",
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
    <section ref={ref} className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl text-red-600 md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-slate-300 to-cyan-400 dark:from-red-400 dark:to-cyan-300"
          >
            Technology Stack
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
            Cutting-edge technology solutions designed to transform your media production workflow.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {solutions.map((solution, index) => (
            <motion.div key={solution.title} variants={itemVariants}>
              <Link href={solution.link}>
                <Card className="h-full bg-white dark:bg-slate-900/50 border-slate-300 dark:border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group">
                  <CardHeader>
                    <div className="mb-4 transition-transform duration-300 group-hover:scale-110">{solution.icon}</div>
                    <CardTitle className="text-xl text-black dark:text-white flex items-center">
                      {solution.title}
                      {solution.badge && (
                        <Badge className="ml-2 bg-purple-500 hover:bg-purple-600">{solution.badge}</Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 dark:text-slate-400">{solution.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center">
          <Link href="/solutions">
            <Button
              size="lg"
              className=" text-black bg-gradient-to-r from-red-500 via-slate-300 to-cyan-300 hover:from-red-400 hover:to-cyan-300"
            >
              View All Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}
