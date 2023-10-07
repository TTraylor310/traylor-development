'use client'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { donegalOne, eczar, roboto } from '@styles/fonts'

const initValues = { name: '', email: '', subject: '', message: '' }
const initState = { isLoading: false, error: '', values: initValues }
const serviceID = process.env.SERVICE_ID
const templateID = process.env.EMAILJS_TEMPLATE_ID
const emailKey = process.env.EMAILJS_KEY

const FormContent = () => {
  const [state, setState] = useState(initState)
  const { values, isLoading, error } = state

  const form = useRef()

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .send(
        `${serviceID}`,
        `${templateID}`,
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        `${emailKey}`
      )
      .then(
        (result) => {
          console.log(result.text)
          // alert(result.text)
        },
        (error) => {
          console.log(error.text)
          // alert(error.text)
        }
      )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Replace the URL with the endpoint where you want to send the form data
    fetch('https://example.com/submit-form', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
  }

  return (
    <div className='min-h-[1500px]'>
    <div className={roboto.className}>
      <form onSubmit={sendEmail} ref={form} className='px-[14%]'>
        <div id='formName' className='pt-[130px]'>
          <label htmlFor='name' className='pr-[72px] text-[18px]'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={values.name}
            onChange={handleChange}
            className='text-black w-[420px] h-[40px] pl-[2%]'
          />
        </div>

        <div id='formEmail' className='pt-[50px]'>
          <label htmlFor='email' className='pr-[72px] text-[18px]'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={values.email}
            onChange={handleChange}
            className='text-black w-[420px] h-[40px] pl-[2%]'
          />
        </div>

        <div id='formSubject' className=''>
          <div className='pl-[35px] pt-[60px]'>
            <div className={roboto.className}>
              <label className='text-[20px] text-center '>
                What type of service are you interested in discussing?
              </label>
            </div>
          </div>

          <div className={eczar.className}>
          <div id='buttonService' className='flex justify-between mr-[20%] pt-[40px] font-[30px] pl-[20px]'>
            <div>
              <button className='btn'>Website</button>
            </div>
            <div>
              <button className='btn'>Design</button>
            </div>
            <div>
              <button className='btn'>Custom</button>
            </div>
          </div>
          </div>
        </div>



        <div id='formMessage' className='pt-[60px]'>
          <label htmlFor='message' className='text-[18px]'>
            Tell me more about your project
          </label>
          <br />
          <div className='pt-[10px] pl-2'>
            <textarea
              id='message'
              name='message'
              value={values.message}
              onChange={handleChange}
              className='text-black w-[535px] h-[205px] pl-[2%] rounded-md pt-[2%]'
            />
          </div>
        </div>


        <div className='pt-[40px] pl-[70px]'>
          <button
            type='submit'
            className='w-[400px] h-[48px] bg-white text-black border rounded-full hover:bg-gray-900 hover:text-white'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default FormContent
