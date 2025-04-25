"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
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
    console.log("Form submitted:", formState)
    setFormState({
      name: "",
      email: "",
      company: "",
      interest: "",
      message: "",
    })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="min-h-screen pt-24 pb-16 dark:bg-black dark:text-slate-300">
      <div className="container mx-auto px-4">
        <Link
          href="/"
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
            Contact Us
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Get in touch with our team to discuss how we can help transform your media production workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-100 dark:bg-slate-800 dark:border-slate-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-100 dark:bg-slate-800 dark:border-slate-700"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        value={formState.company}
                        onChange={handleInputChange}
                        className="bg-slate-100 dark:bg-slate-800 dark:border-slate-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">Area of Interest</Label>
                      <Select
                        value={formState.interest}
                        onValueChange={(value) => setFormState((prev) => ({ ...prev, interest: value }))}
                      >
                        <SelectTrigger className="bg-slate-100 dark:bg-slate-800 dark:border-slate-700">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent className="bg-white dark:bg-slate-800 dark:border-slate-700">
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
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      className="min-h-[120px] bg-slate-100 dark:bg-slate-800 dark:border-slate-700"
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>Reach out to us directly through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-full dark:bg-purple-600/20">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-slate-600 dark:text-slate-400">info@1playglobal.com</p>
                    <p className="text-slate-600 dark:text-slate-400">support@1playglobal.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full dark:bg-cyan-600/20">
                    <Phone className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
                    <p className="text-slate-600 dark:text-slate-400">+44 20 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-full dark:bg-purple-600/20">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Office Locations</h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-2">
                      <strong>Headquarters:</strong>
                      <br />
                      123 Tech Plaza, Suite 500
                      <br />
                      San Francisco, CA 94105, USA
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
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
    </div>
  )
}
