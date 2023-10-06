import Image from 'next/image'
import { donegalOne, inter } from '@styles/fonts'
import prof1 from '@public/images/profilePicHero.png'
import prof2 from '@public/images/profilePicHeroNOshadow.png'
import SubHero from '@components/SubHero'

const Hero = () => {
  return (
    <div>
      
      <div className='flex'>
        <div className={inter.className}>
          <div className='text-[30px] pl-[130px] pr-[126px] text-center'>
            <div className='pt-[194px] pb-[40px]'>
              <h2>Get more business with the</h2>
              <h2>website you've always wanted</h2>
            </div>

            <div className={donegalOne.className}>
              <button className='text-[34px] bg-tanLightness text-black rounded-full py-[10px] px-[30px]'>
                Connect With Me
              </button>
            </div>

            <div className='pt-[40px]'>
              <h1>My name is Tim Traylor</h1>
              <h2>Let's build something great, together.</h2>
            </div>
          </div>
        </div>

        <div className='min-h-[610px] pl-[68px] pt-[28px]'>
          <Image alt='Tim Traylor' src={prof2} height={601} priority={true} />
        </div>
      </div>

      <SubHero />
    </div>
  )
}
export default Hero