import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
const Home = () => {

  const {currentUser} = useContext(AuthContext)

  return (

    <div class='content-home'>
      ¡Bienvenido usuario! 
      <br />
      <br />
      <span>{currentUser.displayName}</span>
      <br />
      <br />
      <button onClick={()=>signOut(auth)}>Cerrar sesion</button>
    </div>

  )
}

export default Home

