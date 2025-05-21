"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Check, Quote, BarChart, Building, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for case studies
const caseStudiesData = {
  "streamflex-media": {
    title: "Global Streaming Platform Overhaul",
    client: "StreamFlex Media",
    description:
      "Redesigned the entire backend infrastructure for a major streaming service, resulting in 40% faster load times and 25% reduction in buffering.",
    fullDescription: `
      StreamFlex Media, a global streaming platform with over 50 million subscribers, was facing significant challenges with their existing infrastructure. As their user base grew, they experienced increasing issues with load times, buffering, and system reliability during peak viewing hours.

      Our team conducted a comprehensive analysis of their existing architecture and identified several bottlenecks and inefficiencies. We proposed a complete overhaul of their backend infrastructure, focusing on scalability, performance, and reliability.

      The solution included:
      
      - Migration to a microservices architecture for improved scalability
      - Implementation of a global CDN with edge caching
      - Redesigned database architecture with optimized query patterns
      - Real-time analytics and monitoring system
      - Automated scaling based on demand patterns
    `,
    image: "/bro.png?height=600&width=800",
    logo: "/stream.png?height=200&width=200",
    tags: ["Streaming", "Infrastructure", "Performance"],
    industry: "Broadcast & OTT",
    solution: "Streaming & Broadcasting",
    results: [
      "40% faster load times across all devices",
      "25% reduction in buffering incidents",
      "60% improvement in system reliability during peak hours",
      "35% reduction in infrastructure costs",
      "Ability to handle 3x more concurrent viewers",
    ],
    testimonial: {
      quote:
        "The infrastructure overhaul delivered by 1Play Global has transformed our platform's performance. Our subscribers are enjoying a much smoother experience, and we've seen a significant reduction in support tickets related to streaming issues. The scalability of the new system has also allowed us to expand into new markets with confidence.",
      author: "Sarah Johnson",
      position: "CTO, StreamFlex Media",
    },
    stats: [
      { label: "Faster Load Times", value: "40%" },
      { label: "Reduced Buffering", value: "25%" },
      { label: "Cost Savings", value: "35%" },
      { label: "User Satisfaction", value: "92%" },
    ],
    relatedCaseStudies: ["global-sports", "filmverse-studios"],
  },
  "filmverse-studios": {
    title: "AI-Powered Content Recommendation Engine",
    client: "FilmVerse Studios",
    description:
      "Implemented a machine learning algorithm that increased viewer engagement by 35% and subscription retention by 18%.",
    fullDescription: `
      FilmVerse Studios, a leading production company with a vast library of content, wanted to improve their content discovery system to better engage viewers and reduce churn. Their existing recommendation system was based on simple genre matching and wasn't effectively showcasing their extensive catalog.

      We developed a sophisticated AI-powered recommendation engine that analyzes viewing patterns, content metadata, and user preferences to deliver highly personalized content suggestions. The system continuously learns and adapts based on user interactions, improving its accuracy over time.

      The solution included:
      
      - Custom machine learning models trained on viewing history
      - Natural language processing for content analysis
      - Multi-dimensional similarity matching
      - A/B testing framework for recommendation strategies
      - Real-time personalization engine
    `,
    image: "/cont.png?height=600&width=800",
    logo: "/aids.png?height=200&width=200",
    tags: ["AI", "Machine Learning", "Content Discovery"],
    industry: "Film & Entertainment",
    solution: "AI & Data Solutions",
    results: [
      "35% increase in viewer engagement",
      "18% improvement in subscription retention",
      "42% increase in content library exploration",
      "27% reduction in time to find relevant content",
      "15% increase in average viewing session duration",
    ],
    testimonial: {
      quote:
        "The AI recommendation engine has been a game-changer for our platform. User engagement metrics have skyrocketed since implementation, and we're seeing viewers discover content from our back catalog that was previously overlooked. The system's ability to learn and adapt to changing viewer preferences has been particularly impressive.",
      author: "Michael Chen",
      position: "Head of Technology, FilmVerse Studios",
    },
    stats: [
      { label: "Viewer Engagement", value: "↑35%" },
      { label: "Retention Rate", value: "↑18%" },
      { label: "Content Discovery", value: "↑42%" },
      { label: "Session Duration", value: "↑15%" },
    ],
    relatedCaseStudies: ["streamflex-media", "news-network"],
  },
  "global-sports": {
    title: "Live Sports Broadcasting Solution",
    client: "Global Sports Network",
    description:
      "Developed a real-time graphics and replay system for major sporting events, reducing production costs by 30%.",
    fullDescription: `
      Global Sports Network, a major broadcaster of international sporting events, was looking to modernize their production workflow for live sports coverage. Their existing system required extensive on-site equipment and large production teams, resulting in high operational costs and limited flexibility.

      We designed and implemented a comprehensive live sports broadcasting solution that leverages cloud technology, automated graphics generation, and remote production capabilities. This allowed them to significantly reduce on-site equipment and personnel while enhancing the quality and variety of their broadcast output.

      The solution included:
      
      - Cloud-based production platform with remote access
      - AI-powered automated highlight generation
      - Real-time graphics system with data integration
      - Multi-angle replay system with instant access
      - Remote commentary and production tools
    `,
    image: "/hcli.png?height=600&width=800",
    logo: "/hcli.png?height=200&width=200",
    tags: ["Live Production", "Sports", "Broadcasting"],
    industry: "Sports & Live Events",
    solution: "Media Production Tools",
    results: [
      "30% reduction in production costs",
      "50% smaller on-site crew requirement",
      "75% faster highlight generation",
      "40% increase in replay angles available",
      "Ability to cover 3x more events simultaneously",
    ],
    testimonial: {
      quote:
        "The live sports broadcasting solution has revolutionized how we cover major sporting events. We're now able to deliver more dynamic and engaging content with a fraction of the on-site resources previously required. The automated highlight generation has been particularly valuable for our social media and digital platforms.",
      author: "James Rodriguez",
      position: "Director of Broadcast Operations, Global Sports Network",
    },
    stats: [
      { label: "Cost Reduction", value: "30%" },
      { label: "Crew Reduction", value: "50%" },
      { label: "Production Speed", value: "↑75%" },
      { label: "Event Coverage", value: "↑300%" },
    ],
    relatedCaseStudies: ["streamflex-media", "news-network"],
  },
  "news-network": {
  title: "News Production Workflow Transformation",
  client: "24/7 News Network",
  description:
    "Streamlined the news production workflow, enabling faster breaking news coverage and reducing time-to-air by 50%.",
  fullDescription: `
    24/7 News Network faced challenges in meeting the demands of real-time news reporting across multiple platforms. Their legacy workflow involved manual handoffs and siloed systems, leading to delays and inefficiencies.

    Our team implemented a modern content management system designed specifically for live newsroom environments. We automated content routing, integrated newsroom control systems, and optimized media asset ingestion and tagging.

    Key features included:
    
    - Live ingest and automated transcoding
    - Real-time collaboration and approvals
    - AI-assisted metadata tagging
    - Seamless integration with playout and digital publishing
    - Performance analytics dashboard
  `,
  image: "/bro.png?height=600&width=800",
  logo: "/stream.png?height=200&width=200",
  tags: ["News", "Workflow", "Efficiency"],
  industry: "Broadcast & OTT",
  solution: "Content Management Systems",
  results: [
    "50% reduction in time-to-air for breaking news",
    "Increased newsroom collaboration efficiency",
    "Reduced manual tasks by 40%",
    "Faster digital publishing turnaround",
    "Improved metadata quality and searchability",
  ],
  testimonial: {
    quote:
      "The new CMS transformed our ability to break news quickly and accurately. Editorial coordination has never been smoother.",
    author: "Ritika Sen",
    position: "News Director, 24/7 News Network",
  },
  stats: [
    { label: "Time-to-Air Improvement", value: "↑50%" },
    { label: "Manual Task Reduction", value: "↓40%" },
    { label: "Collaboration Efficiency", value: "↑35%" },
  ],
  relatedCaseStudies: ["filmverse-studios", "streamflex-media"],
},

"education-platform": {
  title: "Interactive Learning Platform",
  client: "Global Education Initiative",
  description:
    "Built a comprehensive video-based learning platform with interactive elements that increased student engagement by 45%.",
  fullDescription: `
    The Global Education Initiative sought to enhance virtual learning outcomes for high school and university-level students across regions.

    We designed a feature-rich platform supporting on-demand video, real-time quizzes, gamified progression, and educator-student messaging — optimized for low-bandwidth regions.

    Core components:
    
    - Video-based courses with adaptive bitrate streaming
    - Interactive quizzes with instant feedback
    - Student engagement analytics
    - Educator dashboards and content creation tools
    - Mobile-first UI/UX design
  `,
  image: "/elearn.png?height=600&width=800",
  logo: "/moe.png?height=200&width=200",
  tags: ["Education", "Interactive", "Engagement"],
  industry: "Education & eLearning",
  solution: "Custom Software Development",
  results: [
    "45% increase in engagement metrics",
    "30% more course completions",
    "Real-time feedback improved retention",
    "Expanded access across rural areas",
  ],
  testimonial: {
    quote:
      "Our students are more engaged than ever. The interactive tools made a measurable difference in learning outcomes.",
    author: "Dr. Michelle Tan",
    position: "Program Director, GEI",
  },
  stats: [
    { label: "Engagement Increase", value: "↑45%" },
    { label: "Course Completion", value: "↑30%" },
    { label: "Access Expansion", value: "↑60%" },
  ],
  relatedCaseStudies: ["filmverse-studios", "advertising-agency"],
},

"advertising-agency": {
  title: "Creative Asset Management Solution",
  client: "Spark Creative Agency",
  description:
    "Implemented a centralized asset management system that reduced production time for campaigns by 35% and improved collaboration.",
  fullDescription: `
    Spark Creative Agency needed a unified platform to manage media assets across multiple teams, clients, and campaigns.

    We delivered a scalable content management system with granular access control, intelligent search, and campaign-based tagging.

    Delivered features:
    
    - Drag-and-drop interface for campaign asset organization
    - AI-based duplicate detection and version control
    - Real-time approvals and comments
    - Integration with Adobe Creative Cloud
    - Audit trails and activity logs
  `,
  image: "/adv.png?height=600&width=800",
  logo: "/adv.png?height=200&width=200",
  tags: ["Advertising", "Asset Management", "Collaboration"],
  industry: "Advertising & Agencies",
  solution: "Content Management Systems",
  results: [
    "35% faster campaign delivery",
    "Improved asset reusability",
    "Fewer versioning conflicts",
    "Increased collaboration between teams",
  ],
  testimonial: {
    quote:
      "Our teams can now work seamlessly across campaigns. The asset system has paid off in both time and clarity.",
    author: "Anaya Chopra",
    position: "Operations Head, Spark Creative",
  },
  stats: [
    { label: "Production Speed", value: "↑35%" },
    { label: "Team Collaboration", value: "↑50%" },
    { label: "Asset Reuse", value: "↑40%" },
  ],
  relatedCaseStudies: ["education-platform", "news-network"],
},

}
export default function CaseStudyPage() {
  const params = useParams()
  const slug = params.slug as string
  const [caseStudy, setCaseStudy] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (slug && caseStudiesData[slug as keyof typeof caseStudiesData]) {
      setCaseStudy(caseStudiesData[slug as keyof typeof caseStudiesData])
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

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
        <p className="text-muted-foreground mb-6">The case study you're looking for doesn't exist or has been moved.</p>
        <Link href="/case-studies">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <Link
          href="/case-studies"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-purple-400 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Case Studies
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center mb-6">
              <Badge className="mr-2 bg-purple-500 hover:bg-purple-600">{caseStudy.client}</Badge>
              <Badge variant="outline">{caseStudy.industry}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              {caseStudy.title}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6" />
            <p className="text-xl text-foreground mb-6">{caseStudy.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
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
                src={caseStudy.image || "/placeholder.svg"}
                alt={caseStudy.title}
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Challenge & Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line">{caseStudy.fullDescription}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl">Client Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-muted rounded-md overflow-hidden mr-4">
                    <Image
                      src={caseStudy.logo || "/placeholder.svg"}
                      alt={caseStudy.client}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{caseStudy.client}</h3>
                    <p className="text-muted-foreground">{caseStudy.industry}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Building className="h-5 w-5 text-purple-400 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium">Industry</p>
                      <p className="text-muted-foreground">{caseStudy.industry}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-cyan-400 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium">Project Duration</p>
                      <p className="text-muted-foreground">6 months</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BarChart className="h-5 w-5 text-purple-400 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium">Solution</p>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Key Results</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {caseStudy.results.map((result: string, index: number) => (
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
                      <span className="text-foreground">{result}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {caseStudy.stats.map((stat: { label: string; value: string }, index: number) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <Card className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <Quote className="h-12 w-12 text-purple-400 opacity-50" />
                </div>
                <div>
                  <p className="text-xl italic mb-6">"{caseStudy.testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-lg">{caseStudy.testimonial.author}</p>
                    <p className="text-muted-foreground">{caseStudy.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Related Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudy.relatedCaseStudies.map((relatedSlug: string) => {
              const related = caseStudiesData[relatedSlug as keyof typeof caseStudiesData]
              if (!related) return null

              return (
                <Card key={relatedSlug} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-48 md:h-auto">
                      <Image
                        src={related.image || "/placeholder.svg"}
                        alt={related.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <Badge className="mb-2">{related.client}</Badge>
                        <h3 className="text-lg font-bold mb-2">{related.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{related.description}</p>
                      </div>
                      <Link href={`/case-studies/${relatedSlug}`}>
                        <Button variant="outline" className="w-full">
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to achieve similar results?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact our team today to discuss how we can help you transform your media workflow.
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