"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

// Mock data for industries
const industriesData = [
  {
    id: "broadcast-ott",
    title: "Broadcast & OTT",
    description:
      "Solutions for traditional and digital broadcasting, helping media companies deliver content across multiple platforms with exceptional quality and reliability.",
    image: "/stream.png?height=400&width=600",
    solutions: ["Streaming & Broadcasting", "Content Management", "AI & Data Solutions"],
    featured: true,
  },
  {
    id: "film-entertainment",
    title: "Film & Entertainment",
    description:
      "Tools for filmmakers and content creators to streamline production workflows, enhance creative capabilities, and optimize distribution channels.",
    image: "/film.png?height=400&width=600",
    solutions: ["Media Production Tools", "Content Management", "Custom Software"],
    featured: true,
  },
  {
    id: "advertising-agencies",
    title: "Advertising & Agencies",
    description:
      "Creative solutions for marketing professionals to produce, manage, and distribute compelling content across multiple channels and campaigns.",
    image: "/adv.png?height=400&width=600",
    solutions: ["Media Production Tools", "Content Management", "System Integration"],
    featured: false,
  },
  {
    id: "education-elearning",
    title: "Education & eLearning",
    description:
      "Engaging content delivery for educational institutions, enabling interactive learning experiences and efficient knowledge sharing.",
    image: "/moe.png?height=400&width=600",
    solutions: ["Streaming & Broadcasting", "Content Management", "Custom Software"],
    featured: false,
  },
  {
    id: "sports-events",
    title: "Sports & Live Events",
    description:
      "Real-time production for sporting events and live performances, delivering immersive experiences to audiences worldwide.",
    image: "/hcli.png?height=400&width=600",
    solutions: ["Streaming & Broadcasting", "Media Production Tools", "AI & Data Solutions"],
    featured: false,
  },
  {
    id: "devotion-spirituality",
    title: "Devotion & Spirituality",
    description:
      "Solutions for religious and spiritual content, helping organizations reach and engage with their communities through various media channels.",
    image: "/ayodhya.png?height=400&width=600",
    solutions: ["Streaming & Broadcasting", "Content Management", "Custom Software"],
    featured: false,
  },
  {
    id: "culture-tourism",
    title: "Culture & Tourism",
    description:
      "Media solutions for cultural institutions and tourism organizations to showcase attractions, preserve heritage, and enhance visitor experiences.",
    image: "/cult.png?height=400&width=600",
    solutions: ["Media Production Tools", "Content Management", "Custom Software"],
    featured: false,
  },
]
export default function IndustriesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredIndustries = industriesData.filter(
    (industry) =>
      industry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      industry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      industry.solutions.some((solution) => solution.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <Link
          href="/#industries"
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
            Industries We Serve
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored solutions for diverse media and entertainment sectors, designed to address industry-specific
            challenges.
          </p>
        </motion.div>

        {/* Featured Industries */}
<div className="mb-16">
  <h2 className="text-2xl font-bold mb-8">Featured Industries</h2>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {industriesData
      .filter((industry) => industry.featured)
      .map((industry, index) => (
        <motion.div
          key={industry.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <Card className="h-full overflow-hidden border border-border">
            <div className="relative w-full h-[220px]">
              <Image
                src={industry.image || "/placeholder.svg"}
                alt={industry.title}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-4 z-10">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-white line-clamp-2">{industry.description}</p>
                </div>
              </div>
              <div className="absolute top-2 left-2 z-20">
                <Badge className="bg-purple-500 hover:bg-purple-600 text-white">Featured</Badge>
              </div>
            </div>
            <div className="p-4 flex flex-col justify-between">
              <div className="flex flex-wrap gap-2 mb-4">
                {industry.solutions.map((solution) => (
                  <Badge key={solution} variant="outline" className="text-xs text-foreground">
                    {solution}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
  </div>
</div>


        {/* Search */}
        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search industries..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* All Industries */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredIndustries
    .filter((industry) => !industry.featured)
    .map((industry, index) => (
      <motion.div
        key={industry.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
      >
          <div className="relative overflow-hidden rounded-xl mb-4 shadow-md border border-border">
            <div className="relative w-full h-[220px]">
              <Image
                src={industry.image || "/placeholder.svg"}
                alt={industry.title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-4 z-20">
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white group-hover:text-purple-400 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-white line-clamp-2">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {industry.solutions.map((solution) => (
                  <Badge key={solution} variant="outline" className="text-xs text-foreground">
                    {solution}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
      
      </motion.div>
    ))}
</div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to transform your media workflow?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact our team today to discuss how our industry-specific solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
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