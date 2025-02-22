interface Project {
  id: string
  title: string
  description: string
  before: string
  after: string
}

export const projects: Project[] = [
  {
    id: 'authflow',
    title: 'AuthFlow - Email d\'Onboarding',
    description: 'Augmentation de 70% des confirmations d\'email',
    before: '/projects/authflow/before.txt',
    after: '/projects/authflow/after.txt'
  }
]