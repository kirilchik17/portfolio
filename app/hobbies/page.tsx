"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Flag, Github, Trophy } from "lucide-react"

export default function HobbiesPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const hobbies = [
    {
      title: "Competitive Programming",
      icon: <Code className="h-8 w-8" />,
      description:
        "Participating in coding competitions and algorithm challenges to sharpen my problem-solving skills.",
      longDescription:
        "I regularly participate in competitive programming contests on platforms like Codeforces, LeetCode, and HackerRank. These challenges help me improve my algorithmic thinking and problem-solving abilities under time constraints. I particularly enjoy dynamic programming and graph algorithm problems.",
      achievements: [
        "Reached Expert level on Codeforces",
        "Solved over 500 problems on LeetCode",
        "Participated in Google Code Jam and advanced to Round 2",
      ],
      platforms: ["Codeforces", "LeetCode", "HackerRank", "AtCoder", "Google Code Jam"],
    },
    {
      title: "Open Source Contributing",
      icon: <Github className="h-8 w-8" />,
      description: "Contributing to open source projects and learning from the global developer community.",
      longDescription:
        "I'm passionate about giving back to the developer community by contributing to open source projects. I focus on web development frameworks and security-related libraries, where I can apply my expertise. Contributing to open source has helped me improve my code quality, learn best practices, and collaborate with developers worldwide.",
      achievements: [
        "Contributed to several popular React libraries",
        "Fixed security vulnerabilities in open source packages",
        "Maintained a small utility library with over 100 stars",
      ],
      projects: ["React ecosystem", "Security tools", "Developer utilities"],
    },
    {
      title: "Capture The Flag (CTF)",
      icon: <Flag className="h-8 w-8" />,
      description: "Participating in cybersecurity CTF competitions to improve my security skills in a practical way.",
      longDescription:
        "Capture The Flag (CTF) competitions are my way of applying cybersecurity knowledge in practical scenarios. These competitions involve solving security challenges across various categories like web exploitation, cryptography, reverse engineering, and forensics. CTFs have helped me develop a security-first mindset that I apply to all my development work.",
      achievements: [
        "Ranked in top 10% in several international CTFs",
        "Specialized in web security and cryptography challenges",
        "Organized a CTF event for university students",
      ],
      categories: ["Web Exploitation", "Cryptography", "Reverse Engineering", "Forensics", "Binary Exploitation"],
    },
    {
      title: "Hackathons",
      icon: <Trophy className="h-8 w-8" />,
      description: "Building innovative projects under time constraints and collaborating with diverse teams.",
      longDescription:
        "Hackathons provide an exciting environment to build something new in a short timeframe. I enjoy the challenge of rapidly prototyping ideas and working with cross-functional teams. Hackathons have taught me to prioritize features, make quick decisions, and present technical concepts effectively to judges and audiences.",
      achievements: [
        "Won 'Best Security Implementation' at a national hackathon",
        "Built a privacy-focused social media prototype in 48 hours",
        "Mentored first-time hackathon participants",
      ],
      events: ["HackTechnion", "HackIDC", "MLH Hackathons"],
    },
  ]

  return (
    <div className="container py-12 bg-gradient-subtle">
      <div
        className={`mx-auto max-w-4xl space-y-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient">Hobbies & Interests</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            When I'm not coding for work or school, here's what keeps me busy.
          </p>
        </div>

        <div className="space-y-12">
          {hobbies.map((hobby, index) => (
            <Card
              key={index}
              className={`overflow-hidden card-hover-effect transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="rounded-full bg-primary/10 p-2 text-primary animate-pulse-slow">{hobby.icon}</div>
                <div>
                  <CardTitle className="text-2xl">{hobby.title}</CardTitle>
                  <CardDescription>{hobby.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{hobby.longDescription}</p>

                <div>
                  <h3 className="font-semibold mb-2 text-gradient">Achievements</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {hobby.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                {hobby.platforms && (
                  <div>
                    <h3 className="font-semibold mb-2 text-gradient">Platforms</h3>
                    <div className="flex flex-wrap gap-2">
                      {hobby.platforms.map((platform) => (
                        <Badge key={platform} variant="secondary" className="hover:bg-primary/20 transition-colors">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {hobby.projects && (
                  <div>
                    <h3 className="font-semibold mb-2 text-gradient">Project Focus</h3>
                    <div className="flex flex-wrap gap-2">
                      {hobby.projects.map((project) => (
                        <Badge key={project} variant="secondary" className="hover:bg-primary/20 transition-colors">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {hobby.categories && (
                  <div>
                    <h3 className="font-semibold mb-2 text-gradient">Challenge Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {hobby.categories.map((category) => (
                        <Badge key={category} variant="secondary" className="hover:bg-primary/20 transition-colors">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {hobby.events && (
                  <div>
                    <h3 className="font-semibold mb-2 text-gradient">Notable Events</h3>
                    <div className="flex flex-wrap gap-2">
                      {hobby.events.map((event) => (
                        <Badge key={event} variant="secondary" className="hover:bg-primary/20 transition-colors">
                          {event}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`flex justify-center mt-12 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "800ms" }}
        >
          <Button asChild variant="outline" className="gradient-border">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

