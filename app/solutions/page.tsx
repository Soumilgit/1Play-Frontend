"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for solutions
const solutionsData = [
  {
    id: "media-production",
    title: "PlayMersiv AI",
    description: "Project PlayMersiv AI solves digital content ownership and access inequality.",
    image: "/stream.png?height=400&width=600",
    tags: ["AI", "No-Code", "SaaS"],
    category: "Production",
    featured: true,
  },
  {
    id: "streaming",
    title: "Streaming & Broadcasting Platforms",
    description: "End-to-end solutions for live and on-demand content delivery.",
    image: "/bro.png?height=400&width=600",
    tags: ["Live Streaming", "OTT", "CDN"],
    category: "Distribution",
    featured: false,
  },
  {
    id: "content-management",
    title: "Content Management Systems",
    description: "Organize, store, and distribute your media assets efficiently.",
    image: "/cont.png?height=400&width=600",
    tags: ["Asset Management", "Metadata", "Archiving"],
    category: "Management",
    featured: false,
  },
  {
    id: "ai-data",
    title: "AI & Data Solutions for Media",
    description: "Leverage AI to extract insights and automate workflows.",
    image: "/aids.png?height=400&width=600",
    tags: ["Machine Learning", "Analytics", "Automation"],
    category: "Intelligence",
    featured: true,
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Tailored solutions designed for your specific requirements.",
    image: "/cust.png?height=400&width=600",
    tags: ["Bespoke", "Integration", "Scalable"],
    category: "Development",
    featured: false,
  },
  {
    id: "system-integration",
    title: "System Integration Services",
    description: "Seamlessly connect your existing systems and workflows.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["API", "Workflow", "Legacy Systems"],
    category: "Integration",
    featured: false,
  },
]
export default function SolutionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")

  const filteredSolutions = solutionsData.filter((solution) => {
    const matchesSearch =
      solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      solution.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      solution.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = categoryFilter === "" || solution.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  const categories = Array.from(new Set(solutionsData.map((solution) => solution.category)))

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <Link
          href="/#solutions"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-purple-400 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Our Solutions
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technology solutions designed to transform your media production workflow.
          </p>
        </motion.div>

        {/* Featured Solutions */}
<div className="mb-16">
  <h2 className="text-2xl font-bold mb-8">Featured Solutions</h2>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {solutionsData
      .filter((solution) => solution.featured)
      .map((solution, index) => (
        <motion.div
          key={solution.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <Card className="h-full overflow-hidden border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="w-full h-auto">
  <Image
    src={solution.image || "/placeholder.svg"}
    alt={solution.title}
    width={600}
    height={220}
    layout="responsive"
    className="object-cover object-center rounded-t-lg"
  />
  <div className="absolute top-2 left-2 z-10">
    <Badge className="bg-purple-500 hover:bg-purple-600 text-white">Featured</Badge>
  </div>
</div>

              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{solution.title}</h3>
                  <p className="text-foreground mb-4">{solution.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {solution.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs text-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
  </div>
</div>


        {/* Search and Filter */}

        {/* All Solutions */}
        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team of experts can develop tailored solutions to address your specific challenges and requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}