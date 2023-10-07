import Hero from '@components/Hero'
import ServicesSection from '@components/Services'
import SkillsSection from '@components/Skills'
import PastProjectsSection from '@components/PastProjects'
import ContactSection from '@components/Contact'

const HomePage = () => {
  return (
    <div className=''>

      <Hero />
      <ServicesSection />
      <SkillsSection />
      <PastProjectsSection />
      <ContactSection />

    </div>
  )
}

export default HomePage
