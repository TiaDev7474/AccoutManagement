import React, { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import QrCodeIcon from '@mui/icons-material/QrCode';

type Props = {}

const Confirmation = (props: Props) => {
  const navigate = useNavigate()
  const [information,setInformation] = useState({
     test:''
  })
  const HandleClickRecup = () =>{
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
                <h1 className="title-mess">Confirmation</h1>
                <CheckIcon sx={{width:80,height:40}}/>
            </div>
            <div className="message">
                <p className="message-content">
                     Veuillez indiquee le code que vous avez recu dans votre email
                </p>
            </div>
            <div className="username-input">
                <QrCodeIcon/>
                <input type="text" placeholder="Code" name='code' onChange={HandleChange}/>
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
export default Confirmation