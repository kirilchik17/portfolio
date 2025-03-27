import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function DemoProjectPage() {
  // This is a demo project with more detailed information
  const project = {
    title: "Secure Chat App",
    description: "End-to-end encrypted messaging application with real-time updates.",
    longDescription:
      "A secure messaging platform that prioritizes user privacy with end-to-end encryption. Features include real-time messaging, file sharing, and user authentication.",
    problem:
      "Traditional messaging apps often lack proper security measures, potentially exposing sensitive communications to unauthorized access.",
    solution:
      "I designed and implemented a chat application with end-to-end encryption, ensuring that only the intended recipients can read messages. The application uses WebSockets for real-time communication and implements modern authentication practices.",
    technologies: [
      {
        name: "Frontend",
        items: ["React", "Redux", "TailwindCSS", "Socket.io Client"],
      },
      {
        name: "Backend",
        items: ["Node.js", "Express", "WebSockets", "MongoDB"],
      },
      {
        name: "Security",
        items: ["End-to-end Encryption", "JWT Authentication", "HTTPS", "Input Validation"],
      },
    ],
    features: [
      "Real-time messaging with typing indicators",
      "End-to-end encryption for all messages",
      "Secure file sharing with encryption",
      "User authentication and authorization",
      "Message history with search functionality",
      "Read receipts and message status",
      "Group chat capabilities with admin controls",
    ],
    challenges: [
      "Implementing secure encryption that doesn't impact performance",
      "Ensuring reliable real-time communication across different network conditions",
      "Balancing security with user experience",
    ],
    outcomes: [
      "Successfully created a secure messaging platform with zero known vulnerabilities",
      "Achieved sub-second message delivery times even with encryption overhead",
      "Received positive feedback from security researchers during testing phase",
    ],
    github: "https://github.com/kirilchik17/secure-chat",
    demo: "https://secure-chat-demo.example.com",
    image: "/placeholder.svg?height=400&width=800",
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to Projects</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">{project.title}</h1>
        </div>

        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full rounded-xl object-cover aspect-video"
        />

        <div className="flex flex-wrap gap-2">
          {project.technologies.flatMap((tech) =>
            tech.items.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            )),
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground">{project.longDescription}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Problem</h2>
              <p className="text-muted-foreground">{project.problem}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenges & Learnings</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Outcomes</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {project.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Technologies</h2>
              {project.technologies.map((tech, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold mb-2">{tech.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Links</h2>
              <div className="space-y-4">
                <Button className="w-full" asChild>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </div>
            </section>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild variant="outline">
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

