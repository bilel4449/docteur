import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { deleterdv, getallrdv } from '../redux/actions';
import { useDispatch } from 'react-redux';

const CardRdv = ({rdvs}) => {

 const dispatch=useDispatch()
  
  return (
    <div>
    
    <Card style={{ width: '65rem',backgroundColor:'blanchedalmond' }} className='card' >
      <Card.Body>
        <Card.Title >{rdvs.lastName}   {rdvs.fullName}</Card.Title>
        <Card.Text>
        Email:{rdvs.email}
        </Card.Text>
        <Card.Text>
        Adresse:{rdvs.adress}
        </Card.Text>
        <Card.Text>
        Age:{rdvs.age}
        </Card.Text>
        <Card.Text>
        Date: {rdvs.date}
        </Card.Text>
        <Button onClick={()=>{dispatch(deleterdv(rdvs._id));dispatch(getallrdv())}}>delete</Button>

      </Card.Body>
    </Card>
    </div>
  )
}

export default CardRdv