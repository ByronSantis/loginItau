import React, { useState } from 'react';
import logo from "../img/logoitau.png"
import App from '../App';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
      } catch (err) {
        setErr(true);
      }
    };

  

  return (
    <div class="bg-img">

    <div class="content">
    <img src={logo} alt="Company Logo" height="86"/>
    <br />
    <br />
        <header>Inicio de Sesion</header>
        <h2>Te damos la bienvenida! Ingresa con tus credenciales</h2>
        <br />
        <form onSubmit={handleSubmit}>
            <div class="field">
                <span class="fa fa-user"></span>
                <input type="text" required placeholder="Ingresa tu gmail*" name="usuario"/>
            </div>
                <div class="field space">
                    <span class="fa fa-lock"></span>
                    <input type="password" class="pass-key" required placeholder="Ingresa tu clave*" name="contrasena"/>         
                </div>
                <br />
                <div class="pass">
                   
                </div>
                <div class="field">
                    <input type="submit" value="Ingresar"/>
                </div>
                <br />
                {err && <span>Usuario o contraseña incorrectos.</span>}
        </form>
        <br />
        <p>¿No formas parte de Itaú? <Link to="/register"> Crea tu cuenta</Link></p>
    </div>
</div>
  )
}

export default Login
