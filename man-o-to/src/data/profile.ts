export interface Profile {
  name: string
  jobTitle: string
  email: string
  birthday: string
  location: string
  socials: {
    github: string
    linkedin: string
    telegram: string
  }
}

// TODO: replace placeholder values with real content.
export const profile: Profile = {
  name: 'TODO: Your Name',
  jobTitle: 'TODO: Your Job Title',
  email: 'you@example.com',
  birthday: 'TODO: MM / DD',
  location: 'TODO: City, Country',
  socials: {
    github: 'https://github.com/TODO',
    linkedin: 'https://linkedin.com/in/TODO',
    telegram: 'https://t.me/TODO',
  },
}
