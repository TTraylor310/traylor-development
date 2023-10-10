import Link from 'next/link'
import Image from 'next/image'
import { donegalOne, inter } from '@styles/fonts'
import prof1 from '@public/images/profilePicHero.png'
import prof2 from '@public/images/profilePicHeroNOshadow.png'
import SubHero from '@components/SubHero'

const Hero = () => {
  return (
    <div id='topHome'>
      
      <div className='flex'>
        <div className={inter.className}>
          <div className='text-[30px] pl-[130px] pr-[126px] text-center'>
            <div className='pt-[144px] pb-[60px]'>
              <h2>Get more business with the</h2>
              <h2>website you've always wanted</h2>
            </div>

            <div className={donegalOne.className}>
              <button className='hover:bg-gray-900 hover:text-white hover:border-white hover:border-4 hover:-translate-y-2 text-[34px] bg-tanLightness text-black rounded-full py-[10px] px-[30px]'>
                <Link href={'#contact'}>
                Connect With Me</Link>
              </button>
            </div>

            <div className='pt-[60px]'>
              <h1>My name is Tim Traylor</h1>
              <h2>Let's build something great, together.</h2>
            </div>
          </div>
        </div>

        <div className='min-h-[610px] pl-[68px] pt-[28px]'>
          <Image alt='Tim Traylor' src={prof2} height={601} priority={true} className='rounded-lg'/>
        </div>
      </div>

      <SubHero />
    </div>
  )
}
export default Hero
