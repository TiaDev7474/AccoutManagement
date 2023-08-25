import React, { ChangeEvent, useState } from 'react'
import KeyIcon from '@mui/icons-material/Key';
import { Link, useNavigate } from 'react-router-dom';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

type Props = {}

const Reset = (props: Props) => {
  const navigate = useNavigate()
  const [show,setShow] = useState(false)
  const [information,setInformation] = useState({
    email: '',
  })
  const HandleClickShow = () =>{
    setShow(an=>!an)
  }
  const HandleClickRecup = () =>{
    console.log(information)
    navigate('/auth/confirmation')
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
                <h1 className="title-mess">Recuperation Compte</h1>
                <KeyIcon sx={{width:80,height:40}}/>
            </div>
            <div className="message">
                <p className="message-content">
                     Veuillez indiquee votre  email pour recuperer votre compte
                </p>
            </div>
            <div className="username-input">
                <AttachEmailIcon/>
                <input type="email" placeholder="Adresse mail" name='email' onChange={HandleChange}/>
            </div>
            <div className="recupe-compte">
                <Link to='/auth/login' className='lien hover:underline'>Annuler</Link>
            </div>
            <div>
                <button onClick={HandleClickRecup} className="btn"> Recuperer </button>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Reset