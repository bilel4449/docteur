import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/actions'
import { Navigate } from 'react-router-dom'

const SignUp = () => {
    const [fullName, setFullName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")
    const [specialité, setSpecialité] = useState("")
    const [adress, setAdress] = useState("")
    const [userRole, setUserRole] = useState()

    const {loading,users}=useSelector(state=>state)


    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newUser={
            fullName,lastName,email,password,age,specialité,adress,userRole
        }
        dispatch(registerUser(newUser))
    }



  return (
    <div>
      <div className='div-sign'>
          <form onSubmit={handleSubmit}>
            {
              loading?<h3>loading...</h3>
              :users?<Navigate to={'/signin'}></Navigate>
              :<>
            <h1>Vous êtes Medecin?</h1>
              <label>FullName</label><br />
              <input type="text" placeholder='fullName' className='zone' value={fullName} onChange={(e)=>setFullName(e.target.value)}/><br />
              <label>LastName</label><br />
              <input type="text" placeholder='lastName' className='zone' value={lastName} onChange={(e)=>setLastName(e.target.value)} /><br />
              <label>Email</label><br />
              <input type="email" placeholder='email' className='zone' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
              <label>Password</label><br />
              <input type="password" placeholder='password'  className='zone' value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
              <label>Age</label><br />
              <input type="text" placeholder='age' className='zone' value={age} onChange={(e)=>setAge(e.target.value)}/><br />
              <label>Specialité</label><br />
              <input type="text" placeholder='specialité' className='zone' value={specialité} onChange={(e)=>setSpecialité(e.target.value)}/><br />
              <label>Adresse</label><br />
              <input type="text" placeholder='adresse' className='zone' value={adress} onChange={(e)=>setAdress(e.target.value)}/><br />
              <label>Role</label><br />
              <input type="text" placeholder='role user' className='zone' value={userRole} onChange={(e)=>setUserRole(e.target.value)}/><br />
           <button type='submit' style={{backgroundColor:'blue',color:'blanchedalmond',width:'150px',height:'45px',borderRadius:'10px',marginTop:'10px',marginBottom:'10px'}}>SignUp</button><br />
           </>
          }
          </form>
      </div>
    </div>
  )
}

export default SignUp