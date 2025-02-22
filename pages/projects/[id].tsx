import { GetStaticPaths, GetStaticProps } from 'next'
import { projects } from '@/data/projects'
import Header from '../components/Header'
import fs from 'fs'
import path from 'path'

interface Props {
  before: string
  after: string
}

export default function Project({ before, after }: Props) {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Version originale</h3>
            <pre className="whitespace-pre-wrap font-mono text-sm">{before}</pre>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Ma version</h3>
            <div 
              className="prose" 
              dangerouslySetInnerHTML={{ __html: after }} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map(project => ({
    params: { id: project.id }
  })),
  fallback: false
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const project = projects.find(p => p.id === params?.id)!
  
  return {
    props: {
      before: fs.readFileSync(
        path.join(process.cwd(), 'public', project.before), 
        'utf-8'
      ),
      after: fs.readFileSync(
        path.join(process.cwd(), 'public', project.after),
        'utf-8'
      )
    }
  }
}