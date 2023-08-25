import React, { ChangeEvent, useState } from 'react'
import Salut from '../assets/salut.png'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

type Props = {}

const Confirmation = (props: Props) => {
  const [show,setShow] = useState(false)
  const [information,setInformation] = useState({
    username: '',
    password: ''
  })
  const HandleClickShow = () =>{
    setShow(an=>!an)
  }
  const HandleClickConnect = () =>{
    console.log(information)
  }
  const HandleChange = (e:ChangeEvent<HTMLInputElement>) =>{
    const name = e.target.name
    const value = e.target.value
    setInformation(values => ({...values,[name]:value}))
  }
  return (
    <div>
          <div className="title">
        <h2 className="text-stroke logo">Project Demo</h2>
    </div>
    <div className="main">
        <div className="main-content">
            <div className="bienvenu">
                <h1 className="title-mess">BIENVENUE SUR LE BORD</h1>
                <img src={Salut} alt="petite emojy de salutation"/>
            </div>
            <div className="message">
                <p className="message-content">
                    Bienvenue à vous .   Veuillez indiquee votre  username et mot de passe pour se connecter
                </p>
            </div>
            <div className="username-input">
                <PersonIcon/>
                <input type="text" placeholder="Nom d' utilisatuer" name='username' onChange={HandleChange}/>
            </div>
            <div className="password-input">
               <LockIcon/>
                <input type={show ? 'text' : 'password'} placeholder="Mot de passe" onChange={HandleChange} name='password'/>
               <IconButton onClick={HandleClickShow}>
                {
                  show ? <VisibilityIcon/> : <VisibilityOffIcon/>
                }
               </IconButton>
            </div>
            <div className="reset-password">
                <Link to='/auth/signup' className='lien hover:underline'>Vous n' avez pas de compte?</Link>
                <Link to='/auth/reset' className='lien hover:underline'>Mot de passe oublié ?</Link>
            </div>
            <div>
                <button onClick={HandleClickConnect} className="btn"> Se Connecter </button>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Confirmation