"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin } from "lucide-react"

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="container py-12 bg-gradient-subtle">
      <div
        className={`mx-auto max-w-4xl space-y-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient">Contact Me</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card
            className={`card-hover-effect transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <CardHeader>
              <CardTitle className="text-gradient">Contact Information</CardTitle>
              <CardDescription>Here's how you can reach me</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-muted-foreground" />
                <Link
                  href="https://github.com/kirilchik17"
                  className="hover:underline hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/kirilchik17
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-muted-foreground" />
                <Link
                  href="https://www.linkedin.com/in/kirill-chigir-b9b701bb"
                  className="hover:underline hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/kirill-chigir-b9b701bb
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`card-hover-effect transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <CardHeader>
              <CardTitle className="text-gradient">Connect With Me</CardTitle>
              <CardDescription>I prefer to be contacted through these platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm text-muted-foreground">
                I prefer to be contacted through LinkedIn or GitHub messages rather than email.
              </p>
              <div className="flex flex-col gap-4">
                <Button className="relative overflow-hidden group w-full" asChild>
                  <Link
                    href="https://www.linkedin.com/in/kirill-chigir-b9b701bb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    <span className="relative z-10">Connect on LinkedIn</span>
                    <span className="absolute inset-0 bg-primary opacity-100 group-hover:opacity-80 transition-opacity"></span>
                  </Link>
                </Button>
                <Button variant="outline" className="gradient-border w-full" asChild>
                  <Link href="https://github.com/kirilchik17" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Follow on GitHub
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div
          className={`flex justify-center mt-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <Button asChild variant="outline" className="gradient-border">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

