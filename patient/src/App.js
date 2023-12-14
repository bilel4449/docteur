import './App.css';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';



import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Profil from './components/Profil';
import List from './components/List';
import {  useSelector } from 'react-redux';
import Home from './components/Home';
import EditUser from './components/EditUser';
import SignUpUser from './components/SignUpUser';
import Espace from './components/Espace';
import NavBar from './components/NavBar';
import SousNav from './components/SousNav';
import InfoMed from './components/InfoMed';
import ListRdv from './components/ListRdv';

function App() {
  const {users} =useSelector(state=>state)
  return (
    <div className="App">

   <Router>
      <NavBar/>
      <div>
     <h1 className='titre'>Prenez rapidement un rendez-vous avec votre médecin !</h1>
     <h3 className='sous-titre'>Sélectionnez votre médecin, choisissez la date et l'heure de votre rdv et recevez votre sms/mail de confirmation.
      C’est aussi simple que ça !
     
     </h3>
     </div>
      <SousNav/>
     
        <Routes>
        <Route path='/rdvs' element={<ListRdv/>}/>
        <Route path='/medecins' element={<List/>}/>
           <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
           <Route path='/profil' element={<Profil/>}/>
           <Route path='/edit/:id' element={<EditUser users={users} />}/>
           <Route path='/signupuser' element={<SignUpUser/>}/>
           <Route path='/espace' element={<Espace/>}/>
           <Route path='/info/:_id' element={<InfoMed/>}/>

           <Route path='/' element={<Home/>}/>

        </Routes>
      </Router>
      <footer>
        <div className='div-footer'>
          <p style={{marginLeft:'25px'}}>© Copyright 2023 RDV.tn Tous droits réservés</p>
          <div>
            <img src="images/fb.png" alt="" style={{marginLeft:'25px'}}/>
            <img src="images/tw.png" alt="" style={{marginLeft:'25px'}}/>
            <img src="images/li.png" alt=""  style={{marginLeft:'25px',marginRight:'20px'}}/>
          </div>
        </div>


      </footer>
      
    </div>
  );
}

export default App;
