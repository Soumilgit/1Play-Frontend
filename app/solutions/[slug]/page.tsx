"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for solutions
const solutionsData = {
  "media-production": {
    title: "PlayMersiv AI",
    description: "Project PlayMersiv AI solves digital content ownership and access inequality.",
    longDescription:
      "It empowers content creators economically by providing an AI-powered no-code SaaS platform for rapid and affordable OTT app creation, content creation, Ai generated marketing/sales tools, and CSR programs for organisations and content creators in LMICs, impacting socio-economic development as a result of increased digital inclusion and new revenue opportunities by converting content and data into currency.",
    features: [
      "It allows organisations and creators to own their data, content, and monetisation.",
      "D2C.",
    ],
    
    image: "/placeholder.svg?height=600&width=800",
    
  },

  }

export default function SolutionPage() {
  const params = useParams()
  const slug = params.slug as string
  const [solution, setSolution] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (slug && solutionsData[slug as keyof typeof solutionsData]) {
      setSolution(solutionsData[slug as keyof typeof solutionsData])
    }
    setLoading(false)
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (!solution) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Solution Not Found</h1>
        <p className="text-muted-foreground mb-6">The solution you're looking for doesn't exist or has been moved.</p>
        <Link href="/#solutions">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Solutions
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <Link
          href="/#solutions"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-purple-400 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Solutions
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              {solution.title}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6" />
            <p className="text-xl text-foreground mb-6">{solution.description}</p>
            <p className="text-foreground mb-8">{solution.longDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
              >
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Download Brochure
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-20" />
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
              <Image
                src={solution.image || "/placeholder.svg"}
                alt={solution.title}
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-400">Key Features</CardTitle>
              <CardDescription>
                What makes our {solution.title.toLowerCase()} stand out from the competition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {solution.features.map((feature: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <div className="mr-3 mt-1">
                      <div className="bg-purple-500/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-purple-400" />
                      </div>
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400">Benefits</CardTitle>
              <CardDescription>
                How our {solution.title.toLowerCase()} can transform your business
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {solution.benefits.map((benefit: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <div className="mr-3 mt-1">
                      <div className="bg-cyan-500/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-cyan-400" />
                      </div>
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Case Study</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=1200"
                  alt={solution.caseStudy.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{solution.caseStudy.title}</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="text-foreground mb-4">{solution.caseStudy.excerpt}</p>
                <Link href={solution.caseStudy.link}>
                  <Button variant="ghost" className="hover:text-purple-400 p-0">
                    Read the full case study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to transform your media workflow?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact our team today to discuss how our {solution.title.toLowerCase()} can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
            >
              Request Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}