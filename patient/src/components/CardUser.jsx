import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { registerRdv } from '../redux/actions';
import { Link } from 'react-router-dom';

const CardUser = ({medecin}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');
const [modalIsOpen, setIsOpen] = React.useState(false);

function openModal() {
setIsOpen(true);
}
function closeModal() {
setIsOpen(false);
}

const [fullName, setFullName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [date, setDate] = useState("")
const [age, setAge] = useState("")
const [adress, setAdress] = useState("")
const dispatch=useDispatch()
const handleSubmit=(e)=>{
    e.preventDefault()
    const newRdv={
        fullName,lastName,email,age,date,adress
    }
    dispatch(registerRdv(newRdv))
    closeModal() 
}
  return (
    <div>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

      <div>
        <div className='div-sign'>
          <form onSubmit={handleSubmit} >
        
          {/* <label>FullName</label><br /> */}
                <input type="text" placeholder='fullName' className='zone-modal' value={fullName} onChange={(e)=>setFullName(e.target.value)}/><br />
                {/* <label>LastullName</label><br /> */}
                <input type="text" placeholder='lastName' className='zone-modal'  value={lastName} onChange={(e)=>setLastName(e.target.value)} /><br />
                {/* <label>Email</label><br /> */}
                <input type="email" placeholder='email' className='zone-modal'  value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
                {/* <label>Age</label><br /> */}
                <input type="text" placeholder='age' className='zone-modal'  value={age} onChange={(e)=>setAge(e.target.value)}/><br />
                {/* <label>Date</label><br /> */}
                <input type="text" placeholder='date' className='zone-modal'  value={date} onChange={(e)=>setDate(e.target.value)}/><br />
                {/* <label>Adresse</label><br /> */}
                <input type="text" placeholder='adresse' className='zone-modal'  value={adress} onChange={(e)=>setAdress(e.target.value)}/><br />
        
             <button type='submit' className='btn-modal' >Confirm</button><br />
             <button onClick={closeModal} className='btn-modal-c'>Cancel</button><br />
          </form>
        </div>
      </div>
      </Modal>
       
       <Card style={{ width: '65rem',backgroundColor:'blanchedalmond' }} className='card' >
      <Card.Body>
        <Card.Title style={{fontSize:'30px', backgroundColor:'beige'}}>{medecin.fullName}</Card.Title>
        <Card.Text>
        Adresse:{medecin.adress}
        </Card.Text>
     
        <Card.Text>
        Spécialité: {medecin.specialité}
        </Card.Text>
        <Link to={`/info/${medecin._id}`}><Button variant="primary" className='btn'>Info</Button></Link>
        <Button variant="primary" className='btn' onClick={openModal}>Prendre RDV</Button>

      </Card.Body>
    </Card>
  
    </div>
  )
}

export default CardUser