import { useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

function Login(props) {

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [response, setResponse] = useState(null)
    
    const logearse = async () => {
        try {
            const usuario = await axios.post('http://localhost:3000/usuarios/logear', {
                mail,
                password
            })

            props.stearUsuario(usuario.data.user)
            localStorage.setItem("TOKEN", usuario.data.token)
            setResponse("Usuario Logeado")
        } catch (error) {
            console.log({error})
            setResponse(error.response.data.message)
        }
    }

    return (<>
        <h1>Soy el Login</h1>

        {!props.Usuario?.userName && (
            <div>
                <input type="email" placeholder="Mail" onChange={ (event) => { setMail(event.target.value) } }/>
                <input type="password" placeholder="Password" onChange={ (event) => { setPassword(event.target.value) } }/>
                <div id="logearseDivButton"><button onClick={logearse} id="logearseButton">LOGEARSE</button></div>
                Respuesta: {response}    
            </div>
        )}
        {props.Usuario?.userName && (
            <div>
                <h3>Ya estás logeado</h3>
                <Link to='/miperfil' >VEA SU PERFIL</Link>
            </div>
        )}
    </>)
}

export default Login