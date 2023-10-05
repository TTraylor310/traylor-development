import Image from 'next/image'
import TrayDev from '@public/images/TraylorDevelopment.png'
import { donegalOne } from '@styles/fonts'

const Header = () => {
  return (
    <div className='flex justify-between'>

      <div>
        <Image
          alt='Traylor Development Logo'
          src={TrayDev}
          className='pt-[10px] pl-[48px]'
          width={417}
          priority={true}
        />
      </div>

      <div className={donegalOne.className}>
        <ul className='flex pt-[44px] pr-[56px] gap-[40px] text-[36px] leading-[45px]'>
          <li>Services</li>
          <li>Skills</li>
          <li>Past-Projects</li>
          <li>Background</li>
        </ul>
      </div>
  
    </div>
  )
}
export default Header
