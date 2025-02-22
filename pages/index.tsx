import { projects } from '@/data/projects'
import Header from './components/Header'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">
          Copywriter spécialisé en conversion d'emails
        </h1>
        
        <div id="projects" className="space-y-8">
          {projects.map(project => (
            <div key={project.id} className="border p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a 
                href={`/projects/${project.id}`} 
                className="text-blue-600 hover:underline"
              >
                Voir l'analyse complète →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
