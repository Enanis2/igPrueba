import { useState } from "react"
import axios from "axios"

function Home(props) {

    const [archivo, setArchivo] = useState(null)
    const [estado, setEstado] = useState("")
    const subir = async (e) => {
        e.preventDefault()
        try {
            const usuario = await axios.post('http://localhost:3000/usuarios/upload-document', {
                id: props.usuario.id,
                document: archivo
            })
            console.log(usuario)
            setEstado()
        } catch (error) {
            console.log({error})
        }
    }

    return (<>
        <h1>Soy el HOME</h1>
        <form onSubmit={subir}>
            <label>
                <input type="text" placeholder="SUBA EL ARCHIVO" onChange={(event) => { setArchivo(event.target.value) }} />
            </label>
            <div className="logearseDivButton"><button type="submit" className="logearseButton">SUBIR</button></div>
        </form>
        {estado}
    </>)
}

export default Home