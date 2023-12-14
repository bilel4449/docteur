import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/actions'
import { Navigate } from 'react-router-dom'

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {loading,token}=useSelector(state=>state)


    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newUser={
            email,password
        }
        dispatch(loginUser(newUser))
    }

  return (
    <div className='div-sign'>
        <form onSubmit={handleSubmit}>
         {
            loading?<h3>loading...</h3>
            :token?<Navigate to={"/profil"}></Navigate>
            :<>
          <h1>Votre compte</h1>
<label>Email</label><br />
            <input type="email" placeholder='email' className='zone' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <label>Password</label><br />
            <input type="password" placeholder='password'  className='zone' value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
            <button type='submit' style={{backgroundColor:'blue',color:'blanchedalmond',width:'150px',height:'45px',borderRadius:'10px',marginTop:'10px',marginBottom:'10px'}}>Login</button><br />

            </>
}
</form>
    </div>
  )
}

export default SignIn