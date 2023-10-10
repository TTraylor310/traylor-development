import { donegalOne, inter } from '@styles/fonts'
import FormContent from '@components/FormContent'

const ContactSection = () => {
  return (
    <div id='contact' className='flex ml-[4%]'>

      <div id='left' className=''>
        <div className={donegalOne.className}>
          <h2 className='text-[48px] pl-[46px] pt-[58px]'>
            Let's Work Together
          </h2>
          <div className={inter.className}>
            <div className='text-[32px]'>
              <h3 className='pl-[58px] pb-[14px] pt-[276px]'>
                Or, Email me directly at
              </h3>
              <h3 className='pl-[104px]'>tim@traylordevelopment.com</h3>
            </div>
          </div>
        </div>
      </div>

      <div id='right' className='min-w-[55vw]'>
        <FormContent />
      </div>
    </div>
  )
}

export default ContactSection
