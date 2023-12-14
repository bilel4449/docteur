import React from 'react'
import { Link } from 'react-router-dom'

const Espace = () => {
  return (
    <div className='espace'>
        <Link to="/signup"><img src="images/med.png" alt=""  className='icon'/></Link>
        <Link to="/signupuser"><img src="images/pat.png" alt=""  className='icon'/></Link>
        
    </div>
  )
}

export default Espace