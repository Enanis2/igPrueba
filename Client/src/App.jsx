// import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"


import Login from './components/login'
import Register from './components/register'
import Home from './components/home'
import MiPerfil from './components/miperfil'
import NavBar from './components/navbar'

function App() {
  const Navigate = useNavigate()  
  const [usuario, setUsuario] = useState(null)
  // localStorage.setItem("TOKEN", 'fasdf')

  const saberUsuario = async () => {
    const token = localStorage.getItem("TOKEN")
    // if (!token){
    //   setUsuario(null)
    // }
    try {
      await axios.get('http://localhost:3000/usuarios/me', {
        headers: { autorizacion: `Barer ${token}` }
      })

    } catch (error) {
      if (error.status = 401) {
        setUsuario(null)
        localStorage.setItem("TOKEN", null)
        
      }
      console.log({error})
    }
  }

  useEffect(()=>{
    if (usuario){
      saberUsuario()
    }
  })

  useEffect(()=>{
    localStorage.setItem("TOKEN", null)
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
