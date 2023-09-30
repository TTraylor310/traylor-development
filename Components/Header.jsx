import Image from 'next/image'
import { Cherry_Cream_Soda } from 'next/font/google'
import TrayDev from '@/public/TraylorDevelopment.png'

const cherryCreamSoda = Cherry_Cream_Soda({
  weight: ['400'],
  subsets: ['latin'],
})

const HeaderPage = () => {
  return (
    <div className='flex justify-between'>
      <div>
        <Image
          alt='Traylor Development Logo'
          src={TrayDev}
          className='pt-[0.81rem] pl-[2.35rem]'
          width={400}
        />
      </div>
      <div className={cherryCreamSoda.className}>
        <ul className='flex gap-[2.75rem] text-[#FFF5D5] text-[1rem] pt-[2.25rem] pr-[3.5rem] flex-nowrap md:text-[1.8125rem]'>
          <li>Services</li>
          <li>Skills</li>
          <li>Past-Projects</li>
          <li>Background</li>
        </ul>
      </div>
    </div>
  )
}
export default HeaderPage