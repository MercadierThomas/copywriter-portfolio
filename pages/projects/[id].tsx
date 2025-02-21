import { GetStaticPaths, GetStaticProps } from 'next'
import projects from '@/data/projects.json'
import { EmailPreview } from '@/components/emails/EmailPreview'
import { TerminalHeader } from '@/components/layout/TerminalHeader'
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
      emailCode: string
    }
  }
  
  interface ProjectCardProps {
    project: Project
  }

const ProjectPage = ({ project }: ProjectCardProps) => (
  <main className="min-h-screen bg-code-bg text-gray-100">
    <TerminalHeader />
    <Link 
        href="/"
        className="inline-block mb-8 ml-5 text-email-primary hover:underline"
        >
        ← Retour aux projets
    </Link>
    
    <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <div className="mt-8">
            <EmailPreview htmlCode={project.content.emailCode} />
        </div>
    </section>

    <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-email-primary font-mono mb-4">Problème client</h2>
            <p className="text-xl">{project.content.problem}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-email-primary font-mono mb-4">Solution apportée</h2>
            <p className="text-xl">{project.content.solution}</p>
        </div>
    </section>
  </main>
)

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((p) => ({ params: { id: p.id } })),
  fallback: false
})

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { project: projects.find(p => p.id === params?.id) }
})

export default ProjectPage