import React from 'react'

const Home = () => {
  return (
    <div>
        <img src="images/imghome.jpg" alt="" className='img-home' />
     
     <div className='div-img'>
     
       <img src="images/img1.webp" alt="" className='img'/>
       <img src="images/img2.jpg" alt="" className='img' />
       <img src="images/img3.png" alt="" className='img' />
       
     </div>
     <div className='div-img'>
       <p className='p'>Accédez rapidement à votre médecin</p>
       <p className='p'>Prenez rendez-vous en ligne à tout moment</p>
       <p className='p'>Recevez des sms/mail de rappel personnalisés</p>
     </div>
    </div>
  )
}

export default Home