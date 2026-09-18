import { useState } from "react"
import axios from 'axios'

function Register() {

    const [nombre, setNombre] = useState("")
    const [userName, setUserName] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [response, setResponse] = useState(null)
    
    const registrarse = async () => {
        if (password != password2) {
            setResponse("Las contraseñas no coinciden")
            return
        }else {
            setResponse("")
        }
        try {
            await axios.post("http://localhost:3000/usuarios/registrar", {
                nombre, 
                userName, 
                mail, 
                password
            })
            setResponse("UsuarioCreado")
        } catch (error) {
            console.log({error})
            if (error.response?.data?.name != undefined) {
                if (error.response.data.name == "SequelizeValidationError") setResponse(error.response.data.errors[0].message)
                else if (error.response.data.name == "SequelizeUniqueConstraintError") setResponse(`Usuario con ese ${Object.keys(error.response.data.fields)[0]} ya existente`)
                else setResponse(error.response.data.name)
            } else setResponse(error.message)
        }
    }

    return (<>
        <h1>Soy el REGISTER</h1>
        <input type="text" placeholder="Nombre" onChange={ (event) => { setNombre(event.target.value) } }/>
        <input type="text" placeholder="UserName" onChange={ (event) => { setUserName(event.target.value) } }/>
        <input type="email" placeholder="Mail" onChange={ (event) => { setMail(event.target.value) } }/>
        <input type="password" placeholder="Password" onChange={ (event) => { setPassword(event.target.value) } }/>
        <input type="password" placeholder="Repita su Password" onChange={ (event) => { setPassword2(event.target.value) } }/>
        {/* <input type="file" accept=".png" placeholder="Foto de perfil(Opcional)" onChange={ (event) => { setImg(event.target.value) } }/> */}
        <div id="registrarseDivButton"><button onClick={registrarse} id="registrarseButton">REGISTRARSE</button></div>
        Respuesta: {response}

    </>)
}

export default Register