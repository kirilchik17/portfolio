"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="container py-12 bg-gradient-subtle">
      <div
        className={`grid gap-12 lg:grid-cols-2 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About <span className="text-gradient">Me</span>
          </h1>
          <div className="mt-6 space-y-6 text-lg text-muted-foreground">
            <p>
              Hello! I'm Kirill Chigir, a Computer Science student at The Technion with a passion for full-stack
              development and cybersecurity.
            </p>
            <p>
              My journey in technology began with a curiosity about how websites work, which led me to explore the world
              of web development. As I delved deeper, I became fascinated by the security aspects of web applications,
              which sparked my interest in cybersecurity.
            </p>
            <p>
              I enjoy building secure, scalable web applications that solve real-world problems. My technical toolkit
              includes modern JavaScript frameworks, backend technologies, and security best practices.
            </p>
            <p>
              When I'm not coding, you can find me participating in CTF competitions, contributing to open source
              projects, or solving algorithmic challenges to sharpen my problem-solving skills.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="relative overflow-hidden group" asChild>
              <Link href="/projects">
                <span className="relative z-10">View My Projects</span>
                <span className="absolute inset-0 bg-primary opacity-100 group-hover:opacity-80 transition-opacity"></span>
              </Link>
            </Button>
            <Button variant="outline" className="gradient-border" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div
          className={`space-y-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <Card className="card-hover-effect">
            <CardHeader>
              <CardTitle className="text-gradient">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">BSc in Computer Science</h3>
                <p className="text-sm text-muted-foreground">The Technion - Israel Institute of Technology</p>
                <p className="text-sm text-muted-foreground">2020 - Present</p>
              </div>
              <div>
                <h3 className="font-semibold">Relevant Coursework</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                    Data Structures
                  </Badge>
                  <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                    Algorithms
                  </Badge>
                  <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                    Computer Networks
                  </Badge>
                  <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                    Operating Systems
                  </Badge>
                  <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                    Database Systems
                  </Badge>
                  <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                    Web Development
                  </Badge>
                  <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                    Computer Security
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card
            className={`card-hover-effect transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <CardHeader>
              <CardTitle className="text-gradient">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Languages</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      JavaScript
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      Python
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      HTML/CSS
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      SQL
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      C++
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Frontend</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      React
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      Tailwind CSS
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      Redux
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      Responsive Design
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Backend</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      Node.js
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      Express
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      MongoDB
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      PostgreSQL
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      REST APIs
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      GraphQL
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Security</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      Web Security
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      Authentication
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      Encryption
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      OWASP
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      Penetration Testing
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Tools & Others</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      Git
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      Docker
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      CI/CD
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      AWS
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      Vercel
                    </Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                      Agile/Scrum
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div
        className={`flex justify-center mt-12 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: "600ms" }}
      >
        <Button asChild variant="outline" className="gradient-border">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

