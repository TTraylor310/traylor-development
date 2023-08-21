import Link from 'next/link'
import LinkedIn from './Components/Icons/LinkedIn'
import Github from './Components/Icons/Github'
import GmailIcon from './Components/Icons/Gmail'
import TrayDevLogo from './Components/TrayDevLogo'

const HomePage = () => {
  return (
    <div className='bg-greyBack min-h-screen text-offWhite'>

      <h3 className='text-center text-[3.5rem] pt-[6.25rem]'>Coming Soon.</h3>

      <TrayDevLogo />

      <div className='text-center space-x-4 pt-[2rem] flex justify-center'>
        <Link href='http://linkedin.com/in/ttraylor310'>
          <LinkedIn />
        </Link>
        <Link href='http://github.com/ttraylor310'>
          <Github />
        </Link>
        <Link href='/'>
          <GmailIcon />
        </Link>
      </div>


      <h2 className='text-center text-[3.5rem] pt-[3.5rem]'>UI / UX Designs</h2>
      <h2 className='text-center text-[3.5rem]'>Custom Built Websites</h2>


    </div>
  )
}

export default HomePage
