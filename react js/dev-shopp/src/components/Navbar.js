import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav>
      <div className='nav-wrapper blue'>
        <a to='#' className='brand-logo'>
          BrandMart
        </a>

        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/login'> login </Link>
          </li>
          <li>
            <Link to='/signup'> signup </Link>
          </li>
          <li>
            <a class='waves-effect waves-light btn red'> button </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
