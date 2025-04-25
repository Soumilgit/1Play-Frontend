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
    title: "Media Production Tools",
    description: "Professional-grade tools for content creation, editing, and distribution.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Video Editing", "Audio Production", "Graphics"],
    category: "Production",
    featured: true,
  },
  {
    id: "streaming",
    title: "Streaming & Broadcasting Platforms",
    description: "End-to-end solutions for live and on-demand content delivery.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Live Streaming", "OTT", "CDN"],
    category: "Distribution",
    featured: false,
  },
  {
    id: "content-management",
    title: "Content Management Systems",
    description: "Organize, store, and distribute your media assets efficiently.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Asset Management", "Metadata", "Archiving"],
    category: "Management",
    featured: false,
  },
  {
    id: "ai-data",
    title: "AI & Data Solutions for Media",
    description: "Leverage AI to extract insights and automate workflows.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Machine Learning", "Analytics", "Automation"],
    category: "Intelligence",
    featured: true,
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Tailored solutions designed for your specific requirements.",
    image: "/placeholder.svg?height=400&width=600",
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
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link
          href="/#solutions"
          className="inline-flex items-center text-sm text-slate-400 hover:text-purple-400 transition-colors mb-8"
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
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                  <Card className="bg-slate-900/50 border-slate-800 overflow-hidden h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                      <div className="relative h-48 md:h-auto">
                        <Image
                          src={solution.image || "/placeholder.svg"}
                          alt={solution.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-purple-500 hover:bg-purple-600">Featured</Badge>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                          <p className="text-slate-100 mb-4">{solution.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {solution.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Link href={`/solutions/${solution.id}`}>
                          <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search solutions..."
                className="pl-10 bg-slate-900/50 border-slate-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="bg-slate-900/50 border-slate-800">
                  <SelectValue placeholder="Filter by Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* All Solutions */}
        {filteredSolutions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions
              .filter((solution) => !solution.featured)
              .map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link href={`/solutions/${solution.id}`}>
                    <Card className="h-full bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={solution.image || "/placeholder.svg"}
                          alt={solution.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <Badge className="bg-cyan-500 hover:bg-cyan-600">{solution.category}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-purple-400 transition-colors">
                          {solution.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-slate-100 mb-4">{solution.description}</CardDescription>
                        <div className="flex flex-wrap gap-2">
                          {solution.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" className="group-hover:text-purple-400 p-0">
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mb-4 text-slate-400">
              <Filter className="h-12 w-12 mx-auto opacity-50" />
            </div>
            <h3 className="text-xl font-medium mb-2">No solutions found</h3>
            <p className="text-slate-400 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setCategoryFilter("")
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Our team of experts can develop tailored solutions to address your specific challenges and requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              >
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
