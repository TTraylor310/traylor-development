import Image from 'next/image'
import LaptopT from 'public/BackIcon.svg'
// import { Rock_Salt, Sarpanch } from 'next/font/google'


// const rockSalt = Rock_Salt({
//   weight: ['400'],
//   style: ['normal'],
//   subsets: ['latin'],
// })

// const sarpanch = Sarpanch({
//   weight: ['400'],
//   subsets: ['latin'],
// })

const TrayDevLogo = () => {
  return (
    <div>
      <Image
        alt='Laptop outline with white border'
        src={LaptopT}
        className='mx-auto mt-[4.5rem] static'
        width={1000}
      />
    </div>
  )
}

export default TrayDevLogo
