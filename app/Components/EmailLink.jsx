'use client'

import {useState} from 'react'

const emailLink = () => {

  const [shown, setShow] = useState(false)
  

  return (
    <div>
      <button onClick={() => setShow(!shown)}>Email</button>
    </div>
  )
}
export default emailLink