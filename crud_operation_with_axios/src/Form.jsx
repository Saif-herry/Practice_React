import React, { useState } from 'react'

const Form = () => {
  const [inputdata, setInputdata] = useState('')
  const [emaildata, setEmaildata] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let email = emaildata
    let name = inputdata
    let obj = {
      email,
      name,
    }
    console.log('InputForm:-', obj)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Email"
          type="email"
          onChange={(e) => setEmaildata(e.target.value)}
        />
        <input
          placeholder="Enter User Name"
          type="text"
          onChange={(e) => setInputdata(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Form
