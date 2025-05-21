"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for case studies
const caseStudiesData = [
  {
    id: "streamflex-media",
    title: "Global Streaming Platform Overhaul",
    client: "StreamFlex Media",
    description:
      "Redesigned the entire backend infrastructure for a major streaming service, resulting in 40% faster load times and 25% reduction in buffering.",
    image: "/stream.png?height=400&width=600",
    tags: ["Streaming", "Infrastructure", "Performance"],
    industry: "Broadcast & OTT",
    solution: "Streaming & Broadcasting",
  },
  {
    id: "filmverse-studios",
    title: "AI-Powered Content Recommendation Engine",
    client: "FilmVerse Studios",
    description:
      "Implemented a machine learning algorithm that increased viewer engagement by 35% and subscription retention by 18%.",
    image: "/cont.png?height=400&width=600",
    tags: ["AI", "Machine Learning", "Content Discovery"],
    industry: "Film & Entertainment",
    solution: "AI & Data Solutions",
  },
  {
    id: "global-sports",
    title: "Live Sports Broadcasting Solution",
    client: "Global Sports Network",
    description:
      "Developed a real-time graphics and replay system for major sporting events, reducing production costs by 30%.",
    image: "/hcli.png?height=400&width=600",
    tags: ["Live Production", "Sports", "Broadcasting"],
    industry: "Sports & Live Events",
    solution: "Media Production Tools",
  },
  {
    id: "news-network",
    title: "News Production Workflow Transformation",
    client: "24/7 News Network",
    description:
      "Streamlined the news production workflow, enabling faster breaking news coverage and reducing time-to-air by 50%.",
    image: "/bro.png?height=400&width=600",
    tags: ["News", "Workflow", "Efficiency"],
    industry: "Broadcast & OTT",
    solution: "Content Management Systems",
  },
  {
    id: "education-platform",
    title: "Interactive Learning Platform",
    client: "Global Education Initiative",
    description:
      "Built a comprehensive video-based learning platform with interactive elements that increased student engagement by 45%.",
    image: "/elearn.png?height=400&width=600",
    tags: ["Education", "Interactive", "Engagement"],
    industry: "Education & eLearning",
    solution: "Custom Software Development",
  },
  {
    id: "advertising-agency",
    title: "Creative Asset Management Solution",
    client: "Spark Creative Agency",
    description:
      "Implemented a centralized asset management system that reduced production time for campaigns by 35% and improved collaboration.",
    image: "/adv.png?height=400&width=600",
    tags: ["Advertising", "Asset Management", "Collaboration"],
    industry: "Advertising & Agencies",
    solution: "Content Management Systems",
  },
]
export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [industryFilter, setIndustryFilter] = useState("")
  const [solutionFilter, setSolutionFilter] = useState("")

  const filteredCaseStudies = caseStudiesData.filter((study) => {
    const matchesSearch =
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesIndustry = industryFilter === "" || study.industry === industryFilter
    const matchesSolution = solutionFilter === "" || study.solution === solutionFilter

    return matchesSearch && matchesIndustry && matchesSolution
  })

  const industries = Array.from(new Set(caseStudiesData.map((study) => study.industry)))
  const solutions = Array.from(new Set(caseStudiesData.map((study) => study.solution)))

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Case Studies
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore how our innovative solutions have helped clients across various industries transform their media
            workflows.
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search case studies..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="relative">
              <Select value={solutionFilter} onValueChange={setSolutionFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Solution" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Solutions</SelectItem>
                  {solutions.map((solution) => (
                    <SelectItem key={solution} value={solution}>
                      {solution}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {filteredCaseStudies.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link href={`/case-studies/${study.id}`}>
                  <Card className="h-full hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group overflow-hidden">
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
                      <CardTitle className="text-xl group-hover:text-purple-400 transition-colors">
                        {study.title}
                      </CardTitle>
                      <CardDescription>
                        {study.industry} • {study.solution}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 line-clamp-3">{study.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="group-hover:text-purple-400 p-0">
                        Read case study
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <div className="mb-4 text-muted-foreground">
              <Filter className="h-12 w-12 mx-auto opacity-50" />
            </div>
            <h3 className="text-xl font-medium mb-2">No case studies found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filters to find what you're looking for.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setIndustryFilter("")
                setSolutionFilter("")
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}