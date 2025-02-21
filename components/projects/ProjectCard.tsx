import { motion } from 'framer-motion'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  results: string
  preview?: string
  tech: string[]
  content: {
    client: string
    problem: string
    solution: string
  }
}

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <Link href={`/projects/${project.id}`}>
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="bg-gray-800 rounded-lg p-6"
  >
    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
    <p className="text-email-primary font-mono">{project.results}</p>
    <div className="mt-4 flex gap-2">
      {project.tech.map((t: string) => (
        <span 
          key={t}
          className="px-3 py-1 bg-code-bg rounded-full text-sm"
        >
          {t}
        </span>
      ))}
    </div>
  </motion.div>
  </Link>
)