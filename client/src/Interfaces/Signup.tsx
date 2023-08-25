import React, { ChangeEvent, useState } from 'react'
import Salut from '../assets/salut.png'
import PersonIcon from '@mui/icons-material/Person';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

type Props = {}

const Signup = (props: Props) => {
  const [show,setShow] = useState(false)
  const navigate = useNavigate()
  const [information,setInformation] = useState({
    username: '',
    password: '',
    confirm:'',
    fname:''
  })
  const HandleClickShow = () =>{
    setShow(an=>!an)
  }
  const HandleClickConnect = () =>{
    console.log(information)
    navigate('/')
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
                    Bienvenue à vous .   Veuillez indiquee les information necessaire pour s' inscrire
                </p>
            </div>
            <div className="username-input-signup">
                <PersonIcon/>
                <input type="text" placeholder="Nom et Prenom " name='fname' onChange={HandleChange}/>
            </div>
            <div className="username-input-signup">
                <PersonIcon/>
                <input type="text" placeholder="Nom d' utilisatuer" name='username' onChange={HandleChange}/>
            </div>
            <div className="username-input-signup">
                <AttachEmailIcon/>
                <input type=    "email" placeholder="Adresse  mail" name='email' onChange={HandleChange}/>
            </div>
            <div className="password-input-signup">
               <LockIcon/>
                <input type={show ? 'text' : 'password'} placeholder="Mot de passe" onChange={HandleChange} name='password'/>
               <IconButton onClick={HandleClickShow}>
                {
                  show ? <VisibilityIcon/> : <VisibilityOffIcon/>
                }
               </IconButton>
            </div>
            <div className="password-input-signup">
               <LockIcon/>
                <input type={show ? 'text' : 'password'} placeholder="Confirmer le mot de passe" onChange={HandleChange} name='confirm'/>
               <IconButton onClick={HandleClickShow}>
                {
                  show ? <VisibilityIcon/> : <VisibilityOffIcon/>
                }
               </IconButton>
            </div>
            <div className="recupe-compte-signup">
                <Link to='/auth/signup' className='lien hover:underline'>Vous avez deja de compte?</Link>
            </div>
            <div>
                <button onClick={HandleClickConnect} className="btn-signup"> S' inscrire </button>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Signup