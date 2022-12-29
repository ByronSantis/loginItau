import React from 'react';
import logo from "../img/logoitau.png"
import App from '../App';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import {doc, setDoc} from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom';
/*import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";*/
import { useState } from "react";


const Register = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        /*const file = e.target[3].files[0];*/
    try {
    const res = await createUserWithEmailAndPassword(auth, email, password)


    /*const storageRef = ref(storage, displayName);

    const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on(
  
    (error) => {
    
    }, 
    () => {
    
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
        await updateProfile(res.user,{
            displayName,
            photoURL: downloadURL,
        });*/
        await setDoc(doc(db, "users", res.user.uid),{
            uid: res.user.uid,
            displayName,
            email,
            password,
        });

        navigate("/")
       /* });
    }
    );*/
    }catch(err){
      setErr(true);
    }
}
  return (
    <div class="bg-img">
    <div class="content">
    <img src={logo} alt="Company Logo" height="86"/>
    <br />
    <br />
        <header>Hazte parte de Itaú</header>
        <h2>¡Te damos la bienvenida! Ingresa con los datos solicitados.</h2>
        <br />
        <form onSubmit={handleSubmit}>
            <div class="field">
                <span class="fa-user"></span>
                <input type="text" required placeholder="Crea tu usuario*" name="usuario"/>
            </div>
             <br />
            <div class="field">
                <span class="fa-user"></span>
                <input type="email" required placeholder="Ingresa tu gmail*" name="email"/>
            </div>

                <div class="field space">
                    <span class="fa fa-lock"></span>
                    <input type="password" class="pass-key" required placeholder="Crea tu clave*" name="contrasena"/>
                </div>
                <br />
                <div class="pass">
                </div>
                <div class="field">
                    <input type="submit" value="Registrarme"/>
                </div>
                <br />
                {err && <span>Algo ocurrio mal, intenta de nuevo.</span>}
        </form>
        <br />
        <br />
        <p>¿Ya tienes cuenta? <Link to="/Login">Inicia aquí</Link></p>
    </div>

</div>
  )
}

export default Register
