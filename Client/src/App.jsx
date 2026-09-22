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
import Post from './components/post'

function App() {
  const Navigate = useNavigate()  
  const [usuario, setUsuario] = useState(null)
  const [id, setId] = useState(1)
  const [post, setPost] = useState([])
  const [ultimosCinco, setUltimosCinco] = useState([])

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

  const mapearPosts = async () => {
    try {
      const posts = await axios.get(`http://localhost:3000/posteos/mapear/${usuario.id}`)
      setPost(posts.data)
      setUltimosCinco(posts.data.slice(0,5))
    } catch (error) {
      console.log({error})
    }
  }

  useEffect(()=>{
    if (usuario){
      saberUsuario()
    }
  })

  // useEffect(()=>{
  //   localStorage.setItem("TOKEN", null)
  // }, [])

  return (
    <>
      <NavBar Usuario={usuario} stearUsuario={setUsuario}/>
      <Routes>
        <Route path='/login' element={ <Login Usuario={usuario} stearUsuario={setUsuario} />} />
        <Route path='/registro' element={ <Register  />} />
        <Route path='/' element={ <Home usuario={usuario} />} />
        <Route path='/post' element={ <Post Usuario={usuario} mapear={mapearPosts} posts={post} />} />
        <Route path='/miperfil' element={ <MiPerfil Usuario={usuario} mapear={mapearPosts} posts={ultimosCinco} />} />
      </Routes>
    </>
  )
}

export default App
