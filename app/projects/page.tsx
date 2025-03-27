"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Github, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ProjectsPage() {
  // State to track which projects are expanded
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({})
  // State for search query
  const [searchQuery, setSearchQuery] = useState("")
  // State for animation
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Toggle expansion for a specific project
  const toggleProject = (index: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const projects = [
    {
      title: "Instagram Automation",
      description: "Allows to connect to your instagram account given password and email and act automatically.",
      longDescription:
        "Currently is used for listening to configured DMs for auto-uploading instagram reels. Mainly focused on personal use and not(although possible) for botting. Able to run through your computer as is is masked as a phone in order to allow to send to phone specific Instagram APIs, which were gathered through package snooping on my personal phone. Encrypts the messages with the instagram public key with AES and with the user data. It is able to be configured to which users' DMs to \"listen\" to. Currently developing it's front-end with Flutter.",
      challenges: [
        {
          name: "Authentication",
          description:
            "The intial login API uses public security key which it send with the request. The problem was to retrace it's foot steps and create a request that will pass as a genuine authentication request, I spent 2 days on this detail :)",
        },
        {
          name: "Behaviour",
          description:
            "Because of this programs nature the account to which it is connected is commonly marked as a bot. Currently developing an AI which will behave in a human pattern to send out requests which won't mark the account as a bot ",
        },
      ],
      tags: ["TypeScript", "Node.js", "Authentication", "Encryption"],
      link: "",
      image: "/placeholder.svg?height=300&width=600", // Using a placeholder until we have the actual SVG
    },
    {
      title: "CV Aggregation and Managing",
      description: "Full-stack web app for finding best fitting candidates for you.",
      longDescription:
        "After logging in with Google and granting advanced permmisions to access the Google Drive, Gmail, and Google Contacts, the program scans the Gmail inbox for possible CVs. After promplty analyzing them with an NLP model written by Infoneto it stores the data about each candidate. Storing the information with FTS5 SQL for later searching for candidates, the searching and indexing was written by me, and storing the CV itself in a Google Drive folder and additional JSON file for the candidates' system specific information and storing the candidates' contact information in the user's Google Contacts. After that allows to search for the candidates and label them accordingly, using Google Contacts API.",
      challenges: [
        {
          name: "Google Contacts",
          description:
            "Sadly, Google's contacts API is written with a major flaw. It cannot distict well between users. So, in case where the user is logged in with multiple account you cannot robustly link the candidate to a user's contact in the contanct book.",
        },
      ],
      tags: ["ASP.NET", "FlameRobin SQL", "SQL FTS5", "Google APIs", "Webpm"],
      link: "",
      image: "/placeholder.svg?height=300&width=600", // Using a placeholder until we have the actual SVG
    },
    {
      title: "Web Scraper",
      description: "Web scraper for specific sites",
      longDescription:
        "A custom made scraper tool for information aggregation and analysis. Can access sites with Selenium or with custom HTTP requests to access the websites' pages and APIs. On certain sites I was able, after a deep dive, to uncover the sites' more \"private\" APIs and thus allowed me to scrape information efficiently.",
      challenges: [
        {
          name: "Runtime",
          description:
            "Due to the large amount of data it can take a couple hours to complete the scraping if basic methods are used, A.K.A - Selenium or basic HTTP Reqeusts. But, better efficiency was achieved when I found loopholes that allowed me to directly access the sites' information pool.",
        },
      ],
      tags: ["C#", "Selenium", "API", "Scrape Blockers Bypass"],
      link: "",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "TScrape",
      description: "A Telegram Scraping tool for any configuration",
      longDescription:
        "A custom made scraper tool for inforamtion aggregation and analysis. Planned for use in news aggragation and trade analysis of open trading channels.",
      challenges: [
        {
          name: "MTProto",
          description:
            "Telegram uses private servers to load balance it's traffic and additionally a custom protocol(MTProto) to pass information efficiently. This, combined with poor documentation of the protocol(MTProto) resulted in a long and tedious read-through the Telegram's docs and experiments. Although successful, proved to be very difficult.",
        },
      ],
      tags: ["C++", "WebSockets", "TL", "PostgreSQL", "IMGui"],
      link: "",
      image: "/placeholder.svg?height=300&width=600", // Using a placeholder until we have the actual SVG
    },
    {
      title: "Charity Finder",
      description: "Web Application that helps people with disabilities to find a charity suited for them",
      longDescription:
        'This project is still in development\nThe program allows the users to insert their needs and their situation, based on that the application looks up a suited charity that can help them.\nThe program is currently being tested on Google Run and it\'s Cloud SQL and it is an Docker Image that connects with a proxy to that Cloud. The testing program is currently written in ASP.NET but I am planning to migrate to NextJS and TypeScript. The data is collected from the official Israeli site which has data about all the Non-Profit companies in Israel, the data is collected via a tool I wrote and is lsited in the projects under the name "Web Scraper".',
      challenges: [
        {
          name: "Information Gathering",
          description:
            "The first problem that occured was the gathering information of said charities. Although the site offers extensive information about them the gathering and analisys took up a lot of time. To improve the runtime, I took a deep dive into the site architecture and it's outgoing requests. With it, I found certain vulnerabilities, which have been reported to the Department of Cyber-security of Israel, and some minor of them allowed me to gather information much more efficiently",
        },
        {
          name: "Docker and Cloud SQL",
          description:
            "The other challenge was connecting the Docker Image to Google's Clound SQL, the main cause being poor documentation of the service.",
        },
      ],
      tags: ["ASP.NET", "NextJS", "TypeScript", "Google Services", "REST API", "PostgreSQL", "Security"],
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio website built with modern web technologies.",
      longDescription:
        "A personal portfolio website showcasing projects, skills, and contact information. Built with Next.js and Tailwind CSS for a responsive, modern design. Features include dark mode support, responsive layout, and optimized performance.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
      link: "https://github.com/kirilchik17/portfolio",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Watchdog Program",
      description: "Watchdog program designed to keep a multi-program system running without issus",
      longDescription:
        "My first ever project that I created when I started working at Infoneto at 17. The program, when first ran and configured, modified the registry for it's purposes and ran as a service to monitor the configured programs. At any error or freezing acted accordinlgly to get the program running and back to it's feet.",
      challenges: [
        {
          name: "Exceution",
          description:
            "As my first project at the company I was tested for independence and learning ability, I was allowed to ask question but ultimatly was alone on it, including the research, architecture and programming. Yet, I proved myself to be an extremlly fast learner and finished the program in 3 days altough being given 2 weeks.",
        },
      ],
      tags: [".NET", "Workers", "Registry", "Real-time", "Windows"],
      link: "https://github.com/kirilchik17",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "CV Web Extension",
      description: "Extension for the CV Managing program",
      longDescription:
        "An interacive data visualization extension that is connected to the main Infoneto program, allowing you to see candidates that already exist in the system and retrive their information on social media.",
      tags: ["JavaScript", "FlameRobin", "REST API", "Data Visualization", "Interactive"],
      image: "/placeholder.svg?height=300&width=600",
    },
  ]

  // Filter projects based on search query
  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects

    const query = searchQuery.toLowerCase().trim()
    return projects.filter((project) => project.tags.some((tag) => tag.toLowerCase().includes(query)))
  }, [projects, searchQuery])

  // Get all unique tags for suggestions
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    projects.forEach((project) => {
      project.tags.forEach((tag) => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [projects])

  return (
    <div className="container py-12 bg-gradient-subtle">
      <div
        className={`flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground">A showcase of my technical projects and contributions.</p>
        </div>
      </div>

      {/* Search Bar */}
      <div
        className={`my-8 transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        style={{ transitionDelay: "200ms" }}
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by technology or skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10 border-primary/20 focus-visible:ring-primary/30 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Tag suggestions */}
        <div className="mt-4 flex flex-wrap gap-2">
          {allTags.map((tag, index) => (
            <Badge
              key={tag}
              variant={searchQuery.toLowerCase() === tag.toLowerCase() ? "default" : "outline"}
              className={`cursor-pointer hover:bg-primary/20 transition-all duration-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
              onClick={() => setSearchQuery(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* No results message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 animate-fade-in">
          <h3 className="text-lg font-medium">No projects found</h3>
          <p className="text-muted-foreground mt-2">
            No projects match the search term "{searchQuery}". Try a different technology or skill.
          </p>
          <Button variant="outline" onClick={() => setSearchQuery("")} className="mt-4 gradient-border">
            Clear search
          </Button>
        </div>
      )}

      {/* Projects list */}
      <div className="grid gap-8 py-10">
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            className={`overflow-hidden card-hover-effect transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${400 + index * 100}ms` }}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="mt-1">{project.description}</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleProject(index)}
                  aria-label={expandedProjects[index] ? "Collapse project details" : "Expand project details"}
                  className="rounded-full hover:bg-primary/10 transition-colors"
                >
                  {expandedProjects[index] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </Button>
              </div>
            </CardHeader>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedProjects[index] ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg text-gradient">Overview</h3>
                    <p className="text-muted-foreground mt-2">{project.longDescription}</p>
                  </div>

                  {project.challenges && project.challenges.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-lg text-gradient">Challenges</h3>
                      <div className="space-y-4 mt-2">
                        {project.challenges.map((challenge, idx) => (
                          <div
                            key={idx}
                            className="border rounded-lg p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
                          >
                            <h4 className="font-medium">{challenge.name}</h4>
                            <p className="text-muted-foreground text-sm mt-1">{challenge.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="font-semibold text-lg text-gradient">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant={searchQuery.toLowerCase() === tag.toLowerCase() ? "default" : "secondary"}
                          className="cursor-pointer transition-colors hover:bg-primary/20"
                          onClick={() => setSearchQuery(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.link && (
                    <Button variant="outline" size="sm" className="gradient-border" asChild>
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </Link>
                    </Button>
                  )}
                </div>

                <div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="aspect-video w-full rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow"
                  />
                </div>
              </CardContent>
            </div>

            <CardFooter className="flex justify-between border-t p-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant={searchQuery.toLowerCase() === tag.toLowerCase() ? "default" : "outline"}
                    className="cursor-pointer transition-colors hover:bg-primary/20"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && <Badge variant="outline">+{project.tags.length - 3}</Badge>}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleProject(index)}
                className="flex items-center gap-1 hover:bg-primary/10 transition-colors"
              >
                {expandedProjects[index] ? "Show Less" : "Show More"}
                {expandedProjects[index] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button asChild variant="outline" className="gradient-border">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

