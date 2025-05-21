"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
    // Reset form
    setFormState({
      name: "",
      email: "",
      company: "",
      interest: "",
      message: "",
    })
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl text-red-600 md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-slate-200 to-cyan-500 dark:text-white"
          >
            Contact Us
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-red-600 via-slate-200 to-cyan-500"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Get in touch with our team to discuss how we can help transform your media production workflow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white dark:bg-slate-900/50 border-slate-800 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl dark:text-white">Get in Touch</CardTitle>
                <CardDescription className="text-slate-700 dark:text-slate-300">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="dark:text-white">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-800 dark:bg-slate-800 border-slate-700 dark:border-slate-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="dark:text-white">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-800 dark:bg-slate-800 border-slate-700 dark:border-slate-700"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="dark:text-white">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        value={formState.company}
                        onChange={handleInputChange}
                        className="bg-slate-800 dark:bg-slate-800 border-slate-700 dark:border-slate-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest" className="dark:text-white">Area of Interest</Label>
                      <Select
                        value={formState.interest}
                        onValueChange={(value) => setFormState((prev) => ({ ...prev, interest: value }))}
                      >
                        <SelectTrigger className="bg-slate-800 dark:bg-slate-800 border-slate-700 dark:border-slate-700 text-slate-500">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="media-production">Media Production Tools</SelectItem>
                          <SelectItem value="streaming">Streaming & Broadcasting</SelectItem>
                          <SelectItem value="content-management">Content Management</SelectItem>
                          <SelectItem value="ai-data">AI & Data Solutions</SelectItem>
                          <SelectItem value="custom-software">Custom Software</SelectItem>
                          <SelectItem value="system-integration">System Integration</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="dark:text-white">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      className="min-h-[120px] bg-slate-800 dark:bg-slate-800 border-slate-700 dark:border-slate-700"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Card className="bg-white dark:bg-slate-900/50 border-slate-800 dark:border-slate-700 h-full">
              <CardHeader>
                <CardTitle className="text-2xl dark:text-white">Contact Information</CardTitle>
                <CardDescription className="text-slate-700 dark:text-slate-300">
                  Reach out to us directly through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 dark:text-white">Email</h4>
                    <p className="text-slate-700 dark:text-slate-300">info@1playglobal.com</p>
                    <p className="text-slate-700 dark:text-slate-300">support@1playglobal.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 dark:text-white">Phone</h4>
                    <p className="text-slate-700 dark:text-slate-300">+1 (555) 123-4567</p>
                    <p className="text-slate-700 dark:text-slate-300">+44 20 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 dark:text-white">Office Locations</h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">
                      <strong>Headquarters:</strong>
                      <br />
                      123 Tech Plaza, Suite 500
                      <br />
                      San Francisco, CA 94105, USA
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      <strong>APAC Office:</strong>
                      <br />
                      One Raffles Place, #10-01
                      <br />
                      Singapore 048616
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
