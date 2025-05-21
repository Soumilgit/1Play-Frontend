"use client"

import { useEffect, useRef } from "react"
import { useMobile } from "@/hooks/use-mobile"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useMobile()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const particleCount = isMobile ? 30 : 80

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 0.5
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const speedX = (Math.random() - 0.5) * 0.3
        const speedY = (Math.random() - 0.5) * 0.3

        // Create a color from red, white, and blue palette
        const colorChoice = Math.random()
        let r, g, b, alpha

        if (colorChoice < 0.33) {
          // Red
          r = 220 + Math.random() * 35
          g = Math.random() * 40
          b = Math.random() * 40
          alpha = Math.random() * 0.5 + 0.1
        } else if (colorChoice < 0.66) {
          // White/Light blue
          r = 220 + Math.random() * 35
          g = 220 + Math.random() * 35
          b = 240 + Math.random() * 15
          alpha = Math.random() * 0.4 + 0.1
        } else {
          // Blue
          r = Math.random() * 40
          g = Math.random() * 40
          b = 200 + Math.random() * 55
          alpha = Math.random() * 0.5 + 0.1
        }

        const color = `rgba(${r}, ${g}, ${b}, ${alpha})`
        particles.push({ x, y, size, speedX, speedY, color })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      // Draw connections between particles
      drawConnections()

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    const drawConnections = () => {
      const maxDistance = isMobile ? 100 : 150

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            // Reddish-blue (purple) connections
            const connectionColor = `rgba(120, 20, 180, ${0.1 * (1 - distance / maxDistance)})`

            ctx.beginPath()
            ctx.strokeStyle = connectionColor
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}
