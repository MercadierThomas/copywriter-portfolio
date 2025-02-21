import { TerminalHeader } from "@/components/layout/TerminalHeader"
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ContactForm } from "@/components/contact/ContactForm";
import projects from '@/data/projects.json'

export default function Home() {
  return (
    <main className="min-h-screen bg-code-bg text-gray-100">
    <TerminalHeader />
    
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-6">
        Je transforme des <span className="text-email-primary">CTAs</span> 
        <br />en <span className="bg-gradient-to-r from-email-primary to-cyan-400 bg-[length:100%_2px] bg-no-repeat bg-bottom">résultats mesurables</span> 
        <span className="text-3xl ml-2">📈</span>
      </h1>
      
      <div className="space-y-4 border-l-4 border-email-primary pl-4">
        <p className="text-xl">Email Marketer full-stack :</p>
        <ul className="list-disc list-inside font-mono">
          <li>Copy qui convertit</li>
          <li>Intégration technique (React Email, Resend)</li>
          <li>A/B Testing automatisé</li>
        </ul>
      </div>
    </section>

    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>

    <section className="max-w-4xl mx-auto px-4 py-12 bg-code-bg/50">
      <h2 className="text-3xl font-bold mb-6">Audit Email Express (Offre Limitée)</h2>
      <p className="text-xl mb-8">J'analyse 3 de vos emails et vous livre des pistes d'optimisation techniques & rédactionnelles sous 48h.</p>
        <ContactForm />
    </section>
  </main>
  );
}
