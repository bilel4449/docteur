import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import {  Link, useParams } from "react-router-dom";
import { getOne } from '../redux/actions';

const InfoMed = () => {
    const {users1} =useSelector(state=>state)
    const dispatch = useDispatch();
    const { _id } = useParams();
    console.log(_id)
  
   
    useEffect(() => {
      dispatch(getOne(_id));
      
    },[_id]);
    
  return (
    <div>
      <div className='div-sign'>
        
         <h4>FullName</h4><h5>{users1&&users1.fullName}</h5>
         <h4>LastName</h4><h5>{users1&&users1.lastName}</h5>
         <h4>Adresse</h4><h5>{users1&&users1.adress}</h5>
         <h4>Specialité</h4><h5>{users1&&users1.specialité}</h5>
      
      <Link to="/medecins"><button style={{backgroundColor:'blue',color:'blanchedalmond',width:'150px',height:'45px',borderRadius:'10px',marginTop:'10px',marginBottom:'10px'}}>Retour</button></Link>
      </div>
    </div>
  )
}

export default InfoMed