import { donegalOne } from '@styles/fonts'
import Image from 'next/image'
import projectData from '@lib/pastProjects.json'

const PastProjectsSection = () => {
  const projectDataInfo = projectData.projects
  return (
    <div className='flex pt-[100px]' id='pastProjects'>

      <div className='w-[920px] pl-[56px] pt-[80px] pb-[124px] flex flex-wrap gap-[16px]'>
        {projectDataInfo.map((data) => (
          <div
            key={data.id}
            className='w-[422px] h-[240px] relative'
          >
            <Image
              alt={data.altName}
              src={data.image}
              width={422}
              height={240}
              className='absolute z-0'
            />
            <div className='absolute top-[170px] z-10 bg-teal-600'>
              <div className='w-[422px] h-[70px] flex justify-around'>
                <h4 className='pt-[24px]'>
                  {data.technologies[0]}
                </h4>
                <h4 className='pt-[24px]'>
                  {data.technologies[1]}
                </h4>
                <h4 className='pt-[24px]'>
                  {data.technologies[2]}
                </h4>
                <h4 className='pt-[24px]'>
                  {data.technologies[3]}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={donegalOne.className}>
        <h2 className='text-[48px] pr-[80px] pt-[180px] pl-[100px]'>Past-Projects</h2>
      </div>

    </div>
  )
}
export default PastProjectsSection
