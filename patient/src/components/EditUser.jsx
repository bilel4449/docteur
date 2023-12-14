import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editProfil } from '../redux/actions'
import { Link } from 'react-router-dom'

const EditUser = () => {
    const {users} =useSelector(state=>state)

    const [fullName, setFullName] = useState(users.fullName)
    const [lastName, setLastName] = useState(users.lastName)
    const [email, setEmail] = useState(users.email)
    const [age, setAge] = useState(users.age)
    const [specialité, setSpecialité] = useState(users.specialité)
    const [adress, setAdress] = useState(users.adress)
    const [userRole, setUserRole] = useState(users.userRole)

    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const modifUser={
            _id: users._id,
           fullName,
           lastName,
           email,age,specialité,adress,userRole
        }
        dispatch(editProfil(modifUser))
    }
  return (
    <div className='div-sign'>
        <form  onSubmit={handleSubmit}>
        <label>FullName</label><br />
            <input type="text" placeholder='fullName' className='zone' value={fullName} onChange={(e)=>setFullName(e.target.value)}/><br />
            <label>LastullName</label><br />
            <input type="text" placeholder='lastName' className='zone' value={lastName} onChange={(e)=>setLastName(e.target.value)} /><br />
            <label>Email</label><br />
            <input type="email" placeholder='email' className='zone' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <label>Age</label><br />
            <input type="text" placeholder='age' className='zone' value={age} onChange={(e)=>setAge(e.target.value)}/><br />
            <label>Specialité</label><br />
            <input type="text" placeholder='specialité' className='zone' value={specialité} onChange={(e)=>setSpecialité(e.target.value)}/><br />
            <label>Adresse</label><br />
            <input type="text" placeholder='adresse' className='zone' value={adress} onChange={(e)=>setAdress(e.target.value)}/><br />
            <label>Role</label><br />
            <input type="text" placeholder='role user' className='zone' value={userRole} onChange={(e)=>setUserRole(e.target.value)}/><br />
      <button type='submit' style={{backgroundColor:'blue',color:'blanchedalmond',width:'150px',height:'45px',borderRadius:'10px',marginTop:'10px',marginBottom:'10px'}}>Confirm</button><br />
         
        </form>

    </div>
  )
}

export default EditUser