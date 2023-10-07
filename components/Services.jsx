import { donegalOne, inter } from '@styles/fonts'
import servicesData from '@lib/services.json'
import Image from 'next/image'

const ServicesSection = () => {

  const servicesDataInfo = servicesData.services

  return (
    <div>
      <div className={donegalOne.className}>
        <h2 className='text-[48px] pt-[70px] pl-[115px]'>Services</h2>
      </div>

      <div className='px-[56px] flex flex-wrap justify-between pb-[48px]'>
        {servicesDataInfo.map((data) => (
          <div key={data.id} className='pt-[36px]'>

            <div className='border w-[420px] h-[275px]'>
              
              <div className='flex justify-between pt-4'>
                <h3 className='text-[32px] pl-[24px]'>{data.name}</h3>
                <Image
                  alt={data.altName}
                  src={data.icon}
                  width={data.width}
                  height={data.height}
                  priority={false}
                  className='pr-[12px]'
                />
              </div>

              <div className={inter.className}>
                <p className='text-[16px] p-[8px]'>{data.description}</p>
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
export default ServicesSection
