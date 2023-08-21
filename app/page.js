import Link from 'next/link'
import LinkedIn from './Components/Icons/LinkedIn'
import Github from './Components/Icons/Github'
import GmailIcon from './Components/Icons/Gmail'
import TrayDevLogo from './Components/TrayDevLogo'
// import EmailLink from './Components/EmailLink'

const HomePage = () => {
  return (
    <div className='min-h-screen bg-greyBack text-offWhite'>

      <h3 className='text-center text-[3.5rem] pt-[6.25rem]'>Coming Soon.</h3>

      <TrayDevLogo />

      <div className='text-center space-x-4 pt-[2rem] flex justify-center'>
        <Link href='http://linkedin.com/in/ttraylor310'>
          <LinkedIn />
        </Link>
        <Link href='http://github.com/ttraylor310'>
          <Github />
        </Link>

        {/* <EmailLink /> */}
        {/* <Link href='/'>
          <GmailIcon />
        </Link> */}
      </div>
      <div className='flex justify-center space-x-10 pt-[2rem] text-2xl'>
        <h4>Contact :</h4>
        <h4>tim@traylordevelopment.com</h4>
      </div>


      <h2 className='text-center text-[3.5rem] pt-[3.5rem]'>UI / UX Designs</h2>
      <h2 className='text-center text-[3.5rem]'>Custom Built Websites</h2>


    </div>
  )
}

export default HomePage
