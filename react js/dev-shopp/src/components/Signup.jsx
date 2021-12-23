import React, { useState } from 'react'


function Signup () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
	console.log(email,password);
  }
  return (
    <div className='center container'style={{maxWidth:'500px'}}>
      <h3>Please Signup</h3>
      <form onSubmit={e => handleSubmit(e)}>
        <div class='input-field'>
          <input
            placeholder='email'
            id='first_name'
            type='email'
            className='validate'
            onChange={event => {
              setEmail(event.target.value)
            }}
          />
          <input
            placeholder='password'
            id='first_name'
            type='password'
            className='validate'
            onChange={event => {
              setPassword(event.target.value)
            }}
          />
          <button type='submit' className='btn blue'>
            Signup
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup
