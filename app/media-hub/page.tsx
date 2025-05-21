"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, FileText, Newspaper, Download, ExternalLink, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function MediaHubPage() {
  const [activeTab, setActiveTab] = useState("press")

  const pressReleases = [
    {
      id: "ai-cms-launch",
      title: "1Play Global Launches Revolutionary AI-Powered Content Management System",
      date: "April 15, 2025",
      excerpt:
        "The new system leverages machine learning to automate content tagging, categorization, and recommendation.",
      image: "/cont.png?height=400&width=600",
      featured: true,
    },
    {
      id: "broadcast-partnership",
      title: "Partnership Announced with Leading Broadcast Network",
      date: "March 22, 2025",
      excerpt: "Strategic collaboration aims to transform live sports production with cutting-edge technology.",
      image: "/bro.png?height=400&width=600",
      featured: false,
    },
    {
      id: "apac-expansion",
      title: "1Play Global Expands Operations to Asia-Pacific Region",
      date: "February 10, 2025",
      excerpt: "New Singapore office will serve as headquarters for growing APAC client base.",
      image: "/apac.png?height=400&width=600",
      featured: false,
    },
    {
      id: "tech-award",
      title: "1Play Global Wins Technology Innovation Award",
      date: "January 25, 2025",
      excerpt: "Company recognized for breakthrough advancements in media production technology.",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: "new-cto",
      title: "Industry Veteran Joins 1Play Global as Chief Technology Officer",
      date: "December 12, 2024",
      excerpt: "Former Netflix executive brings decades of experience in streaming technology.",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: "funding-round",
      title: "1Play Global Secures $50M in Series C Funding",
      date: "November 5, 2024",
      excerpt: "Investment will accelerate product development and global expansion efforts.",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
  ]

  const videos = [
    {
      id: "production-tools-demo",
      title: "Next-Gen Media Production Tools Demo",
      thumbnail: "/placeholder.svg?height=400&width=600",
      duration: "4:32",
      date: "March 15, 2025",
      category: "Product Demo",
    },
    {
      id: "ai-webinar",
      title: "AI in Content Management Webinar",
      thumbnail: "/placeholder.svg?height=400&width=600",
      duration: "28:15",
      date: "February 22, 2025",
      category: "Webinar",
    },
    {
      id: "streamflex-story",
      title: "Client Success Story: StreamFlex Media",
      thumbnail: "/placeholder.svg?height=400&width=600",
      duration: "6:47",
      date: "January 30, 2025",
      category: "Case Study",
    },
    {
      id: "ceo-interview",
      title: "Interview with 1Play Global CEO",
      thumbnail: "/placeholder.svg?height=400&width=600",
      duration: "12:23",
      date: "December 18, 2024",
      category: "Interview",
    },
    {
      id: "product-launch",
      title: "New Product Launch Event",
      thumbnail: "/placeholder.svg?height=400&width=600",
      duration: "45:10",
      date: "November 10, 2024",
      category: "Event",
    },
    {
      id: "tech-overview",
      title: "Technology Overview: Streaming Solutions",
      thumbnail: "/placeholder.svg?height=400&width=600",
      duration: "8:55",
      date: "October 5, 2024",
      category: "Product Demo",
    },
  ]

  const resources = [
    {
      id: "ai-in-media",
      title: "The Future of AI in Media Production",
      type: "Whitepaper",
      date: "March 2025",
      description:
        "An in-depth analysis of how artificial intelligence is transforming content creation and distribution.",
      downloadable: true,
    },
    {
      id: "streaming-optimization",
      title: "Optimizing Streaming Infrastructure for Scale",
      type: "Technical Guide",
      date: "February 2025",
      description:
        "Best practices for building robust, scalable streaming platforms that can handle millions of concurrent viewers.",
      downloadable: true,
    },
    {
      id: "content-monetization",
      title: "Content Monetization Strategies for 2025",
      type: "Industry Report",
      date: "January 2025",
      description: "Comprehensive overview of emerging business models and revenue opportunities in digital media.",
      downloadable: true,
    },
    {
      id: "workflow-efficiency",
      title: "Improving Workflow Efficiency in Media Production",
      type: "Case Study Collection",
      date: "December 2024",
      description: "Real-world examples of how leading media companies have optimized their production workflows.",
      downloadable: true,
    },
  ]

  const brandAssets = [
    {
      id: "logo-primary",
      title: "Primary Logo",
      thumbnail: "/placeholder.svg?height=200&width=200",
      formats: ["PNG", "SVG", "EPS"],
    },
    {
      id: "logo-monochrome",
      title: "Monochrome Logo",
      thumbnail: "/placeholder.svg?height=200&width=200",
      formats: ["PNG", "SVG", "EPS"],
    },
    {
      id: "product-screenshots",
      title: "Product Screenshots",
      thumbnail: "/placeholder.svg?height=200&width=200",
      formats: ["PNG", "JPG"],
    },
    {
      id: "brand-guidelines",
      title: "Brand Guidelines",
      thumbnail: "/placeholder.svg?height=200&width=200",
      formats: ["PDF"],
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Media Hub
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-xl text-slate-800 dark:text-slate-200 max-w-3xl mx-auto">
            Stay updated with the latest news, resources, and media from 1Play Global.
          </p>
        </motion.div>

        <Tabs defaultValue="press" onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="press">Press</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="brand">Brand Assets</TabsTrigger>
          </TabsList>

          {/* Press Section */}
          <TabsContent value="press">
            {pressReleases.filter((item) => item.featured).map((featured) => (
              <motion.div key={featured.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <Image src={featured.image} alt={featured.title} fill className="object-cover" />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <Badge className="w-fit mb-4 bg-purple-500 hover:bg-purple-600">Featured</Badge>
                      <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{featured.title}</h2>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">{featured.date}</p>
                      <p className="text-slate-600 dark:text-slate-400">{featured.excerpt}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Press Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressReleases.filter((item) => !item.featured).map((item, index) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * index }}>
                  <Card className="h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 hover:shadow-lg group">
                    <CardHeader>
                      <div className="mb-4">
                        <Newspaper className="h-8 w-8 text-purple-400" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-purple-400 transition-colors dark:text-white">{item.title}</CardTitle>
                      <CardDescription className="text-slate-700 dark:text-slate-400">{item.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{item.excerpt}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Videos Section */}
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <motion.div key={video.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * index }}>
                  <Link href={`/media-hub/videos/${video.id}`}>
                    <Card className="h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 group overflow-hidden">
                      <div className="relative">
                        <Image src={video.thumbnail} alt={video.title} width={600} height={400} className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-purple-500/80 flex items-center justify-center group-hover:bg-purple-600/80 transition-colors">
                            <Play className="h-8 w-8 text-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">{video.duration}</div>
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-cyan-500 hover:bg-cyan-600">{video.category}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg group-hover:text-purple-400 transition-colors dark:text-white">{video.title}</CardTitle>
                        <CardDescription className="text-slate-700 dark:text-slate-400">{video.date}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Resources Section */}
          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {resources.map((resource, index) => (
                <motion.div key={resource.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * index }}>
                  <Card className="h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <FileText className="h-8 w-8 text-purple-400" />
                        <Badge variant="outline">{resource.type}</Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-purple-400 transition-colors dark:text-white">{resource.title}</CardTitle>
                      <CardDescription className="text-slate-700 dark:text-slate-400">{resource.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 dark:text-slate-400 text-sm">{resource.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      {resource.downloadable && (
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/media-hub/resources">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                  View All Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Brand Section */}
          <TabsContent value="brand">
  <div className="max-w-3xl mx-auto mb-12">
    <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-900 dark:text-white">Brand Assets</CardTitle>
        <CardDescription>
          <p className="text-slate-600 dark:text-slate-400">
            Official logos, product images, and brand guidelines for media use.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700 dark:text-slate-300 mb-6">
          These assets are available for use by media, partners, and customers in accordance with our brand guidelines.
          For any specific requests or questions, please contact our marketing team at
          <span className="underline ml-1">marketing@1playglobal.com</span>.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {brandAssets.map((asset) => (
            <div key={asset.id} className="text-center">
              <div className="bg-slate-100 dark:bg-slate-700 rounded-md overflow-hidden mb-2 aspect-square relative">
                <Image
                  src={asset.thumbnail || "/placeholder.svg"}
                  alt={asset.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-1">{asset.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">{asset.formats.join(", ")}</p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white">
          <Download className="mr-2 h-4 w-4" />
          Download Complete Media Kit
        </Button>
      </CardFooter>
    </Card>

    <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-900 dark:text-white">Brand Guidelines</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700 dark:text-slate-300 mb-6">
          Our brand guidelines provide detailed information on how to properly use our logos, colors, typography, and
          other brand elements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-lg text-slate-800 dark:text-white">Logo Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-400">
                Guidelines for proper logo placement, sizing, and clearance space.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="text-sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Guidelines
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-lg text-slate-800 dark:text-white">Color Palette</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-400">
                Official brand colors with HEX, RGB, and CMYK values.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="text-sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Guidelines
              </Button>
            </CardFooter>
          </Card>
        </div>
      </CardContent>
    </Card>
  </div>
</TabsContent>


        </Tabs>
      </div>
    </div>
  )
}