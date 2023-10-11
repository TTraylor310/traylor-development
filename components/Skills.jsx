'use client'
import { Card, CardBody } from '@nextui-org/react'

import { donegalOne } from '@styles/fonts'
import Image from 'next/image'
import skillsData from '@lib/skills.json'

const SkillsSection = () => {
  const skillsDataInfo = skillsData.skills
  return (
    <div id='skills' className=''>
      <div className={donegalOne.className}>
        <h2 className='text-[48px] text-center pt-[90px] pb-[90px] '>Skills</h2>
      </div>

      <div className='flex mx-10 flex-wrap justify-center'>
        {skillsDataInfo.map((data) => (
          <div key={data.id} className='hover:scale-150 p-4'>
            <div>
              <Image
                alt={data.altName}
                src={data.icon}
                width={data.width}
                height={data.height}
                priority={false}
                className=''
              />
              <Card className='py-4'>
                <CardBody>Testing</CardBody>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default SkillsSection
