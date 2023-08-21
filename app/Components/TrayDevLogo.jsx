import Image from 'next/image'
import { Rock_Salt, Sarpanch } from 'next/font/google'
import LaptopT from 'public/laptopFrame.svg'

const rockSalt = Rock_Salt({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

const sarpanch = Sarpanch({
  weight: ['400'],
  subsets: ['latin'],
})

const TrayDevLogo = () => {
  return (
    <div className='text-[3.5rem] static'>
      <Image
        alt='Laptop outline with white border'
        src={LaptopT}
        className='mx-auto mt-[4.5rem] static'
      />
      <div>
        <div className={rockSalt.className}>
          <h1 className='tracking-[0.6rem]'>
            <span className='absolute left-[35%] top-[35%]'>Traylor</span>
          </h1>
        </div>

        <div className={sarpanch.className}>
          <h1 className='absolute left-[41%] top-[39%]'>Development</h1>
        </div>
      </div>
    </div>
  )
}

export default TrayDevLogo
