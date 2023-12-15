import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    
    <div>
      <div className='navbar'>
      
      
      
          <Link to="/">
          <img src="/images/rdv.png" alt="" style={{width:'90px',marginLeft:'20px'}}/>
          </Link>
      
          <input type="text"  style={{width:'350px',borderRadius:'15px',height:'50px'}} placeholder='Rechercher'/>
          <div>
            <Link to="/espace">SignUp</Link><br />
            <Link to="/signin">Login</Link>
          </div>
          <img src="/images/icon-sign.png" alt="" style={{width:'70px',marginRight:'20px'}}/>
      </div>
    </div>
  )
}

export default NavBar