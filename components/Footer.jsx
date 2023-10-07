// import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link'
import LinkedIn from '@components/icons/LinkedIn'
import Github from '@components/icons/Github'
import ContactIcon from '@components/icons/ContactIcon'

const Footer = () => {
  return (
    <footer className='border-2 border-white'>
      <div className='h-[116px] flex justify-around'>
        <div id='left' className='pt-[38px] flex w-[13%]'>
          <div id='footer-links'>
            <div id='allLinks' className='flex gap-6'>
              <Link
                href='http://www.linkedin.com/in/ttraylor310'
                rel='noopener noreferrer'
                target='_blank'
              >
                <LinkedIn />
              </Link>
              <Link
                href='http://www.github.com/ttraylor310'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Github />
              </Link>
              <Link href='#contactSection'>
                <ContactIcon />
              </Link>
            </div>
          </div>
        </div>
        <div id='mid' className='mr-[9%]'>
        <div className='pt-[16px] text-[32px] text-center flex'>
          <p>
            &copy; 2023</p>
            <h3>
              <Link href='#home'>Traylor Development LLC</Link></h3>
          
        </div>
          <p className='text-[24px] text-center'>All rights reserved.</p>
        </div>
        <div id='right'>
          <h4></h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer
