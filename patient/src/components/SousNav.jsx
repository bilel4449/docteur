import React from 'react'

import { Link } from 'react-router-dom'

const SousNav = () => {

  return (
    <div>
      <div className='sous-nav'>
      
         <div>
           <h5> <img src="/images/clin.png" alt=""  style={{width:'30px'}} />Cliniques</h5>
          </div>
            <Link to="/medecins">
              <div>
                <h5><img src="/images/doct.png" alt="" style={{width:'30px'}} />Médecins</h5>
              </div>
            </Link>
      
      
          <Link to="/rdvs">
          <div><h5><img src="/images/quest.png" alt="" style={{width:'30px'}} />Rdv</h5></div>
        </Link>
      </div>
    </div>
  )
}

export default SousNav