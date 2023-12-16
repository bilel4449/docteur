import React, { useEffect } from 'react'
import CardUser from './CardUser'
import { useDispatch, useSelector } from 'react-redux';
import { getall } from '../redux/actions';

const List = () => {
  const dispatch = useDispatch();
  const {users} = useSelector(state=>state);

  

  useEffect(() => {
    dispatch(getall());
  }, [dispatch]);
  return (
    <div>
        {users&&
          users.map(el=><CardUser medecin={el}/>)
            
        }
        
    </div>
  )
}

export default List
