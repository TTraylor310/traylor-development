import { donegalOne } from '@styles/fonts'
import Image from 'next/image'
import skillsData from '@lib/skills.json'

const SkillsSection = () => {
  const skillsDataInfo = skillsData.skills
  return (
    <div className='h-[540px]'>
      <div className={donegalOne.className}>
        <h2 className='text-[48px] text-center'>Skills</h2>
      </div>

      <div className='flex'>
        {skillsDataInfo.map((data) => (
          <div key={data.id} className='hover:scale-150'>
            <Image
              alt={data.altName}
              src={data.icon}
              width={data.width}
              height={data.height}
              priority={false}
              className=''
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default SkillsSection
