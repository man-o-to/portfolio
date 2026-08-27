export interface Profile {
  name: string
  jobTitle: string
  email: string
  location: string
  socials: {
    githubPersonal: string
    githubWork: string
    linkedin: string
  }
}

export const profile: Profile = {
  name: 'Lucca Francica',
  jobTitle: 'AI Software Engineer',
  email: 'luccafrancica7@gmail.com',
  location: 'Orlando, FL',
  socials: {
    githubPersonal: 'https://github.com/man-o-to',
    githubWork: 'https://github.com/lucca-mrktr',
    linkedin: 'https://linkedin.com/in/luccawork',
  },
}
