import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  getallrdv } from '../redux/actions';
import CardRdv from './CardRdv';

const ListRdv = () => {
  const dispatch = useDispatch();
  const {rdvs} = useSelector(state=>state);
  useEffect(() => {
    dispatch(getallrdv());
  }, [dispatch]);
  return (
    <div>
        {
        
        rdvs&&
            React.Children.toArray(rdvs.map(el=><CardRdv rdvs={el}/>))
          
            
        }

        
    </div>
  )
}

export default ListRdv