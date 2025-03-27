import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, ExternalLink, Code, Shield, Server } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl text-gradient">
            Kirill Chigir
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/projects"
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#skills"
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/hobbies"
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Hobbies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-colors" asChild>
              <Link href="https://github.com/kirilchik17" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-colors" asChild>
              <Link href="https://www.linkedin.com/in/kirill-chigir-b9b701bb" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-subtle">
          <div className="absolute inset-0 bg-dots opacity-30"></div>
          <div className="container relative">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="animate-fade-in">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Full-Stack Developer & <span className="text-gradient">Cybersecurity</span> Enthusiast
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Computer Science student at The Technion with a passion for building secure, scalable web
                  applications.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button className="relative overflow-hidden group" asChild>
                    <Link href="/projects">
                      <span className="relative z-10">View My Projects</span>
                      <span className="absolute inset-0 bg-primary opacity-100 group-hover:opacity-80 transition-opacity"></span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="gradient-border" asChild>
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center animate-slide-in">
                <div className="relative h-80 w-80 overflow-hidden rounded-full bg-gradient-to-b from-primary/20 to-primary/5 flex items-center justify-center animate-float">
                  <span className="text-6xl">👨‍💻</span>
                  <div className="absolute inset-0 bg-grid opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="projects" className="container py-24 sm:py-32 bg-muted/30">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center animate-fade-in">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Projects</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              A showcase of my technical projects and contributions.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Instagram Automation"
              description="End-to-end encrypted messaging application with real-time updates."
              tags={["TypeScript", "Node.js", "Authentication"]}
              link="/projects"
            />
            <ProjectCard
              title="CV Aggregation"
              description="Full-stack web app for finding best fitting candidates for you."
              tags={["ASP.NET", "SQL", "Google APIs"]}
              link="/projects"
            />
            <ProjectCard
              title="Web Scraper"
              description="Web scraper for specific sites with bypass capabilities."
              tags={["C#", "Chromium", "API"]}
              link="/projects"
            />
            <ProjectCard
              title="TScrape"
              description="A Telegram Scraping tool for any configuration."
              tags={["C++", "WebSockets", "PostgreSQL"]}
              link="/projects"
            />
            <ProjectCard
              title="Portfolio Website"
              description="This responsive portfolio website built with modern web technologies."
              tags={["Next.js", "Tailwind CSS", "TypeScript"]}
              link="/projects"
            />
            <ProjectCard
              title="Watchdog Program"
              description="Watchdog program designed to keep a multi program system running."
              tags={[".NET", "Workers", "Windows"]}
              link="/projects"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Button className="relative overflow-hidden group" asChild>
              <Link href="/projects">
                <span className="relative z-10">View All Projects</span>
                <span className="absolute inset-0 bg-primary opacity-100 group-hover:opacity-80 transition-opacity"></span>
              </Link>
            </Button>
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="skills" className="container py-24 sm:py-32 bg-gradient-subtle">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center animate-fade-in">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Skills</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Technical expertise and competencies.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              title="Frontend Development"
              description="Building responsive, accessible, and performant user interfaces."
              icon={<Code className="h-10 w-10" />}
              skills={["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]}
            />
            <SkillCard
              title="Backend Development"
              description="Creating robust server-side applications and APIs."
              icon={<Server className="h-10 w-10" />}
              skills={["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]}
            />
            <SkillCard
              title="Cybersecurity"
              description="Implementing security best practices and vulnerability assessment."
              icon={<Shield className="h-10 w-10" />}
              skills={["Web Security", "Penetration Testing", "Authentication", "Encryption", "OWASP"]}
            />
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="hobbies" className="container py-24 sm:py-32 bg-muted/30">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center animate-fade-in">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Hobbies</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              When I'm not coding, you can find me...
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="card-hover-effect">
              <CardHeader>
                <CardTitle>Performing on stage as a guitarist</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I've been playing guitar for 8 years, I also have a 3 years experience in sound design and engeneering.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover-effect">
              <CardHeader>
                <CardTitle>Photographing at Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Got my first camera from my dad at 13 and since then starded photographing my own song covers, parties and album/song covers for artists.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover-effect">
              <CardHeader>
                <CardTitle>Hackathons</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Participating in development hackathons. Most recent hackathons was "Interpernuers First' hackathon in Zurich, Switzerland.
                  Also, I participate in school hackathons as an instructor. 
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button className="relative overflow-hidden group" asChild>
              <Link href="/hobbies">
                <span className="relative z-10">View All Hobbies</span>
                <span className="absolute inset-0 bg-primary opacity-100 group-hover:opacity-80 transition-opacity"></span>
              </Link>
            </Button>
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="contact" className="container py-24 sm:py-32 bg-gradient-subtle">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center animate-fade-in">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="card-hover-effect">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
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
            <Card className="card-hover-effect">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Please contact me through LinkedIn or GitHub messages.
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
        </section>
      </main>
      <footer className="border-t py-6 md:py-8 bg-muted/20">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Kirill Chigir. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-colors" asChild>
              <Link href="https://github.com/kirilchik17" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-colors" asChild>
              <Link href="https://www.linkedin.com/in/kirill-chigir-b9b701bb" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ title, description, tags, link }) {
  return (
    <Card className="flex flex-col overflow-hidden card-hover-effect">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full gradient-border" asChild>
          <Link href={link}>
            <ExternalLink className="mr-2 h-4 w-4" />
            View Project
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function SkillCard({ title, description, icon, skills }) {
  return (
    <Card className="card-hover-effect">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="rounded-full bg-primary/10 p-2 text-primary">{icon}</div>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="transition-all hover:bg-primary/10">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

