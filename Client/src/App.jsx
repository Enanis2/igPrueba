// import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Login from './components/login'
import Register from './components/register'
import Home from './components/home'
import MiPerfil from './components/miperfil'
import NavBar from './components/navbar'

function App() {
  
  const [usuario, setUsuario] = useState(null)

  const saberUsuario = async () => {
    try {
      const usuario = axios.get('http://localhost:3000/usuarios')
      

    } catch (error) {
      console.log({error})
    }
  }

  useEffect(()=>{
    saberUsuario()
  }, [])

  return (
    <>
      <NavBar Usuario={usuario} stearUsuario={setUsuario}/>
      <Routes>
        <Route path='/login' element={ <Login Usuario={usuario} stearUsuario={setUsuario} />} />
        <Route path='/registro' element={ <Register  />} />
        <Route path='/' element={ <Home  />} />
        <Route path='/miperfil' element={ <MiPerfil Usuario={usuario} />} />
      </Routes>
    </>
  )
}

export default App
