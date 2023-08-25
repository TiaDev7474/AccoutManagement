import { Avatar} from '@mui/material'
import React,{ChangeEvent, useState} from 'react'
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';

function Home() {

  return (
    <div className="b">
    <div className="profile-container">
        <div className="cover-photo">
            <img src="cover_photo.jpg" alt="Cover Photo"/>
        </div>
        <div className="profile">
            <img className="profile-picture" src="user_image.jpg" alt="User Image"/>
            <div className="user-details">
                <h1 className="user-name">John Doe</h1>
                <p className="user-email">johndoe@example.com</p>
                <button className="edit-button">Edit Profile</button>
            </div>
        </div>
        <div className="user-description">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ultricies lectus.</p>
        </div>
    </div>
    </div>
  )
}

export default Home