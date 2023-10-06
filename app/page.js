import Hero from '@components/Hero'
import ServicesSection from '@components/Services'
import SkillsSection from '@components/Skills'
import PastProjectsSection from '@components/PastProjects'

const HomePage = () => {
  return (
    <div className=''>

      <Hero />
      <ServicesSection />
      <SkillsSection />
      <PastProjectsSection />

    </div>
  )
}

export default HomePage
