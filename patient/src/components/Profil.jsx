import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {   Link, Navigate } from 'react-router-dom'
import {  getProfil} from '../redux/actions'

const Profil = () => {
    const {users,isAuth}=useSelector(state=>state)
    const dispatch=useDispatch()
    useEffect(() => {
     dispatch(getProfil())
    },[]);
    

  return (
    <div>
        {
            !isAuth?<Navigate to="/signin" ></Navigate>
            :

            <div>
             <h1>Login avec succes {users.fullName}</h1>
             <h3>Votre Email {users.email}</h3>
             
             {/* <EditUser users={users}/> */}
             <Link to={`/edit/${users._id}`}><button style={{backgroundColor:'blue',color:'blanchedalmond',width:'150px',height:'45px',borderRadius:'10px',marginTop:'10px',marginBottom:'10px'}}>Edit</button></Link>
            </div>
            
}
    
    </div>
  )
}

export default Profil